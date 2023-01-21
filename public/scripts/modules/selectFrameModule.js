export let clickedColor;

export const selection = () => {
  const colorPanel = document.querySelectorAll(`.colorPanel`);
  for (var i = 0; i < colorPanel.length; i++) {
    colorPanel[i].addEventListener('click', function () {
      clickedColor = this.style.backgroundColor;
    });
  }

}