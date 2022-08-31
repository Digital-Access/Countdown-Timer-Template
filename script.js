function countdown() {
    const countDate = new Date("October 25, 2022 09:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector(".days").innerHTML = textDay;
    document.querySelector(".hours").innerHTML = textHour;
    document.querySelector(".minutes").innerHTML = textMinute;
    document.querySelector(".seconds").innerHTML = textSecond;

    if (gap <= 0) {
        document.querySelector(".days").innerHTML = 0;
        document.querySelector(".hours").innerHTML = 0;
        document.querySelector(".minutes").innerHTML = 0;
        document.querySelector(".seconds").innerHTML = 0;

        document.querySelector(".container-days").style.display=  "none";
        document.querySelector(".container-hours").style.display = "none";
        document.querySelector(".container-minutes").style.display = "none";
        document.querySelector(".container-seconds").style.display = "none";

        document.querySelector(".launch-text").innerHTML = "We've &nbsp Launched &nbsp !";
    }
}
setInterval(countdown, 1000);
