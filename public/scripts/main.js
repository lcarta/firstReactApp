import { startTemplate, resetTemplate } from './modules/gameTemplateModule.js';
import { randomColor } from './modules/randomColorModule.js';
import { multipleRandomColor } from './modules/randomColorModule.js';
import { timeCounter, reset } from './modules/timeModule.js';
import { scoreCounter } from './modules/scoreModule.js';
import { selection } from './modules/selectFrameModule.js';

const myRandomcolor = document.querySelector('.myRandomcolor');
const difficultSelector = document.querySelector('.difficultSelector');
const startButton = document.querySelector('.startGameButton');
const resetButton = document.querySelector('.resetGameButton');


const startgame = () => {
  startButton.style.display = 'none';
  resetButton.style.display = 'block';
  difficultSelector.disabled = true;
  console.log(difficultSelector);
  startTemplate();
  randomColor(myRandomcolor);
  multipleRandomColor();
  timeCounter();
  scoreCounter();
  selection()
}
const resetgame = () => {
  startButton.style.display = 'block';
  resetButton.style.display = 'none';
  difficultSelector.disabled = false;
  resetTemplate();
  reset();
}


startButton.addEventListener('click', startgame);
resetButton.addEventListener('click', resetgame);