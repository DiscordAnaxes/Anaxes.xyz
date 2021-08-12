var url = "https://api.lanyard.rest/v1/users/567885938160697377"; // URL of API
fetch(url).then(function (response) {
  if (response.ok) {
    // Check if response went through
    response.json().then(function (data) {
      var lanyardStatusHTML = document.getElementById("lanyard_status");
      var spotify = `${
        data.data.listening_to_spotify
          ? `<div class="flex-shrink-0 flex items-center"><i class="fab fa-spotify text-green-500"></i>&nbsp;Listening to&nbsp;<a href="https://open.spotify.com/track/${
              data.data.spotify.track_id
            }" target="_blank" class="hover:text-green-500 flex-shrink-0 flex items-center"><img src=${
              data.data.spotify.album_art_url
            } class="block h-5 w-auto rounded-full" />&nbsp;<span class="font-bold">${data.data.spotify.song
              .split("", 20)
              .reduce(
                (o, c) => (o.length === 19 ? `${o}${c}...` : `${o}${c}`),
                ""
              )}</span></a>&nbsp;by&nbsp;<a href="https://open.spotify.com/search/${
              data.data.spotify.artist.split(";")[0]
            }" target="_blank" class="hover:text-green-500"><span class="font-bold">${data.data.spotify.artist
              .split("", 10)
              .reduce(
                (o, c) => (o.length === 9 ? `${o}${c}...` : `${o}${c}`),
                ""
              )}</span>&nbsp;<i class="fad fa-external-link"></i></a></div>`
          : data.data.activities[1].name === "GitHub"
          ? `<p><i class="fab fa-github text-white"></i> GitHub:&nbsp;${data.data.activities[1].details
              .split("", 30)
              .reduce(
                (o, c) => (o.length === 29 ? `${o}${c}...` : `${o}${c}`),
                ""
              )} | ${
              data.data.activities[1].state
                ? data.data.activities[1].state
                : "Viewing Activity"
            }</p>`
          : data.data.activities[1].name === "Visual Studio Code"
          ? `<p><i class="fad fa-code text-blue-500"></i> VSCode:&nbsp;${data.data.activities[1].details
              .split("", 30)
              .reduce(
                (o, c) => (o.length === 29 ? `${o}${c}...` : `${o}${c}`),
                ""
              )} | ${
              data.data.activities[1].state
                ? data.data.activities[1].state
                : "🍿 Eating, 🎮 Gaming or 💤 Sleeping"
            }</p>`
          : data.data.activities[1].name === "Crunchyroll"
          ? `<p><i class="fad fa-video text-orange-500"></i> Crunchyroll:&nbsp;${data.data.activities[1].details
              .split("", 30)
              .reduce(
                (o, c) => (o.length === 29 ? `${o}${c}...` : `${o}${c}`),
                ""
              )} | ${data.data.activities[1].state
              .split("", 30)
              .reduce(
                (o, c) => (o.length === 29 ? `${o}${c}...` : `${o}${c}`),
                ""
              )}</p>`
          : `<p><i class="twa twa-satellite"></i>&nbsp;Status:&nbsp;<span class="font-bold">${data.data.activities[0].emoji.name}&nbsp;${data.data.activities[0].state}</span></p>`
      }`;
      lanyardStatusHTML.innerHTML += spotify;
    });
  } else {
    console.log("Response failed?");
  }
});

fetch(url).then(function (response) {
  if (response.ok) {
    // Check if response went through
    response.json().then(function (data) {
      var discordStatusHTML = document.getElementById("discord_status");
      var status = `${
        data.data.discord_status === "online"
          ? "<i class='fad fa-circle text-green-500 animate-pulse' title='Online'></i>"
          : data.data.discord_status === "dnd"
          ? "<i class='fad fa-circle text-red-500 animate-pulse' title='Do Not Disturb'></i>"
          : data.data.discord_status === "idle"
          ? "<i class='fad fa-circle text-yellow-500 animate-pulse' title='Idle'></i>"
          : "<i class='fad fa-circle text-gray-500 animate-pulse' title='Offline'></i>"
      }`;
      discordStatusHTML.innerHTML += status;
    });
  } else {
    console.log("Response failed?");
  }
});
