import { getElement } from "../utils.js";
import display from "../displayProducts.js";

const setupPrice = products => {
  const priceInput = getElement(".price-filter");
  const priceValue = getElement(".price-value");

  let maxPrice = products.map(product => product.price);
  maxPrice = Math.max(...maxPrice);
  maxPrice = Math.ceil(maxPrice / 100);
  priceInput.max = maxPrice;
  priceInput.min = 0;
  priceInput.value = maxPrice;
  priceValue.textContent = `Value : € ${maxPrice}`;

  priceInput.addEventListener("input", function () {
    const value = parseInt(priceInput.value);
    priceValue.textContent = `Value : € ${value}`;

    const newProducts = products.filter(
      product => product.price / 100 <= value
    );
    display(newProducts, getElement(".products-container"));
    if (newProducts.length < 1) {
      const products = getElement(".products-container");
      products.innerHTML = `<h3 class="filter-error">sorry, no products matched your search</h3>`;
    }
  });
};

export default setupPrice;
