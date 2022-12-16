function updateHour(){
    const hourNow = new Date();
    //get hour
    let newHour = hourNow.getHours();
    //display hour on the screen
    document.getElementById('hour').innerHTML = newHour ;
    if(newHour>12){
        document.getElementById('hour').innerHTML = newHour-12;
    }else{
       
    }

};
setInterval(updateHour, 1000);



function updateMinute(){
    //get local time
    const minuteNow = new Date();
    //get minutes
    let newMinute = minuteNow.getMinutes();
    //display minutes on the screen
    document.getElementById('minute').innerHTML = newMinute;
    if(newMinute<10){
        document.getElementById('minute').innerHTML = "0"+newMinute;
    }else{
    
    };
    if(newMinute>0 || document.getElementById('hour').value>=12){
        document.getElementById('partOfDay').innerText = "PM";
    }else{
        document.getElementById('partOfDay').innerText = "AM";
    }
};
// update minutes screen every second
setInterval(updateMinute, 1000);



// wright two zero instead of one for not to look ugly
