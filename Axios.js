axios
  .get("https://pokeapi.co/api/v2/ability/1/")
  .then((res) => {
    console.log("response ", res);
  })
  .catch((e) => {
    console.log("error ", e);
  });

const getStarWarsPerson = async (id) => {
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/ability/${id}`);
    console.log("LOLOLO;;;;", res.data);
  } catch (e) {
    console.log("Error", e);
  }
};

getStarWarsPerson(5);
getStarWarsPerson(10);

const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");
button.addEventListener("click", addNewJoke);

const addNewJoke = () => {
  const getDadJoke = async () => {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https//icanhazdadjoke.com/", config);
  };
  const getDadJoke = async () => {
    const newLI = document.createElement("LI");
    newLI.append(res.data.joke);
    jokes.append(newLI);
  };
};
//too hard
