import { myRandomcolor, difficultSelector, colorsPanelsContainer } from "./querySelectorModule.js";
import { randomColorGenerator, casualNumber } from "./randomGeneratorModule.js";
import { scoreCounter } from "./scoreModule.js";

export let casualColor;
export let clickedColor;

export const panelsRandomColor = () => {
  for (let i = 0; i < difficultSelector.value; i++) {
    randomColorGenerator();
    let divColor = document.createElement('div');
    const tagClass = `color${i}`;
    divColor.classList.add(tagClass);
    divColor.classList.add('panel');
    colorsPanelsContainer.appendChild(divColor);
    divColor.style.backgroundColor = randomColorGenerator();
    divColor.addEventListener('click', function () {
      clickedColor = divColor.style.backgroundColor;
      scoreCounter()
    });
  }
  myRandomcolor.innerText = document.querySelector(casualNumber()).style.backgroundColor;
}