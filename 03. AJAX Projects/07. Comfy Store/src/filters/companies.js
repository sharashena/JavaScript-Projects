import { getElement } from "../utils.js";
import display from "../displayProducts.js";

const setupCompanies = products => {
  let companies = ["all", ...new Set(products.map(product => product.company))];
  const companiesDOM = getElement(".companies");
  companiesDOM.innerHTML = companies
    .map(company => {
      return `
        <button class="company-btn">${company}</button>
    `;
    })
    .join("");
  companiesDOM.addEventListener("click", e => {
    const element = e.target;
    if (element.classList.contains("company-btn")) {
      let newProducts = [];
      if (element.textContent === "all") {
        newProducts = [...products];
      } else {
        newProducts = products.filter(
          product => product.company === element.textContent
        );
      }
      display(newProducts, getElement(".products-container"));
    }
  });
};

export default setupCompanies;
