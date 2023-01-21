import { time } from "./timeModule.js";
import { casualColor } from "./randomColorModule.js";
import { wrong } from "./timeModule.js";

const score = document.querySelector('.score');
let clickedColor;

let scoreValue = 0;
export const scoreCounter = () => {
  const colorPanel = document.querySelectorAll(`.colorPanel`);
  for (var i = 0; i < colorPanel.length; i++) {
    colorPanel[i].addEventListener('click', function () {
      clickedColor = this.style.backgroundColor;
      if (clickedColor == casualColor) {
        console.log(clickedColor, casualColor)
        let scoreAdd = (time.score - parseInt(time.increment * 100 / 60));
        scoreValue += scoreAdd
        console.log(time.score, time.increment, scoreAdd)
        score.innerHTML = `Score: ${scoreValue}`;
      } else {
        wrong();
      }
    });
  }
}

