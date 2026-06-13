const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const symbolsEl = document.getElementById("symbols");
const numbersEl = document.getElementById("numbers");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

clipboardEl.addEventListener("click", async () => {
  const password = resultEl.innerText;

  if (!password) {
    return;
  }

  try {
    await navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
  //   const textarea = document.createElement("textarea");
  //   const password = resultEl.innerText;
  //   if (!password) { return; }
  //   textarea.value = password;
  //   document.body.appendChild(textarea);
  //   textarea.select();
  //   document.execCommand("copy"); //////////// DEPRECATED
  //   textarea.remove();
  //   alert("Password copied to clipboard!");
});

generateEl.addEventListener("click", () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumbers = numbersEl.checked;
  const hasSymbols = symbolsEl.checked;

  resultEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumbers,
    hasSymbols,
    length,
  );
});

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = "";
  const typesCount = lower + upper + number + symbol;

  //Create an Array and apply filter to remove typesCount equal to 0 (false)
  const typersArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0],
  );

  if (typesCount === 0) {
    return "";
  }

  // Instead of incrementing by 1 (i++), the loop jumps by typesCount on every iteration. Why? Because the inner loop is going to add multiple characters at once. Because of that it will generate more characters than requested, then we use .slice to trim the password generated based on the length

  for (let i = 0; i < length; i += typesCount) {
    typersArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
}

// https://www.w3schools.com/charsets/ref_html_ascii.asp
// Multiply by 26 (there's 26 letters in the alphabet) and Numbers multiply by 10 ( 0 to 9)
// Add 97 (lowercase letter on ASCII starts at 97)
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
