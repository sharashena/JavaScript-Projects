import fetchDrinks from "./fetchDrinks.js";
import displayDrink from "./displaySingleDrink.js";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const presentDrink = async () => {
  const id = localStorage.getItem("drink");
  if (!id) {
    window.location.replace("home.html");
  } else {
    const drink = await fetchDrinks(`${url}${id}`);
    displayDrink(drink);
  }
};

window.addEventListener("DOMContentLoaded", presentDrink);
