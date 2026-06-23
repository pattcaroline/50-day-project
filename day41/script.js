const codes = document.querySelectorAll(".code");

codes[0].focus();

codes.forEach((code, idx) => {
  code.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9) {
      // clear value current index
      codes[idx].value = "";
      // focus on current index, setTimeout so user can add number to first input
      setTimeout(() => codes[idx + 1].focus(), 10);
      // if user hit DELETE key is goes back
    } else if (e.key === "Backspace") {
      setTimeout(() => codes[idx - 1].focus(), 10);
    }
  });
});
