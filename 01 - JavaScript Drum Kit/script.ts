function playSound(event: KeyboardEvent): void {
  const keyCode: number = event.keyCode;
  const audioQuery: string = `audio[data-key="${keyCode}"]`;
  const audio: HTMLAudioElement = document.querySelector(audioQuery)!;
  if (!audio) {
    return;
  } else {
    // for play over and over again
    audio.currentTime = 0;
    audio.play();
  }
}

function playAnimation(event: KeyboardEvent): void {
  const keyCode: number = event.keyCode;
  const keyQuery: string = `.key[data-key="${keyCode}"]`;
  const key: HTMLElement = document.querySelector(keyQuery)!;
  if (!key) {
    return;
  } else {
    // for animation
    key.classList.add("playing");
    setTimeout((): void => {
      key.classList.remove("playing");
    }, 101);
  }
}

addEventListener("keydown", playSound);
addEventListener("keydown", playAnimation);
