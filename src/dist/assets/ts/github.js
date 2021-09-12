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
var urlRepos = `${url + "/repos"}`;
fetch(urlRepos).then(function (response) {
    if (response.ok) {
        response.json().then(function (data) {
            var githubRepos = document.getElementById("repos_discordanaxes");
            for (let i in data) {
                if (!data[i].fork === true) {
                    var repos = (`
          <div class="px-6 sm:px-4 col mb-8 w-full md:w-1/2 lg:w-1/3">
        <a rel="noopener noreferrer" href="${data[i].html_url}" target="_blank">
          <div class="
                flex
                items-center
                px-6
                py-4
                transform
                hover:scale-105
                duration-200
                shadow
                rounded-md
                px-6
                sm:px-4
                hover:bg-gray-100
                cursor-pointer
              " style="background-color: #0e141d; border-radius: 1vw">
            <div class="flex items-center">
              <div class="flex-initial">
              <div class="font-bold text-lg text-white flex-shrink-0 flex items-center">
              ${data[i].name.split("", 10)
                        .reduce((o, c) => (o.length === 9 ? `${o}${c}...` : `${o}${c}`), "")}&nbsp;<span class="px-32 md:px-80 flex-shrink-0 flex items-center">${data[i].stargazers_count}&nbsp;<i class="twa twa-star"></i>&nbsp;${data[i].language === "HTML" ? '<img class="flex-shrink-0 flex items-center h-4 w-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Devicon-html5-plain.svg/640px-Devicon-html5-plain.svg.png"/>' : `${!data[i].language ? "<i class='twa twa-books'></i>" : "<i class='twa twa-computer'></i>"}`}</span>
                </div>
                <div class="font-regular text-xs text-gray-500">
                ${data[i].description.split("", 40)
                        .reduce((o, c) => (o.length === 39 ? `${o}${c}...` : `${o}${c}`), "")}
                </div>
              </div>
            </div>
          </div>
        </a>
        </div>
        `);
                    githubRepos.innerHTML += repos;
                }
            }
        });
    }
});
