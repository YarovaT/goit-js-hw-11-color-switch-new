const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  btnStart: document.querySelector("button[data-action=start]"),
  btnStop: document.querySelector("button[data-action=stop]"),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let timerId = null;

function onClick() {
  let i = colors.length - 1;

  timerId = setInterval(() => {
    let index = randomIntegerFromInterval(0, i);
    document.body.style.background = `${colors[index]}`;

    if (timerId != 0) {
      refs.btnStart.removeEventListener("click", onClick);
    }
  }, 1000);
}

refs.btnStart.addEventListener("click", onClick);

refs.btnStop.addEventListener("click", () => {
  clearInterval(timerId);
  refs.btnStart.addEventListener("click", onClick);
});
