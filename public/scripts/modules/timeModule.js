import { gameVariables } from "./gameVariables.js";
import { score, timeContainer } from "./querySelectorModule.js";
import { lifeRemove } from "./lifeModule.js";
import { clickTemplate } from "./gameTemplateModule.js";

export let timeProvider;

export const timeCounter = () => {
  gameVariables.increment++;
  gameVariables.milliseconds = parseInt(gameVariables.startTime - gameVariables.increment * 100 / 60);
  gameVariables.seconds = parseInt(gameVariables.startTime / 100 - gameVariables.increment / 60);
  timeContainer.innerHTML = `Time: ${String((gameVariables.seconds) % 20).padStart(2, '0')}.${String((gameVariables.milliseconds) % 99).padStart(2, '0')}`;
  if (gameVariables.seconds <= 5) { timeContainer.style.color = '#c9184a' };
  timeProvider = requestAnimationFrame(timeCounter);
  if (gameVariables.milliseconds == 0) {
    clickTemplate('#641220', 200);
    lifeRemove();
    gameVariables.milliseconds = 0;
    gameVariables.increment = 0;
    timeContainer.style.color = '#b7e4c7'
  }
}

export const gameWinner = (value) => {
  gameVariables.milliseconds = 0;
  gameVariables.increment = 0;
  timeContainer.style.color = '#b7e4c7'
  score.innerHTML = `Score: ${value}`;
}

export const reset = (value = 0) => {
  cancelAnimationFrame(timeProvider);
  gameVariables.milliseconds = 0;
  gameVariables.score = 0;
  gameVariables.increment = 0;
  timeContainer.style.color = '#b7e4c7'
  timeContainer.innerHTML = 'Time: 20.00';
  score.innerHTML = `Score: ${value}`;
}