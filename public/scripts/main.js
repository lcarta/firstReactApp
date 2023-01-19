import { sayHello } from './modules/sampleModule.js';
import { startTemplate } from './modules/startGameModule.js';
import { randomGenerator } from './modules/randomGenerator.js';
import { randomColor } from './modules/randomColorModule.js';
import { multipleRandomColor } from './modules/randomColorModule.js';

window.onload = sayHello();
const myRandomcolor = document.querySelector('.myRandomcolor')
const startgame = () => {
  startTemplate();
  randomColor(myRandomcolor);
  multipleRandomColor();
}

const startButton = document.querySelector('.startGameButton')
startButton.addEventListener('click', startgame)