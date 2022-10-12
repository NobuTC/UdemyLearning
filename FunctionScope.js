/* function scope

let bird = 'mandarin duck';

function birdWatch(){
    let bird = 'golden pheasant';
    bird; tuleee golden pheasant
}
bird; 

nyt tulee mandarin duck vikana! sillä 
let bird on scoped birdwatch functioon!
*/

/*Block scope

let radius = 8;

if(radius > 0){
    const PI = 3.14;
    let circ = 2 * PI * radius;
}
console.log(radius); tulee 8
console.log(PI); ei tule
console.log(circ); ei tule
Miksi PI ja circ eivät tule? Koska ne molemmat ovat scope to the block!
*/

/*
Lexical scope

function outer() {
    let hero = "black panther";
    
    function inner() {
        let cryForHelp = `${hero}. please save me!``
console.log(cryForHelp);
    }
    inner();
}
*/

/*
function expressions

cons square = function (num) {
    return num * num;
}
square(7); //49
*/

//tehtävä

/*
Define a function that returns the square of a number. 
Define the function as a function expression, 
stored in a variable called square.  
NOTE: Udemy's coding exercise platform does NOT support 
the ** operator. 

square(4) //16
square(3) //9
*/

//Vastaus:

let square = function (num) {
  return num * num;
};
square();

/* functions as arguments

function callTwice(func){
    func();
    func();
}

function laught(){
    console.log("AHHAHAHAH");
} 
callTwice(laught) 
 // pass a function as an arg!
 elikkä se printtaa:
 "HAHAHAHAH"
 "AHAHHAHAH"
*/

/* returning functions

function makeBetweenFunc(min, max){
    return function (num) {
        return num >= min && num <= max;
    }
}
const testRange = function (num) {
    return num >= 100 && num <= 200;
}
// nyt voidaan käyttää functioneita näitten ansioita ei tarvitse erikseen tehä functiota

const isChild = makeBetweenFunc(0,18)
const isAdult = makeBetweenFunc(19,64)
cons isSenior = makeBetweenFunc(65,120)
*/

/* Methods 

const math = {
    multiply : function(x, y) {
        return x * y;
    },
    divide : function(x, y) {
        return x / y;
    },
    square : function(x) {
        return x * x
    }
}

//toinen esimerkki

const myMath = {
    PI: 3.14,
    square: function (num) {
        return num * num;
    },
    cube: function (num) {
        return num **3;
    }
}
Methods ja functions ero on se, " we can add functions as propertes on objects!" MUISTA ETTÄ pilkku
 pitää olla kun haluaa lisää asioita!

Lyhyempi versio const myMath! jota voi tehä!

const myMath = {
    PI: 3.14,
    square(num) {
        return num * num;
    },
    cube(num) {
        return num **3;
    }

*/

//tehtävä
/*
Define an object called square, which will hold methods that have to do with the geometry of squares. It should contain two methods, area and perimeter 

area should accept the length of a side (all sides are the same in a square) and then return the side squared. 

perimeter should accept the length of a side and return that side multiplied by 4.

square.area(10) //100
square.perimeter(10) //40
*/

//Vastaus:

const square = {
  area: function (side) {
    return side * side;
  },
  perimeter: function (side) {
    return side * 4;
  },
};
