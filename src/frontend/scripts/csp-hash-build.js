/**
 * csp-hash-build — Vite plugin that computes SHA-256 hashes of every inline
 * style Vite/Tailwind injects into the built HTML and appends them to the
 * `style-src` and `style-src-attr` directives of the CSP in `dist/_headers`.
 *
 * Why this exists:
 *   - Tailwind/Vite inject inline `<style>` blocks and `style="..."`
 *     attributes at build time. A strict CSP without `'unsafe-inline'` would
 *     block those styles, breaking the UI.
 *   - Nonces are unsafe on ICP asset canisters (the bundle is statically
 *     cached and served verbatim, so a per-request nonce cannot rotate).
 *   - Hash-based CSP is the correct trade-off: the build is deterministic, so
 *     the same hashes are reproducible, and any content change re-hashes on
 *     the next build.
 *
 * What it does (runs in the `writeBundle` hook, after Vite emits dist/):
 *   1. Walks every `*.html` file under `dist/` (MPA-safe).
 *   2. Collects SHA-256 hashes of:
 *        - inline `<style>...</style>` block contents  → style-src
 *        - inline `style="..."` attribute values        → style-src-attr
 *   3. Reads `dist/_headers`, locates the `Content-Security-Policy` line,
 *      and injects the hashes into the `style-src` and `style-src-attr`
 *      directives (preserving every other directive and the file structure).
 *   4. Writes the updated `_headers` back to `dist/_headers`.
 *
 * Idempotent: hashes are recomputed every build, so changing inline styles
 * automatically updates the CSP on the next `vite build`.
 *
 * The source `public/_headers` is never modified — only the `dist/` copy.
 */
import { createHash } from "node:crypto";
import { readFile, writeFile, readdir } from "node:fs/promises";
import { join, extname } from "node:path";

/** Match inline <style>...</style> blocks (non-greedy, multiline, DOTALL). */
const STYLE_BLOCK_RE = /<style\b[^>]*>([\s\S]*?)<\/style>/gi;

/**
 * Match inline style="..." attributes on any element.
 * Captures the attribute value. Handles single or double quotes.
 * Stops at the matching closing quote (no escaped quotes in HTML attrs).
 */
const STYLE_ATTR_RE = /\sstyle\s*=\s*(?:"([^"]*)"|'([^']*)')/gi;

/**
 * Recursively collect every `*.html` file under `dir`.
 * @param {string} dir
 * @returns {Promise<string[]>}
 */
async function findHtmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await findHtmlFiles(full)));
    } else if (entry.isFile() && extname(entry.name).toLowerCase() === ".html") {
      files.push(full);
    }
  }
  return files;
}

/**
 * Compute the CSP hash token for a string: base64 SHA-256 wrapped as
 * `'sha256-<b64>'`.
 * @param {string} content
 * @returns {string}
 */
function sha256Token(content) {
  const b64 = createHash("sha256").update(content, "utf8").digest("base64");
  return `'sha256-${b64}'`;
}

/**
 * Parse an HTML file and return the set of style-src and style-src-attr
 * hash tokens it requires.
 * @param {string} html
 * @returns {{ styleHashes: Set<string>, attrHashes: Set<string> }}
 */
function collectHashes(html) {
  const styleHashes = new Set();
  const attrHashes = new Set();

  // Inline <style> blocks → style-src.
  for (const match of html.matchAll(STYLE_BLOCK_RE)) {
    const css = match[1];
    if (css && css.trim().length > 0) {
      styleHashes.add(sha256Token(css));
    }
  }

  // Inline style="..." attributes → style-src-attr.
  for (const match of html.matchAll(STYLE_ATTR_RE)) {
    const value = match[1] ?? match[2];
    if (value && value.trim().length > 0) {
      attrHashes.add(sha256Token(value));
    }
  }

  return { styleHashes, attrHashes };
}

/**
 * Inject hash tokens into a single CSP directive within a CSP header value.
 *
 * The directive is expected to look like `style-src 'self'` or
 * `style-src-attr 'self'`. The tokens are appended after the existing
 * sources, deduplicated against what is already present.
 *
 * @param {string} cspValue  — the full Content-Security-Policy header value
 * @param {string} directive — e.g. "style-src" or "style-src-attr"
 * @param {string[]} tokens  — hash tokens to append
 * @returns {string}         — updated CSP header value
 */
function injectIntoDirective(cspValue, directive, tokens) {
  if (tokens.length === 0) return cspValue;

  // Locate the directive. Match the directive name followed by its sources
  // up to the next directive name (a word ending in `-src`, `-uri`, etc.)
  // or end of string. We use a conservative boundary: the next token that
  // looks like `name ` where name is a known CSP directive keyword.
  const directiveRe = new RegExp(
    // Capture: 1 = directive name, 2 = its source list
    `(${directive})\\s+([^;]+)`,
  );
  const m = cspValue.match(directiveRe);
  if (!m) return cspValue;

  const existingSources = m[2].trim().split(/\s+/);
  const existing = new Set(existingSources);
  const additions = tokens.filter((t) => !existing.has(t));
  if (additions.length === 0) return cspValue;

  const merged = [...existingSources, ...additions].join(" ");
  return cspValue.replace(directiveRe, `${directive} ${merged}`);
}

/**
 * Read dist/_headers, inject hashes into the CSP line, write it back.
 *
 * @param {string} headersPath
 * @param {{ styleHashes: Set<string>, attrHashes: Set<string> }} hashes
 */
async function updateHeadersFile(headersPath, { styleHashes, attrHashes }) {
  let content;
  try {
    content = await readFile(headersPath, "utf8");
  } catch {
    // No _headers in dist — nothing to do (public/_headers missing or not
    // copied). Silently skip; the build still succeeds.
    return;
  }

  const styleTokens = [...styleHashes].sort();
  const attrTokens = [...attrHashes].sort();

  // Rewrite every Content-Security-Policy header line. There is normally
  // exactly one, but the _headers format allows multiple route blocks; we
  // update each CSP line consistently.
  let modified = false;
  const updated = content.replace(
    /^(\s*Content-Security-Policy:\s*)(.+)$/gim,
    (_line, prefix, cspValue) => {
      let next = cspValue;
      next = injectIntoDirective(next, "style-src-attr", attrTokens);
      next = injectIntoDirective(next, "style-src", styleTokens);
      modified = true;
      return prefix + next;
    },
  );

  if (!modified) return;
  await writeFile(headersPath, updated, "utf8");
}

/**
 * Vite plugin: csp-hash-build.
 *
 * @param {object} [options]
 * @param {string} [options.headersPath] — override path to _headers (defaults to <outDir>/_headers)
 * @returns {import('vite').Plugin}
 */
export default function cspHashBuild(options = {}) {
  let outDir = "dist";
  return {
    name: "csp-hash-build",
    apply: "build",
    enforce: "post",
    configResolved(config) {
      outDir = config.build.outDir;
    },
    async writeBundle() {
      const distDir = options.outDir ?? outDir;
      const headersPath = options.headersPath ?? join(distDir, "_headers");

      const htmlFiles = await findHtmlFiles(distDir);
      if (htmlFiles.length === 0) return;

      const styleHashes = new Set();
      const attrHashes = new Set();

      for (const file of htmlFiles) {
        const html = await readFile(file, "utf8");
        const { styleHashes: s, attrHashes: a } = collectHashes(html);
        for (const h of s) styleHashes.add(h);
        for (const h of a) attrHashes.add(h);
      }

      await updateHeadersFile(headersPath, { styleHashes, attrHashes });
    },
  };
}
