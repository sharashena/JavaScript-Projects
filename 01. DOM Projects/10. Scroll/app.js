// scroll
const nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
  const navHeight = nav.getBoundingClientRect().height;
  if (window.pageYOffset > navHeight) {
    nav.classList.add("fixed");
  } else {
    nav.classList.remove("fixed");
  }
});

// toggle nav
// dynamic nav links
const btn = document.querySelector("button");
const linksContainer = document.querySelector(".links-container");
const ul = document.querySelector(".navbar-container");

btn.addEventListener("click", function () {
  const linksHeight = linksContainer.getBoundingClientRect().height;
  const ulHeight = ul.getBoundingClientRect().height;
  if (linksHeight === 0) {
    linksContainer.style.height = `${ulHeight}px`;
  } else {
    linksContainer.style.height = "0";
  }
});
