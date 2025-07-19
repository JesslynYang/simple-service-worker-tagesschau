const CACHE_NAME = 'tagesschau-news-cache-v1';
const URLS_TO_CACHE = [
    '/',
    '/styles.css',
    '/script.js',
    '/src/main.tsx',
];

// install event: cache resources
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(URLS_TO_CACHE);
        })
    );
});

// fetch event: cache first strategy, if cache n/a then fetch
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            // check if cache is available
            if (cachedResponse) {
                return cachedResponse;
            }

            return fetch(event.request).then((networkResponse) => {
                return caches.open(CACHE_NAME).then((cache) => {
                    // Cache the new response
                    cache.put(event.request, networkResponse.clone());
                    return networkResponse;
                });
            });
        })
    );

    // cache details pages for /<sophoraId>
    const urlParts = event.request.url.split('/');
    const lastPart = urlParts[urlParts.length - 1];
    if (lastPart && !isNaN(lastPart)) {
        event.waitUntil(
            fetch(event.request).then((networkResponse) => {
                return caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, networkResponse.clone());
                });
            })
        );
    }
});

// activate event: clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        // delete old caches
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});