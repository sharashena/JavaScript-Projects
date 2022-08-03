function getElements(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}

function Gallery(element) {
  this.container = element;
  this.list = [...element.querySelectorAll(".img")];
  this.modal = getElements(".modal");
  this.mainImg = getElements(".main-img");
  this.imageName = getElements(".image-name");
  this.modalImages = getElements(".modal-images");
  this.closeBtn = getElements(".close-btn");
  this.nextBtn = getElements(".next-btn");
  this.prevBtn = getElements(".prev-btn");

  this.closeModal = this.closeModal.bind(this);
  this.nextImg = this.nextImg.bind(this);
  this.prevImg = this.prevImg.bind(this);
  this.chooseImg = this.chooseImg.bind(this);

  //   event listeners
  this.container.addEventListener(
    "click",
    function (e) {
      if (e.target.classList.contains("img")) {
        this.openModal(e.target, this.list);
      }
    }.bind(this)
  );
}

// open/close modal
Gallery.prototype.openModal = function (selectedImg, list) {
  this.setMainImg(selectedImg);
  this.modalImages.innerHTML = list
    .map(function (image) {
      return `<img src="${
        image.src
      }" title="${image.title}" alt="${image.alt}" data-id="${image.dataset.id}" class="${selectedImg.dataset.id === image.dataset.id ? "modal-img selected" : "modal-img"}" />`;
    })
    .join("");
  this.modal.classList.add("open");
  this.closeBtn.addEventListener("click", this.closeModal);
  this.nextBtn.addEventListener("click", this.nextImg);
  this.prevBtn.addEventListener("click", this.prevImg);
  this.modalImages.addEventListener("click", this.chooseImg);
};
Gallery.prototype.closeModal = function () {
  this.modal.classList.remove("open");
  this.closeBtn.removeEventListener("click", this.closeModal);
  this.nextBtn.removeEventListener("click", this.nextImg);
  this.prevBtn.removeEventListener("click", this.prevImg);
};

// set main img
Gallery.prototype.setMainImg = function (selectedImg) {
  this.mainImg.src = selectedImg.src;
  this.imageName.textContent = selectedImg.title;
};

// next and prev images
Gallery.prototype.nextImg = function () {
  const selected = this.modalImages.querySelector(".selected");
  const next =
    selected.nextElementSibling || this.modalImages.firstElementChild;
  selected.classList.remove("selected");
  next.classList.add("selected");
  this.setMainImg(next);
};
Gallery.prototype.prevImg = function () {
  const selected = this.modalImages.querySelector(".selected");
  const prev =
    selected.previousElementSibling || this.modalImages.lastElementChild;
  selected.classList.remove("selected");
  prev.classList.add("selected");
  this.setMainImg(prev);
};

// select img
Gallery.prototype.chooseImg = function (e) {
  if (e.target.classList.contains("modal-img")) {
    const selected = this.modalImages.querySelector(".selected");
    this.setMainImg(e.target);
    selected.classList.remove("selected");
    e.target.classList.add("selected");
  }
};

const nature = new Gallery(getElements(".nature"));
const city = new Gallery(getElements(".city"));

// or

// class syntax

// function getElements(selection) {
//   const element = document.querySelector(selection);
//   if (element) {
//     return element;
//   }
//   throw new Error(
//     `Please check "${selection}" selector, no such element exists`
//   );
// }

// class Gallery {
//   constructor(element) {
//     this.container = element;
//     this.list = [...element.querySelectorAll(".img")];
//     this.modal = getElements(".modal");
//     this.mainImg = getElements(".main-img");
//     this.imageName = getElements(".image-name");
//     this.modalImages = getElements(".modal-images");
//     this.closeBtn = getElements(".close-btn");
//     this.nextBtn = getElements(".next-btn");
//     this.prevBtn = getElements(".prev-btn");

//     // binds
//     this.closeModal = this.closeModal.bind(this);
//     this.nextImg = this.nextImg.bind(this);
//     this.prevImg = this.prevImg.bind(this);
//     this.chooseImg = this.chooseImg.bind(this);

//     // event
//     this.container.addEventListener(
//       "click",
//       function (e) {
//         if (e.target.classList.contains("img")) {
//           this.openModal(e.target, this.list);
//         }
//       }.bind(this)
//     );
//   }

//   //   open/close modal

//   openModal(selectedImg, list) {
//     this.setMainImg(selectedImg);
//     this.modalImages.innerHTML = list
//       .map(function (image) {
//         return `<img src="${
//           image.src
//         }" title="${image.title}" alt="${image.alt}" data-id="${image.dataset.id}" class="${selectedImg.dataset.id === image.dataset.id ? "modal-img selected" : "modal-img"}" />`;
//       })
//       .join("");
//     this.modal.classList.add("open");
//     this.closeBtn.addEventListener("click", this.closeModal);
//     this.nextBtn.addEventListener("click", this.nextImg);
//     this.prevBtn.addEventListener("click", this.prevImg);
//     this.modalImages.addEventListener("click", this.chooseImg);
//   }
//   closeModal() {
//     this.modal.classList.remove("open");
//     this.closeBtn.removeEventListener("click", this.closeModal);
//     this.nextBtn.removeEventListener("click", this.nextImg);
//     this.prevBtn.removeEventListener("click", this.prevImg);
//     this.modalImages.removeEventListener("click", this.chooseImage);
//   }

//   //   next/prev buttons
//   nextImg() {
//     const selected = this.modalImages.querySelector(".selected");
//     const next =
//       selected.nextElementSibling || this.modalImages.firstElementChild;
//     selected.classList.remove("selected");
//     next.classList.add("selected");
//     this.setMainImg(next);
//   }
//   prevImg() {
//     const selected = this.modalImages.querySelector(".selected");
//     const prev =
//       selected.previousElementSibling || this.modalImages.lastElementChild;
//     selected.classList.remove("selected");
//     prev.classList.add("selected");
//     this.setMainImg(prev);
//   }

//   //   set main img
//   setMainImg(selectedImg) {
//     this.mainImg.src = selectedImg.src;
//     this.imageName.textContent = selectedImg.title;
//   }

//   //   choose img
//   chooseImg(e) {
//     if (e.target.classList.contains("modal-img")) {
//       const selected = this.modalImages.querySelector(".selected");
//       this.setMainImg(e.target);
//       selected.classList.remove("selected");
//       e.target.classList.add("selected");
//     }
//   }
// }

// const nature = new Gallery(getElements(".nature"));
// const city = new Gallery(getElements(".city"));
