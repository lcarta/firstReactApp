let rand = {
  r: 0,
  g: 0,
  b: 0
}


export const randomGenerator = () => {
  for (let i = 0; i <= 2; i++) {
    rand.r = (Math.floor(Math.random() * 256));
    rand.g = (Math.floor(Math.random() * 256));
    rand.b = (Math.floor(Math.random() * 256));
  }
  return rand
}

export { rand }