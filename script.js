let [seconds, minutes]=[0,0];
let time=document.getElementById("time");
let timer=null;

function stopWatch() {
    seconds = (seconds + 1) % 60; // Increment seconds and wrap at 60
    if (seconds === 0) {
        minutes = minutes + 1; // Increment minutes every time seconds reach 60
    }
    updateDisplay();
}
function watchStart(){
    if(timer!=null){
        clearInterval(timer);
    }
    timer=setInterval(stopWatch,1000);
}
function updateDisplay(){
    let m=minutes<10?"0"+minutes:minutes;
    let s=seconds<10?"0"+seconds:seconds;
    time.innerHTML=m+":"+s;
}
function watchStop(){
    clearInterval(timer);
}
function watchReset(){
    clearInterval(timer);
    [seconds,minutes]=[0,0];
    updateDisplay();
}
document.querySelector(".btn-success").addEventListener("click",watchStart);
document.querySelector('.btn-danger').addEventListener("click",watchStop);
document.querySelector(".btn-info").addEventListener("click",watchReset);