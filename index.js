const {add} = require("./calc");

console.log(add(num1, num2));


const axios = require("axios");

axios.get("https://pokeapi.co/api/v2/pokemon/charizard").then(({data}) => console.log("Fav:", data));
