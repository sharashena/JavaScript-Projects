import element from "./utils/getElement.js";
import { hideLoading } from "./toggleLoading.js";

const displayDrink = drink => {
  hideLoading();
  const data = drink.map(item => {
    const {
      strDrinkThumb: image,
      strDrink: name,
      strInstructions: description,
    } = item;
    const list = [
      item.strIngredient1,
      item.strIngredient2,
      item.strIngredient3,
      item.strIngredient4,
      item.strIngredient5,
    ];
    const img = element(".drink-img");
    const drinkName = element(".drink-name");
    const desc = element(".drink-desc");
    const ingredients = element(".drink-ingredients");
    img.src = image;
    document.title = name;
    drinkName.textContent = name;
    desc.textContent = description;
    ingredients.innerHTML = list
      .map(item => {
        if (!item) return;
        return `
      <li><i class="far fa-check-square"></i>${item}</li>
      `;
      })
      .join("");
  });
  return data;
};

export default displayDrink;
