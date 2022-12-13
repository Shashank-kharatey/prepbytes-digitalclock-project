let liveTime = () => {
    let dateTime = new Date();
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    let zone = document.getElementById("zone");
  
    //   AM PM
    hrs >= 12 ? (zone.innerHTML = "PM") : (zone.innerHTML = "AM");
  
    //   Greet message according to live clock
    if (hrs < 12) {
      var greeting = "Good Morning, Adarsh!";
    }
    if (hrs >= 12 && hrs <= 18) {
      var greeting = "Good Afternoon, Adarsh!";
    }
    if (hrs >= 18 && hrs <= 24) {
      var greeting = "Good Evening, Adarsh!";
    }
    document.getElementById("greet-text").innerHTML = greeting;
  
    //   12 hour format
    if (hrs > 12) {
      hrs -= 12;
    }
  
    //   live clock time render
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("seconds").innerHTML = sec;
  };
  
  setInterval(liveTime);
  
  const button = document.getElementById("btn");
  button.addEventListener("click", () => {
      buttonFunctionality();
  });
  
  let buttonFunctionality = () => {
      textDisplay();
      changeDisplay();
  }
  
  // to display text from select option
  function textDisplay() {
    let wakeValue = document.getElementById("wakeValue").value;
    document.getElementById("displayWake").innerHTML = wakeValue;
    let lunchValue = document.getElementById("lunchValue").value;
    document.getElementById("displayLunch").innerHTML = lunchValue;
    let napValue = document.getElementById("napValue").value;
    document.getElementById("displayNap").innerHTML = napValue;
  //   changeDisplay();
  }
  
  // text and image change
  
  let changeDisplay = () => {
      // console.log("changedisplaywork")
    let dateTime = new Date();
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
  
    hrs >= 12 ? (zone.innerHTML = "PM") : (zone.innerHTML = "AM");
  
    if (hrs > 12) {
      hrs -= 12;
      hr = hrs;
    } else {
      hr = hrs;
    }
  
    let arr1 = wakeValue.value.split(" ");
    let arr2 = lunchValue.value.split(" ");
    let arr3 = napValue.value.split(" ");
  
    if (arr1[0] == hr && arr1[1] == zone.innerHTML) {
      console.log("if Morning");
      document.getElementById('changeMessage').innerText="Grab some Healthy BreakFast!!!";
      document.getElementById('images').src = "assets/img_1.svg"
    }
    else if(arr2[0] == hr && arr2[1] == zone.innerHTML) {
      console.log("if Lunch");
      document.getElementById('changeMessage').innerText="Let's have some lunch";
      document.getElementById('images').src = "assets/lunch-img.svg"
    } else if(arr3[0] == hr && arr3[1] == zone.innerHTML){
      console.log("if Nap");
      document.getElementById('changeMessage').innerText="Sleep is the best meditation!";
      document.getElementById('images').src = "assets/dinner-img.svg";
    }
  };