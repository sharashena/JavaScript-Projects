const getElement = selection => {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw new Error(
      `There is an error, with your selector "${selection}", element doesn't match`
    );
  }
};

export default getElement;
