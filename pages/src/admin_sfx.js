// For login.html
function playSound(src) {
    let audio = new Audio()
    audio.src = src;
    audio.cloneNode().play();
}

document.getElementById("Username").addEventListener("change", playSound("https://cohenkirbyultra.github.io/testingroom/audio/ui/admin/Poker_DiceClack03.wav"));
document.getElementById("Password").addEventListener("change", playSound("https://cohenkirbyultra.github.io/testingroom/audio/ui/admin/Poker_DiceClack03.wav"));