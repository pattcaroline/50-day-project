const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
  // for each element inside sounds => create a btn and add class 'btn'
  // add the inner text to same name as each element inside sounds (sound)
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;

  // On click, stop music (avoid sounds overlaping each other) then play sound
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
    song.currentTime = 0; //plays sound from the start
  });
}
