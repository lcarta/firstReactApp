import { rand, randomGenerator, casualNumber, casual } from "./randomGenerator.js";

const difficultSelector = document.querySelector('.difficultSelector');
const colorsFrameContainer = document.querySelector('.colorsFrameContainer');
let casualColor;

export const randomColor = (color) => {
  randomGenerator();
  casualColor = `rgb(${rand.r}, ${rand.g}, ${rand.b})`;
  return color.innerText = casualColor;
}


export const multipleRandomColor = () => {
  const n = difficultSelector.value;
  console.log(n)
  for (let i = 0; i < n; i++) {
    randomGenerator();
    let divColor = document.createElement('div');
    const tagClass = `color${i}`;
    divColor.classList.add(tagClass);
    colorsFrameContainer.appendChild(divColor);
    divColor.style.backgroundColor = `rgb(${rand.r}, ${rand.g}, ${rand.b})`
  }
  casualNumber();
  const tagClass = `color${casual}`;
  const selectFrame = document.querySelector(`.${tagClass}`);
  selectFrame.style.backgroundColor = casualColor
  console.log(selectFrame)
}
