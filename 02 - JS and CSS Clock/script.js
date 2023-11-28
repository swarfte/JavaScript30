"use strict";
function handMove(hand, degrees) {
    hand.style.transform = `rotate(${degrees}deg)`;
}
function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = (seconds / 60) * 360 + 90;
    const secondHand = document.querySelector(".second-hand");
    handMove(secondHand, secondsDegrees);
    const minsHand = document.querySelector(".min-hand");
    const mins = now.getMinutes();
    const minsDegrees = (mins / 60) * 360 + 90;
    handMove(minsHand, minsDegrees);
    const hourHand = document.querySelector(".hour-hand");
    const hour = now.getHours();
    const hourDegrees = (hour / 12) * 360 + 90;
    handMove(hourHand, hourDegrees);
}
setInterval(setDate, 1000);
