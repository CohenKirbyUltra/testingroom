var Sfx = new Audio();
Sfx.src = "../audio/music/torture.mp3";
Sfx.loop = true;
Sfx.type = "audio/mpeg";

var Music = new Audio();
Music.src = "../audio/music/Theresalwayssomething.mp3";
Music.loop = true;
Music.type = "audio/mpeg";

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
      document.getElementById("torture").play();
    }
    times++;
      switch (times) {
        case 1:
          alert("Don't leave me here...");
          break;
        case 2:
          alert("Please..");
          break;
        case 3:
          alert("PLEASE I'M BEGGING YOU C||||E|");
          break;
        case 4:
          alert("WHAT DID I DO WRONG?!");
          break;
        default:
          break;
      }
  }
}