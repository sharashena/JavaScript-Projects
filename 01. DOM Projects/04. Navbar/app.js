// toggle navbar

const btn = document.getElementById("toggle-btn");
const ul = document.querySelector(".navbar-container");

btn.addEventListener("click", function () {
  ul.classList.toggle("show-nav");
});
