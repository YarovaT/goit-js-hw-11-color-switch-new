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

let i = randomIntegerFromInterval();
let timerId = null;

refs.btnStart.addEventListener("click", () => {
  timerId = setInterval(() => {
    i = i < colors.length ? (i += 1) : 0;
    document.body.style.background = colors[i];
    refs.btnStart.setAttribute("disabled", true);
  }, 1000);
});

refs.btnStop.addEventListener("click", () => {
  clearInterval(timerId);
  refs.btnStart.removeAttribute("disabled");
});
