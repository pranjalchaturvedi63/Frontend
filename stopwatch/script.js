
let startBtn=document.getElementById("start");
let stopBtn=document.getElementById("stop");
let resetBtn=document.getElementById("reset");

let timerDisplay=document.querySelector('.timerDisplay');

let msc=0;
let sec=0;
let min=0;

let timer=null;

startBtn.addEventListener('click',()=>{
    if(timer!==null){
        clearInterval(timer);
    }
     timer=setInterval(startTimer,10);
});

stopBtn.addEventListener('click',()=>{
    clearInterval(timer);
});
reset.addEventListener('click',()=>{
    clearInterval(timer);
    msc=0;
    sec=0;
    min=0;
    timerDisplay.innerHTML="00 : 00 : 00";
});


function startTimer(){
    msc++;
    if(msc==100){
        msc=0;
        sec++;

        if(sec==60){
            sec=0;
            min++;
        }
    }
    let mseStr=msc<10?`0${msc}`:`${msc}`;
    let secStr=sec<10?`0${sec}`:`${sec}`;
    let minStr=min<10?`0${min}`:`${min}`;

    timerDisplay.innerHTML=`${minStr} : ${secStr} : ${mseStr} `;
};

