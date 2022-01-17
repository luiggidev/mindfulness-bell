const shortBell = new Audio("bells/shortBell.mp3");
const longBell = new Audio("bells/longBell.mp3");
const timerContent = document.getElementById("timer");

// let isBellEnabled = true;
// let shortLoaded = false;
// let LongLoaded = false;
let isdebug = true;

function logFunctionName(arguments) {
  let functionName = (arguments) ? 'Function: ' + arguments.callee.name + '() ran' : 'Error, logFunctionName() arguments not present';
  console.log(functionName);
}

function setFutureTime() {
  timeToAddInMinutes = 15;
  timeToAddInSeconds = 7;
  future = new Date();
  future.setMinutes( future.getMinutes() + timeToAddInMinutes );
  // future.setSeconds( future.getSeconds() + timeToAddInSeconds );
}

function strikeBell() {
  if (isdebug){
    logFunctionName(arguments);
    console.log(shortBell.duration);
  }
  shortBell.volume = 0.1;
  shortBell.play();
}

function startBell() {
  if (isdebug){
    logFunctionName(arguments);
  }
  setFutureTime();
  myInterval = setInterval('updateTimer()', 1000);
  setTimeout(strikeBell, 1000);
}

function pauseBell() {
  if (isdebug){
    logFunctionName(arguments);
  }
  shortBell.pause();
  clearInterval(myInterval);
  timerContent.innerHTML = '';
}

function updateTimer() {
  if (isdebug){
    logFunctionName(arguments);
  }
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

  // If minute loops over and is higher then 59 strikeBell and reset time.
  // ! Add restriction, user cant add a number higher then 59 in this scenario.
  if( m >= 59 ){
    timerContent.innerHTML = timerZero;
    setFutureTime();
    strikeBell();
  }
}
