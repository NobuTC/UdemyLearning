/*
const subreddits = [
  "happy",
  "cat",
  "bomb",
  "picture",
  "flower",
  "tablet",
  "seal",
  "computer",
];

for (let i = 0; i < subreddits.length; i++) {
  console.log(`Visit reddit.com/r/${subreddits[i]}`);
}

for (let sub of subreddits) {
  console.log(`Visit reddit.com/r/${subreddits}`);
}
//alempi on parempi viitata kuin eka!

const seatingChart = [
  ["Kristen", "Erik", "Namita"],
  ["Geoffrey", "Juanta", "Antonio", "Kevin"],
  ["Yuma", "Sakura", "Jack", "Erika"],
];

for (let i = 0; i < seatingChart.length; i++) {
  const row = seatingChart[i];
  for (let j = 0; j < row.length; j++) {
    console.log(row[j]);
  }
}

for (let row of seatingChart) {
  for (let student of row) {
    console.log(student);
  }
}
//alempi on parempi kirjoittaa! ja ei ole moninmutkainen!!

for (let char of "hello world") {
  console.log(char);
}
//kaikki kirjaimet menee omaan..

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //DON'T CHANGE THIS LINE PLEASE!

// WRITE YOUR LOOP BELOW THIS LINE:
for (const value of numbers) {
  console.log(value * value);
}
*/

//Iterating objects..
const testScores = {
  Jenni: 34,
  Truc: 90,
  Jenna: 87,
  Vanessa: 88,
  Marja: 43,
  elviina: 20,
  Mio: 92,
  Lucas: 99,
  Marco: 55,
  Ming: 43,
  Mimosa: 12,
};

//for (let person in testScores) {
//console.log(`${person} scored ${testScores[person]}`);
//}
/*let total = 0;
for (let score of Object.values(testScores)) {
  total += score;
}
//näyttää paljon on yhteensä nyt on "total 663"
*/

let total = 0;
let scores = Object.values(testScores);
for (let score of scores) {
  total += score;
}
console.log(total / scores.length);
//näyttää oppilaiden kokonais arvosanan pyöristettynä nyt on 60.272727.....
