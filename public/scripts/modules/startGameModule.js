

export const startTemplate = () => {
  if (document.querySelector('.color0')) {
    const difficultSelector = document.querySelector('.difficultSelector');
    let n = difficultSelector.value;
    console.log(n)
    for (let i = 0; i < n; i++) {
      const tagClass = `color${i}`;
      const frame = document.querySelector(`.${tagClass}`);
      frame.remove();
    }
  }
  const playerStatus = document.querySelector('.playerStatus')
  playerStatus.style.display = 'flex';
  const colorContainer = document.querySelector('.colorContainer')
  colorContainer.style.display = 'flex';
  const multipleColorsContainer = document.querySelector('.multipleColorsContainer')
  multipleColorsContainer.style.display = 'flex';
}