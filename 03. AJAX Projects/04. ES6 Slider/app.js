import { people } from "./data.js";

const container = document.querySelector(".slide-container");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

window.addEventListener("DOMContentLoaded", function () {
  const addPeople = people
    .map(({ img, name, job, text }, slideIndex) => {
      let positon = "next";
      switch (slideIndex) {
        case 0:
          positon = "active";
          break;
        case people.length - 1:
          positon = "last";
          break;
        default:
          positon = "next";
      }
      return `
        <article class="slide ${positon}">
          <img
            src="${img}"
            class="img"
            alt="peter doe"
          />
          <h4>${name}</h4>
          <p class="title">${job}</p>
          <p class="text">
           ${text}
          </p>
          <div class="quote-icon">
            <div class="fas fa-quote-right"></div>
          </div>
        </article>
        `;
    })
    .join("");
  container.innerHTML = addPeople;
});

const startSlider = type => {
  const active = document.querySelector(".active");
  const last = document.querySelector(".last");
  let next = active.nextElementSibling;
  if (!next) {
    next = container.firstElementChild;
  }

  active.classList.remove("active");
  next.classList.remove("next");
  last.classList.remove("last");

  if (type === "prev") {
    active.classList.add("next");
    last.classList.add("active");
    next = last.previousElementSibling;
    if (!next) {
      next = container.lastElementChild;
    }
    next.classList.add("last");
    next.classList.remove("next");
    return;
  }

  active.classList.add("last");
  last.classList.add("next");
  next.classList.add("active");
};

nextBtn.addEventListener("click", () => {
  startSlider();
});
prevBtn.addEventListener("click", () => {
  startSlider("prev");
});
