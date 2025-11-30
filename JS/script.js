const days= document.getElementById('days');
const hours= document.getElementById('hours');
const minutes= document.getElementById('minutes');
const seconds= document.getElementById('seconds');

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 1, ${currentYear + 1} 00:00:00`);

function updateCountdown() {
    const currentTime = new Date();
    const timeDifference = newYearTime - currentTime; 

    const daysLeft = Math.floor(timeDifference / 1000 / 60 / 60 / 24);
    const hoursLeft = Math.floor((timeDifference / 1000 / 60 / 60) % 24);
    const minutesLeft = Math.floor((timeDifference / 1000 / 60) % 60);
    const secondsLeft = Math.floor((timeDifference / 1000) % 60);

    days.innerHTML = daysLeft;
    hours.innerHTML = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
    minutes.innerHTML = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
    seconds.innerHTML = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
}

setInterval(updateCountdown, 1000);
