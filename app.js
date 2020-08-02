// Select DOM elements

const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

// Event Listeners

btn.addEventListener("click", hexColorRandomizer);

// Functions

function hexColorRandomizer() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hexDigits[getRandomNumber()];
  }
  // console.log(hexColor);

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
}

function getRandomNumber() {
  return Math.floor(Math.random() * hexDigits.length);
}

// Constants

const hexDigits = [
  "a",
  "b",
  "c",
  "d",
  "f",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
];
