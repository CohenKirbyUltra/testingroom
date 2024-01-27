var Sfx = new Audio();
Sfx.src = "../audio/music/torture.mp3";
Sfx.loop = true;
Sfx.type = "audio/mpeg";

var vocal = document.getElementById("vocal");
vocal.loop = true;
vocal.type = "audio/wav";

var Music = new Audio();
Music.src = "../audio/music/Theresalwayssomething.mp3";
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
        setInterval(function() {
            const para = document.createElement("h1");
            para.innerText = "GET OUT OF HERE";
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
          vocal.play();
          alert("Don't leave me here...");
          break;
        case 2:
          vocal.pause();
          vocal.currentTime = 0;
          vocal.src = "https://cohenkirbyultra.github.io/testingroom/audio/sfx/please.wav";
          vocal.play();
          alert("Please..");
          break;
        case 3:
          vocal.pause();
          vocal.currentTime = 0;
          vocal.src = "https://cohenkirbyultra.github.io/testingroom/audio/sfx/cohen.wav";
          vocal.play();
          alert("PLEASE I'M BEGGING YOU C||||E|");
          break;
        case 4:
          vocal.pause();
          vocal.currentTime = 0;
          vocal.src = "https://cohenkirbyultra.github.io/testingroom/audio/sfx/whatdididowrong.wav";
          vocal.play();
          alert("WHAT DID I DO WRONG?!");
          break;
        case 5:
          vocal.pause();
          vocal.currentTime = 0;
          vocal.src = "https://cohenkirbyultra.github.io/testingroom/audio/sfx/ithurts.mp3";
          vocal.play();
          alert("#######################");
          break;
        default:
          break;
      }
  }
}