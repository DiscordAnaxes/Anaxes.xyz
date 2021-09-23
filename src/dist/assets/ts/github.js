"use strict";
var url = "https://api.github.com/users/discordanaxes"; // URL of API
fetch(url).then(function (response) {
    if (response.ok) {
        // Check if response went through
        response.json().then(function (data) {
            var githubFollowersHTML = document.getElementById("gh_followers");
            var followers = `${data.followers + " Followers"}`;
            githubFollowersHTML.innerHTML += followers;
        });
    }
    else {
        console.log("Response failed?");
    }
});
