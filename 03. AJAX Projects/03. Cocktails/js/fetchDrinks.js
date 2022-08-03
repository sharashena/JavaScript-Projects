import { showLoading } from "./toggleLoading.js";

const fetchDrinks = async url => {
  showLoading();
  try {
    const data = await fetch(url);
    const { drinks } = await data.json();
    return drinks;
  } catch (err) {
    console.log(err);
  }
};

export default fetchDrinks;
