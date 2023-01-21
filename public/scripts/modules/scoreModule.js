import { time } from "./timeModule.js";
import { casualColor } from "./randomColorModule.js";
import { selection } from "./selectFrameModule.js";

const score = document.querySelector('.score');


let scoreValue = 0;
export const scoreCounter = () => {
  selection();
  //if (c0 == casualColor) {
  let scoreAdd = (time.score - parseInt(time.increment * 100 / 60));
  scoreValue += scoreAdd
  console.log(time.score, time.increment, scoreAdd)
  score.innerHTML = `Score: ${scoreValue}`;
  return
  //} return
}

