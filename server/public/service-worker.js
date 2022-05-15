// Names of the two caches used in this version of the service worker.
// Change to v2, etc. when you update any of the local resources, which will
// in turn trigger the install event again.
const PRECACHE = 'precache-v1';
const RUNTIME = 'runtime';

// A list of local resources we always want to be cached.
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/img/clint-mckoy.36f95307.jpg',
  // '/css',
  // '/js',
  'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900',
  'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
  // '/img',
  '/manifest.json',
];

// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', event => {
  console.log('service worker installed');
  event.waitUntil(
    caches.open(PRECACHE)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(self.skipWaiting())
  );
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', event => {
  console.log('service worker activated');
  const currentCaches = [PRECACHE, RUNTIME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

// The fetch handler serves responses for same-origin resources from a cache.
// If no response is found, it populates the runtime cache with the response
// from the network before returning it to the page.
self.addEventListener('fetch', event => {
  // Skip cross-origin requests, like those for Google Analytics.
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return caches.open(RUNTIME).then(cache => {
          return fetch(event.request).then(response => {
            // Put a copy of the response in the runtime cache.
            return cache.put(event.request, response.clone()).then(() => {
              return response;
            });
          });
        });
      })
    );
  }caches.delete(RUNTIME)
});

self.addEventListener('push', function(event) {
    // Keep the service worker alive until the notification is created.
    event.waitUntil(
      getEndpoint()
      .then(function(endpoint) {
        // Retrieve the textual payload from the server using a GET request.
        // We are using the endpoint as an unique ID of the user for simplicity.
        return fetch('./getPayload?endpoint=' + endpoint);
      })
      .then(function(response) {
        return response.text();
      })
      .then(function(payload) {
        // Show a notification with title 'ServiceWorker Cookbook' and use the payload
        // as the body.
        self.registration.showNotification('ServiceWorker Cookbook', {
          body: payload,
        });
      }))
    })
