function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var Sfx = new Audio();
Sfx.src = "../../audio/music/torture.mp3";
Sfx.loop = true;
Sfx.type = "audio/mpeg";

var vocal = new Audio();
vocal.src = "../../audio/music/tick.wav";
vocal.loop = false;
vocal.type = "audio/wav";

var Music = new Audio();
Music.src = "../../audio/music/Theresalwayssomething.mp3";
Music.loop = true;
Music.type = "audio/mpeg";
Music.play();

var times = 0;

document.onvisibilitychange = () => {
  if (document.visibilityState === "hidden") {
    if (times === 5) {
      Array.from(document.getElementsByTagName("span")).forEach(function (
        element,
        index,
        array
      ) {
        array[index].innerHTML = "WHY IS IT ALWAYS ME";
        document.body.style = "background-color: maroon";
        document.getElementById("Dakota").src = "Why.png";
        setTimeout(() => {
          window.location.href = "https://cohenkirbyultra.github.io/testingroom/index.html";
        }, 10000);
        setInterval(function() {
            const para = document.createElement("h1");
            para.innerText = "WHY";
            para.style = "font-size:" + getRndInteger(20, 200) + "px";
            document.body.appendChild(para);
        }, 100)
      });
        vocal.pause();
    vocal.currentTime = 0;
      document.getElementById("torture").play();
    }
    times++;
      switch (times) {
        case 1:
          vocal.pause();
          vocal.currentTime = 0;
          vocal.src = "https://cohenkirbyultra.github.io/testingroom/audio/sfx/dontleavemehere.wav";
          alert("Please, don't leave me here...");
          break;
        case 2:
          vocal.pause();
          vocal.currentTime = 0;
          vocal.src = "https://cohenkirbyultra.github.io/testingroom/audio/sfx/please.wav";
          alert("Please, I'm begging you..");
          break;
        case 3:
          vocal.pause();
          vocal.currentTime = 0;
          vocal.src = "https://cohenkirbyultra.github.io/testingroom/audio/sfx/cohen.wav";
          alert("HE DID THIS TO ME!");
          break;
        case 4:
          Music.pause();
          vocal.pause();
          vocal.currentTime = 0;
          vocal.src = "https://cohenkirbyultra.github.io/testingroom/audio/sfx/whatdididowrong.wav";
          alert("karma.");
          break;
        case 5:
          vocal.pause();
          vocal.currentTime = 0;
          vocal.src = "https://cohenkirbyultra.github.io/testingroom/audio/sfx/ithurts.mp3";
          alert("#######################");
          break;
        default:
          break;
      }
      vocal.play();
  }
}