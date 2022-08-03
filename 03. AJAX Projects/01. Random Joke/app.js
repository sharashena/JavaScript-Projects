const btn = document.querySelector(".btn");
const content = document.querySelector(".content");
const img = document.querySelector(".container img");

const URL = "https://api.chucknorris.io/jokes/random";

// btn.addEventListener("click", () => {
// option 1 with xhr
//   getData(URL)
//     .then(response => displayData(response))
//     .catch(err => console.log(err));

//   option 2 with fetch
// fetch is promise by default, so, we can chain it .then and .catch
//   fetch(URL)
//     .then(data => data.json())
//     .then(response => displayData(response))
//     .catch(err => console.log(err));
// });

// option 3 with async/await
btn.addEventListener("click", async () => {
  try {
    const data = await fetch(URL);
    const response = await data.json();
    displayData(response);
  } catch (err) {
    console.log(err);
  }
});

// option 1 with xhr
// const getData = url => {
//   const promise = new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function () {
//       if (xhr.readyState !== 4) return;
//       if (xhr.status === 200) {
//         resolve(xhr.responseText);
//       } else {
//         reject({ status: xhr.status, statusText: xhr.statusText });
//       }
//     };
//     xhr.open("GET", url);
//     xhr.send();
//   });
//   return promise;
// };

// function displayData(data) {
// option 1 with xhr
//   img.classList.add("shake-img");
//   const response = JSON.parse(data);
//   const { value } = response;
//   content.textContent = value;
//   const random = Math.random() * 1000;
//   setTimeout(() => {
//     img.classList.remove("shake-img");
//   }, random);

// option 2 with fetch
//   img.classList.add("shake-img");
//   const { value: joke } = data;
//   content.textContent = joke;
//   const random = Math.random() * 1000;
//   setTimeout(() => {
//     img.classList.remove("shake-img");
//   }, random);
// }

// option 3 with async/await
function displayData({ value: joke }) {
  img.classList.add("shake-img");
  content.textContent = joke;
  const random = Math.random() * 1000;
  setTimeout(() => {
    img.classList.remove("shake-img");
  }, random);
}
