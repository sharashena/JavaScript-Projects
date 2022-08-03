// import
import {
  getStorageItem,
  setStorageItem,
  formatPrice,
  getElement,
} from "../utils.js";
import { openCart } from "./toggleCart.js";
import { findProduct } from "../store.js";
import addToCartDOM from "./addToCartDOM.js";

// set items
const cartItemCountDOM = getElement(".cart-item-count");
const cartItemsDOM = getElement(".cart-items");
const cartTotalDOM = getElement(".cart-total");

let cart = getStorageItem("cart");

export const addToCart = id => {
  let item = cart.find(item => item.id === id);
  if (!item) {
    // add item to the cart
    let product = findProduct(id);
    product = { ...product, amount: 1 };
    cart = [...cart, product];
    // add item to the dom
    addToCartDOM(product);
  } else {
    // update values
    const amount = increaseAmount(id);
    const items = [...cartItemsDOM.querySelectorAll(".cart-item-amount")];
    const newAmount = items.find(value => value.dataset.id === id);
    newAmount.textContent = amount;
  }
  displayCartItemCount();
  // display cart total
  displayCartTotal();
  // set cart in localStorage
  setStorageItem("cart", cart);

  openCart();
};

const displayCartItemCount = () => {
  const amount = cart.reduce((acc, cartItem) => {
    return (acc += cartItem.amount);
  }, 0);
  cartItemCountDOM.textContent = amount;
};

const displayCartTotal = () => {
  let total = cart.reduce((acc, cartItem) => {
    return (acc += cartItem.price * cartItem.amount);
  }, 0);
  cartTotalDOM.textContent = `Total : ${formatPrice(total)}`;
};

const displayCartItemsDOM = () => {
  cart.forEach(cartItem => {
    addToCartDOM(cartItem);
  });
};

const increaseAmount = id => {
  let newAmount;
  cart = cart.map(cartItem => {
    if (cartItem.id === id) {
      newAmount = cartItem.amount + 1;
      cartItem = { ...cartItem, amount: newAmount };
    }
    return cartItem;
  });
  return newAmount;
};

const decreaseAmount = id => {
  let newAmount;
  cart = cart.map(cartItem => {
    if (cartItem.id === id) {
      newAmount = cartItem.amount - 1;
      cartItem = { ...cartItem, amount: newAmount };
    }
    return cartItem;
  });
  return newAmount;
};

const removeItem = id => {
  cart = cart.filter(cartItem => cartItem.id !== id);
};

const setupCartFunctionality = () => {
  cartItemsDOM.addEventListener("click", function (e) {
    const element = e.target;
    const parent = e.target.parentElement;
    const id = e.target.dataset.id;
    const parentID = e.target.parentElement.dataset.id;
    // remove
    if (element.classList.contains("cart-item-remove-btn")) {
      removeItem(id);
      parent.parentElement.remove();
    }
    // increase
    if (parent.classList.contains("cart-item-increase-btn")) {
      const newAmount = increaseAmount(parentID);
      parent.nextElementSibling.textContent = newAmount;
    }
    // decrease
    if (parent.classList.contains("cart-item-decrease-btn")) {
      const newAmount = decreaseAmount(parentID);
      if (newAmount === 0) {
        removeItem(parentID);
        parent.parentElement.parentElement.remove();
      } else {
        parent.previousElementSibling.textContent = newAmount;
      }
    }

    displayCartItemCount();
    displayCartTotal();
    setStorageItem("cart", cart);
  });
};

const init = () => {
  // display amount of cart items
  displayCartItemCount();
  // display total
  displayCartTotal();
  // add all cart items to the dom
  displayCartItemsDOM();
  setupCartFunctionality();
};
init();
