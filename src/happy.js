var Sfx = new Audio();
Sfx.src = "audio/sfx/Look_at_me.wav";
Sfx.loop = false;
Sfx.type = "audio/wav";

var Toolateforyou = new Audio();
Toolateforyou.src = "audio/sfx/Theywillnot.wav";
Toolateforyou.loop = true;
Toolateforyou.type = "audio/wav";

var x = 0;

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

document.onfullscreenchange = () => {
  if (document.fullscreenElement) {
    window.WindowState = "fullscreen";
    document.getElementById("happy").src = "imgs/Jumpscare.png";
    document.getElementById("happy").style = "width:100%;height:100%;";

    let jumpscare = new Audio();
    jumpscare.src = "audio/Micheal Scream.mp3";
    jumpscare.loop = false;
    jumpscare.type = "audio/mpeg";
    jumpscare.play();

    setInterval(() => {
      alert("YOUR FATE IS SEALED");
      window.open(
        "https://cohenkirbyultra.github.io/testingroom/happy.html",
        "HAPPY",
        "width:100px,height:100px",
      );
    }, 500);
  } else {
    window.WindowState = "normal";
  }
};
