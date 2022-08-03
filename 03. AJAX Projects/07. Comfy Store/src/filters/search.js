import { getElement } from "../utils.js";
import display from "../displayProducts.js";

const setupSearch = products => {
  const form = getElement(".input-form");
  const searchInput = getElement(".search-input");
  form.addEventListener("keyup", () => {
    const value = searchInput.value;
    if (value) {
      const filterProducts = products.filter(product => {
        let { name } = product;
        return name.toLowerCase().includes(value);
      });
      display(filterProducts, getElement(".products-container"));
      if (filterProducts.length < 1) {
        const products = getElement(".products-container");
        products.innerHTML = `<h3 class="filter-error">sorry, no products matched your search</h3>`;
      }
    } else {
      return;
    }
  });
};

export default setupSearch;
