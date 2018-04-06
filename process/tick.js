// Next TICK ONE, 
// Next TICK TWO, 
// Next TICK THREE, 
// Next TICK FOUR, 
// TIMEOUT AFTER-ONE
// TIMEOUT AFTER-TWO
// TIMEOUT AFTER-THREE
function fn(name){
   return f;

   function f(){
       var n = name;
       console.log("Next TICK "+n+", ");
   }
}

function myTimeout(time,msg){
   setTimeout(function(){
       console.log("TIMEOUT "+msg);
   },time);
}

process.nextTick(fn("ONE"));
myTimeout(0,"AFTER-ONE");// set timeout to execute in 0 seconds for all
process.nextTick(fn("TWO"));
myTimeout(0,"AFTER-TWO");
process.nextTick(fn("THREE"));
myTimeout(0,"AFTER-THREE");
process.nextTick(fn("FOUR"));