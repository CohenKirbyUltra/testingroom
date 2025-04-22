// For login.html
var audio = new Audio();
function playSound(src) {
    audio.src = src;
    audio.type = "audio/wav";
    audio.cloneNode().play();
}

document.getElementById("Username").addEventListener("change", playSound("https://cohenkirbyultra.github.io/testingroom/audio/ui/admin/Poker_DiceClack03.wav"));
document.getElementById("Password").addEventListener("change", playSound("https://cohenkirbyultra.github.io/testingroom/audio/ui/admin/Poker_DiceClack03.wav"));