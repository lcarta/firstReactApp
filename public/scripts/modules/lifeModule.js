
import { gameVariables } from "./gameVariables.js";
import { heartLife, lifeContainer } from "./querySelectorModule.js";


export const lifeGenerator = () => {
  for (let i = 0; i < gameVariables.life - document.querySelectorAll('.material-symbols-outlined').length; i++) {
    let newLife = document.createElement('span');
    newLife.classList.add('material-symbols-outlined');
    newLife.innerText = 'favorite';
    lifeContainer.appendChild(newLife);
  }

}

export const lifeRemove = () => {
  console.log('wrong')
  if (document.querySelectorAll('.material-symbols-outlined').length > 0) {
    document.querySelector('.material-symbols-outlined').remove();
  } else {
    let lostH1 = document.createElement('h1');
    lostH1.classList.add('lostH1');
    lostH1.innerText = 'favorite';
    lifeContainer.appendChild(lostH1);
  }

}