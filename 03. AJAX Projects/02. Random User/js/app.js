import { getElement as element } from "./utils/getElement.js";
import getUser from "./utils/fetchUsers.js";
import { displayUser } from "./utils/displayUser.js";

const btn = element(".btn");

const showUser = async function () {
  const person = await getUser();
  displayUser(person);
};

window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);
