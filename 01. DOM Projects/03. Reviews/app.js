// reviews
// data
const arr = [
  {
    id: 1,
    path: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    author: "susan smith",
    job: "web developer",
    info: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    path: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    author: "anna johnson",
    job: "web designer",
    info: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    path: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    author: "peter jones",
    job: "intern",
    info: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    path: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    author: "bill anderson",
    job: "the boss",
    info: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
  },
];

// access elements
const author = document.getElementById("author");
const job = document.getElementById("job");
const text = document.getElementById("text");
const img = document.querySelector("#image");
const review = document.querySelector(".review");
const btns = document.querySelectorAll("button");

let currentVal = 0;

const showPerson = function (value) {
  const item = arr[value];
  img.src = item.path;
  author.textContent = item.author;
  job.textContent = item.job;
  text.textContent = item.info;
};

const randomPerson = function (people) {
  const random = Math.floor(Math.random() * people.length);
  showPerson(random);
};

window.addEventListener("DOMContentLoaded", function () {
  const item = arr[currentVal];
  img.src = item.path;
  author.textContent = item.author;
  job.textContent = item.job;
  text.textContent = item.info;
});

btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    switch (btn.className) {
      case "pre-btn":
        currentVal--;
        if (currentVal < 0) {
          currentVal = arr.length - 1;
        }
        showPerson(currentVal);
        break;
      case "next-btn":
        currentVal++;
        if (currentVal > arr.length - 1) {
          currentVal = 0;
        }
        showPerson(currentVal);
        break;
      case "random":
        randomPerson(arr);
      default:
        return;
    }
  });
});
