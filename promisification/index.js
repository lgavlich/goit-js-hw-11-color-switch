const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const StartButton = document.querySelector(".js-start");
const StopButton = document.querySelector(".js-stop");
let TimerId = null;

StartButton.addEventListener("click", () => {
    TimerId = setInterval(() => {
        let color = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = color;
        StartButton.disabled = true;
    }, 1000);
});

StopButton.addEventListener("click", () => {
    clearInterval(TimerId);
    StartButton.disabled = false;
});