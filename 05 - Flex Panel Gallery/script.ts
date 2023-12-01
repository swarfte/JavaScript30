const panels: NodeListOf<HTMLElement> = document.querySelectorAll(".panel");

panels.forEach((panel: HTMLElement): void => {
  panel.addEventListener("click", (): void => {
    // removeActiveClasses();
    panel.classList.toggle("open");
  });
  panel.addEventListener("transitionend", (e: TransitionEvent): void => {
    if (e.propertyName.includes("flex")) {
      panel.classList.toggle("open-active");
    }
  });
});
