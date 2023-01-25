
import { gameVariables } from "./gameVariables.js";
import { lifeContainer } from "./querySelectorModule.js";
import { gameOverTemplate } from "./gameTemplateModule.js";

export const lifeGenerator = () => {
  const heartLife = document.querySelectorAll('.material-symbols-outlined');
  for (let i = 0; i < gameVariables.life - heartLife.length; i++) {
    let newLife = document.createElement('span');
    newLife.classList.add('material-symbols-outlined');
    newLife.innerText = 'favorite';
    lifeContainer.appendChild(newLife);
  }
}

export const lifeRemove = () => {
  if (document.querySelectorAll('.material-symbols-outlined').length > 1) {
    document.querySelector('.material-symbols-outlined').remove();
  } else {
    document.querySelector('.material-symbols-outlined').remove();
    gameOverTemplate();
    gameVariables.life = 3;
  }
}