import presentDrinks from "./presentDrinks.js";
import "./searchForm.js";
import { URL } from "./utils/URL.js";

window.addEventListener("DOMContentLoaded", () => {
  presentDrinks(URL);
});
