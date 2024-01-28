var LOSTAUDIO = new Audio();
LOSTAUDIO.src = "lostlostlostlostlost.mp3";
LOSTAUDIO.loop = true;
LOSTAUDIO.type = "audio/mp3";

document.onload = () => {
  LOSTAUDIO.play();
}