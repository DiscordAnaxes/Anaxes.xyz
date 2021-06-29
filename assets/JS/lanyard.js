var url = "https://api.lanyard.rest/v1/users/567885938160697377"; // Change this to your URL
fetch(url)
    .then(function(response) {
          if(response.ok) { // Check if response went through
              response.json().then(function(data) { 
                  var lanyardStatusHTML = document.getElementById('lanyard_status');
                  var spotify = `<div class="flex-shrink-0 flex items-center"><i class="fab fa-spotify text-green-500"></i>&nbsp;Listening to&nbsp;<a href="https://open.spotify.com/track/${data.data.spotify.track_id}" target="_blank" class="hover:text-green-500 flex-shrink-0 flex items-center"><img src=${data.data.spotify.album_art_url} class="block h-5 w-auto rounded-full" />&nbsp;<span class="font-bold">${data.data.spotify.song.split('', 20).reduce((o, c) => o.length === 19 ? `${o}${c}...` : `${o}${c}` , '')}</span>&nbsp;by&nbsp;<span class="font-bold">${data.data.spotify.artist.split('', 10).reduce((o, c) => o.length === 9 ? `${o}${c}...` : `${o}${c}` , '')}</span>&nbsp;<i class="fad fa-external-link"></i></a></div>`;
                  lanyardStatusHTML.innerHTML += spotify;
              });
          } else { 
              console.log("Response failed?");
          }
    });

var discordUrl = "https://api.lanyard.rest/v1/users/567885938160697377"; // Change this to your URL
fetch(discordUrl)
    .then(function(response) {
          if(response.ok) { // Check if response went through
              response.json().then(function(data) { 
                  var discordStatusHTML = document.getElementById('discord_status');
                  var status = `${data.data.discord_status === "online" ? "<i class='fad fa-circle text-green-500 animate-pulse'></i>" : data.data.discord_status === "dnd" ? "<i class='fad fa-circle text-red-500 animate-pulse'></i>" : data.data.discord_status === "idle" ? "<i class='fad fa-circle text-yellow-500 animate-pulse'></i>" : "<i class='fad fa-circle text-gray-500 animate-pulse'></i>"}`;
                  discordStatusHTML.innerHTML += status;
              });
          } else { 
              console.log("Response failed?");
          }
    });    