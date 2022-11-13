//Not at all important to remember any of this code!

/*
const req = new XMLHttpRequest();

req.onload = function () {
  console.log("IT LOADED");
  const data = JSON.parse(this.responseText);
  console.log(data.name, data.height);
};

req.error = function () {
  console.log("ERROR");
  console.log(this);
};

req.open("GET", "https://swapi.dev/api/people/1/");
req.send();
*/

//"https://swapi.dev/api/people/1/"

// tämä on vanha tapa tehdä nyt tehään parempi ja uusi tapa!

fetch("https://swapi.dev/api/people/1/") //this return promise
  .then((res) => {
    console.log("resoveldes", res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log("error", e);
  });

const loadStarWarsPeoples = async () => {
  try {
    const res = await fetch("https://swapi.dev/api/peopleadasdasf/1/");
    const data = await res.json();
    console.log(data);
    const res2 = await fetch("https://swapi.dev/api/people/1/");
    const data2 = await res2.json();
    console.log(data2);
  } catch (e) {
    console.log("Error", e);
  }
};

loadStarWarsPeoples();
