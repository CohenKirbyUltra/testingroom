document.getElementById("karma").play();

const codes = ["109983", "722020"];

var InputerCode = document.getElementById("karmainput");
var Happybtn = document.getElementById("submithappiness");
var currentValue = "";
Happybtn.disabled = true;

var Unlock = new Audio();
Unlock.preload;
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
setInterval(function() {
    currentValue = InputerCode.value;

    if (currentValue > 0) {
      Happybtn.disabled = false;
      Happybtn.innerHTML = "Happy";
    } else {
      Happybtn.enabled = true;
      Happybtn.innerHTML = "...";
    }  
}, 500);

window.addEventListener("keypress", function() {
  KeyClick();
});

document.getElementById("submithappiness").addEventListener("click", Submit);

function Submit() {
  Unlock.src = "audio/sfx/unlock_locket.wav";
  Unlock.loop = false;
  Unlock.type = "audio/wav";

    switch(currentValue) {
        case codes[0]:
            document.getElementById("locket").opacity = 0;
            document.getElementById("karma").pause();
            Unlock.play();
            setTimeout(() => {
              location.replace("https://cohenkirbyultra.github.io/testingroom/pages/smile/Cohen.html");        
            }, 2000);
            break;
        case codes[1]:
            document.getElementById("locket").opacity = 0;
            document.getElementById("karma").pause();
            Unlock.play();
            setTimeout(() => {
              location.replace("https://cohenkirbyultra.github.io/testingroom/happy.html");        
            }, 2000);
            break;
        default:
            Failure.play();
            window.alert("Failure.");
            setTimeout(function() {location.replace("about:blank");}, 1000);
            break;
    }
}

// sfx stuff

var Keyboard = new Audio();
Keyboard.src = "https://cohenkirbyultra.github.io/testingroom/audio/sfx/Key1.wav";
Keyboard.loop = false;
Keyboard.type = "audio/wav";
//Audio Keys
function PlaySfx(type) {
  switch (type) {
    case 0:
      Keyboard.src = "https://cohenkirbyultra.github.io/testingroom/audio/sfx/Key1.wav";
      break;
    case 1:
      Keyboard.src = "https://cohenkirbyultra.github.io/testingroom/audio/sfx/Key2.wav";
      break;
    case 2:
      Keyboard.src = "https://cohenkirbyultra.github.io/testingroom/audio/sfx/Key3.wav";
      break;
    case 3:
      Keyboard.src = "https://cohenkirbyultra.github.io/testingroom/audio/sfx/Key4.wav";
      break;
    case 4:
      Keyboard.src = "https://cohenkirbyultra.github.io/testingroom/audio/sfx/Key5.wav";
      break;
    default:
      console.log("Error, over sfx limit");
      alert("Actual dev error: rng over limit of sfx type");
      break;
  }
  // immediately play
  Keyboard.play();
}

// generates random number to play sfx randomly
function KeyClick() {
  Keyboard.pause();
  Keyboard.currentTime = 0;
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
