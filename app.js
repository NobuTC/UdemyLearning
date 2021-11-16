console.log('hello from our first js file!');
let total = 1 + 3;
console.log('goodbyeee');

console.log('before conditional')
let random = Math.random()
if (random < 0.5){
    console.log('Your number is less than 0.5');
console.log(random)
}


if(random >= 0.5){
    console.log('Your number is upper than 0.5');
    console.log(random);
}

function isEven(num){
    //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓ 
    if(num % 2 === 0 ) {
        console.log('even');
    }
    //AND THIS LINE ↑↑↑↑↑
}