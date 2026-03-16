const labels = document.querySelectorAll(".form-control label");

// looping throught the inner text (email - password)
// Then split each letter into an array
// Put each letter with <span> arround it into array
// Finally joining it all back to string

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`,
    )
    .join("");
});
