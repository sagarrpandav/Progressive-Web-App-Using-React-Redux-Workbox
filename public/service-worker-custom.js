var staticCacheName = 'myTempCache-v';
self.addEventListener('install', function (event) {
    console.log("Inside own install");
    event.waitUntil(caches.open(staticCacheName).then(function (cache) {
        console.log("Cache opened " + cache);
        return cache;
    }));
});


self.addEventListener('fetch', function (event) {
    console.log(event.request.url);
    /*if (event.request.url.endsWith('.svg')) {
        event.respondWith(
            fetch('/gif/dr-evil.gif')
        );
    }*/
    var requestURL = new URL(event.request.url);

    /*if (requestURL.origin === location.origin) {
        if (requestURL.pathname === '/') {
            event.respondWith(caches.match('/skeleton'));
            return;
        }
    }
*/
    event.respondWith(
        caches.match(event.request).then(function (response) {
            if (response) {
                return response;
            }
            else {
                fetch(event.request).then(function (response) {
                    var responseToCache = response.clone();
                    caches.open(staticCacheName).then(function (cache) {
                        cache.put(event.request, responseToCache);
                    });
                    return response;
                });
            }
        })
        /*fetch(event.request).then(function (response) {
            if (response.status === 404) {
                return fetch('/gif/dr-evil.gif');
            }
            return response;
        }).catch(function (error) {
            return fetch('/gif/dr-evil.gif');
            /!*return new Response("Uh - oh, that totally blanked out !");*!/
        })*/
    );
});


self.addEventListener('activate', function (event) {
    console.log("Inside activate!!!!!!!!");
    event.waitUntil(caches.open('myTempCache').then(function (myCache) {
        console.log("All caches " + caches.keys());
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.filter(function (cacheName) {
                    return cacheName !== staticCacheName
                }).map(function (cacheName) {
                    caches.delete(cacheName);
                })
            )
        })
    }));
});

self.addEventListener('message', function (event) {
    if (event.data.action == 'skipWaiting') {
        self.skipWaiting();
    }
});
