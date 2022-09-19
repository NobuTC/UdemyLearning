let maxium = parseInt(prompt("Enter the maxium number!"));
while (!maxium) {
  maxium = parseInt(prompt("Enter valid number!"));
}

const targetNum = Math.floor(Math.random() * maxium) + 1;
console.log(targetNum);

let guess = parseInt(prompt("enter your first guess!"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
  if (guess === "q") break;
  attempts++;
  if (guess > targetNum) {
    guess = prompt("Too high! Enter a new guess:");
  } else {
    guess = prompt("Too low! Enter a new guess:");
  }
}

if (guess === "q") {
  console.log("OK, you quit!");
} else {
  console.log("Congrats you win!");
  console.log(`You got it! It took you ${attempts} guesses`);
}
