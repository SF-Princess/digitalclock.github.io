const hourEI = document.getElementById("hour")
const minuteEI = document.getElementById("minutes")
const secondEI = document.getElementById("seconds")
const ampmEI = document.getElementById("ampm")

function upadteClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if(h > 12){
        h = h - 12;
        ampm = "PM";
    }
     h = h < 10 ? "0" + h : h;
     m = m < 10 ? "0" + m : m;
     s = s < 10 ? "0" + s : s;

    hourEI.innerText = h;
    minuteEI.innerText = m;
    secondEI.innerText = s;
    ampmEI, (innerText = ampm);
    setTimeout(()=>{
    upadteClock()
    },1000
    )
}
upadteClock();