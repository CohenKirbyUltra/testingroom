// For login.html
var audio = new Audio();
audio.type = "audio/wav";

function playSound(src) {
    audio.src = "https://cohenkirbyultra.github.io/testingroom/audio/ui/admin/" + src;
    audio.play();
}

document.addEventListener("keydown", playSound("Poker_DiceClack03.wav"));