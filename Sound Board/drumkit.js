const drumsounds = [
  "boom",
  "clap",
  "hihat",
  "kick",
  "openhat",
  "ride",
  "snare",
  "tink",
  "tom",
];

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("key-played");
}

window.addEventListener("keydown", (e) => {
  stopSongs();
  const drumToPlay = getDrum(e);
  const key = document.querySelector("div#" + drumToPlay);
  console.log(key);
  if (key == null) {
    return;
  }
  key.classList.add("key-played");
  console.log(key);
  document.getElementById(drumToPlay).play();
});

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

function getDrum(e) {
  switch (e.keyCode) {
    case 65:
      return "boom";
    case 83:
      return "clap";
    case 68:
      return "hihat";
    case 70:
      return "kick";
    case 71:
      return "openhat";
    case 72:
      return "ride";
    case 74:
      return "snare";
    case 75:
      return "tink";
    case 76:
      return "tom";
  }
}
function stopSongs() {
  drumsounds.forEach((sound) => {
    //   sound.propertyName
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}
