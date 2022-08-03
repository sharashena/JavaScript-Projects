import { allProductsUrl } from "./utils.js";

const fetchProducts = async () => {
  const data = await fetch(allProductsUrl).catch(err => console.log(err));
  const response = await data.json();
  return response;
};

export default fetchProducts;
