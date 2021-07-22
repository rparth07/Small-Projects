const sounds = [
  "TWD_intromusic",
  "scooby_doo",
  "Pikachu",
  "I_start_living",
  "Determined_R2D2",
  "Confusin",
];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;
  btn.addEventListener("click", () => {
    stopSongs();
    document.getElementById(sound).play();
  });
  document.getElementById("buttons").appendChild(btn);
});

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}

const stopsong = document.getElementById("stop");

stopsong.addEventListener("mouseenter", stopSongs);
