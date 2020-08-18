var count = 0

var num1heading = document.getElementById("num1");
var num2heading = document.getElementById("num2");
var num3heading = document.getElementById("num3");
var startbtn = document.getElementById("btn")
var messages = document.getElementById("messages")
var randomNum1 = 0;
var randomNum2 = 0;
var randomNum3 = 0;

var interval1 = setInterval(() => {
    randomNum1 = Math.floor(Math.random() * 9);
    num1heading.innerText = randomNum1;
}, 30)

var interval2 = setInterval(() => {
    randomNum2 = Math.floor(Math.random() * 9);
    num2heading.innerText = randomNum2;
}, 30)

var interval3 = setInterval(() => {
    randomNum3 = Math.floor(Math.random() * 9);
    num3heading.innerText = randomNum3;
}, 30)


function stop() {
    if (count == 0) {
        clearInterval(interval1);
        count++;
        startbtn.innerHTML = "stop Box-2"
    } else if (count == 1) {
        clearInterval(interval2);
        count++;
        startbtn.innerHTML = "stop Box-3"
    } else if (count == 2) {
        clearInterval(interval3);
        messages.style.display = "block";
        if (randomNum1 == randomNum2 && randomNum2 == randomNum3) {
            messages.innerHTML = "Mubark Ho...";
        } else {
            messages.innerHTML = "Sorry!!!";
        }
        setTimeout(() => {
            location.reload();
        }, 1000)
    }
}