import { startTemplate, resetTemplate } from './modules/gameTemplateModule.js';
import { panelsRandomColor } from './modules/randomColorModule.js';
import { timeCounter, reset } from './modules/timeModule.js';


const difficultSelector = document.querySelector('.difficultSelector');
const startButton = document.querySelector('.startGameButton');
const resetButton = document.querySelector('.resetGameButton');


const startgame = () => {
  startButton.style.display = 'none';
  resetButton.style.display = 'block';
  difficultSelector.disabled = true;
  console.log(difficultSelector);
  startTemplate();
  panelsRandomColor();
  timeCounter();
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