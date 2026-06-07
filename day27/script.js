const toasts = document.getElementById("toasts");
const button = document.getElementById("button");

const messages = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
  "Message Five",
];

const types = ["info", "success", "error"];

button.addEventListener("click", () => createNotification());

function createNotification(message = null, type = null) {
  const notificationDiv = document.createElement("div");

  notificationDiv.classList.add("toast");

  notificationDiv.classList.add(type ? type : getRandomType());

  notificationDiv.innerText = message ? message : getRandomMessage();

  toasts.appendChild(notificationDiv);

  setTimeout(() => {
    notificationDiv.remove();
  }, 3000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)];
}
