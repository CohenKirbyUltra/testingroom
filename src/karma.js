document.getElementById("karma").play();

const codes = ["109983", "722020"];

var InputerCode = document.getElementById("karmainput");
var Happybtn = document.getElementById("submithappiness");
var currentValue = "";
Happybtn.disabled = true;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

window.addEventListener("keypress", function() {
    currentValue = InputerCode.value;

    if (currentValue !== "") {
        Happybtn.disabled = false;
        Happybtn.innerHTML = "Happy";
    } else {
        Happybtn.enabled = true;
        Happybtn.innerHTML = "...";
    }
    KeyClick();
})

Happybtn.onClick = function() {
  Submit();
}

function Submit() {
    if (!currentValue === codes[0] && !currentValue === codes[1]) {
        alert("Failure.")
        location.replace("https://cohenkirbyultra.github.io/testingroom/index.html");
    } else {
        if (currentValue === codes[0]) {
            location.replace("https://cohenkirbyultra.github.io/testingroom/pages/smile/Cohen.html"); 
        }
        if (currentValue === codes[1]) {
            alert("How do you know that?");
            location.replace("https://cohenkirbyultra.github.io/testingroom/index.html");
        }
    }
}
// sfx stuff
var Sfx = new Audio();
Sfx.src = "audio/sfx/key1.wav";
Sfx.loop = false;
Sfx.type = "audio/wav";
//Audio Keys
function PlaySfx(type) {
    switch(type) {
    case 0:
            Sfx.src = "audio/sfx/key1.wav";                
            break;
    case 1:
            Sfx.src = "audio/sfx/key2.wav";  
            break;
    case 2:
            Sfx.src = "audio/sfx/key3.wav";  
            break;
    case 3:
            Sfx.src = "audio/sfx/key4.wav";  
            break;
    case 4:
            Sfx.src = "audio/sfx/key5.wav";  
            break;
    default:
            console.log("Error, over sfx limit");
            alert("Actual dev error: rng over limit of sfx type");
            break;
    }
            Sfx.pause();
            Sfx.currentTime = 0;

            Sfx.play();
}

function KeyClick() {
    let Key = getRndInteger(0, 4);

    switch (Key) {
        case 0:
            PlaySfx(0);
            break;
        case 1:
            PlaySfx(1);
            break;
        case 2:
            PlaySfx(2);
            break;
        case 3:
            PlaySfx(3);
            break;
        case 4:
            PlaySfx(4);
            break;
        default:
            console.log("Error, over sfx limit");
            alert("Actual dev error: rng over limit of sfx type");
            break;
    }
}