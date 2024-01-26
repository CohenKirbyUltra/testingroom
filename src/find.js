var times;
var image = document.getElementById("findmeplease");
const tests = ["../../imgs/Test1.png", "../imgs/../Test2.png", "../../imgs/Test3.png", "../../imgs/Test4.png", "../imgs/../Test5.png", "../imgs/../Test6.png"];

function update() {
    if (times < 5) {
        image.src = tests[times];
    } else {
        if (times === 5) {
            PlayAudio();
            window.alert("why");
        }
    }
    times++;
}
document.onvisibilitychange = () => {
    if (document.visibilityState === "hidden") {
        update();
    }
}
function PlayAudio() {
    document.getElementById("game").play();
}