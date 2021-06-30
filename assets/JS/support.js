window.showHelp = function () {
  if (document.getElementById("show_side").style.marginTop === "1000px") return;
  document.getElementById("show_side").style.display = "block";
  document.getElementById("click_it").classList.add("animate__fadeOut");
  document.getElementById("click_it").classList.add("animate__faster");
  document.getElementById("show_side").classList.add("animate__animated");
  document.getElementById("show_side").classList.add("animate__fadeInRight");
  document.getElementById("show_side").classList.add("animate__faster");
  document.getElementById("show_side").classList.remove("animate__fadeOut");
};
window.hideHelp = function () {
  if (document.getElementById("show_side").style.marginTop === "1000px") return;
  document.getElementById("click_it").classList.remove("animate__fadeOut");
  document.getElementById("click_it").classList.add("animate__fadeInUp");
  document.getElementById("show_side").classList.add("animate__animated");
  document.getElementById("show_side").classList.add("animate__fadeOut");
  document.getElementById("show_side").classList.remove("animate__fadeIn");
  setTimeout(function () {
    document.getElementById("show_side").style.display = "none";
  }, 20);
};
document.addEventListener("click", function (event) {
  var isClickInsideElement = document
    .getElementById("show_side")
    .contains(event.target);
  var isClickInsideSecondary = document
    .getElementById("click_it")
    .contains(event.target);
  if (!isClickInsideElement && !isClickInsideSecondary) {
    window.hideHelp();
  }
});
