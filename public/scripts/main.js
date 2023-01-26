import { startTemplate, resetTemplate, recordInnerTEXT } from './modules/gameTemplateModule.js';
import { panelsRandomColor } from './modules/randomColorModule.js';
import { timeCounter, reset } from './modules/timeModule.js';
import { difficultSelector, startButton, resetButton } from './modules/querySelectorModule.js';
import { lifeGenerator } from './modules/lifeModule.js';


const startGame = () => {
  startButton.style.display = 'none';
  resetButton.style.display = 'block';
  difficultSelector.disabled = true;
  startTemplate();
  panelsRandomColor();
  lifeGenerator();
  timeCounter();
}

const resetGame = () => {
  startButton.style.display = 'block';
  resetButton.style.display = 'none';
  difficultSelector.disabled = false;
  resetTemplate();
  lifeGenerator();
  reset();
}

startButton.addEventListener('click', startGame);
resetButton.addEventListener('click', resetGame);
difficultSelector.addEventListener('change', recordInnerTEXT(difficultSelector.options[difficultSelector.selectedIndex].text));