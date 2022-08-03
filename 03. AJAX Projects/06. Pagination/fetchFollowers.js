const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

const fetchFollowers = async () => {
  const data = await fetch(url);
  const response = await data.json();
  return response;
};

export default fetchFollowers;
