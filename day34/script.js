const nums = document.querySelectorAll(".nums span");
const counter = document.querySelector(".counter");
const finalMessage = document.querySelector(".final");
const replay = document.querySelector("#replay");

runAnimation();

function resetDOM() {
  counter.classList.remove("hide");
  finalMessage.classList.remove("show");

  nums.forEach((num) => {
    num.classList.value = "";
  });

  nums[0].classList.add("in");
}

function runAnimation() {
  nums.forEach((item, idx) => {
    const nextToLastValue = nums.length - 1;

    item.addEventListener("animationend", (e) => {
      if (e.animationName === "goIn" && idx !== nextToLastValue) {
        item.classList.remove("in");
        item.classList.add("out");
      } else if (e.animationName === "goOut" && item.nextElementSibling) {
        item.classList.remove("out");
        item.nextElementSibling.classList.add("in");
      } else {
        counter.classList.add("hide");
        finalMessage.classList.add("show");
      }
    });
  });
}

replay.addEventListener("click", () => {
  resetDOM();
});
