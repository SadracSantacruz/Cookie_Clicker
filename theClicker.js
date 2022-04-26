// this is for the cookies
let button = document.getElementById("clicker");
let numOfCookies = document.getElementById("cookieNumbers");

setInterval(function(){
    button.click()
    numOfCookies *= 5;
    
}, 0.1);

//Edit the corresponding elements to the variable names.