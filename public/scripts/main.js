import { startTemplate, resetTemplate } from './modules/gameTemplateModule.js';
import { panelsRandomColor } from './modules/randomColorModule.js';
import { timeCounter, reset } from './modules/timeModule.js';
import { difficultSelector, startButton, resetButton } from './modules/querySelectorModule.js';

const startgame = () => {
  startButton.style.display = 'none';
  resetButton.style.display = 'block';
  difficultSelector.disabled = true;
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