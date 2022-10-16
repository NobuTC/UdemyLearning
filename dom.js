/*Let's get some practice using getElementById. I've provided a little bit of markup for you (please don't change it!)  Your goal is to write code in app.js to select the following elements using getElementById:

Select the image element by its id and save it to a variable called image

Select the h1 by its id and save it to a variable called heading

Note: You may need to reset the code before attempting this exercise
*/

/*

        var image = document.getElementById('unicorn')
       
        
     
        var heading = document.getElementById('mainheading')*/

//      elementtejä
//        document.getElementsByTagName('')
//          document.getElementsByclassName('')

/*
    const allImages = document.getElementsByTagName(img);

    for (let img of allImages) {
        console.log(img.src)
    }

    // printtaa kaikki kuvan lähteet..
    */

/*
const .. = document.getElementsByClassName('...');

for(let img of squareImages){
    img.src='hhtps://blahblah.org/uusi/treeniä.jpg'
}

Tämän jälkeen tulee vain sitä yhtä kuvaa html!!
jos ei löydy mitään niin ei tuota mitään.
eli null tai se img


*/
TOKA TEHTÄVÄ!
//document.querySelector('')
//ettii esim. # img ja sitten . kuvan
//myös ('a[title="Java"]')
// printtaa silloin <a href="/wiki/java" title="Java">Java</a>



/*I've provided you with some simple markup in index.html.  Your task is to use querySelector and querySelectorAll to select some of those elements.

Select all elements that have the class of "done" and save them in a variable called doneTodos.

Select the one checkbox and save it in a variable called checkbox. Be careful, there is more than one input element on the page! You'll need to select using the type attribute. (if you can't remember the css attribute selector...google it! That's what I would do!)

Write your code in app.js.  Please do not change any of the elements in index.html
*/


/* const alllinks = document.querySelectorAll('a');

for (let link of alllinks){
    link.innerText = "I am a link!"
} 

Tällöin kaikista linkeista tulee " i am a link"
*/

/* 
document.querySelector('h1').innerHTML = '<i>Silkie Chichkens</i>'
"Silkie Chickens" < printtaa sivuun... ( update)

innerHTML antaa kaikki <p> , <a>..... yms....
*/


Tehtävä 3,
/*
I've provided you with some basic markup in index.html

Please use JavaScript to select the <span> element that currently 
reads "Delicious"

Change its text to read "Disgusting" USING JAVASCRIPT. 
Even if you are a weirdo who likes pickles, please change
 the text to "Disgusting". 

Yes, you could cheat and just update the html file directly, 
but I hope you don't!  The goal here is to practice using JavaScript
 to manipulate HTML.



vastaus:

document.querySelector('span').innerHTML  = 'Disgusting'

 */

/*

firstlink.getAttribute('href')
printtaa "/wiki/list-of-cheese_brees"

firstlink.setAttribute('href', 
http://www.google.com')

Nyt voi mennää googleen...

*/

4 tehtäväää,

/*Let's get some practice working with DOM element attributes. 
I've provided you with some very basic markup.  
Please select the image element and:

change its source to this url:
 https://devsprouthosting.com/images/chicken.jpg

change its alt text to be "chicken"

Vastaus;

var img = document.querySelector("img")

img.setAttribute("src",'https://devsprouthosting.com/images/chicken.jpg') ;

img.setAttribute("alt", "chicken");
*/



/*
Tyylin vaihtoa! 
const h1 = document.querySelector("h1");

h1.style.color = "green"
h1.style.border = '2px solid black'
h1.style.fontSize = "3em"

toinen esimerkki! 
const allLinks = document.querySelector('a');
for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
}



Miten saadaan helpommin... 

window.getComputedStyle(h1).color
Kertoo esim. värin tai vaikka fontSize 
*/

tehtävä 5,
/*I've provided you with some basic markup in index.html.  Please do not change any of the markup directly.  Instead, use JavaScript to make the following changes:

Select the div with the id of container.  Using JavaScript, set it's text alignment to 'center';

Select the image and use JavaScript to give it a width of 150px and a border radius of 50%

Remember to use camelCased property names in JavaScript! (backgroundColor, not background-color, etc.)
*/

vastaus,

const container = document.querySelector('#container');
container.style.textAlign = "center";

const img = document.querySelector('img');
img.style.width = "150px";
img.style.borderRadius = "50%";



tehtävä 6,

/*
I've provided you with an <h1> element which contains 7 individual spans (each holding a single letter). 

Please write some JavaScript to make them rainbow-colored! 

In app.js you'll find an array of color names called colors.  It looks like: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'].

Your task is to select all spans, iterate over them, and assign them each one of the colors from the colors array.  The first span should be red, the second should be orange, etc.   Your result should look like this:
*/

vastaus,
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
var Letters = document.querySelectorAll("span")
for (var i = 0; i <= Letters.length; i++){
    const letter = Letters[i];
    letter.style.color = colors[i]
}


