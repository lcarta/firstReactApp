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
  gameVariables.record[difficultSelector.options[difficultSelector.selectedIndex].text.toLowerCase()].evaluate();
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