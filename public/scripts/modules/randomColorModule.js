let rand = [];


export const randomColor = (color) => {
  for (let i = 0; i <= 2; i++) {
    rand[i] = (Math.floor(Math.random() * 256));
  }
  return color.innerText = `rgb(${rand[0]}, ${rand[1]}, ${rand[2]})`
}

