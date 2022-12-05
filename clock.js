function Time(){
    
    let dt = new Date();
    let hour = dt.getHours()
    let min = dt.getMinutes()
    let sec = dt.getSeconds()
    if(hour>=12){
        document.querySelector("#session").textContent = "PM"
    }
    else{
        document.querySelector("#session").textContent = "AM"

    }



    if(hour>12){
        hour = hour-12
    }
    
    document.querySelector("#hour").textContent = `${hour}`;
    document.querySelector("#min").textContent= `${min}`;
    document.querySelector("#sec").textContent=`${sec}`;

}


setInterval(Time,1000)  // To make clock dynamic , caling the function at each interval of 1 second.



function fun(){
    document.querySelector("#alarm-btn").style.background="linear-gradient(to left,#6E54EC 25%,#CB52F8,#FC5EFF,#F1A7C5)"



    let wakeTime = document.querySelector("#drop-menu1").value;
    let lunchTime = document.querySelector("#drop-menu2").value;
    let napTime = document.querySelector("#drop-menu3").value;
    let nightTime = document.querySelector("#drop-menu4").value;

    let wakeArr = wakeTime.split(" ")
    let lunchArr = lunchTime.split(" ")
    let napArr = napTime.split(" ")
    let sleepArr = nightTime.split(" ")


    

    // time message box
    document.querySelector(".data").style.display="block"
    
    document.querySelector(".wakeData").textContent=`Wake Up Time : ${wakeTime}`;
    document.querySelector(".lunchData").textContent=`Lunch Time : ${lunchTime}`;
    document.querySelector(".napData").textContent=`Nap Time : ${napTime}`;
    document.querySelector(".nightData").textContent=`Night Time : ${nightTime}`;



    // image changing according to current time

    let currentTime = document.querySelector("#hour").textContent;
    let currentSession = document.querySelector("#session").textContent

    if(Number(currentTime)>=Number(wakeArr[0]) && Number(currentTime)<Number(wakeArr[3]) && currentSession===wakeArr[4]) {

        document.querySelector(".img").src="./assets/morning.jpg"
        document.querySelector(".msg1").textContent = "GOOD MORNING!! WAKE UP!!"
        document.querySelector(".msg2").innerHTML = "GRAB SOME HEALTHY BREAKFAST!!"
    }

    else if(Number(currentTime)>=Number(lunchArr[0]) && Number(currentTime)<Number(lunchArr[3]) && currentSession===lunchArr[4]){
        document.querySelector(".img").src="./assets/lunch_image@2x.jpg"
        document.querySelector(".msg1").textContent = "GOOD AFTERNOON!! TAKE SOME SLEEP!!"
        document.querySelector(".msg2").textContent = "LET'S HAVE SOME LUNCH!!"


    }
    else if(Number(currentTime)>=Number(napArr[0]) && Number(currentTime)<Number(napArr[3]) && currentSession===napArr[4]){
        document.querySelector(".img").src="./assets/Group 5183@2x.jpg"
        document.querySelector(".msg1").textContent = "GODD EVENING!!!!"
        document.querySelector(".msg2").textContent = "STOP! YAWNING,GET SOME TEA..!IT'S JUST EVENING."
        
    }
    else if(Number(currentTime)>=Number(sleepArr[0]) && Number(currentTime)<Number(sleepArr[3]) && currentSession===sleepArr[4]){
        document.querySelector(".img").src="./assets/Group 5194@2x.jpg";
        document.querySelector(".img").style.height= "250px"
        document.querySelector(".msg1").textContent = "GOOD NIGHT!!"
        document.querySelector(".msg2").textContent = "CLOSE YOUR EYES AND GO TO SLEEP!!"
        
    }
    
    


    



setInterval(fun,1000)  // To make the page dynamic according to time set, calling the function at each interval of 1 second.



}


document.querySelector("#alarm-btn").addEventListener("click",fun);