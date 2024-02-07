var Noise = new Audio();
Noise.type = "audio/mpeg";
Noise.src = "audio/sfx/Static.mp3";
Noise.loop = true;
Noise.volume = 0.5;

document.body.onLoad = function () {
  Noise.play();
};

const codes = ["15", "1777"];

var InputerCode = document.getElementById("vhsInput");
var Happybtn = document.getElementById("vhsSubmit");
var vhsTV = document.getElementById("vhsTV");
var videoplayer = vhsTV.getElementsByTagName("source")[0];
var currentValue = "";
Happybtn.disabled = true;

var Failure = new Audio();
Failure.src = "audio/sfx/Failure.wav";
Failure.loop = false;
Failure.type = "audio/wav";

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

document.addEventListener("keypress", function () {
  currentValue = InputerCode.value;

  if (currentValue > 0) {
    Happybtn.disabled = false;
    Happybtn.innerHTML = "Play";
  } else {
    Happybtn.enabled = true;
    Happybtn.innerHTML = "...";
  }
});

window.addEventListener("keypress", function () {
  KeyClick();
});

document.getElementById("vhsSubmit").addEventListener("click", Submit);

function Submit() {
  switch (currentValue) {
    case codes[0]:
      changeVideo(
        "https://cohenkirbyultra.github.io/testingroom/video/Campus15.mp4",
      );
      break;
    case codes[1]:
      changeVideo(
        "https://cohenkirbyultra.github.io/testingroom/video/Room1777.mp4",
      );
      break;
    default:
      Failure.play();
      window.alert("Failure.");
      setTimeout(function () {
        location.replace("about:blank");
      }, 1000);
      break;
  }
}

// sfx stuff

var Keyboard = new Audio();
Keyboard.src =
  "https://cohenkirbyultra.github.io/testingroom/audio/sfx/Key1.wav";
Keyboard.loop = false;
Keyboard.type = "audio/wav";
//Audio Keys
function PlaySfx(type) {
  switch (type) {
    case 0:
      Keyboard.src =
        "https://cohenkirbyultra.github.io/testingroom/audio/sfx/Key1.wav";
      break;
    case 1:
      Keyboard.src =
        "https://cohenkirbyultra.github.io/testingroom/audio/sfx/Key2.wav";
      break;
    case 2:
      Keyboard.src =
        "https://cohenkirbyultra.github.io/testingroom/audio/sfx/Key3.wav";
      break;
    case 3:
      Keyboard.src =
        "https://cohenkirbyultra.github.io/testingroom/audio/sfx/Key4.wav";
      break;
    case 4:
      Keyboard.src =
        "https://cohenkirbyultra.github.io/testingroom/audio/sfx/Key5.wav";
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

function changeVideo(name) {
  vhsTV.getElementsByTagName("source")[0].setAttribute("src", name);
  vhsTV.load();
  vhsTV.play();
}
