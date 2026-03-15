const bg = document.querySelector(".bg");
const loadText = document.querySelector(".loading-text");

let load = 0;

//setInterval() method repeatedly executes a function or specified code snippet at fixed time intervals (measured in milliseconds). It continues to run until the browser window is closed or the execution is explicitly stopped using clearInterval()

let int = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  loadText.innerText = `${load}`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`; //bg blur starting at 30px
}

//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
