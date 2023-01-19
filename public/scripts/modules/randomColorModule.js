import { rand, randomGenerator } from "./randomGenerator.js";


export const randomColor = (color) => {
  randomGenerator();
  return color.innerText = `rgb(${rand.r}, ${rand.g}, ${rand.b})`
}

const difficultSelector = document.querySelector('.difficultSelector');
const colorsFrameContainer = document.querySelector('.colorsFrameContainer');

export const multipleRandomColor = () => {
  const n = difficultSelector.value;
  for (let i = 0; i < n; i++) {
    randomGenerator();
    console.log(rand);
    let divw = document.createElement('div');
    //div.className = 'one';
    const tagClass = `color${i}`;
    divw.classList.add(tagClass);
    colorsFrameContainer.appendChild(divw);
    const colorl = document.querySelector('.color1');
    console.log(divw)
    divw.style.backgroundColor = `rgb(${rand.r}, ${rand.g}, ${rand.b})`
  }
}