var LOSTAUDIO = new Audio();
LOSTAUDIO.src = "lostlostlostlostlost.mp3";
LOSTAUDIO.loop = true;
LOSTAUDIO.type = "audio/mp3";
LOSTAUDIO.preload;

document.onload = () => {
  LOSTAUDIO.play();
}