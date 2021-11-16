console.log("hello from our first js file!");
let total = 1 + 3;
console.log("goodbyeee");

console.log("before conditional");
let random = Math.random();
if (random < 0.5) {
  console.log("Your number is less than 0.5");
  console.log(random);
}

if (random >= 0.5) {
  console.log("Your number is upper than 0.5");
  console.log(random);
}

function isEven(num) {
  //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓
  if (num % 2 === 0) {
    console.log("even");
  }
  //AND THIS LINE ↑↑↑↑↑
}

function checkScore(grade) {
  if (grade === 5) {
    console.log("Excellent");
  } else if (grade > 3) {
    console.log("good");
  } else {
    console.log("Loser");
  }
}

function animalSound(animal) {
  if (animal === "dog") {
    console.log("vuh vuh");
  } else if (animal === "cat") {
    console.log("miau miau");
  } else if (animal === "horse") {
    console.log("bonjour");
  } else {
    console.log("no animal found");
  }
}

function checkFood(food) {
  if (food === "food") {
    console.log("its food");
  } else if (food === "ice cream") {
    console.log("its food");
  } else if (food === "cake") {
    console.log("its food");
  } else {
    console.log("its not food");
  }
}

function dayAgo(day) {
  if (day === 1) {
    console.log("1 day ago");
  } else if (day < 1) {
    console.log("20 minutes ago");
  } else {
    console.log(day + " days ago");
  }
}
