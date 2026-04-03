const counters = document.querySelectorAll(".counter");

// Setting counter to 0
counters.forEach((counter) => {
  counter.innerHTML = "0";

  const updateCounter = () => {
    //getting the counter value (0) and updating the value in the innerText
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;

    //How fast to increment the number until the data-target (12000, 5000, 7500)
    const increment = target / 50;

    //If the value of c is still less than the target value, keep incrementing
    //Math.ceil to round up the number
    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 50);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
