const CACHE_NAME = 'emp-nawi-v1';
const urlsToCache = [
  '/app-nawi/',
  '/app-nawi/index.html',
  '/app-nawi/marchio-cdc-monte-rosa-laghi-alto-piemonte-rgb.png',
  '/app-nawi/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
