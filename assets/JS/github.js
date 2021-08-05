var url = "https://api.github.com/users/discordanaxes"; // URL of API
fetch(url).then(function (response) {
  if (response.ok) {
    // Check if response went through
    response.json().then(function (data) {
      var githubFollowersHTML = document.getElementById("gh_followers");
      var followers = `${data.followers + " Followers"}`;
      githubFollowersHTML.innerHTML += followers;
    });
  } else {
    console.log("Response failed?");
  }
});

const repos = document.getElementById("repos");

async function getRepo(user) {
    const result = await fetch(`https://api.github.com/users/DiscordAnaxes/repos`);
    let repos = await result.json();

    repos = filterRepos(repos);
    return repos;
}

function filterRepos(repos) {
    const foundRepos = [];

    for (repo of repos) {
        if (repo.fork) continue;

        repo.created_at = new Date(repo.created_at);
        foundRepos.push(repo);
    }

    const sortRepo = foundRepos.sort((a, b) => b.created_at - a.created_at);

    return sortRepo.slice(0, 12);
}

async function addRepos() {
    for (repo of await getRepo("DiscordAnaxes")) {
        const repoDiv = document.createElement("div");
        repoDiv.className = "repo";

        const repoTitle = document.createElement("div");
        repoTitle.className = "repo-title";

        const repoUrl = document.createElement("a");
        repoUrl.innerText =
            repo.name.length > 11
                ? `${repo.name.substring(0, 8)}...`
                : repo.name;
        repoUrl.href = repo.html_url;
        repoUrl.target = "_blank";

        const tempDiv = document.createElement("div");

        const starCount = document.createElement("p");
        starCount.innerText = repo.stargazers_count;

        const imgFile = document.createElement("img");
        imgFile.src = "./static/images/star.svg";

        tempDiv.append(starCount, imgFile);
        repoTitle.append(repoUrl, tempDiv);

        const repoDescription = document.createElement("p");
        repoDescription.innerText =
            repo.description.length > 76
                ? `${repo.description.substring(0, 73)}...`
                : repo.description;

        repoDiv.append(repoTitle, repoDescription);
        repos.appendChild(repoDiv);
    }
}

addRepos();