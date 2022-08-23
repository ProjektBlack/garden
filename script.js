const startingMinutes = 0.1;
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
}
function startTimer()
{
    setInterval(updateTimer,1000);
}
