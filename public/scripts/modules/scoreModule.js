import { time } from "./timeModule.js";
import { casualColor } from "./randomColorModule.js";
import { wrong } from "./timeModule.js";
import { clickedColor } from "./randomColorModule.js";

const score = document.querySelector('.score');
let scoreValue = 0;

export const scoreCounter = () => {
  if (clickedColor == casualColor) {
    console.log(clickedColor, casualColor)
    let scoreAdd = (time.score - parseInt(time.increment * 100 / 60));
    scoreValue += scoreAdd
    console.log(time.score, time.increment, scoreAdd)
    score.innerHTML = `Score: ${scoreValue}`;
  }
}

