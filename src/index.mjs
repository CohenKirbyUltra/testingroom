function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
var clicks = 0;
var funValue;
var randomchance = 0;
const text = [document.getElementById("text1"), document.getElementById("text2")];

//arg chance
setInterval(function() {
    randomchance = getRndInteger(0, 200);

    if (randomchance === 80) {
        text[0].innerHTML = "A webpaGe dedacated tO the local testing room!"; 
        text[1].innerHTML = "You might be woNdering to yoursElf if you have no context and clicked on this page, <a href='pages/about.html'>What is testingRoom?</a>";
        setTimeout(function() {
            text[0].innerHTML = "A webpage dedacated to the local testing room!";
            text[1].innerHTML = "You might be wondering to yourself if you have no context and clicked on this page, <a href='pages/about.html'>What is testing room?</a>";
        }, 500);
    }
}, 2000);


document.getElementById("titlescreen").addEventListener("click", check); // Randomizes the chance of getting rare screen

function check() {
    clicks += 1;
    let Fun = getRndInteger(0, 40);
    funValue = getRndInteger(0, 40);

    if (funValue === Fun) {
        window.blur();
        const locket = window.open("https://cohenkirbyultra.github.io/testingroom/happy.html", "Locket", "width=500, height=500"); locket.focus();
        var XX = 3;
        var y = 0;

    setInterval(() => {
        let x = 1;

        if (x === 0) {
            XX = getRndInteger(20, 40);
            y = getRndInteger(0, 1);
            x = 1
        }
        if (x === 1) {
            XX = getRndInteger(-20, -40);
            y = getRndInteger(-0, -1);
            x = 0;
        }
    }, 10000);


    function movingWindow() {
        locket.moveBy(XX, y);
    }

    setInterval(() => {
        movingWindow();
    }, 50);
}

    if (clicks === 40) {
        window.document.title = "Leave";
        window.alert("Stop.");
        document.querySelectorAll("center").forEach((index) => index.innerHTML = "LEAVE");
        setTimeout(function() {
        window.document.title = "GET OUT"
        }, 4000);
        setTimeout(close, 5000);
    }
}

function close() {
    location.replace("https://cohenkirbyultra.github.io/testingroom/lock.html");
}

function FlashText() {

}