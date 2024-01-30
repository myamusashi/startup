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
  "feburary",
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
];

function changeBackground() {
  const randomIndex = Math.floor(Math.random() * bg_image.length);
  const randomBackgroundImage = bg_image[randomIndex];

  var element = document.getElementById("body");
  // Change the background color to red
  element.style.backgroundImage = `url(${randomBackgroundImage})`;

  localStorage.setItem("backgroundImage", `url(${randomBackgroundImage})`);
}

// Assuming 'element' is the reference to the HTML element whose backgroundImage you want to retrieve
const element = document.getElementById("body");

// Check if there's a stored background image URL
const storedBackgroundImage = localStorage.getItem("backgroundImage");

// If there's a stored background image URL, set it
if (storedBackgroundImage) {
  element.style.backgroundImage = storedBackgroundImage;
} else {
  // Set the initial background image
  setBackgroundImage();
}

// Function to set the background image
function setBackgroundImage() {
  // Get a random index within the array length
  const randomIndex = Math.floor(Math.random() * bg_image.length);
  // Get the random background image URL
  const randomBackgroundImage = bg_image[randomIndex];
  // Set the background image of the element
  element.style.backgroundImage = `url(${randomBackgroundImage})`;
  // Store the background image URL in localStorage
  localStorage.setItem("backgroundImage", `url(${randomBackgroundImage})`);
}
