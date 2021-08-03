document.onkeydown = function (e) {
  if (event.keyCode == 123) {
    console.log("Looks like someone is trying to access something!");

    alert("Hmm.... What's going on here? 🤔");

    return false;
  }

  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    console.log("Looks like someone is trying to access something!");

    alert("Hmm.... What's going on here? 🤔");

    return false;
  }

  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
    console.log("Looks like someone is trying to access something!");

    alert("Hmm.... What's going on here? 🤔");

    return false;
  }

  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    console.log("Looks like someone is trying to access something!");

    alert("Hmm.... What's going on here? 🤔");

    return false;
  }

  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    console.log("Looks like someone is trying to access something!");

    alert("Hmm.... What's going on here? 🤔");

    return false;
  }
};

document.addEventListener("contextmenu", (e) => e.preventDefault());

document.addEventListener("developertools", (e) => e.preventDefault());

document.addEventListener("inspect_element", (e) => e.preventDefault());
