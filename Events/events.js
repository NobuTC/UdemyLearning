function jenniCall(event) {
  // hohoho
  console.log("clicked", event.target);
}

const H1Element = document.querySelector(".heading");
H1Element.addEventListener("click", jenniCall); // browser calls --> jenniCall(clickEvent)

//dont understand why get elementid works not queryselector?
const btn = document.getElementById("v2");
// ei toiminu queryselector? :o

btn.onclick = function () {
  console.log("You clicked me!");
  console.log("i hope it works!");
};
//after this button works! and u see both text!
function scream() {
  console.log("AAAA");
  console.log("STOP IT");
}

btn.onmouseenter = scream;
// passing in mouse enter.....
//now both scream and onclick works same time when u click button 2!

document.querySelector("h1").onclick = () => {
  alert("you clicked the h1!");
};

// now comes alert to h1!

//learning addeventlistener!

const btn3 = document.querySelector("#v3");
btn3.addEventListener("click", function () {
  alert("CLICKED!");
});

function twist() {
  console.log("twist");
}

function shout() {
  console.log("shout");
}

const tasButton = document.querySelector("#tas");

//tasButton.onclick = twist;
//tasButton.onclick = shout;

tasButton.addEventListener("click", twist, { once: true });
tasButton.addEventListener("click", shout);
//first is event and then call back example alert!
//This is better to use, cause it shows only the first one! not the second one "shout"
//so we need addeventlistener!
// this {once true} only appear only once and the shout comes manyyyy maanyy time when u click it
