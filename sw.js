'use strict';

const v = '1.0.0v3',
  cacheList = [
    '/',
    '/index.html',
    '/css/comm.css',
    '/css/mian.css',
    '/img/cursor_16.ico',
    '/img/cursor_hand_24.ico',
    '/img/gBack.png',
    '/img/nav.png',
    '/img/userBg.png',
    '/img/userBtn.png',
    '/js/comm.js',
    '/js/loadProgress.js',
    '/js/main.js',
    '/page/home.html'
  ];

self.addEventListener('install', e => {
  e.waitUntil(
    caches
      .open(v)
      .then(cache => cache.addAll(cacheList))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches
      .keys()
      .then(cacheNames =>
        Promise.all(
          cacheNames
            .filter(cacheName => cacheName !== v)
            .map(cacheNames => caches.delete(cacheNames))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(
      res =>
        res ||
        fetch(e.request.url).then(res =>
          caches.open(v).then(cache => {
            cache.put(e.request, res.clone());
            return res;
          })
        )
    )
  );
});
