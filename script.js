function displayTime(){
    let h = document.getElementById("hours");
    let m = document.getElementById("minute");
    let s = document.getElementById("second");
    let ampm = document.getElementById("ampm");

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let period = "AM";

    if (hours >= 12) {
        period = "PM";
        if (hours > 12) {
            hours -= 12;
        }
    }

    if (hours == 0) {
        hours = 12;
    }

    h.innerHTML = hours < 10 ? "0" + hours : hours;
    m.innerHTML = minutes < 10 ? "0" + minutes : minutes;
    s.innerHTML = seconds < 10 ? "0" + seconds : seconds;
    ampm.innerHTML = period;
}

setInterval(displayTime, 1000);