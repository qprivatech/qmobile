/* QMOBILE Service Worker — vanilla JS, framework-agnostic
 * Strategies:
 *   - Precache app shell on install
 *   - Cache-first for static assets (favicon, icons, manifest, /assets/ bundles)
 *   - Network-first for navigation requests (HTML)
 *   - Stale-while-revalidate for other same-origin GET requests
 *   - Cache cleanup on activate
 */
const CACHE_VERSION = "qmobile-v1";
const APP_SHELL = [
  "/",
  "/index.html",
  "/manifest.json",
  "/favicon.ico",
  "/icon-192.png",
  "/icon-512.png",
];

const STATIC_ASSET = /\.(?:css|js|woff2?|ttf|eot|png|jpe?g|gif|svg|ico|webp|avif)$/i;

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_VERSION);
      // Precache app shell; ignore individual failures (e.g. offline at install)
      await Promise.allSettled(APP_SHELL.map((url) => cache.add(url)));
      self.skipWaiting();
    })()
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k))
      );
      await self.clients.claim();
    })()
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // Navigation requests (HTML pages) — network-first with offline fallback
  if (request.mode === "navigate") {
    event.respondWith(networkFirst(request));
    return;
  }

  // Static asset bundles under /assets/ or matching known asset extensions
  if (url.pathname.startsWith("/assets/") || STATIC_ASSET.test(url.pathname)) {
    event.respondWith(cacheFirst(request));
    return;
  }

  // Manifest and icons — cache-first
  if (url.pathname === "/manifest.json" || url.pathname === "/favicon.ico") {
    event.respondWith(cacheFirst(request));
    return;
  }

  // Other same-origin GET requests — stale-while-revalidate
  event.respondWith(staleWhileRevalidate(request));
});

async function cacheFirst(request) {
  const cache = await caches.open(CACHE_VERSION);
  const cached = await cache.match(request);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    if (response && response.status === 200 && response.type === "basic") {
      cache.put(request, response.clone());
    }
    return response;
  } catch (err) {
    return cached || Response.error();
  }
}

async function networkFirst(request) {
  const cache = await caches.open(CACHE_VERSION);
  try {
    const response = await fetch(request);
    if (response && response.status === 200 && response.type === "basic") {
      cache.put(request, response.clone());
    }
    return response;
  } catch (err) {
    const cached = await cache.match(request);
    if (cached) return cached;
    // Offline fallback to cached app shell
    const shell = await cache.match("/index.html");
    return shell || Response.error();
  }
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_VERSION);
  const cached = await cache.match(request);
  const fetchPromise = fetch(request)
    .then((response) => {
      if (response && response.status === 200 && response.type === "basic") {
        cache.put(request, response.clone());
      }
      return response;
    })
    .catch(() => cached);
  return cached || fetchPromise;
}
