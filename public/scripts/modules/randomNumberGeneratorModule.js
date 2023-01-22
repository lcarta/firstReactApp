const difficultSelector = document.querySelector('.difficultSelector');

const randomNumber = (value) => { return Math.floor(Math.random() * value) }

export const randomGenerator = () => {
  let r = randomNumber(256);
  let g = randomNumber(256);
  let b = randomNumber(256);
  return `rgb(${r}, ${g}, ${b})`
}

export const casualNumber = () => {
  let casual = randomNumber(difficultSelector.value);
  return `color${casual}`
}