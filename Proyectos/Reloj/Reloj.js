const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");

function updateTime() {

  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondDegree = ((seconds / 60) * 360) + 90;
  const minuteDegree = ((minutes / 60) * 360) + (seconds / 60) * 6 + 90; 
  const hourDegree = ((hours % 12) / 12) * 360 + (minutes / 60) * 30 + 90; 

  secondHand.style.transform = `rotate(${secondDegree}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;

  setTimeout(updateTime, 1000);
}

window.addEventListener('load', updateTime);






