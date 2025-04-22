// For login.html
var audio = document.getElementById("audio");
audio.type = "audio/wav";

function playSound(src) {
    audio.currentTime = 0;
    audio.src = "https://cohenkirbyultra.github.io/testingroom/audio/ui/admin/" + src;
    audio.play();
}

document.addEventListener("keydown", playSound("Poker_DiceClack03.wav"));