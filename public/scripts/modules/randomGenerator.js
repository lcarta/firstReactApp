let rand = {
  r: 0,
  g: 0,
  b: 0
}

const difficultSelector = document.querySelector('.difficultSelector');
let casual;

export const randomGenerator = () => {
  for (let i = 0; i <= 2; i++) {
    rand.r = (Math.floor(Math.random() * 256));
    rand.g = (Math.floor(Math.random() * 256));
    rand.b = (Math.floor(Math.random() * 256));
  }
  return rand
}

export const casualNumber = () => {
  casual = (Math.floor(Math.random() * (difficultSelector.value)));
  return casual;
}

export { rand, casual }