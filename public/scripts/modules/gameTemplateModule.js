import { difficultSelector } from "./querySelectorModule.js";
import { playerStatus, colorContainer, multipleColorsContainer, guess, timeContainer, body, record } from "./querySelectorModule.js";
import { timeProvider } from "./timeModule.js";
import { gameVariables } from "./gameVariables.js";

export const colorPanelsRemove = () => {
  if (document.querySelector('.color0')) {
    for (let i = 0; i < difficultSelector.value; i++) {
      document.querySelector(`.color${i}`).remove();
    }
  }
}

export const startTemplate = () => {
  recordInnerTEXT();
  colorPanelsRemove();
  timeContainer.style.display = 'flex';
  playerStatus.style.display = 'flex';
  colorContainer.style.display = 'flex';
  multipleColorsContainer.style.display = 'flex';
  guess.style.display = 'block';
}

export const resetTemplate = () => {
  colorPanelsRemove();
  colorContainer.style.display = 'none';
  multipleColorsContainer.style.display = 'none';
  if (document.querySelector('.gameOverH1')) { document.querySelector('.gameOverH1').remove() };
}

export const gameOverTemplate = () => {
  cancelAnimationFrame(timeProvider);
  colorPanelsRemove();
  multipleColorsContainer.style.display = 'none';
  guess.style.display = 'none';
  let gameOverH1 = document.createElement('h1');
  gameOverH1.classList.add('gameOverH1');
  gameOverH1.innerText = 'Game Over!';
  colorContainer.appendChild(gameOverH1);
  timeContainer.style.display = 'none';
}


export const clickTemplate = (color, time) => {
  setTimeout(function bodyColor() { body.style.backgroundColor = color });
  setTimeout(function bodyColor() { body.style.backgroundColor = '#081c15' }, time);
}

export const recordInnerTEXT = () => {
  switch (difficultSelector.value) {
    case '3':
      record.innerHTML = `Record: ${gameVariables.record.easy}`;
      break;
    case '6':
      record.innerHTML = `Record: ${gameVariables.record.medium}`;
      break;
    case '9':
      record.innerHTML = `Record: ${gameVariables.record.hard}`;
      break;
  }
}