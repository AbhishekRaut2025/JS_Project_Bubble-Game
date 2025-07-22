var time = 60;
var score = 0;
var hitrn = 0;


// make bubbles
function makeBubble() {
    var clutter = "";
    for (var i = 0; i <= 101; i++) {
        var randomNumber = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${randomNumber}</div>`;               //this will create 101 div tags in clutter
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

// timer 
function runTimer() {
    var timer = setInterval(function () {
        if (time >= 0) {
            document.querySelector("#timerVal").textContent = time;
            time--;
        }
        else {
            clearInterval(timer);
            document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER </h1>`;
        }
    }, 1000);

}

// count hit and print
function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").textContent = hitrn;
}

function increaseScore() {
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}


document.querySelector("#pbtm").addEventListener("click", function (dets) {
    var clickedNumber = Number(dets.target.textContent);
    if (clickedNumber === hitrn) {
        increaseScore();
        makeBubble();
        getNewHit();
    }
})






makeBubble();
runTimer();
getNewHit();

