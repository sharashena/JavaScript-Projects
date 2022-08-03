const URL = "https://randomuser.me/api/";

const getUser = async () => {
  const data = await fetch(URL);
  const { results } = await data.json();
  const person = results[0];
  const {
    phone,
    email,
    picture: { large: image },
    login: { password },
    name: { first, last },
    dob: { age },
    location: {
      street: { number, name },
    },
  } = person;

  return {
    phone,
    email,
    image,
    password,
    age,
    street: `${number} ${name}`,
    name: `${first} ${last}`,
  };
};

export default getUser;
