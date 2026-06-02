const buttons = document.querySelectorAll(".ripple");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const x = e.pageX;
    const y = e.pageY;

    const buttonLeft = e.target.offsetLeft;
    const buttonTop = e.target.offsetTop;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = yInside + "px";
    circle.style.left = xInside + "px";

    this.appendChild(circle);

    setTimeout(() => circle.remove(), 500);
  });
});

//  pageX --> Distance from the left edge of the entire website

//  offsetTop --> Distance from an HTML element to the top of its parents container

//  xInside --> gives where inside the button was clicked
//  xInside = x - buttonLeft
//  xInside = 845 - 843 => 2
