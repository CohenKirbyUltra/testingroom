var times;
var image = document.getElementById("findmeplease");
const tests = [
  "../imgs/Test1.png",
  "../imgs/Test2.png",
  "../imgs/Test3.png",
  "../imgs/Test4.png",
  "../imgs/Test5.png",
  "../imgs/Test6.png",
];

const Remembers = [
  "Remember",
  "Rmbeerem",
  "ebremmeR",
  "remmber",
  "mberemre",
  "emreberm",
  "mreeRmbe",
  "remberme",
  "emreberm",
  "Rmberme",
  "emremerb",
  "Dakota",
  "Remember",
];
var hellothere = "I see you.";
Loop();
function Loop() {
  let LoopTime = getRndInteger(10, 700);

  document.getElementById("remember").innerHTML =
    Remembers[getRndInteger(0, Remembers.length - 1)];

  if (getRndInteger(0, 100) === getRndInteger(0, 100)) {
    document.getElementById("HI").innerHTML = " " + hellothere;
    hellothere = hellothere + " I see you.";
  }
  setTimeout(Loop, LoopTime);
}
function update() {
  times++;
  switch (times) {
    case 1:
      image.src = tests[0];
      break;
    case 2:
      image.src = tests[1];
      break;
    case 3:
      image.src = tests[2];
      break;
    case 4:
      image.src = tests[3];
      break;
    case 5:
      image.src = tests[4];
      break;
    case 6:
      image.src = tests[5];
      break;
    default:
      alert("why");
      break;
  }
}

function PlayAudio() {
  document.getElementById("game").play();
}

function preload_image(im_url) {
  let img = new Image();
  img.src = im_url;
}

tests.forEach(preload_image);
