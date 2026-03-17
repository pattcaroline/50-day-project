const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  //Finding the height of the window so we can calculate the trigger point for the next boxes to show up
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    //method in JavaScript returns a DOMRect object that provides the size and position of an element relative to the browser's viewport (the visible part of the window)
    //top: Distance from the top of the viewport to the top edge of the element.
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
