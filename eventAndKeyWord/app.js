// Return "rgb(200, 123, 111)" for example
const makeRandColor = () => {
  const r = Math.floor(Math.random() * 225);
  const g = Math.floor(Math.random() * 225);
  const b = Math.floor(Math.random() * 225);
  return `rgb(${r}, ${g}, ${b})`;
};

const buttons = document.querySelectorAll("button");

for (let button of buttons) {
  button.addEventListener("click", colorize);
}

const h1s = document.querySelectorAll("h1");

for (let h1 of h1s) {
  h1.addEventListener("click", colorize);
}

function colorize() {
  this.style.backgroundColor = makeRandColor();

  this.style.color = makeRandColor();
}
