import { getElement as element } from "./getElement.js";

const img = element(".user-img");
const title = element(".user-title");
const value = element(".user-value");
const iconBtns = [...document.querySelectorAll(".icon")];

const displayUser = (person = []) => {
  const { image, name } = person;
  removeActive(iconBtns);
  iconBtns[0].classList.add("active");
  img.src = image;
  title.textContent = "My name is";
  value.textContent = name;
  iconBtns.forEach(btn => {
    const label = btn.dataset.label;
    btn.addEventListener("click", function () {
      title.textContent = `My ${label} is`;
      value.textContent = person[label];
      removeActive(iconBtns);
      btn.classList.add("active");
    });
  });
};

function removeActive(items) {
  items.forEach(item => item.classList.remove("active"));
}

export { displayUser };
