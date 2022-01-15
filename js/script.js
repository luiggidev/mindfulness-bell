const shortBell = new Audio("bells/shortBell.mp3");
const longBell = new Audio("bells/longBell.mp3");
const timerContent = document.getElementById("timer");

function pauseBell() {
  shortBell.pause();
  clearInterval(myInterval);
  timerContent.innerHTML = '';
}

function setFutureTime() {
  // timeToAddInMinutes = 15;
  timeToAddInSeconds = 7;
  future = new Date();
  // future.setMinutes( future.getMinutes() + timeToAddInMinutes );
  future.setSeconds( future.getSeconds() + timeToAddInSeconds );
}

function firstStartBell() {
  console.log('firstStartBell ran');
  myInterval = setInterval('updateTimer()', 1000);
  setFutureTime();
  setTimeout(startBell, 1000);
  // startBell();
}

function startBell() {
  console.log('startBell ran')
  shortBell.volume = 0.1;
  shortBell.play();
}

function updateTimer() {
  console.log(updateTimer);
  now = new Date();
  diff = future - now;

  days = Math.floor(diff / (1000 * 60 * 60 * 24));
  hours = Math.floor(diff / (1000 * 60 * 60));
  mins = Math.floor(diff / (1000 * 60));
  secs = Math.floor(diff / 1000);

  d = days;
  h = hours - days * 24;
  m = mins - hours * 60;
  s = secs - mins * 60;

  const timerZero = '<div class="countdown-text font-size text-bold">Remaining time</div>';
  let timerDynamic = '<div class="countdown-text font-size text-bold">Remaining time</div><div class="countdown-timer text-bold">' + m + '<span>:</span>' + s + '</div>';
  
  timerContent.innerHTML = timerDynamic;

  // If minute loops over and is higher then 59 startbell and reset time.
  // ! Add restriction, user cant add a number higher then 59 in this scenario.
  if( m >= 59 ){
    timerContent.innerHTML = timerZero;

    setFutureTime();
    startBell();
  }
}
