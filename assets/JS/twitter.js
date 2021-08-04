fetch("https://api.anaxes.xyz/api/twitter.php").then(function (response) {
  if (response.ok) {
    // Check if response went through
    response.json().then(function (data) {
      var twitterFollowersHTML = document.getElementById("tw_followers");
      var followers = `${`${data.followers_count + " Followers"}` || "💻 404"}`;
      twitterFollowersHTML.innerHTML += followers;
    });
  } else {
    console.log("Response failed?");
  }
});
