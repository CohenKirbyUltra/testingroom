var Sfx = new Audio();
Sfx.src = "audio/sfx/Look_at_me.wav";
Sfx.loop = false;
Sfx.type = "audio/wav";

var Toolateforyou = new Audio();
Toolateforyou.src = "audio/sfx/Theywillnot.wav";
Toolateforyou.loop = true;
Toolateforyou.type = "audio/wav";

var x = 0;
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

document.onvisibilitychange = () => {
  if (document.visibilityState === "hidden") {
    if (x === 0) {
      x = 1;
      window.WindowState = "normal";
      Sfx.play();
      window.alert("LOOK AT ME");
      window.open(
        "https://cohenkirbyultra.github.io/testingroom/happy.html",
        "HAPPY",
        "width:100px,height:100px",
      );
      document.getElementById("happy").src = "imgs/d.png";
      setTimeout(() => {
        Toolateforyou.play();
        setTimeout(() => {
          location.replace(
            "https://cohenkirbyultra.github.io/testingroom/main.html",
          );
        }, 10000);
      }, 3000);
    }
  }
};
const jumpscare = new Audio();
jumpscare.src = "audio/Micheal Scream.mp3";
jumpscare.loop = false;
jumpscare.type = "audio/mpeg";

let update = setInterval(() => {
  if (document.fullscreenElement) {
    window.WindowState = "fullscreen";
    update.clearInterval();
    document.getElementById("happy").src = "imgs/Jumpscare.png";
    document.getElementById("happy").style = "width:100%;height:100%;";

    jumpscare.play();

    setInterval(() => {
      alert("YOUR FATE IS SEALED");
      let x = getRndInteger(0, screen.availWidth);
      let y = getRndInteger(0, screen.availHeight);
      let w = getRndInteger(0, screen.availWidth);
      let h = getRndInteger(0, screen.availHeight);
      let win = window.open(
        "happy.html",
        "IMSOHAPPY",
        "left=" +
          x +
          ",top=" +
          y +
          ",width=" +
          w +
          ",height=" +
          h +
          ",status=yes",
      );
    }, 100);
  } else {
    window.WindowState = "normal";
  }
};
