import sublinks from "./data.js";

const toggleBtn = document.querySelector(".toggle-btn");
const closeBtn = document.querySelector(".close-btn");
const sidebarWrapper = document.querySelector(".sidebar-wrapper");
const sidebar = document.querySelector(".sidebar-links");
const linkBtns = [...document.querySelectorAll(".link-btn")];
const submenu = document.querySelector(".submenu");
const hero = document.querySelector(".hero");
const nav = document.querySelector(".nav");

// show/hide sidebar
toggleBtn.addEventListener("click", function () {
  sidebarWrapper.classList.toggle("show");
});
closeBtn.addEventListener("click", () => {
  sidebarWrapper.classList.remove("show");
});

// set sidebar
sidebar.innerHTML = sublinks
  .map(({ links, page }) => {
    return `
    <article>
        <h4>${page}</h4>
        <div class="sidebar-sublinks">
            ${links
              .map(({ label, icon, url }) => {
                return `<a href="${url}">
                <i class="${icon}"></i>
                ${label}
                </a>`;
              })
              .join("")}
        </div>
    </article>
    `;
  })
  .join("");

//   submenu

linkBtns.forEach(btn => {
  btn.addEventListener("mouseover", function (e) {
    const text = e.currentTarget.textContent;
    const tempBtn = e.currentTarget.getBoundingClientRect();
    const bottom = tempBtn.bottom - 3;
    const left = tempBtn.left;
    const right = tempBtn.right;
    const center = (left + right) / 2;

    const tempPage = sublinks.find(({ page }) => page === text);
    if (tempPage) {
      const { page, links } = tempPage;
      submenu.classList.add("show");
      submenu.style.left = `${center}px`;
      submenu.style.top = `${bottom}px`;

      let columns = "col-2";
      if (links.length === 3) {
        columns = "col-3";
      }
      if (links.length > 3) {
        columns = "col-4";
      }

      submenu.innerHTML = `
        <section>
            <h4>${page}</h4>
            <div class="submenu-center ${columns}">
                ${links
                  .map(({ label, icon, url }) => {
                    return `<a href="${url}">
                    <i class="${icon}"></i>
                    ${label}
                    </a>`;
                  })
                  .join("")}
            </div>
        </section>
      `;
    }
  });
});

hero.addEventListener("mouseover", function (e) {
  submenu.classList.remove("show");
});
nav.addEventListener("mouseover", function (e) {
  if (!e.target.classList.contains("link-btn")) {
    submenu.classList.remove("show");
  }
});
