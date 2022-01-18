const shortBell = new Audio("bells/shortBell.mp3");
const longBell = new Audio("bells/longBell.mp3");
const timerContent = document.getElementById("timer");

// let isBellEnabled = true;
let isDebug = false;
let intervals = [];

function logFunctionName(arguments) {
  if (isDebug){
    let functionName = (arguments) ? 'Function: ' + arguments.callee.name + '() ran' : 'Error, logFunctionName() arguments not present';
    console.log(functionName);
  }
}

//! this will be a user defined value later on
function setFutureTime() {
  logFunctionName(arguments);

  timeToAddInMinutes = 15;
  timeToAddInSeconds = 7;
  future = new Date();
  // future.setMinutes( future.getMinutes() + timeToAddInMinutes );
  future.setSeconds( future.getSeconds() + timeToAddInSeconds );
}

function strikeBell(bell) {
  logFunctionName(arguments);
  // console.log(bell.duration);

  bell.volume = 0.001;
  bell.play();
}

function startBell() {
  logFunctionName(arguments);

  if (intervals.length == 0){
    setFutureTime();
    myInterval = setInterval('updateTimer()', 1000);
    intervals.push(myInterval); //in case the first check fails
    setTimeout(strikeBell(shortBell), 1000);

  } else {
    if(isDebug){
      console.log('else catch')
    }
    pauseBell()
    setFutureTime();
    myInterval = setInterval('updateTimer()', 1000);
    intervals.push(myInterval); //in case the first check fails
    setTimeout(strikeBell(shortBell), 1000);
  }
}

function pauseBell() {
  logFunctionName(arguments);

  if ( intervals.length > 0 ){

    for(interval in intervals) {
      clearInterval(intervals[interval]);
    }
    timerContent.innerHTML = '';
    shortBell.pause();
    longBell.pause();
    shortBell.currentTime = 0;
    longBell.currentTime = 0;
    intervals = [];

  } else if( intervals.length == 0 && isDebug ) {
    console.log('Catch, there is no interval set yet to pause')
  }
}

function updateTimer() {
  logFunctionName(arguments);

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
    strikeBell(shortBell);
  }
}
