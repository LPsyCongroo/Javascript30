const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const t = document.querySelector('#top');
const r = document.querySelector('#right');
const b = document.querySelector('#bottom');
const l = document.querySelector('#left');

function setDate(){
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds/60) * 360 + 90; //Add 90 degrees to match the offset
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = (minutes/60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = (hours/12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  function activate(hour){
    hour.style.color = "#aaa";
    hour.style["text-shadow"]= "2px 2px 4px #334";
    hour.style["font-size"] = "5rem";
    hour.style["transform"] = "translate(-0.3rem, -1.4rem)";
  }
  function deactivate(hour){
    hour.style.color = "#112936";
    hour.style["text-shadow"]= "1px 1px 2px #aab";
    hour.style["font-size"] = "4rem";
  }
  hours === 12 || hours === 24 ? activate(t): deactivate(t);
  hours === 3 || hours === 15 ? activate(r): deactivate(r);  
  hours === 6 || hours === 18 ? activate(b): deactivate(b);
  hours === 9 || hours === 21 ? activate(l): deactivate(l);

  // Some debugging checks
  // console.log(seconds,"seconds");
  // console.log(minutes,"minutes");
  // console.log(hours, "hours");

}

setDate(); //Initialize the clock without a delay upon first opening the page
setInterval(setDate, 1000); //Interval for which to have the function called.
