// toggle answers
const btn = document.querySelectorAll(".question-btn");

const toggleAnswer = function (e) {
  const val = e.currentTarget.parentElement.nextElementSibling;
  val.classList.toggle("show-text");
  if (val.classList.contains("show-text")) {
    e.currentTarget.children[0].style.display = "none";
    e.currentTarget.children[1].style.display = "block";
  } else {
    e.currentTarget.children[0].style.display = "block";
    e.currentTarget.children[1].style.display = "none";
  }
};

btn.forEach(function (btn) {
  btn.addEventListener("click", toggleAnswer);
});
