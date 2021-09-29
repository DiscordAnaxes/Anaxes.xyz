"use strict";
var loader = document.querySelector(".preloader");
window.addEventListener("load", vanish);
function vanish() {
  loader.classList.add("disappear");
}
