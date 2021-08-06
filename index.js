const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];
const startBtn = document.querySelector(".js-start");
const stopBtn = document.querySelector(".js-stop");
let TimerId = null;

startBtn.addEventListener("click", () => {
  TimerId = setInterval(() => {
    let color = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = color;
    startBtn.disabled = true;
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(TimerId);
  startBtn.disabled = false;
});
