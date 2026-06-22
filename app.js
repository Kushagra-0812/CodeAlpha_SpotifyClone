// Audio Player
const audioPlayer = document.getElementById("audio-player");

// Song Cards
const musicCards = document.querySelectorAll(".music-card");

// Player Elements
const songName = document.querySelector(".song-name");
const artistName = document.querySelector(".artist-name");
const playerImage = document.querySelector(".player-left img");

// Controls
const playPauseBtn = document.querySelector(
    ".player-center .fa-circle-play"
);

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentIndex = 0;

// Load Song Function
function loadSong(index) {

    const card = musicCards[index];

    const songPath = card.dataset.song;

    if (!songPath) return;

    const title =
        card.querySelector(".img-title").textContent;

    const artist =
        card.querySelector(".img-description").textContent;

    const image =
        card.querySelector("img").src;

    songName.textContent = title;
    artistName.textContent = artist;
    playerImage.src = image;

    audioPlayer.src = songPath;

    audioPlayer.play();

    playPauseBtn.classList.remove("fa-circle-play");
    playPauseBtn.classList.add("fa-circle-pause");
}

// Card Click Event
musicCards.forEach((card, index) => {

    card.addEventListener("click", () => {

        currentIndex = index;

        loadSong(currentIndex);

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

// Next Button
nextBtn.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex >= musicCards.length) {
        currentIndex = 0;
    }

    loadSong(currentIndex);

});

// Previous Button
prevBtn.addEventListener("click", () => {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = musicCards.length - 1;
    }

    loadSong(currentIndex);

});

// When Song Ends
audioPlayer.addEventListener("ended", () => {

    playPauseBtn.classList.remove("fa-circle-pause");
    playPauseBtn.classList.add("fa-circle-play");

});