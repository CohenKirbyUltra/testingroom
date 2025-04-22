// For login.html
function playSound(src) {
    let audio = new Audio()
    audio.src = src;
    audio.cloneNode.play();
}

document.getElementById("Username").addEventListener("input", playSound("../audio/ui/admin/Poker_DiceClack03.wav"));
document.getElementById("Password").addEventListener("input", playSound("../audio/ui/admin/Poker_DiceClack03.wav"));