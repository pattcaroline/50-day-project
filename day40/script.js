const boxesContainer = document.getElementById("boxes");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => boxesContainer.classList.toggle("big"));

function createBoxes() {
  // Two for loops to create 16 boxes (4 x 4)
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement("div");
      box.classList.add("box");

      // Most important aspect is to display each part of the big picture into the right small boxes;
      // That is achieved by manipulation the bg position based on the size of the small box (125 x 125)
      // background-position: -125px 0;
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;

      boxesContainer.appendChild(box);
    }
  }
}

createBoxes();
