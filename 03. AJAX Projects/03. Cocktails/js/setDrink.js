const setDrink = section => {
  section.addEventListener("click", e => {
    const id = e.target.parentElement.dataset.id;
    if (!id) return;
    localStorage.setItem("drink", id);
  });
};

export default setDrink;
