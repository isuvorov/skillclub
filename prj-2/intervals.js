var times = 10;
var intervalId = setInterval(function(){
    console.log(new Date());
    times--;
    if(!times){
        clearInterval(intervalId);
    }

}, 1000);