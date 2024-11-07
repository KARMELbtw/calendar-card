let currentDate = new Date();
let birthdayDate = new Date(2024, 11, 6);

let year = document.getElementById('year');
let img = document.getElementById('img');
let dayNumber = document.getElementById('dayNumber');
let day = document.getElementById('day');
let countdown = document.getElementById('countdown');

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
    dayNumber.style.color = 'red';
    day.style.color = 'red';
}

while (currentDate >= birthdayDate) {
    let year = birthdayDate.getFullYear();
    year++;
    birthdayDate.setFullYear(year);
}

countdown.innerHTML = "Do urodzin zostało " + Math.ceil((birthdayDate.getTime() - currentDate.getTime())/1000/60/60/24) + " dni";