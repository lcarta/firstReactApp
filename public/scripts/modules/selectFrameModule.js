export const selection = () => {
  const colorPanel = document.querySelectorAll(`.colorPanel`);
  console.log(colorPanel.length)
  for (var i = 0; i < colorPanel.length; i++) {
    colorPanel[i].addEventListener('click', prova);
    let clickedColor = this.style.backgroundColor;
    console.log(clickedColor)
  }

}