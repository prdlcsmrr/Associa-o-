// Service Worker UBAPFF v1782277777 — Force Fresh Always
const CACHE_VERSION = 'ubapff-1782277777';

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if(!e.request.url.startsWith(self.location.origin)) return;
  e.respondWith(
    fetch(e.request, { cache: 'no-store' })
      .catch(() => caches.match(e.request))
  );
});
