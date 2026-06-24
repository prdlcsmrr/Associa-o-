// Service Worker UBAPFF — Force Fresh
// Sempre busca versão mais recente, nunca serve cache

const CACHE_NAME = 'ubapff-v1782271335';

// Ao instalar: não cachear nada
self.addEventListener('install', event => {
  self.skipWaiting();
});

// Ao ativar: apagar todos os caches antigos
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(key => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

// Ao receber request: SEMPRE buscar da rede (network-first)
self.addEventListener('fetch', event => {
  // Só interceptar requests do mesmo origin
  if (!event.request.url.startsWith(self.location.origin)) return;
  
  event.respondWith(
    fetch(event.request, { cache: 'no-store' })
      .catch(() => caches.match(event.request))
  );
});
