// access elements
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

let count = 0;
nextBtn.addEventListener("click", function () {
  count++;
  carousel();
});
prevBtn.addEventListener("click", function () {
  count--;
  carousel();
});

// carousel
function carousel() {
  if (count > slides.length - 1) {
    count = 0;
  } else if (count < 0) {
    count = slides.length - 1;
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${count * 100}%)`;
  });
}
