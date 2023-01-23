import { difficultSelector } from "./querySelectorModule.js";

const randomNumber = (value) => { return Math.floor(Math.random() * value) }

export const randomColorGenerator = () => {
  let r = randomNumber(256);
  let g = randomNumber(256);
  let b = randomNumber(256);
  return `rgb(${r}, ${g}, ${b})`
}

export const casualNumber = () => { return `.color${randomNumber(difficultSelector.value)}` }