const cacheName = 'NoG2024-v1';
const assetsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/styles.css',
  '/artists.csv',
  '/icon_192.png',
  '/icon.png',
  // Add all your other files here like CSS, JS, images
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assetsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});
