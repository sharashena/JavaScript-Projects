// create colors
const arr = ["green", "red", "#f15025", "rgba(133, 122, 200)"];
// access elements
const btn = document.querySelector(".btn");
const colorText = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomItem = Math.floor(Math.random() * arr.length);
  document.body.style.background = arr[randomItem];
  colorText.textContent = arr[randomItem];
});
