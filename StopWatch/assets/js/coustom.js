let btnstart = document.querySelector('.start');
let btnstop = document.querySelector('.stop');
let btnreset = document.querySelector('.reset');
let hrs=min=sec=ms=0,startTimer;

btnstart.addEventListener('click',()=>{
    btnstart.classList.add('start-active')
    btnstop.classList.remove('stop-active')
    startTimer=setInterval(() => {
        ms++;
        if(ms==100){
            sec++;
            ms=0;
        }
        if(sec==60){
            min++;
            sec=0;
        }
        if(min==60){
            hrs++;
            min=0;
        }
        displayTime();
    }, 10);
});

btnstop.addEventListener('click',()=>{
    clearInterval(startTimer);
    btnstart.classList.remove('start-active')
    btnstop.classList.add('stop-active')
});

btnreset.addEventListener('click',()=>{
    hrs=min=sec=ms=0;
    clearInterval(startTimer);
    displayTime();
    btnstart.classList.remove('start-active')
    btnstop.classList.remove('stop-active')
});

function displayTime(){
    document.querySelector('.hrs').innerHTML= hrs<10? '0'+hrs :hrs;
    document.querySelector('.min').innerHTML= min<10? '0'+min :min;
    document.querySelector('.sec').innerHTML= sec<10? '0'+sec :sec;
    document.querySelector('.ms') .innerHTML= ms<10? '0'+ms :ms;
}