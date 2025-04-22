// For login.html
var audio = document.getElementById("audio");
audio.type = "audio/wav";

function playSound(src) {
    audio.currentTime = 0;
    audio.src = src;
    audio.play();
}

document.body.addEventListener("keydown", function () {
    playSound("https://cohenkirbyultra.github.io/testingroom/audio/ui/admin/Poker_DiceClack03.wav");
});