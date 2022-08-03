const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveAway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

const date = new Date(2022, 7, 12, 0, 0, 0);
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();

const month = date.getMonth();
const day = date.getDate();
const week = date.getDay();

giveAway.textContent = `giveaway ends on ${weekdays[week]}, ${day} ${months[month]} ${year} ${hours}:${minutes}am`;

const time = date.getTime();

function calculateTime() {
  const currentTime = new Date().getTime();
  const t = time - currentTime;
  const oneDay = 1000 * 60 * 60 * 24;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;

  const dayLeft = Math.floor(t / oneDay);
  const hourLeft = Math.floor((t % oneDay) / oneHour);
  const minLeft = Math.floor((t % oneHour) / oneMin);
  const seconds = Math.floor((t % oneMin) / 1000);

  const setNewDate = [dayLeft, hourLeft, minLeft, seconds];

  function format(item) {
    if (item < 10) {
      return `0${item}`;
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(setNewDate[index]);
  });
  if (t < 0) {
    clearInterval(calculateTime);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`;
  }
}
setInterval(calculateTime, 0);
