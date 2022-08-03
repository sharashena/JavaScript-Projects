// counter
// access elements
const number = document.getElementById("number");
const dec = document.querySelector("button");
const reset = document.querySelector("button").nextElementSibling;
const inc = document.querySelector("button:last-child");

let count = 0;

// first example
// const buttons = document.querySelectorAll("button");
// buttons.forEach(function (btn) {
//   btn.addEventListener("click", function () {
//     if (btn.textContent === "decrease") {
//       count--;
//     } else if (btn.textContent === "reset") {
//       count = 0;
//     } else {
//       count++;
//     }

//     if (count > 0) {
//       number.style.color = "green";
//     } else if (count === 0) {
//       number.style.color = "#222";
//     } else {
//       number.style.color = "red";
//     }
//     number.textContent = count;
//   });
// });

// second example
// decrease
function decrease() {
  number.textContent--;
  count--;
  if (count < 0) {
    number.style.color = "red";
  } else if (count === 0) {
    number.style.color = "#222";
  }
}
dec.addEventListener("click", decrease);

// reset
const resetValue = function () {
  number.textContent = 0;
  count = 0;
};
reset.addEventListener("click", function () {
  resetValue();
  if (count === 0) {
    number.style.color = "#222";
  }
});

// increase
inc.addEventListener("click", function () {
  number.textContent++;
  count++;
  if (count > 0) {
    number.style.color = "green";
  } else if (count === 0) {
    number.style.color = "#222";
  }
});
