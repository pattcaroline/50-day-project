const sliderContainer = document.querySelector(".slider-container");
const slideLeft = document.querySelector(".left-slide");
const slideRight = document.querySelector(".right-slide");

const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");

const slidesLength = slideRight.querySelectorAll("div").length;

let activeSlideIndex = 0;

// Right slide and Left Slide are inversely connected
// 1st right slide = Last left slide (slidesLength - 1)
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

// Add event listener to up and down button
// pass different arguments into the same function being called
upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;

  // If direction is UP then incremenet the activeSlideIndex
  // If activeSlideIndex reaches the end, then reset it to 0
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    // If the activeSlideIndex reaches the beginning reset it to the last slide (slidesLength - 1)
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }

  // Change each slide side based on the activeSlideIndex * screen Height -> image will fit the entire screen
  slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
  slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
};
