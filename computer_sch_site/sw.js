// /sw.js
    // Establish a cache name
const cacheName = 'MyFancyCacheName_v1';

// Assets to precache
const precachedAssets = [
    '/',
    '/style.css',
    '/index.html',
    '/imatges/logo.png',
    '/captura_final.png',
    '/imatges/javascript.png',
    '/imatges/angular.png',
    '/imatges/php.png',
    '/imatges/html5.png',
    '/imatges/pattern.jpg',
    '/imatges/fotofrontal.jpg',
    '/manifest.json'
];

self.addEventListener('install', (event) => {
  // Precache assets on install
  event.waitUntil(caches.open(cacheName).then((cache) => {
    return cache.addAll(precachedAssets);
  }));
});

self.addEventListener("activate", (event) => {
})

self.addEventListener('fetch', (event) => {
  // Is this one of our precached assets?
  console.log(event);
  const url = new URL(event.request.url);
  const isPrecachedRequest = precachedAssets.includes(url.pathname);

  if (isPrecachedRequest) {
    // Grab the precached asset from the cache
    event.respondWith(caches.open(cacheName).then((cache) => {
      return cache.match(event.request.url);
    }));
  } else {
    // Go to the network
    return;
  }
});

