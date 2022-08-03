import fetchFollowers from "./fetchFollowers.js";
import displayFollowers from "./displayFollowers.js";
import paginate from "./paginate.js";
import displayButtons from "./displayButtons.js";

const h1 = document.querySelector(".section-title h1");
const btnContanier = document.querySelector(".btn-container");

let index = 0;
let pages = [];

const setupUI = () => {
  displayFollowers(pages[index]);
  displayButtons(btnContanier, pages, index);
};

const init = async () => {
  const followers = await fetchFollowers();
  displayFollowers(paginate(followers)[index]);
  h1.textContent = "pagination";
  pages = paginate(followers);
  setupUI();
};

btnContanier.addEventListener("click", e => {
  if (e.target.classList.contains("page-btn")) {
    index = parseInt(e.target.dataset.index);
  }
  if (e.target.classList.contains("next-btn")) {
    index++;
    if (index > pages.length - 1) {
      index = 0;
    }
  }
  if (e.target.classList.contains("prev-btn")) {
    index--;
    if (index < 0) {
      index = pages.length - 1;
    }
  }
  setupUI();
});

window.addEventListener("load", init);
