const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const text = "We love programming!";

let idx = 1;
let speed = 300 / speedEl.value;

writeText();

function writeText() {
  // Displaying first letter only then increment the idx
  textEl.innerText = text.slice(0, idx);
  idx++;

  // Check to see if the index (idx) is greater than the text length
  // Once it reaches the end, reset the idx to 1
  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(writeText, speed);
}

// Increase the speed based on user input range from 1 to max 5
speedEl.addEventListener("input", (e) => (speed = 300 / e.target.value));
