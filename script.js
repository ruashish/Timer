 const time_er = document.querySelector('.watch .time');
 const start_btn = document.getElementById('start');
 const pause_btn = document.getElementById('pause');
 const reset_btn = document.getElementById('reset');


 let seconds = 0;
 let interval= null;

 start_btn.addEventListener('click', start);
 pause_btn.addEventListener("click", pause);
 reset_btn.addEventListener ("click", reset);

 function timer()
 {
    seconds++;

    let hrs = Math.floor(seconds/3600);
    let mins = Math.floor((seconds-(hrs *3600))/60);
    let secs = seconds % 60;

    if(secs < 10) secs ='0' + secs;
    if(mins < 10) mins ="0" + mins;
    if(hrs < 10)  hrs ="0" + hrs;


    time_er.innerText = `${hrs}:${mins}:${secs}`;
 }

 timer();

 function start () {
   if(interval){
      return
   }
   interval = setInterval(timer,1000);
 }

 function stop (){
   clearInterval(interval);
   interval = null;
 }

 function reset (){
   stop();
   seconds = 0;
   time_er.innerText= '00:00:00';
 }