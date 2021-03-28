document.addEventListener("contextmenu", (event) => event.preventDefault());
jQuery(document).ready(function () {
  function disableSelection(e) {
    if (typeof e.onselectstart != "undefined")
      e.onselectstart = function () {
        return false;
      };
    else if (typeof e.style.MozUserSelect != "undefined")
      e.style.MozUserSelect = "none";
    else
      e.onmousedown = function () {
        return false;
      };
    e.style.cursor = "default";
  }
  window.onload = function () {
    disableSelection(document.body);
  };

  window.addEventListener("keydown", function (e) {
    if (
      e.ctrlKey &&
      (e.which == 65 ||
        e.which == 66 ||
        e.which == 67 ||
        e.which == 70 ||
        e.which == 73 ||
        e.which == 80 ||
        e.which == 83 ||
        e.which == 85 ||
        e.which == 86)
    ) {
      e.preventDefault();
    }
  });
  document.keypress = function (e) {
    if (
      e.ctrlKey &&
      (e.which == 65 ||
        e.which == 66 ||
        e.which == 70 ||
        e.which == 67 ||
        e.which == 73 ||
        e.which == 80 ||
        e.which == 83 ||
        e.which == 85 ||
        e.which == 86)
    ) {
    }
    return false;
  };

  document.onkeydown = function (e) {
    e = e || window.event;
    if (e.keyCode == 123 || e.keyCode == 18) {
      return false;
    }
  };

  document.oncontextmenu = function (e) {
    var t = e || window.event;
    var n = t.target || t.srcElement;
    if (n.nodeName != "A") return false;
  };
  document.ondragstart = function () {
    return false;
  };
});
