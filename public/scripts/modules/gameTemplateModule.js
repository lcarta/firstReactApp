import { difficultSelector } from "./querySelectorModule.js";
import { lifeGenerator } from "./lifeModule.js";
import { playerStatus, colorContainer, multipleColorsContainer } from "./querySelectorModule.js";

const colorPanelsRemove = () => {
  if (document.querySelector('.color0')) {
    for (let i = 0; i < difficultSelector.value; i++) {
      document.querySelector(`.color${i}`).remove();
    }
  }
}

export const startTemplate = () => {
  colorPanelsRemove();
  playerStatus.style.display = 'flex';
  colorContainer.style.display = 'flex';
  multipleColorsContainer.style.display = 'flex';
  lifeGenerator();
}

export const resetTemplate = () => {
  colorPanelsRemove();
  colorContainer.style.display = 'none';
  multipleColorsContainer.style.display = 'none';
  lifeGenerator();
}

