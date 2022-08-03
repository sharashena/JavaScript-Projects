import { getElement } from "./utils.js";

const toggleNav = getElement(".toggle-nav");
const sidebarOverlay = getElement(".sidebar-overlay");
const closeBtn = getElement(".sidebar-close");

closeBtn.addEventListener("click", () => {
  sidebarOverlay.classList.remove("show");
});

toggleNav.addEventListener("click", () => {
  sidebarOverlay.classList.add("show");
});
