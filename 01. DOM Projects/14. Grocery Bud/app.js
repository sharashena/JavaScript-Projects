// access elements
// form on submit
const form = document.querySelector(".grocery-form");

// other elements
const alertText = document.querySelector(".alert");
const groceryList = document.querySelector(".grocery-list");
const list = document.querySelector(".list");
const editBtn = document.querySelector(".edit-btn");
const deleteBtn = document.querySelector(".delete-btn");
const clearItems = document.querySelector(".clear-items");
const input = document.querySelector("input");
const submit = document.querySelector(".submit");

let editElement;
let isEdit = false;
let editID = "";

// event listeners
form.addEventListener("submit", addItems);
clearItems.addEventListener("click", clearAllItems);
window.addEventListener("DOMContentLoaded", function () {
  const items = getFromLocalStorage();
  items.forEach(function (item) {
    const element = document.createElement("article");
    const attr = document.createAttribute("data-id");
    attr.value = item.id;
    element.setAttributeNode(attr);
    element.classList.add("list");
    element.innerHTML = `
    <p class="title">${item.value}</p>
    <div class="btn-container">
    <button type="button" class="edit-btn">
    <i class="fas fa-edit"></i>
    </button>
    <button type="button" class="delete-btn">
    <i class="fas fa-trash"></i>
    </button>
            </div>
            `;
    if (groceryList.children.length !== 1) {
      clearItems.classList.remove("hidden");
    }
    groceryList.appendChild(element);
    // delete item
    const deleteBtn = element.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", deleteItem);
    // edit item
    const editBtn = element.querySelector(".edit-btn");
    editBtn.addEventListener("click", editItem);
  });
});

// default values
function defaults() {
  input.value = "";
  submit.textContent = "submit";
  isEdit = false;
  editID = "";
}

function addItems(e) {
  e.preventDefault();

  const id = new Date().getTime().toString();
  const value = input.value;

  if (input.value !== "" && !isEdit) {
    // create element
    const element = document.createElement("article");
    const attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.classList.add("list");
    element.innerHTML = `
    <p class="title">${value}</p>
    <div class="btn-container">
    <button type="button" class="edit-btn">
    <i class="fas fa-edit"></i>
    </button>
    <button type="button" class="delete-btn">
    <i class="fas fa-trash"></i>
    </button>
            </div>
            `;
    groceryList.appendChild(element);
    saveToLocalStorage(id, value);

    // delete item
    const deleteBtn = element.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", deleteItem);
    // edit item
    const editBtn = element.querySelector(".edit-btn");
    editBtn.addEventListener("click", editItem);

    // alert
    displayAlert("item added to the list", "alert-success");
    clearItems.classList.remove("hidden");
    defaults();
  }
  if (isEdit) {
    editElement.innerHTML = input.value;
    displayAlert("value changed", "alert-success");
    defaults();
  }
  if (input.value === "") {
    displayAlert("please fill value", "alert-danger");
  }
}

// alerts
function displayAlert(value, className) {
  alertText.classList.add(className);
  alertText.textContent = value;
  setTimeout(function () {
    alertText.classList.remove(className);
    alertText.textContent = "";
  }, 1000);
}

function clearAllItems() {
  groceryList.innerHTML = "";
  displayAlert("empty list", "alert-danger");
  clearItems.classList.add("hidden");
  localStorage.clear();
}

// delete item
const deleteItem = function (e) {
  const element = e.currentTarget.parentElement.parentElement;
  groceryList.removeChild(element);
  displayAlert("item removed", "alert-danger");
  if (groceryList.children.length === 0) {
    clearItems.classList.add("hidden");
  }
  removeFromLocalStorage(element.dataset.id);
};
// edit item
const editItem = function (e) {
  const element = e.currentTarget.parentElement.parentElement;
  editElement = e.currentTarget.parentElement.previousElementSibling;
  input.value = editElement.textContent;
  submit.textContent = "edit";
  isEdit = true;
  editID = element.dataset.id;
};

// localStorage
function saveToLocalStorage(id, value) {
  const obj = { id, value };
  const items = getFromLocalStorage();
  items.push(obj);
  localStorage.setItem("list", JSON.stringify(items));
}
function getFromLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}
function removeFromLocalStorage(id) {
  let items = getFromLocalStorage();
  items = items.filter(function (item) {
    if (item.id !== id) {
      return item;
    }
  });
  localStorage.setItem("list", JSON.stringify(items));
}
