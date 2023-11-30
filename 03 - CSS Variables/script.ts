// const spacingInput = document.querySelector("#spacing") as HTMLInputElement;

const inputs = document.querySelectorAll(".controls input");

const spacingInput = inputs[0] as HTMLInputElement;
const blurInput = inputs[1] as HTMLInputElement;
const baseColorInput = inputs[2] as HTMLInputElement;

spacingInput.addEventListener("mousemove", (): void => {
  document.documentElement.style.setProperty(
    "--spacing",
    spacingInput.value + "px",
  );
});

blurInput.addEventListener("mousemove", (): void => {
  document.documentElement.style.setProperty("--blur", blurInput.value + "px");
});

baseColorInput.addEventListener("change", (): void => {
  document.documentElement.style.setProperty("--base", baseColorInput.value);
});
