const CACHE_NAME = "static-assets-v1";

// Install event - caches static assets
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll([
                `/audio/AC_DC_BackInBlack.m4a`,
                `/videos/WorkingOnLaptop_darkMode.mp4`,
                `/videos/PlayingGuitar_darkMode.mp4`,
                `/videos/SayingHi_darkMode.mp4`,
                "/images/helloWorld.gif",
                "/images/responsiveDesigner.gif",
                "/images/continuousDev.gif",
                "/images/timeMoney.gif",
                "/images/ideasToReality.gif",
                `/videos/WorkingOnPC_darkMode.mp4`,
                `/videos/TalkingAbout_darkMode.mp4`,
                "/images/FriendlyPAI_Mockup.png",
                "/images/TaskOrbit_Mockup.png",
                "/images/TheBirthClock_Mockup.png",
                "/images/TheOcean_Mockup.png",
                "/images/TimeCoder_Mockup.png",
                "/images/theBirthClock1.jpg",
                "/images/theBirthClock2.jpg",
                "/images/theBirthClock3.jpg",
                "/images/taskOrbit1.jpg",
                "/images/taskOrbit2.jpg",
                "/images/taskOrbit3.jpg",
                "/images/taskOrbit4.jpg",
                "/images/taskOrbit5.jpg",
                "/images/friendlyPAI1.jpg",
                "/images/friendlyPAI2.jpg",
                "/images/friendlyPAI3.jpg",
                "/images/friendlyPAI4.jpg",
                "/images/friendlyPAI5.jpg",
                "/images/theOcean1.jpg",
                "/images/theOcean2.jpg",
                "/images/theOcean3.jpg",
                "/images/theOcean4.jpg",
                "/images/theOcean5.jpg",
                "/images/theOcean6.jpg",
                "/images/theOcean7.jpg",
            ]);
        })
    );
});

// Fetch event - serve from cache or fetch from network
self.addEventListener("fetch", (event) => {
    if (event.request.url.includes("/images/") || event.request.url.includes("/audio/") || event.request.url.includes("/videos/")) {
        event.respondWith(
            caches.match(event.request).then((cachedResponse) => {
                return cachedResponse || fetch(event.request).then((response) => {
                    // Only cache full responses (status 200)
                    if (!response || response.status !== 200 || response.type !== "basic") {
                        return response;
                    }

                    return caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, response.clone()); // Store response in cache
                        return response;
                    });
                });
            })
        );
    }
});


// Activate event - cleanup old caches
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((name) => name !== CACHE_NAME)
                    .map((name) => caches.delete(name))
            );
        })
    );
});
