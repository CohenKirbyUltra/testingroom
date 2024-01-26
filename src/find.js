var times;

window.document.addEventListener("visibilitychange", function () {
  if (this.visibilityState === "hidden") {
    update();
  }
})

var image = document.getElementById("findmeplease");
const tests = ["imgs/Test1.png", "imgs/Test2.png", "imgs/Test3.png", "imgs/Test4.png", "imgs/Test5.png", "imgs/Test6.png"];

function update() {
    if (times < 5) {
        image.src = tests[times];
        times++;
    } else {
        if (times === 5) {
            PlayAudio();
        }
    }
}

function PlayAudio() {
    document.getElementById("game").play();
}