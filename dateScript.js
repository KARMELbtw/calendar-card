let currentDate = new Date();
let birthdayDate = new Date(2024, 11, 6);

let year = document.getElementById('year');
let img = document.getElementById('img');
let dayNumber = document.getElementById('dayNumber');
let day = document.getElementById('day');
let countdown = document.getElementById('countdown');
let body = document.body;

let month = Array('Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień');
let dayOfWeek = Array('Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota');

year.innerHTML = month[currentDate.getMonth()] + " " + currentDate.getFullYear();

if (currentDate.getDate() < 10) {
    dayNumber.innerHTML = '0' + currentDate.getDate();
} else {
    dayNumber.innerHTML = currentDate.getDate();
}

day.innerHTML = dayOfWeek[currentDate.getDay()];

if (currentDate.getDay() === 0) {
    dayNumber.style.color = 'rgb(219, 18, 18)';
    day.style.color = 'rgb(219, 18, 18)';
}

while (currentDate > birthdayDate) {
    let year = birthdayDate.getFullYear();
    year++;
    birthdayDate.setFullYear(year);
}
switch (currentDate.getMonth()) {
    case 11: case 0: case 1:
        img.style.backgroundImage = "url(media/winter.jpg)";
        body.style.setProperty("--main-color", "rgb(161, 227, 231)");
        body.style.setProperty("--transparent-color", "rgba(93, 141, 153, 0.253)");
        body.style.backgroundColor = "#000000";
        break;
    case 2: case 3: case 4:
        img.style.backgroundImage = "url(media/spring.jpg)";
        body.style.setProperty("--main-color", "rgb(219, 161, 231)");
        body.style.setProperty("--transparent-color", "rgba(139, 93, 153, 0.253)");
        break;
    case 5: case 6: case 7:
        img.style.backgroundImage = "url(media/summer.jpg)";
        body.style.setProperty("--main-color", "rgb(80, 148, 85)");
        body.style.setProperty("--transparent-color", "rgba(93, 153, 98, 0.253)");
        break;
    case 8: case 9: case 10:
        img.style.backgroundImage = "url(media/autumn.jpg)";
        body.style.setProperty("--main-color", "rgb(209, 103, 16)");
        body.style.setProperty("--transparent-color", "rgba(153, 112, 93, 0.253)");
        break;
    default:
        console.log("Błąd miesiąca dla: " + currentDate.getMonth);
        break;
}

let daysToBirthday = Math.ceil((birthdayDate.getTime() - currentDate.getTime())/1000/60/60/24);

if (daysToBirthday === 0) {
    countdown.innerHTML = "Wszystkiego najlepszego!";
    img.style.backgroundImage = "url(media/birthday.jpg)";
    body.style.setProperty("--main-color", "rgb(219, 219, 219)");
    body.style.setProperty("--transparent-color", "rgba(204, 204, 204, 0.253)");
} else if (daysToBirthday === 1){
    countdown.innerHTML = "Do urodziń został: " + daysToBirthday + " dzień";
} else {
    countdown.innerHTML = "Do urodziń zostało: " + daysToBirthday + "dni";
}