// https://picsum.photos/300/300

const container = document.querySelector(".container");
const randomImage = "https://picsum.photos/300/";
const rows = 3;

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement("img");
  img.src = `${randomImage}${getRandomSize()}`;
  container.appendChild(img);

  console.log(img);
}

function getRandomSize() {
  return `${getRandomNum()}`;
}

function getRandomNum() {
  return Math.floor(Math.random() * 10) + 300;
}
