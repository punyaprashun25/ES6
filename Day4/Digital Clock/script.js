// setInterval
const myInterval = setInterval(()=>{
    const date = new Date();
    document.getElementById("clock").innerHTML = date.toLocaleTimeString();
}, 1000);

// setTimeout
setTimeout(()=>{
    
    document.getElementById("clock").innerHTML = "Clock stopped!!";
    // clearing setInterval
    clearInterval(myInterval);
},5000);

// Note : Above code is used to update the time for 5s after that clock will stop.