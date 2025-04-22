// For login.html
var KEYUP = false;
function playSound(src) {
    let audio = new Audio()
    audio.src = src;
    audio.cloneNode.play();
}

document.addEventListener("keydown", function () {
    if (KEYUP == false) {
        playSound("../audio/ui/admin/Poker_DiceClack03.wav");
        KEYUP = true;
    }
});

document.addEventListener("keyup", function () {
        KEYUP = false;
});