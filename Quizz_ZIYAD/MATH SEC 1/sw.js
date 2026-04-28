// Quiz Family — Service Worker v3
const CACHE_NAME = 'quiz-family-v3';

const ASSETS = [
  './',
  './accueil.html',
  './index.html',
  './decimaux.html',
  './science.html',
  './univers_social.html',
  './elyes_maths.html',
  './elyes_francais.html',
  './elyes_sciences.html',
  './manifest.json',
  './icon.svg',
];

// ── Install: cache all app files ──────────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

// ── Activate: clean up old caches ────────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// ── Fetch: Cache First strategy ───────────────────────────────
self.addEventListener('fetch', event => {
  // Only handle same-origin requests
  if (!event.request.url.startsWith(self.location.origin) &&
      !event.request.url.startsWith('file://')) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      // Not in cache → fetch from network and cache it
      return fetch(event.request)
        .then(response => {
          // Only cache valid responses
          if (!response || response.status !== 200 || response.type === 'opaque') {
            return response;
          }
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          return response;
        })
        .catch(() => {
          // Offline fallback: return index if navigating
          if (event.request.mode === 'navigate') {
            return caches.match('./accueil.html');
          }
        });
    })
  );
});
