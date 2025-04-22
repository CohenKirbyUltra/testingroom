// For login.html
var audio = new Audio();
audio.type = "audio/wav";

function playSound(src) {
    audio.src = "https://cohenkirbyultra.github.io/testingroom/audio/ui/admin/" + src;
    audio.cloneNode().play();
}

document.addEventListener("keypress", playSound("Poker_DiceClack03.wav"));