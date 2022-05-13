import { warmStrategyCache } from 'workbox-recipes';
 import { CacheFirst } from 'workbox-strategies';
 import { registerRoute } from 'workbox-routing';
 import { CacheableResponsePlugin } from 'workbox-cacheable-response';
 import { ExpirationPlugin } from 'workbox-expiration';
 
 // Set up page cache
 const pageCache = new CacheFirst({
   cacheName: 'page-cache',
   plugins: [
     new CacheableResponsePlugin({
       statuses: [0, 200],
     }),
     new ExpirationPlugin({
       maxAgeSeconds: 30 * 24 * 60 * 60,
     }),
   ],
 });
 
 warmStrategyCache({
   urls: ['/index.html', '/'],
   strategy: pageCache,
 });
 
 registerRoute(({ request }) => request.mode === 'navigate', pageCache);
// Choose a cache name
const cacheName = 'cache-v1';
// List the files to precache
const precacheResources = ['/', '/index.html', '/css/style.css', '/js/main.js', '/js/app/editor.js', '/js/lib/actions.js'];

// When the service worker is installing, open the cache and add the precache resources to it
self.addEventListener('install', (event) => {
  console.log('Service worker install event!');
  event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(precacheResources)));
});

self.addEventListener('activate', (event) => {
  console.log('Service worker activate event!');
});

// When there's an incoming fetch request, try and respond with a precached resource, otherwise fall back to the network
self.addEventListener('fetch', (event) => {
  console.log('Fetch intercepted for:', event.request.url);
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request);
    }),
  );
});
// Set up asset cache
registerRoute(
     ({ request }) => ['style', 'script', 'worker'].includes(request.destination),
     new StaleWhileRevalidate({
       cacheName: 'asset-cache',
       plugins: [
         new CacheableResponsePlugin({
           statuses: [0, 200],
         }),
       ],
     }),
   );
   // Set up offline fallback
offlineFallback({
     pageFallback: '/offline.html',
   });