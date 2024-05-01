let timer = document.getElementById('time')
let timer2 = document.getElementById('time2')
let timer3 = document.getElementById('time3')


let hour = 0;
let minute = 0;
let second = 0;
var clock;

function startTimer() {
    clearInterval(clock)
    clock = setInterval(() => {
        second++;
        if (second > 59) {
            second = 0;
            minute++;
        }else if (minute > 59) {
            second = 0;
            minute = 0;
            hour++;
        }

        timer.innerText = `${hour.toString().padStart(2, '0')}`
        timer2.innerText = `${minute.toString().padStart(2, '0')}`
        timer3.innerText = `${second.toString().padStart(2, '0')}`
    }, 1000);
}
function stopTimer() {
    clearInterval(clock)
}
function resetTimer() {
    clearInterval(clock)

    hour = 0;
    minute = 0;
    second = 0;
    timer.innerText = `${hour.toString().padStart(2, '0')}`
    timer2.innerText = `${minute.toString().padStart(2, '0')}`
    timer3.innerText = `${second.toString().padStart(2, '0')}`

}