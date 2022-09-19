//console.log(1);
//console.log(2);
//console.log(3);
//console.log(4);
//console.log(5);
//console.log(6);
//console.log(7);
//console.log(8);
//console.log(9);
//console.log(10);

//for (let num = 1; num <= 10; num += 3) {
//  console.log(num);
//}

//num += 1 TAI num++

/*for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}
// nyt tulee vain joka toinen eli 0,2,4,6...
*/
/*
for (let i = 100; i >= 0; i -= 10) {
  console.log(i);
}
*/
// nyt tulee 100, 90, 80, 70.... 0 Sillä i>= 0; ja i-=10
/*
const names = ["jenni", "truc", "jenna", "vanessa", "susanna", "linh"];
/*
for (let i = 0; i < names.length; i++) {
  console.log(i, names[i]);
}
Näin tulee numero ja nimi näkyviin!
*/
/*
for (let i = names.length - 1; i >= 0; i--) {
  console.log(names[i]);
}
// nyt tulee takaperin eli Linh ensin sitten vikana jenni
*/

/*
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// WRITE YOUR LOOP BELOW THIS LINE:
for (let i = 0; i < people.length; i++) {
  let name = people[i];
  let result = name.toUpperCase();
  console.log(result);
}
toUpperCase saadaan isot kirjaimet ja annetaan 2 lisää var jotta voidaa 
Saada nimet näkyviin näin 
SCOOBY
VELMA
DAPHNE
SHAGGY
FRED
*/

/*
for (let i = 1; i <= 10; i++) {
  console.log(`i is: ${i}`);
  for (let j = 1; j <= 4; j++) {
    console.log(`    j is: ${j}`);
  }
}
*/

/*
const seatingChart = [
  ["Kirssi", "Aapo", "Iiro"],
  [("Mauri", "Alo", "Teissi", "Miika")],
  ["Mara", "Suoma", "Julia", "kasto"],
];

for (let i = 0; i < seatingChart.length; i++) {
  const row = seatingChart[i];
  console.log(`ROW #${i + 1}`);
  for (let j = 0; j < row.length; j++) {
    console.log(row[j]);
  }
}
*/

/*
const SECRET = "m";

let guess = prompt("Enter the secret code...");
while (guess !== SECRET) {
  guess = prompt("Enter the secret code...");
}
console.log("Congrats you got it right!");
*/

/*
let input = prompt("Hey say something!");
while (true) {
  input = prompt(input);
  if (input === "stop copying me") {
    break;
  }
}
console.log("Ok you win!");
*/
//while on jatkuva toisto ja kun laittaa
//if että jos kirjoittaa stop copying me ja plus break niin se pysähtyy!
/*
for (let i = 0; i < 1000; i++) {
  console.log(i);
  if (i === 100) break;
}
//break pysäyttää kun kirjoitat break; vaikka lisäisi aina 1000 asti
*/
