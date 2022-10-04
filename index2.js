function singSong() {
  console.log("DO");
  console.log("RE");
  console.log("MI");
}

function greet(firstName, lastName) {
  console.log(`hey there, ${firstName} ${lastName[0]}.`);
}
greet("Clooney", "George");

//hey there, Clooney G. Printtaa tämän!

function repeat(str, numTimes) {
  let result = "";
  for (let i = 0; i < numTimes; i++) {
    result += str;
  }
  console.log(result);
}
//repeat('$',5) tulee $$$$$

function finLargerst(x, y) {
  if (x > y) {
    console.log(`${x} is larger!`);
  } else if (x < y) {
    console.log(`${y} is larger!`);
  } else {
    console.log(`${x} and ${y} are equal!`);
  }
}

/*tää printtaa isSnakeEyes(1,1) //Snake Eyes!
isSnakeEyes(1,5) //Not Snake Eyes!
isSnakeEyes(4,5) //Not Snake Eyes!
*/
function isSnakeEyes(x, y) {
  if (x === 1 && y === 1) {
    console.log("Snake Eyes!");
  } else {
    console.log("Not Snake Eyes!");
  }
}
