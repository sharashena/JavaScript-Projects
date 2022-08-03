import element from "./utils/getElement.js";
import presentDrinks from "./presentDrinks.js";

const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const form = element(".search-form");
const input = element('[name="drink"]');

form.addEventListener("keyup", e => {
  e.preventDefault();
  const value = input.value;
  console.log(value);
  if (value === "") return;
  presentDrinks(`${baseURL}${value}`);
});
