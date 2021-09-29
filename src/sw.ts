self.addEventListener("install", (e:any) => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./assets/css/style.css", "./assets/images/AnaxesLogo192.png"])
        })
    );
});

self.addEventListener("fetch", (e:any) => {
    console.log(`Intercepting fetch request for: ${e.request.url}`);
    
});