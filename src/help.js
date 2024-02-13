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
  let ans = document.getElementById("locket").value;
  if (ans === null || ans == "") {
    return;
  } // fail safe

  switch (ans) {
    case "Goner":
      location.replace(
        "https://cohenkirbyultra.github.io/testingroom/pages/goodbye.html",
      );
      break;
    case "goner":
      location.replace(
        "https://cohenkirbyultra.github.io/testingroom/pages/goodbye.html",
      );
      break;
    case "Polygons":
      location.replace(
        "https://cohenkirbyultra.github.io/testingroom/pages/find.html",
      );
      break;
    case "polygons":
      location.replace(
        "https://cohenkirbyultra.github.io/testingroom/pages/find.html",
      );
      break;
    case "Dakota":
      location.replace(
        "https://cohenkirbyultra.github.io/testingroom/pages/smile/Dakota.html",
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

var Remembers = [
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
  let LoopTime = getRndInteger(10, 7000);

  document.getElementById("remember").innerHTML =
    Remembers[getRndInteger(0, Remembers.length - 1)];

  if (getRndInteger(0, 100) === getRndInteger(0, 100)) {
    document.getElementById("HI").innerHTML = " " + hellothere;
    hellothere = hellothere + " I see you.";
  }
  setTimeout(Loop, LoopTime);
}
