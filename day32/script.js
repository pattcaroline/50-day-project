const toggles = document.querySelectorAll(".toggle");
const good = document.querySelector("#good");
const cheap = document.querySelector("#cheap");
const fast = document.querySelector("#fast");

// Loop through toggles and add 'change' (bc its a checkbox)
// Add event listener to all and pass the function with e.target
toggles.forEach((toggle) =>
  toggle.addEventListener("change", (e) => doTheTrick(e.target)),
);

// Check first if all 3 options are checked
// If 2 options are checked then the 3 one cant be checked, so uncheck another option
function doTheTrick(theClickedOne) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === theClickedOne) {
      fast.checked = false;
    }

    if (cheap === theClickedOne) {
      good.checked = false;
    }

    if (fast === theClickedOne) {
      cheap.checked = false;
    }
  }
}
