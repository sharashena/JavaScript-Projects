// toggle modal
const btn = document.getElementById("toggle-modal");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

btn.addEventListener("click", function () {
  modal.classList.add("show-modal");
});
closeBtn.addEventListener("click", function () {
  if (modal.classList.contains("show-modal")) {
    modal.classList.remove("show-modal");
  }
});
