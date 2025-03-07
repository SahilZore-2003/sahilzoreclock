const hoursDiv = document.getElementById("hours");
const miniuteDiv = document.getElementById("miniutes");
const ampmDiv = document.getElementById("ampm");
const secondsDiv = document.getElementById("seconds");

function displayCurrentTime() {
    const currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours < 10 ? '0' + hours : hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    hoursDiv.innerText = hours;
    miniuteDiv.innerText = minutes;
    secondsDiv.innerText = seconds;
    ampmDiv.innerText = ampm;
    setTimeout(displayCurrentTime, 1000);
}

displayCurrentTime();
