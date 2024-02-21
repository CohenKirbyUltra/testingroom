var Static = new Audio();
Static.src = "audio/sfx/StaticT.mp3";
Static.loop = false;
Static.type = "audio/mpeg";

countdown();
document.getElementById("locket").addEventListener("keypress", update);
document.getElementById("locket").addEventListener("change", update);
document.getElementById("goodbye").enabled = false;
document.getElementById("goodbye").addEventListener("click", submit);

var Failure = new Audio();
Failure.src = "audio/sfx/Failure.wav";
Failure.loop = false;
Failure.type = "audio/wav";

function update() {
  let button = document.getElementById("goodbye");
  if (!document.getElementById("locket").innerHTML === "") {
    button.enabled = true;
    button.innerHTML = "Leave";
  } else {
    button.enabled = false;
    button.innerHTML = "...";
  }
}

function submit() {
  let ans = document.getElementById("locket").value.toLowerCase();
  if (ans === null || ans == "") {
    return;
  } // fail safe

  switch (ans) {
    case "goner":
      location.replace(
        "https://cohenkirbyultra.github.io/testingroom/pages/goodbye.html",
      );
      break;
    case "polygons":
      location.replace(
        "https://cohenkirbyultra.github.io/testingroom/pages/find.html",
      );
      break;
    case "dakota":
      location.replace(
        "https://cohenkirbyultra.github.io/testingroom/pages/smile/Dakota.html",
      );
      break;
    default:
      Failure.play();
      window.alert("Failure.");
      location.replace("about:blank");
      break;
  }
}

var flickerlimit = 10000;

function countdown() {
  let current = 60;
  let timer = setInterval(function () {
    if (current < 0) {
      clearInterval(timer);
      lost();
    } else {
      document.getElementById("ticktock").play();
      window.document.title = current;
      document.getElementById("hellothere").innerHTML = current;
      console.log(current);
      current -= 1;
      flickerlimit -= 225;
    }
  }, 1000);
}

function lost() {
  window.document.title = "Times up";
  setTimeout(function () {
    location.replace("about:blank");
  }, 2000);
}

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

var LoopTime, FlickerTime;
async function Loop() {
  LoopTime = getRndInteger(10, 1000);
  let rand = getRndInteger(0, Remembers.length - 1);
  document.getElementById("remember").innerHTML = Remembers[rand];
  if (rand === 11) {
    LoopTime = 100;
  }
  let result = await resolveAfter2Seconds();
  Loop();
}

async function flickerLoop() {
  FlickerTime = getRndInteger(1000, flickerlimit);
  documentFlicker();
  let result = await resolveAfter();
  flickerLoop();
}

function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(hellothere);
    }, LoopTime);
  });
}

function resolveAfter() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, FlickerTime);
  });
}

flickerLoop();
Loop();

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var colorthing;
var hex1, hex2, hex3, hex4, hex5, hex6;
const hexcal = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
async function documentFlicker() {
  hex1 = hexcal[getRndInteger(0, 16)];
  hex2 = hexcal[getRndInteger(0, 16)];
  hex3 = hexcal[getRndInteger(0, 16)];
  hex4 = hexcal[getRndInteger(0, 16)];
  hex5 = hexcal[getRndInteger(0, 16)];
  hex6 = hexcal[getRndInteger(0, 16)];

  colorthing = "#" + hex1 + hex2 + hex3 + hex4 + hex5 + hex6;

  await flickerCalculate();
}

function flickerCalculate() {
  let LoopTime2 = getRndInteger(1, 500);
  Static.play();
  document.body.style.backgroundColor = colorthing;
  return new Promise((resolve) => {
    setTimeout(() => {
      document.body.style.backgroundColor = "#ce7406";
      Static.pause();
      resolve();
    }, LoopTime2);
  });
}
