const range = document.getElementById("range");

range.addEventListener("input", (e) => {
  const value = +e.target.value;
  const label = e.target.nextElementSibling;

  const range_width = getComputedStyle(e.target).getPropertyValue("width");
  const label_width = getComputedStyle(label).getPropertyValue("width");

  // Getting the value from width and removing 2 (px)
  // Add + to convert to number
  const num_range_width = +range_width.substring(0, range_width.length - 2);
  const num_label_width = +label_width.substring(0, label_width.length - 2);

  const max = +e.target.max;
  const min = +e.target.min;

  const left =
    value * (num_range_width / max) -
    num_label_width / 2 +
    scale(value, min, max, 10, -10);

  label.style.left = `${left}px`;

  // Display value of range in the label box
  label.innerHTML = value;
});

//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

// Step 1 - find the basic position of the slider thumb
// this tells the code how many pixels represent a single 'step' on the slider.
// Then multiple by current value to find out how many pixels from the left the edge of the thumb currently is
// value * (num_range_width / max)

// Step 2- Center the label over the thumb
// find its exact center and subtract the amount, shifting the label back to the left by half of its own width
// - num_label_width / 2

// Setp 3 - the edge correction
// When the slider is at the far left (min), it adds 10 pixels to nudge the label to the right so it doesn't get cut off.
// + scale(value, min, max, 10, -10)
