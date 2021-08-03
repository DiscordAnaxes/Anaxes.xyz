 fetch("https://anaxes.vercel.app/api/twitter.php").then(function(response) {
  if (response.ok) {
    // Check if response went through
    response.json().then(function (data) {
      var githubFollowersHTML = document.getElementById("tw_followers");
      var followers = `${
        `${data.followers_count + " Followers"}` || "💻 404"
      }`;
      githubFollowersHTML.innerHTML += followers;
    });
  } else {
    console.log("Response failed?");
  }
});
