export const time = {
  increment: 0,
  startTime: 1999,
  score: 1999,
  milliseconds: 0,
  seconds: 0
}
const timeContainer = document.querySelector('.timeContainer');
export let timeProvider;

export const timeCounter = () => {
  time.milliseconds = String((time.startTime - parseInt(time.increment * 100 / 60)) % 99).padStart(2, '0');
  time.seconds = String((time.startTime - parseInt(time.increment / 60)) % 20).padStart(2, '0');
  timeContainer.innerHTML = `Time: ${time.seconds}.${time.milliseconds}`;
  time.increment += 1;
  if (time.seconds <= 5) { timeContainer.style.color = '#c9184a' };
  timeProvider = requestAnimationFrame(timeCounter);
  if (time.seconds == 0) { cancelAnimationFrame(timeProvider) }
}

export const reset = () => {
  cancelAnimationFrame(timeProvider);
  timeContainer.innerHTML = 'Time: 20.00';
  const score = document.querySelector('.score');
  score.innerHTML = 'Score: 0';
  time.increment = 0;
}


export const wrong = () => {
  cancelAnimationFrame(timeProvider);
  timeContainer.innerHTML = 'Time: 20.00';
  time.increment = 0;
  startButton.style.display = 'none';
  resetButton.style.display = 'block';
  timeProvider
}