function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    return false;
  }
  return x + y;
}

//only one value can return.. single array eri kuin console.log

/* let total = add(6, 9)
tulee "total 15"
*/

//TEHTÄVÄÄ!!!!!!!
/*It's time to practice returning values from a function! Write a simple function multiply which accepts two numerical arguments and returns their product (multiply them together).  Make sure to return the value instead of printing it!

multiply(2,3) // 6
multiply(9,9) // 81
multiply(5,4) // 20
*/

function multiply(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    return false;
  }
  return x * y;
}
//vastaus tohon ylään!

/*I often struggle to know whether I should wear shorts or pants on a given day. (this is a complete lie.  It's really not that hard to decide.) Please help me decide by writing me a function called isShortsWeather. 

It should accept a single number argument, which we will call temperature(but you can name it whatever you want, of course). 

If temperature is greater than or equal to 75, return true. 

Otherwise, return false.   

This exercise assumes temperature is in Fahrenheit.  I apologize to all my Celsius-using students!

isShortsWeather(80) //true
isShortsWeather(48) //false
isShortsWeather(75) //true
*/

//ratkaisu.. Ei tarvi if juttuuu, jos ei halua tarkalleen tietää onko kyseessä numero tai kirjain...
function isShortsWeather(temperature) {
  if (typeof temperature !== "number") return false;
  return temperature >= 75;
}

/*Please write a function called lastElement which accepts a single array 
argument.  The function should return the last element of the array 
(without removing the element).  If the array is empty, the function 
should return null.

lastElement([3,5,7]) //7
lastElement([1]) //1
lastElement([]) //null
*/

function lastElement(array) {
  let length = array.length;
  if (length === 0) return null;

  let num = array[length - 1];
  return num;
}
// length - 1 miinustaa yhden pois.

/*Define a function called capitalize that accepts a string argument and returns a new string with the 
first letter capitalized (but the rest of the string unchanged).  For example:

capitalize('eggplant') // "Eggplant"
capitalize('pamplemousse') // "Pamplemousse"
capitalize('squid') //"Squid"
Hints:

Remember that strings are immutable, meaning that you cannot simply change the first letter in the original
string.  You will need to make a new string that you return.

Single out the first letter and capitalize it. (use a string method to help!)

Add that first letter to the rest of the original string, sliced to omit the original first letter
 (use a string method to help!)

For example: 'eggplant' becomes 'E' + 'ggplant'
*/

function capitalize(word) {
  let wordArray = word.split(""); // jenni -> [j,e,n,n,i]
  wordArray[0] = wordArray[0].toUpperCase(); // j -> J
  // [J, e, n, n, i]
  return wordArray.join(""); // [J, e, n, n, i] -> Jenni
}

// slipt kaikki yksin ja join kaikki kasaan

/* Write a function called sumArray which accepts a single argument: 
an array of numbers.  It should return the sum of all the numbers in the array.

sumArray([1,2,3]) // 6
sumArray([2,2,2,2]) // 8
sumArray([50,50,1]) // 101
Hints:

You'll need a variable to keep track of the total.  It should start out as zero.

Loop over the array and for each element, add it to the total variable.

After you have added every number to total, return total.
*/

function sumArray(array) {
  //[0,1,3,4,5,5] = 18
  // 0 + 1 = 1 <- previous
  // 1 + 3 = 4 <-- previous
  // 4+ 5 = 9 <--
  // 9 + 5.......
  return array.reduce((previous, current) => previous + current);
}
/*
let sum = 0;

for (var i = 0; i<= array.length; i++) {
    sum = sum + array[i]
}
return sum;
*/ // Toinen tapa tehdä mutta enemmän vaivaa ja aloittelijan tekoa.

/*Write a function called returnDay. this function takes in one 
parameter (a number from 1-7) and returns the day of the week 
(1 is Monday, 2 is Tuesday, etc.)  If the number is less than 1 or greater
 than 7, the function should return null. In some countries Sunday is 
 treated as the first day of the week, but for this exercise we will use 
 Monday as the first day.

Hint: store the days of the week in an array, or use an object with 
numerical keys.  When the function is called, plug the number into the 
array/object you've created to retrieve the corresponding day name and 
then return that value.

returnDay(1) // "Monday"
returnDay(7) // "Sunday"
returnDay(4) // "Thursday"
returnDay(0) // null
*/

function returnDay(number) {
  let weekends = [];
  weekends[1] = "Monday";
  weekends[2] = "Tuesday";
  weekends[3] = "Wednesday";
  weekends[4] = "Thursday";
  weekends[5] = "Friday";
  weekends[6] = "Saturday";
  weekends[7] = "Sunday";

  // If the number is less than 1 or greater than 7,
  // the function should return null
  if (number < 1 || number > 7) {
    return null;
  }

  return weekends[number];
}
