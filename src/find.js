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
