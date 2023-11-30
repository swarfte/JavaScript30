"use strict";
// const spacingInput = document.querySelector("#spacing") as HTMLInputElement;
const inputs = document.querySelectorAll(".controls input");
const spacingInput = inputs[0];
const blurInput = inputs[1];
const baseColorInput = inputs[2];
spacingInput.addEventListener("mousemove", () => {
    document.documentElement.style.setProperty("--spacing", spacingInput.value + "px");
});
blurInput.addEventListener("mousemove", () => {
    document.documentElement.style.setProperty("--blur", blurInput.value + "px");
});
baseColorInput.addEventListener("change", () => {
    document.documentElement.style.setProperty("--base", baseColorInput.value);
});
