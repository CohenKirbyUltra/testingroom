var times;

document.addEventListener("visibilitychange", function () {
  if (this.visibilityState === "hidden") {
    update();
  }
})

var image = document.getElementById("findmeplease");
const tests = ["imgs/Test1.png", "imgs/Test2.png", "imgs/Test3.png", "imgs/Test4.png", "imgs/Test5.png", "imgs/Test6.png"];

function update() {
    if (times < tests.length) {
        image.src = tests[times];
        times++;
    } else {
        if (times === tests.length) {
            PlayAudio();
        }
    }
}

function PlayAudio() {
    document.getElementById("game").play();
}