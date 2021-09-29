"use strict";
self.addEventListener("install", (e) => {
    e.waitUntil(caches.open("static").then(cache => {
        return cache.addAll(["./", "./assets/css/style.css", "./assets/images/AnaxesLogo192.png"]);
    }));
});
