// music stuff
var Music = new Audio();
Music.src = "../audio/music/Website_Main.mp3";
Music.loop = true;
Music.type = "audio/mp3";

function onload() {
    switch (location.href) {
        case "https://cohenkirbyultra.github.io/testingroom/index.html":
            musicType(0);
            break;
        case "https://cohenkirbyultra.github.io/testingroom/pages/about.html":
            musicType(0);
            break;
        case "https://cohenkirbyultra.github.io/testingroom/pages/devs.html":
            musicType(0);
            break;
        case "https://cohenkirbyultra.github.io/testingroom/pages/gamemodes.html":
            musicType(0);
            break;
        case "https://cohenkirbyultra.github.io/testingroom/lock.html":
            musicType(1);
            break;
        default:
            //silence
            break;
    }
}

function musicType(type) {
    switch(type) {
        case 0:
            Music.src = "https://cohenkirbyultra.github.io/testingroom/audio/music/Website_Main.mp3";
            break;
        case 1:
            Music.src = "https://cohenkirbyultra.github.io/testingroom/audio/music/Website_Off.mp3";
            break;
        default:
            break;
    }
    Music.play();
}