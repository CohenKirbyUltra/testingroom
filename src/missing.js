var MORSE, HAPPY;
MORSE = new Audio();
MORSE.type = "audio/mpeg";
MORSE.src = "audio/sfx/findit.mp3";
MORSE.loop = false;

HAPPY = new Audio();
HAPPY.type = "audio/mpeg";
HAPPY.src = "audio/music/IMSOHAPPY.mp3";
HAPPY.loop = true;

var X = false;
document.onclick = function () {
  if (X === false) {
    MORSE.play();
    MORSE.addEventListener("ended", function () {
      HAPPY.play();
    });
    X = true;
  } else {
    // nothing lmao!!!!
  }
};
