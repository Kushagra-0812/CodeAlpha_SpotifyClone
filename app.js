// Audio Player
const audioPlayer = document.getElementById("audio-player");

// Song Cards
const musicCards = document.querySelectorAll(".music-card");

// Player Elements
const songName = document.querySelector(".song-name");
const artistName = document.querySelector(".artist-name");
const playerImage = document.querySelector(".player-left img");

// Center Play Button
const playPauseBtn = document.querySelector(
    ".player-center .fa-circle-play"
);

let isPlaying = false;

// Card Click Event
musicCards.forEach(card => {

    card.addEventListener("click", () => {

        const songPath = card.dataset.song;

        const title =
            card.querySelector(".img-title").textContent;

        const artist =
            card.querySelector(".img-description").textContent;

        const image =
            card.querySelector("img").src;

        // Update Player UI
        songName.textContent = title;
        artistName.textContent = artist;
        playerImage.src = image;

        // Load Song
        audioPlayer.src = songPath;

        // Play Song
        audioPlayer.play();

        isPlaying = true;

        playPauseBtn.classList.remove("fa-circle-play");
        playPauseBtn.classList.add("fa-circle-pause");
    });

});

// Play / Pause Button

playPauseBtn.addEventListener("click", () => {

    if (!audioPlayer.src) return;

    if (audioPlayer.paused) {

        audioPlayer.play();

        playPauseBtn.classList.remove("fa-circle-play");
        playPauseBtn.classList.add("fa-circle-pause");

    } else {

        audioPlayer.pause();

        playPauseBtn.classList.remove("fa-circle-pause");
        playPauseBtn.classList.add("fa-circle-play");
    }

});

// When Song Ends

audioPlayer.addEventListener("ended", () => {

    playPauseBtn.classList.remove("fa-circle-pause");
    playPauseBtn.classList.add("fa-circle-play");

});