const imgs = document.getElementById("imgs");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const originalImgs = document.querySelectorAll("#imgs img");

// 1. Clone first and last images
const firstClone = originalImgs[0].cloneNode(true);
const lastClone = originalImgs[originalImgs.length - 1].cloneNode(true);

// 2. append and prepend clones to the container
imgs.appendChild(firstClone);
imgs.insertBefore(lastClone, originalImgs[0]);

// 3. Get updates list of images including the clones
const allImagesAndClone = document.querySelectorAll("#imgs img");

let idx = 1;

imgs.style.transform = `translateX(${-idx * 500}px)`;

let interval = setInterval(run, 2000);

function run() {
  idx++;
  changeImage();
}

function changeImage() {
  // if (idx > img.length - 1) {
  //   idx = 0;
  // } else if (idx < 0) {
  //   idx = img.length - 1;
  // }
  imgs.style.transition = "transform 0.5s ease-in-out";
  imgs.style.transform = `translateX(${-idx * 500}px)`;
}

// Listen for the transition to end to handle the seamless "snap back"
imgs.addEventListener("transitionend", () => {
  // if we reach the clone of the first image at the very end
  if (
    allImagesAndClone[idx].src === firstClone.src &&
    idx >= allImagesAndClone.length - 1
  ) {
    imgs.style.transition = "none"; // hide the jump
    idx = 1; // reset to original first image
    imgs.style.transform = `translateX(${-idx * 500}px)`;
  }

  // if we went back past the first image to the clone of the last image
  if (allImagesAndClone[idx].src === lastClone.src && idx <= 0) {
    imgs.style.transition = "none";
    idx = allImagesAndClone.length - 2; // reset to the original last image
    imgs.style.transform = `translateX(${-idx * 500}px)`;
  }
});

function resetInverval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

rightBtn.addEventListener("click", () => {
  if (idx >= allImagesAndClone.length - 1) return;
  idx++;
  changeImage();
  resetInverval();
});

leftBtn.addEventListener("click", () => {
  if (idx <= 0) return;
  idx--;
  changeImage();
  resetInverval();
});
