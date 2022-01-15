const shortBell = new Audio("bells/shortBell.mp3");
const longBell = new Audio("bells/longBell.mp3");

function pauseBell() {
  shortBell.pause();
}

function setFutureTime() {
  timeToAddInMinutes = 15;
  timeToAddInSeconds = 6;
  future = new Date();
  // future.setMinutes( future.getMinutes() + timeToAddInMinutes );
  future.setSeconds( future.getSeconds() + timeToAddInSeconds );
}

function firstStartBell() {
  console.log('firstStartBell ran')
  startBell();
  myInterval = setInterval('updateTimer()', 1000);
  setFutureTime()
}

function startBell() {
  console.log('startBell ran')
  shortBell.volume = 0.1;

  shortBell.play();
}

function updateTimer() {
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

  document.getElementById("timer")
  .innerHTML =
  '<div>' + m + '<span>:</span>' + s + '</div>';

  // If minutes reaches 0.
  if(m>=59){
    clearInterval(myInterval);

    document.getElementById("timer")
    .innerHTML =
    '<div>' + 0 + '<span>:</span>' + 0 + '</div>';

    startBell();
    setFutureTime()
  }
}
