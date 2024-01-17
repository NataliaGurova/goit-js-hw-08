
const button = document.querySelector(".change-color");
const body = document.querySelector("body");
const colorSpan = document.querySelector("span");

button.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor(e) {
  const color = getRandomHexColor();
  colorSpan.textContent = color;
  body.style.backgroundColor = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}