const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");

// loveMe.addEventListener("dblclick", (e) => {
//   console.log("duble click");
// });

/////////// Creating my own double click function

let clickTime = 0;
let timesClicked = 0;

loveMe.addEventListener("click", (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(e);
      clickTime = 0;
    }
  }
  //else {
  //clickTime = new Date().getTime()
  //}
});

const createHeart = (e) => {
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");

  //Coordinates of the click event
  const x = e.clientX;
  const y = e.clientY;

  //Find the position of the image relative to the webpage
  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;

  //Find the click position within the div
  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  // Apply the positioning to CSS (which has a position: absolute)
  // Style the top and left of .loveMe .fa-heart
  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  loveMe.appendChild(heart);

  // Increment the clicked counter
  times.innerHTML = ++timesClicked;

  // Removing the hearts from the DOM after 1 second
  setTimeout(() => heart.remove(), 1000);
};
