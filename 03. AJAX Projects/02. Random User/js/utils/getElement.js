const getElement = selection => {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw new Error(`selector doesn't match, your selector is ${selection}`);
  }
};

export { getElement };
