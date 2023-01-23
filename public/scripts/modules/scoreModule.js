import { time } from "./timeModule.js";
import { myRandomcolor } from "./querySelectorModule.js";
import { clickedColor } from "./randomColorModule.js";
import { score } from "./querySelectorModule.js";
import { lifeRemove } from "./lifeModule.js";


let scoreValue = 0;

export const scoreCounter = () => {
  if (clickedColor == myRandomcolor.innerHTML) {
    isRightColor();
  } else isWrongColor();
}

const isRightColor = () => {
  scoreValue += (time.score - parseInt(time.increment * 100 / 60))
  score.innerHTML = `Score: ${scoreValue}`;
}

const isWrongColor = () => {
  lifeRemove();
}