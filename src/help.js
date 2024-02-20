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

var LoopTime;
async function Loop() {
  LoopTime = getRndInteger(10, 7000);

  document.getElementById("remember").innerHTML =
    Remembers[getRndInteger(0, Remembers.length - 1)];
  let result = await resolveAfter2Seconds();
  Loop();
}

function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(hellothere);
    }, LoopTime);
  });
}

Loop();

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
