import element from "./utils/getElement.js";
import { hideLoading } from "./toggleLoading.js";

const displayDrinks = function (drinks) {
  const section = element(".section-center");
  const title = element(".title");
  if (!drinks) {
    // hide loading
    hideLoading();
    // no match message
    title.textContent = "sorry, no drinks matched your search";
    section.innerHTML = null;
    return;
  } else {
    const newDrinks = drinks
      .map(drink => {
        const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;
        return `
            <a href="./singleDrink.html">
          <article class="cocktail" data-id="${id}">
            <img src="${image}" />
            <h3>${name}</h3>
          </article>
        </a>
        `;
      })
      .join("");
    section.innerHTML = newDrinks;
    title.textContent = "";
    hideLoading();
    return section;
  }
};

export default displayDrinks;
