const startingMinutes = 10;
let time = startingMinutes * 60;
const countdownEl = document.getElementById('countdown');
isStopped = false;
function updateTimer() {
    const minutes = Math.floor(time/60);
    let seconds = time % 60;
    if(seconds<10)
    {
        seconds = '0' + seconds;
    }else{
        seconds = seconds;
    }
    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;
    if(time==0)
    {
        stopTimer();
        countdownEl.innerHTML = `${0}: ${"00"}`;
    }
}
function startTimer()
{
    timerInterval = setInterval(updateTimer,1000);
}
function stopTimer()
{
    clearInterval(timerInterval);
    time = startingMinutes*60;
    countdownEl.innerHTML = `${10}: ${"00"}`;
}
