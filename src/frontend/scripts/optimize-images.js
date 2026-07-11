/**
 * Postbuild image optimization for QMOBILE.
 *
 * Runs after `vite build` produces `dist/`. Walks all PNG files under dist/assets recursively and:
 *   1. Compresses the existing PNG in place (lossless, quality 80).
 *   2. Generates a `.webp` sibling (quality 78).
 *   3. Generates an `.avif` sibling (quality 60).
 *
 * The WebP/AVIF siblings are referenced from <picture> sources in LazyImage;
 * the original PNG remains the <img src> fallback for older browsers.
 *
 * SVGs are skipped (already optimal). Files that already have a `.webp`/`.avif`
 * sibling are re-processed idempotently (overwritten).
 *
 * Usage: `node scripts/optimize-images.js [distDir]`
 * Default distDir: ./dist
 */
import { readdir, stat, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, extname, dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = process.argv[2]
  ? join(process.cwd(), process.argv[2])
  : join(__dirname, "..", "dist");

const PNG_QUALITY = 80;
const WEBP_QUALITY = 78;
const AVIF_QUALITY = 60;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(full)));
    } else if (entry.isFile() && extname(entry.name).toLowerCase() === ".png") {
      files.push(full);
    }
  }
  return files;
}

async function optimizePng(filePath) {
  // Lossless-ish re-compression: palette + deflate optimization.
  await sharp(filePath, { failOn: "none" })
    .png({ quality: PNG_QUALITY, compressionLevel: 9, palette: true })
    .toBuffer()
    .then((buf) => sharp(buf).toFile(filePath));
}

async function generateWebp(srcPath, destPath) {
  await sharp(srcPath, { failOn: "none" })
    .webp({ quality: WEBP_QUALITY })
    .toFile(destPath);
}

async function generateAvif(srcPath, destPath) {
  await sharp(srcPath, { failOn: "none" })
    .avif({ quality: AVIF_QUALITY, effort: 4 })
    .toFile(destPath);
}

async function main() {
  if (!existsSync(distDir)) {
    console.error(`[optimize-images] dist directory not found: ${distDir}`);
    process.exit(1);
  }

  const pngs = await walk(distDir);
  if (pngs.length === 0) {
    console.log("[optimize-images] No PNG files found in dist/. Nothing to do.");
    return;
  }

  let ok = 0;
  let failed = 0;
  for (const file of pngs) {
    const base = basename(file, extname(file));
    const dir = dirname(file);
    const webpPath = join(dir, `${base}.webp`);
    const avifPath = join(dir, `${base}.avif`);
    try {
      await optimizePng(file);
      await generateWebp(file, webpPath);
      await generateAvif(file, avifPath);
      ok++;
    } catch (err) {
      console.error(`[optimize-images] FAILED ${file}: ${err.message}`);
      failed++;
    }
  }

  console.log(
    `[optimize-images] Processed ${ok} PNG(s) → WebP + AVIF` +
      (failed > 0 ? ` (${failed} failed)` : ""),
  );
}

main().catch((err) => {
  console.error("[optimize-images] Fatal:", err);
  process.exit(1);
});
