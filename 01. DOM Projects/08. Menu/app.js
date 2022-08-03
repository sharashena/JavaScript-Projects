const menu = [
  {
    id: 1,
    img: "./images/menu-1.jpeg",
    title: "buttermilk pancakes",
    price: "$15.99",
    text: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    category: "breakfast",
  },
  {
    id: 2,
    img: "./images/menu-2.jpeg",
    title: "dinner double",
    price: "$15.99",
    text: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
    category: "lunch",
  },
  {
    id: 3,
    img: "./images/menu-3.jpeg",
    title: "godzilla milkshake",
    price: "$6.99",
    text: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
    category: "shakes",
  },
  {
    id: 4,
    img: "./images/menu-4.jpeg",
    title: "country delight",
    price: "$20.99",
    text: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",
    category: "breakfast",
  },
  {
    id: 5,
    img: "./images/menu-5.jpeg",
    title: "egg attack",
    price: "$22.99",
    text: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
    category: "lunch",
  },
  {
    id: 6,
    img: "./images/menu-6.jpeg",
    title: "oreo dream",
    price: "$18.99",
    text: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
    category: "shakes",
  },
  {
    id: 7,
    img: "./images/menu-7.jpeg",
    title: "bacon overflow",
    price: "$18.99",
    text: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
    category: "breakfast",
  },
  {
    id: 8,
    img: "./images/menu-8.jpeg",
    title: "american classic",
    price: "$12.99",
    text: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
    category: "lunch",
  },
  {
    id: 9,
    img: "./images/menu-9.jpeg",
    title: "quarantine buddy",
    price: "$16.99",
    text: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
    category: "shakes",
  },
  {
    id: 10,
    img: "./images/menu-10.jpeg",
    title: "steak dinner",
    price: "$39.99",
    text: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
    category: "dinner",
  },
];

// filter menu
const btns = document.querySelectorAll(".btn");
const img = document.querySelectorAll(".img");
const title = document.querySelectorAll(".title");
const price = document.querySelectorAll(".price");
const text = document.querySelectorAll(".menu-text");
const menu_container = document.querySelector(".menus");

const display = function (arr) {
  let displayMenus = arr.map(function (item) {
    return `
              <article class="single-menu">
            <img
              src=${item.img}
              alt="menu-1"
              class="img"
            />
            <div class="menu-container">
              <header>
                <h4 class="title">${item.title}</h4>
                <p class="price">${item.price}</p>
              </header>
              <p class="menu-text">
               ${item.text}
              </p>
            </div>
          </article>
    `;
  });
  displayMenus = displayMenus.join("");
  menu_container.innerHTML = displayMenus;
};

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    let newArr;
    if (e.currentTarget.textContent === "all") {
      display(menu);
    } else if (e.currentTarget.textContent === btn.textContent) {
      newArr = menu.filter(function (item) {
        return item.category === btn.textContent;
      });
      display(newArr);
    }
  });
});

window.addEventListener("DOMContentLoaded", function () {
  display(menu);
});
