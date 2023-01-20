import { startTemplate } from './modules/startGameModule.js';
import { randomColor } from './modules/randomColorModule.js';
import { multipleRandomColor } from './modules/randomColorModule.js';


const myRandomcolor = document.querySelector('.myRandomcolor');
const difficultSelector = document.querySelector('.difficultSelector');

const startgame = () => {
  difficultSelector.disabled = 'true'
  startTemplate();
  randomColor(myRandomcolor);
  multipleRandomColor();
}

const startButton = document.querySelector('.startGameButton')
startButton.addEventListener('click', startgame)