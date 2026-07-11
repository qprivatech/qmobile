import { fileURLToPath, URL } from "url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import environment from "vite-plugin-environment";
import cspHashBuild from "./scripts/csp-hash-build.js";

/**
 * Build-time image optimization is handled by a postbuild sharp script
 * (scripts/optimize-images.js) wired into the `build` npm script.
 *
 * Why a postbuild script instead of a Vite plugin:
 *   - All product/hero/og images live in `public/assets/` and are served
 *     as-is by Vite (not imported as modules), so vite-imagetools would
 *     not process them.
 *   - The script walks dist/assets (recursive, png files) after the build,
 *     compresses each PNG in place, and emits .webp + .avif siblings
 *     referenced from <picture> sources in the LazyImage component.
 */

const ii_url =
  process.env.DFX_NETWORK === "local"
    ? `http://uqzsh-gqaaa-aaaaq-qaada-cai.localhost:8081/authorize`
    : `https://id.ai/authorize`;

process.env.II_URL = process.env.II_URL || ii_url;
process.env.STORAGE_GATEWAY_URL =
  process.env.STORAGE_GATEWAY_URL || "https://blob.caffeine.ai";

export default defineConfig({
  logLevel: "error",
  build: {
    emptyOutDir: true,
    sourcemap: false,
    minify: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Only split modules coming from node_modules; keep app code in its
          // own chunk so route-level dynamic imports stay granular.
          if (!id.includes("node_modules")) {
            return undefined;
          }

          // React core — keep together so the runtime is a single shared chunk.
          if (
            id.includes("node_modules/react/") ||
            id.includes("node_modules/react-dom/") ||
            id.includes("node_modules/react/jsx-runtime") ||
            id.includes("node_modules/scheduler/")
          ) {
            return "react-vendor";
          }

          // Three.js + react-three ecosystem.
          if (
            id.includes("node_modules/three") ||
            id.includes("node_modules/@react-three/fiber") ||
            id.includes("node_modules/@react-three/drei") ||
            id.includes("node_modules/@react-three/cannon")
          ) {
            return "three-vendor";
          }

          // Charting.
          if (id.includes("node_modules/recharts") || id.includes("node_modules/victory")) {
            return "charts-vendor";
          }

          // Rich text editor.
          if (
            id.includes("node_modules/react-quill-new") ||
            id.includes("node_modules/quill")
          ) {
            return "editor-vendor";
          }

          // Carousel.
          if (id.includes("node_modules/embla-carousel")) {
            return "carousel-vendor";
          }

          // Animation (motion / framer-motion).
          if (
            id.includes("node_modules/motion") ||
            id.includes("node_modules/framer-motion")
          ) {
            return "animation-vendor";
          }

          // Radix UI primitives.
          if (id.includes("node_modules/@radix-ui")) {
            return "radix-vendor";
          }

          // TanStack router + query (broadened so transitive core packages
          // like @tanstack/router-core and @tanstack/query-core land here too).
          // Also pulls in the tiny helper packages that @tanstack/react-router
          // depends on (isbot, tiny-invariant, tiny-warning) so they don't
          // create a tanstack-vendor -> vendor edge that would re-form a
          // circular chunk with the @caffeineai bridge in vendor.
          // @caffeineai/* packages (e.g. core-infrastructure, which imports
          // @tanstack/react-query) are routed here too, eliminating the
          // vendor -> tanstack-vendor edge that previously caused a circular
          // chunk warning.
          if (
            id.includes("node_modules/@tanstack/") ||
            id.includes("node_modules/@caffeineai/") ||
            id.includes("node_modules/isbot/") ||
            id.includes("node_modules/tiny-invariant/") ||
            id.includes("node_modules/tiny-warning/")
          ) {
            return "tanstack-vendor";
          }

          // Everything else from node_modules falls into a generic vendor chunk.
          return "vendor";
        },
      },
    },
  },
  css: {
    postcss: "./postcss.config.js",
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:4943",
        changeOrigin: true,
      },
    },
  },
  plugins: [
    environment("all", { prefix: "CANISTER_" }),
    environment("all", { prefix: "DFX_" }),
    environment(["II_URL"]),
    environment(["STORAGE_GATEWAY_URL"]),
    react(),
    // Post-build: compute SHA-256 hashes of every inline <style> block and
    // style="..." attribute Vite/Tailwind inject into the built HTML, then
    // append them to the style-src and style-src-attr directives of the CSP
    // in dist/_headers. This lets us ship a strict CSP without 'unsafe-inline'
    // while keeping all generated styles functional. See
    // scripts/csp-hash-build.js for details.
    cspHashBuild(),
  ],
  resolve: {
    alias: [
      {
        find: "declarations",
        replacement: fileURLToPath(new URL("../declarations", import.meta.url)),
      },
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
    ],
    dedupe: ["@icp-sdk/core"]
  },
});
