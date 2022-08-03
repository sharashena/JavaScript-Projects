// tabs
const btnGroup = document.querySelector(".button-group");
const btns = document.querySelectorAll(".btn");
const textContent = document.querySelectorAll(".text-content");

btnGroup.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  btns.forEach(function (btn) {
    if (btn.textContent === id) {
      btn.classList.add("active-tab");
    } else {
      btn.classList.remove("active-tab");
    }
  });
  textContent.forEach(function (text) {
    if (id === text.id) {
      text.classList.add("active-text");
    } else {
      text.classList.remove("active-text");
    }
  });
});
