const button = document.querySelector("button");
const h1 = document.querySelector("h1");

button.addEventListener("click", function () {
  const newColour = MakeRandomColour();
  document.body.style.backgroundColor = newColour;
  h1.innerText = newColour;
});

const MakeRandomColour = () => {
  const r = Math.floor(Math.random() * 225);
  const g = Math.floor(Math.random() * 225);
  const b = Math.floor(Math.random() * 225);
  return `rgb(${r}, ${g}, ${b})`;
};
