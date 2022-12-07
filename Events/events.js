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
