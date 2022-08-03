// video
const btn = document.querySelector(".btn");
const video = document.querySelector("video");
const preloader = document.querySelector(".preloader");

btn.addEventListener("click", function () {
  btn.classList.toggle("slide");
  if (btn.classList.contains("slide")) {
    video.pause();
  } else {
    video.play();
  }
});

// set loading while document loads
window.addEventListener("load", function () {
  if (preloader.classList.contains("hide-preloader")) {
    preloader.classList.remove("hide-preloader");
  } else {
    preloader.classList.add("hide-preloader");
  }
});
