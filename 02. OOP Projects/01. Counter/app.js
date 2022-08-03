// function getElement(selection) {
//   const element = document.querySelector(selection);
//   if (element) {
//     return element;
//   }
//   throw new Error(
//     `Please check "${selection}" selector, no such element exists`
//   );
// }

// function Counter(element, value) {
//   this.counter = element;
//   this.value = value;
//   this.resetBtn = element.querySelector(".reset");
//   this.increaseBtn = element.querySelector(".increase");
//   this.decreaseBtn = element.querySelector(".decrease");
//   this.valueDom = element.querySelector(".value");
//   this.valueDom.textContent = this.value;
//   // bind this to all function
//   this.increase = this.increase.bind(this);
//   this.decrease = this.decrease.bind(this);
//   this.reset = this.reset.bind(this);
//   this.increaseBtn.addEventListener("click", this.increase);
//   this.decreaseBtn.addEventListener("click", this.decrease);
//   this.resetBtn.addEventListener("click", this.reset);
// }

// Counter.prototype.increase = function () {
//   this.value++;
//   //   update value
//   this.valueDom.textContent = this.value;
// };
// Counter.prototype.decrease = function () {
//   this.value--;
//   this.valueDom.textContent = this.value;
// };
// Counter.prototype.reset = function () {
//   this.value = 0;
//   this.valueDom.textContent = this.value;
// };

// const firstCounter = new Counter(getElement(".first-counter"), 100);
// const secondCounter = new Counter(getElement(".second-counter"), 200);

// or

// class refactor

function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw new Error(
      `please check your "${selection}" selector, doesn't exists`
    );
  }
}

class Counter {
  constructor(element, value) {
    this.element = element;
    this.value = value;
    this.valueDom = element.querySelector(".value");
    this.increaseBtn = element.querySelector(".increase");
    this.decreaseBtn = element.querySelector(".decrease");
    this.resetBtn = element.querySelector(".reset");
    this.valueDom.textContent = this.value;

    // bind to all function
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);

    // event listeners
    this.increaseBtn.addEventListener("click", this.increase);
    this.decreaseBtn.addEventListener("click", this.decrease);
    this.resetBtn.addEventListener("click", this.reset.bind(this));
  }
  increase() {
    this.value++;
    this.valueDom.textContent = this.value;
  }
  decrease() {
    this.value--;
    this.valueDom.textContent = this.value;
  }
  reset() {
    this.value = 0;
    this.valueDom.textContent = this.value;
  }
}

const firstCounter = new Counter(getElement(".first-counter"), 100);
const secondCounter = new Counter(getElement(".second-counter"), 200);
