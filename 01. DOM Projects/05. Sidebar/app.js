// toggle sidebar
const sidebar = document.querySelector("aside");
const closeBtn = document.querySelector(".close-btn");
const btn = document.getElementById("toggle-btn");

// event
btn.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
