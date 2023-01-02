   var hourval =document.getElementById("hour");
   var minutesval= document.getElementById("minutes");
   var secondval =document.getElementById("second");
   var  count=document.getElementById("msecond");
     var hour = 0;
    var minute = 0;
    var second = 0;
    var milisecond = 0;


    let timer = false;
    function settimer(){
    if(timer==true){
       milisecond = milisecond+1; //if timer= true then increase milisecond by 1. 
      count.innerHTML= milisecond  ;
      secondval.innerHTML=`${second} :`;
       minutesval.innerHTML=`${minute} :`;
       hourval.innerHTML=`${hour} :`;

     if(milisecond==100){
       second =second +1;
       milisecond=0;
      
     }
     if(second==60){
      minute= minute+1;
      second=0; 
     }
     if(minute==60){
      hour=hour+1;
      minute=0;
      second=0;  
   }
     
      setTimeout("settimer()",10) // set time interval on after 10milisecond,count 10 milisecond for 1 second
                                  //settimer() callafter every 10 miliseconds.
     }       
     

    }
  
 
  function start(){
    timer=true;
    settimer();
   
 }

 
   function stop(){
    timer=false;
 }

 
 function restart(){  //in restart timer stop and clean previeous count and set 00 to all. 
   timer = false;
     hour = 0;
     minute = 0;
     second = 0;
     milisecond = 0;
  
    count.innerHTML="00";
    secondval.innerHTML="00 :";
     minutesval.innerHTML="00 :";
     hourval.innerHTML="00 :";

 }
