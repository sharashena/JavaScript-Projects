// hex colors
const hexArr = [
  "#6a8cf2",
  "#1e3d87",
  "#d74b11",
  "#odd226",
  "#b67f55",
  "#10044e",
  "#1e32e3",
  "#b3dB3f",
  "#9c73ea",
  "#edab6e",
];

const hexBtn = document.querySelector(".hex-btn");
const hexText = document.querySelector(".color-hex");

hexBtn.addEventListener("click", function () {
  const randomVal = Math.floor(Math.random() * hexArr.length);
  document.body.style.backgroundColor = hexArr[randomVal];
  hexText.textContent = hexArr[randomVal];
});
