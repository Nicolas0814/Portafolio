const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");

function updateTime() {
  const now = new Date();
  const offset = -2.25 * 60 * 60 * 1000;

  const colombiaTime = new Date(now.getTime() + offset);

  const seconds = colombiaTime.getSeconds();
  const minutes = colombiaTime.getMinutes();
  const hours = colombiaTime.getHours();

  const secondDegree = ((seconds / 60) * 360) + 90;
  const minuteDegree = ((minutes / 60) * 360) + 90;
  const hourDegree = ((hours / 12) * 360) + 90;

  secondHand.style.transform = `rotate(${secondDegree}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;

  setTimeout(updateTime, 1000);
}

window.addEventListener('load', function() {
  updateTime();
});






