const clock = document.querySelector('#clock');
//this method is used to repeat a task at aparticular interval of time.
//first arguement is a function and the second is interval in ms.

setInterval(function (){
    let date=new Date();
    clock.innerHTML=date.toLocaleTimeString();
},1000)
