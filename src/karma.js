document.getElementById("karma").play();

const codes = ["109983", "722020"];

var InputerCode = document.getElementById("karmainput");
var Happybtn = document.getElementById("submithappiness");
var currentValue = "";
Happybtn.disabled = true;

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

window.addEventListener("keypress", function () {
    KeyClick();
});
document.getElementById("submithappiness").addEventListener("click", Submit);

function Submit() {
    switch(currentValue) {
        case codes[0]:
            location.replace("https://cohenkirbyultra.github.io/testingroom/pages/smile/Cohen.html");
            break;
        case codes[1]:
            location.replace("https://cohenkirbyultra.github.io/testingroom/happy.html");
            break;
        default:
            Failure.play();
            window.alert("Failure.");
            location.replace("about:blank");
            break;
    }
}

// sfx stuff
document.getElementById("keysound").src = "https://cohenkirbyultra.github.io/testingroom/audio/sfx/key1.wav";
document.getElementById("keysound").loop = false;
document.getElementById("keysound").type = "audio/wav";
//Audio Keys
function PlaySfx(type) {
  document.getElementById("keysound").pause();
  document.getElementById("keysound").currentTime = 0;
  switch (type) {
    case 0:
      document.getElementById("keysound").src = "https://cohenkirbyultra.github.io/testingroom/audio/sfx/key1.wav";
      break;
    case 1:
      document.getElementById("keysound").src = "https://cohenkirbyultra.github.io/testingroom/audio/sfx/key2.wav";
      break;
    case 2:
      document.getElementById("keysound").src = "https://cohenkirbyultra.github.io/testingroom/audio/sfx/key3.wav";
      break;
    case 3:
      document.getElementById("keysound").src = "https://cohenkirbyultra.github.io/testingroom/audio/sfx/key4.wav";
      break;
    case 4:
      document.getElementById("keysound").src = "https://cohenkirbyultra.github.io/testingroom/audio/sfx/key5.wav";
      break;
    default:
      console.log("Error, over sfx limit");
      alert("Actual dev error: rng over limit of sfx type");
      break;
  }
  // immediately play
  document.getElementById("keysound").play();
}

// generates random number to play sfx randomly
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
