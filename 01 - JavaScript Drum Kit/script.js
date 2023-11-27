"use strict";
function playSound(event) {
    const keyCode = event.keyCode;
    const audioQuery = `audio[data-key="${keyCode}"]`;
    const audio = document.querySelector(audioQuery);
    if (!audio) {
        return;
    }
    else {
        // for play over and over again
        audio.currentTime = 0;
        audio.play();
    }
}
function playAnimation(event) {
    const keyCode = event.keyCode;
    const keyQuery = `.key[data-key="${keyCode}"]`;
    const key = document.querySelector(keyQuery);
    if (!key) {
        return;
    }
    else {
        // for animation
        key.classList.add("playing");
        setTimeout(() => {
            key.classList.remove("playing");
        }, 101);
    }
}
addEventListener("keydown", playSound);
addEventListener("keydown", playAnimation);
