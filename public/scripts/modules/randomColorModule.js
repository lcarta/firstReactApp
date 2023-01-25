import { difficultSelector, colorsPanelsContainer, myRandomcolor } from "./querySelectorModule.js";
import { randomColorGenerator, casualNumber } from "./randomGeneratorModule.js";
import { scoreCounter } from "./scoreModule.js";

export let casualColor;
export let clickedColor;

export const panelsRandomColor = () => {
  for (let i = 0; i < difficultSelector.value; i++) {
    randomColorGenerator();
    let divColor = document.createElement('div');
    divColor.classList.add(`color${i}`);
    divColor.style.backgroundColor = randomColorGenerator();
    colorsPanelsContainer.appendChild(divColor);
    divColor.addEventListener('click', function () {
      clickedColor = divColor.style.backgroundColor;
      scoreCounter();
    });
  }
  myRandomcolor.innerText = document.querySelector(casualNumber()).style.backgroundColor;
}