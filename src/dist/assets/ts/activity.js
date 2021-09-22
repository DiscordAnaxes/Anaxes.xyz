"use strict";
fetch("https://api.lanyard.rest/v1/users/567885938160697377").then(function (response) {
    if (response.ok) {
        // Check if response went through
        response.json().then(function (data) {
            var timestamp = moment(data.data.activities[1].timestamps.start);
            console.log(timestamp);
            var activity = document.getElementById("activities_anaxes");
            var card = `${`<div class="
			text-center
			lg:text-left
			font-regular
			tracking-widest
			uppercase
			text-sm text-gray-500
			mt-16
			mb-6
			">
			Activity
		  </div><div class="row items-center justify-center mb-8"><div class="glass text-white px-6 sm:px-4 col mb-8 w-full md:w-1/2 lg:w-1/3"  >
			<div class="flex items-center px-6 py-4 transform hover:scale-105 duration-200 shadow rounded-md px-6 sm:px-4 hover:bg-gray-100 cursor-pointer opacity" style="background-color: #0e141d; border-radius: 1vw; ${data.data.spotify && data.data.activities[1].name === "Spotify" ? `background-image: url(${data.data.spotify.album_art_url}); background-position: center; ` : ""}>
			  <div class="flex items-center">
				<img draggable="false" class="h-16 w-16 rounded-md" src=${data.data.listening_to_spotify && data.data.activities[1].name === "Spotify" ? `${"https://i.scdn.co/image/" + `${data.data.activities[1].assets.large_image.split("spotify:")[1]}`}` : `https://cdn.discordapp.com/app-assets/${data.data.activities[1].application_id}/${data.data.activities[1].assets.large_image}`} />
				${data.data.activities[1].assets.small_image ? `<img draggable="false" class="rounded-full" style="width: 25px; height: 25px; margin-left: -20px;margin-bottom: -50px;" src=${`https://cdn.discordapp.com/app-assets/${data.data.activities[1].application_id}/${data.data.activities[1].assets.small_image}`} />` : ""}
				<p class="ml-4 text-sm flex flex-col justify-between leading-snug">
					<span class="font-bold">${data.data.listening_to_spotify && data.data.activities[1].name === "Spotify" ? "Listening&nbsp;to&nbsp;<i class='fab fa-spotify text-green-500'></i>" : `${data.data.activities[1].name === "Visual Studio Code" ? "Playing&nbsp;<i class='fad fa-code text-blue-500'></i>" : `${data.data.activities[1].name === "GitHub" ? "Playing&nbsp<i class='fab fa-github'></i>" : "Playing"}`}`}&nbsp;${data.data.activities[1].name}</span>
					<span class="opacity-100">${data.data.listening_to_spotify && data.data.activities[1].name === "Spotify" ? `🎶 ${data.data.activities[1].details.split("", 25).reduce((o, c) => (o.length === 24 ? `${o}${c}...` : `${o}${c}`), "")}</span>` : `${data.data.activities[1].details.split("", 25).reduce((o, c) => (o.length === 24 ? `${o}${c}...` : `${o}${c}`), "")}</span>`}
					${data.data.listening_to_spotify && data.data.activities[1].name === "Spotify" ? data.data.activities[1].state ? `<span class="opacity-100">😃 ${data.data.activities[1].state.split("", 25).reduce((o, c) => (o.length === 24 ? `${o}${c}...` : `${o}${c}`), "")}</span>` : "" : data.data.activities[1].state ? `<span class="opacity-100">${data.data.activities[1].state.split("", 25).reduce((o, c) => (o.length === 24 ? `${o}${c}...` : `${o}${c}`), "")}</span>` : ""}
					<span class="opacity-100">⏰ ${timestamp.fromNow().split("ago")[0]} elapsed</span>
				</p>
			</div>
			</div>
			</div>
		</div>`}`;
            activity.innerHTML += card;
        });
    }
    else {
        console.log("Response failed?");
    }
});
function moment(start) {
    throw new Error("Function not implemented.");
}
;
