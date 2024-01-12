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
    const colors = ["#8caaee", "#e5c890", "#eebebe", "#949cbb"];

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

    switch (hours) {
        case 1:
            document.getElementById("clock").style.color = colors[0];
            break;
        case 11:
            document.getElementById("clock").style.color = colors[1];
            break;
        case 16:
            document.getElementById("clock").style.color = colors[2];
            break;
        case 19:
            document.getElementById("clock").style.color = colors[3];
            break;
        default:
            break;
    }

    document.getElementById("welcome").innerHTML = welcomeString;
    document.getElementById("clock").innerHTML = clockString;
    document.getElementById("date").innerHTML = dateString;

}

setInterval(updateTime, 10);
