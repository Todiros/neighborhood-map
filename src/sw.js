const cacheName = 'chargeChache' 

// SW Install
self.addEventListener('install', e => {
    console.log('Service Worker: Installed')
})

// SW Activate
self.addEventListener('activate', e => {
    console.log('Service Worker: Activated')

    // Delete old cache
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== cacheName) {
                        console.log('Service Worker: Deleting Old Cache...')
                        return caches.delete(cache)
                    }
                })
            )
        })
    )

})

//Fetch Event
self.addEventListener('fetch', e => {
    console.log('Service Worker: Fetching...')

    e.respondWith(
        fetch(e.request)
        .then(res => {
            const resClone = res.clone()
            
            caches.open(cacheName)
                  .then(cache => {
                      cache.put(e.request, resClone)
                  })
            return res
        }).catch(err => caches.match(e.request).then(res => res))
    )
})



