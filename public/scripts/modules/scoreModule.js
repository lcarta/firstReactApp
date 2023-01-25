import { myRandomcolor } from "./querySelectorModule.js";
import { clickedColor } from "./randomColorModule.js";
import { score, record, difficultSelector } from "./querySelectorModule.js";
import { lifeRemove } from "./lifeModule.js";
import { gameVariables } from "./gameVariables.js";
import { panelsRandomColor } from "./randomColorModule.js";
import { colorPanelsRemove, clickTemplate } from "./gameTemplateModule.js";
import { gameWinner } from "./timeModule.js";

const isRightColor = () => {
  gameVariables.score = (gameVariables.score + parseInt(gameVariables.milliseconds));
  score.innerHTML = `Score: ${gameVariables.score}`;
  recordCounter();
  clickTemplate('#1b4332', 60);
  gameWinner(gameVariables.score);
  colorPanelsRemove();
  panelsRandomColor();
}

const isWrongColor = () => {
  lifeRemove();
  clickTemplate('#641220', 200);
}

export const scoreCounter = () => {
  if (clickedColor == myRandomcolor.innerHTML) {
    isRightColor();
  } else isWrongColor();
}

export const recordCounter = () => {
  switch (difficultSelector.value) {
    case '3':
      if (gameVariables.record.easy <= gameVariables.score) {
        console.log(gameVariables.record.easy, gameVariables.score)
        gameVariables.record.easy = gameVariables.score;
        record.innerHTML = `Record: ${gameVariables.record.easy}`;
      }
      break;
    case '6':
      if (gameVariables.record.medium <= gameVariables.score) {
        gameVariables.record.medium = gameVariables.score;
        record.innerHTML = `Record: ${gameVariables.record.medium}`;
      }
      break;
    case '9':
      if (gameVariables.record.hard <= gameVariables.score) {
        gameVariables.record.hard = gameVariables.score;
        record.innerHTML = `Record: ${gameVariables.record.hard}`;
      }
      break;
  }
}