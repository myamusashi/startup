const firstName = "Gilang";
var weekDays = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
var months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

function getWelcomeTime(hours) {
  var welcomeString = "";
  if (5 <= hours && hours < 12) welcomeString = "good morning, ";
  else if (12 <= hours && hours < 16) welcomeString = "good afternoon, ";
  else if (16 <= hours && hours < 19) welcomeString = "good evening, ";
  else welcomeString = "good night, ";
  return welcomeString;
}

function getNumSuffix(num) {
  // 1st, 2nd, 3rd, 4th, 5th,
  if (num == 1 || num == 21) return "st";
  if (num == 2 || num == 22) return "nd";
  if (num == 3 || num == 23) return "rd";
  else return "th";
}

function updateTime() {
  const colors = ["#8caaee", "#e5c890", "#eebebe"];

  var curTime = new Date();
  var hours = curTime.getHours();
  var minutes = curTime.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  var day = weekDays[curTime.getDay()];
  var month = months[curTime.getMonth()];
  var dayNum = curTime.getDate();

  var welcomeString = getWelcomeTime(hours) + firstName + ".";
  var clockString = hours + ":" + minutes;
  var dateString = day + ", " + month + " " + dayNum + getNumSuffix(dayNum);

  var pagi = 1 && 10;
  var siang = 11 && 15;
  var sore = 16 && 18;

  switch (true) {
    case hours <= pagi:
      document.getElementById("clock").style.color = colors[0];
      break;
    case hours <= siang:
      document.getElementById("clock").style.color = colors[1];
      break;
    case hours <= sore:
      document.getElementById("clock").style.color = colors[2];
      break;
    default:
      document.getElementById("clock").style.color = "#949cbb";
      break;
  }
  document.getElementById("welcome").innerHTML = welcomeString;
  document.getElementById("clock").innerHTML = clockString;
  document.getElementById("date").innerHTML = dateString;
}
setInterval(updateTime, 10);

const bg_image = [
  "./assets/bg.webp",
  "./assets/bg1.webp",
  "./assets/bg2.webp",
  "./assets/bg3.webp",
  "./assets/bg4.webp",
  "./assets/bg5.webp",
  "./assets/bg6.webp",
  "./assets/bg7.webp",
  "./assets/bg8.webp",
  "./assets/bg9.webp",
  "./assets/bg10.webp",
  "./assets/bg11.webp",
  "./assets/bg12.webp",
  "./assets/bg13.webp",
  "./assets/bg14.webp",
  "./assets/bg15.webp",
  "./assets/bg16.webp",
  "./assets/bg17.webp",
  "./assets/bg18.webp",
  "./assets/bg19.webp",
  "./assets/bg20.webp",
  "./assets/bg21.webp",
  "./assets/bg22.webp",
  "./assets/bg23.webp",
  "./assets/bg24.webp",
  "./assets/bg25.webp",
  "./assets/bg26.webp",
  "./assets/bg27.webp",
  "./assets/bg28.webp",
  "./assets/bg29.webp",
  "./assets/bg30.webp",
  "./assets/bg31.webp",
  "./assets/bg32.webp",
];

function changeBackground() {
  const randomIndex = Math.floor(Math.random() * bg_image.length);
  const randomBackgroundImage = bg_image[randomIndex];

  var element = document.getElementById("body");
  element.style.backgroundImage = `url(${randomBackgroundImage})`;

  localStorage.setItem("backgroundImage", `url(${randomBackgroundImage})`);
}

const element = document.getElementById("body");

const storedBackgroundImage = localStorage.getItem("backgroundImage");

if (storedBackgroundImage) {
  element.style.backgroundImage = storedBackgroundImage;
} else {
  setBackgroundImage();
}

function setBackgroundImage() {
  const randomIndex = Math.floor(Math.random() * bg_image.length);
  const randomBackgroundImage = bg_image[randomIndex];
  element.style.backgroundImage = `url(${randomBackgroundImage})`;
  localStorage.setItem("backgroundImage", `url(${randomBackgroundImage})`);
}

fetch("https://api.thecatapi.com/v1/images/search")
  .then((response) => response.json())
  .then((data) => {
    const imageUrl = data[0].url;
    var img = document.getElementById("cat_pic").setAttribute("src", imageUrl);
    localStorage.setItem("catPicture", imageUrl);
  });
