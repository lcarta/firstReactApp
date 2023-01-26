import { record } from "./querySelectorModule.js"

export const gameVariables = {
  life: 3,
  score: 0,
  record: {
    easy: { value: 0, evaluate: () => evaluateRecord('easy') },
    medium: { value: 0, evaluate: () => evaluateRecord('medium') },
    hard: { value: 0, evaluate: () => evaluateRecord('hard') }
  },
  increment: 0,
  startTime: 1999,
  milliseconds: 0,
  seconds: 0,
}

const evaluateRecord = (level) => {
  if (gameVariables.record[level.toLowerCase()].value <= gameVariables.score) {
    gameVariables.record[level.toLowerCase()].value = gameVariables.score;
    record.innerHTML = `Record: ${gameVariables.record[level.toLowerCase()].value}`;
  }
}