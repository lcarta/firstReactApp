import { randomGenerator, casualNumber } from "./randomNumberGeneratorModule.js";
import { scoreCounter } from "./scoreModule.js";

const difficultSelector = document.querySelector('.difficultSelector');
const colorsFrameContainer = document.querySelector('.colorsFrameContainer');
const myRandomcolor = document.querySelector('.myRandomcolor');
export let casualColor;
export let clickedColor;

export const randomColor = () => {
  casualColor = randomGenerator();
  myRandomcolor.innerText = casualColor;
}


export const panelsRandomColor = () => {
  randomColor();
  const n = difficultSelector.value;
  for (let i = 0; i < n; i++) {
    randomGenerator();
    let divColor = document.createElement('div');
    const tagClass = `color${i}`;
    divColor.classList.add(tagClass);
    colorsFrameContainer.appendChild(divColor);
    divColor.style.backgroundColor = randomGenerator();
    divColor.addEventListener('click', function () {
      clickedColor = divColor.style.backgroundColor;
      scoreCounter()
    });
  }
  const tagClass = casualNumber();
  const selectFrame = document.querySelector(`.${tagClass}`);
  selectFrame.style.backgroundColor = casualColor

}
