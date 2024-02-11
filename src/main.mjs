document.onmousemove = function (event) {
  mainMusic.pause();
  window.document.title = "Leave";
  window.alert("Wakeup.");
  document.getElementById("titlescreen").src = "imgs/CTR_LEAVE.png";
  for (let i = 0; i < 5; i++) {
    for (const child of allElements[i]) {
      child.innerHTML = "wake up disjoined";
    }
  }
};

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function RGB2HTML(red, green, blue) {
  var decColor = 0x1000000 + blue + 0x100 * green + 0x10000 * red;
  return "#" + decColor.toString(16).substr(1);
}

var Music = new Audio();
Music.type = "audio/mpeg";
Music.src = "audio/music/Website_Off.mp3";

var mainMusic = new Audio();
mainMusic.type = "audio/mpeg";
mainMusic.src = "audio/music/Website_Main.mp3";
mainMusic.loop = true;

mainMusic.play();

var allElements = [
  document.querySelectorAll("h1"),
  document.querySelectorAll("h2"),
  document.querySelectorAll("h3"),
  document.querySelectorAll("h4"),
  document.querySelectorAll("h5"),
  document.querySelectorAll("h6"),
  document.querySelectorAll("p"),
  document.querySelectorAll("a"),
  document.querySelectorAll("b"),
  document.querySelectorAll("i"),
];

var GONER = new Audio();
GONER.type = "audio/mpeg";
GONER.src = "audio/sfx/GONER.mp3";
GONER.loop = false;

var clicks = 0;
var funValue;
var randomchance = 0;

const text = [
  document.getElementById("text1"),
  document.getElementById("text2"),
];

//arg chance
setInterval(function () {
  randomchance = getRndInteger(40, 80);

  if (randomchance === 80) {
    GONER.play();
    text[0].innerHTML =
      "A webpa<u>G</u>e dedacated t<u>O</u> the local testing room!";
    text[1].innerHTML =
      "You might be wo<u>N</u>dering to yours<u>E</u>lf if you have no context and clicked on this page, <a href='pages/about.html'>What is testing <u>R</u>oom?</a>";
    setTimeout(function () {
      text[0].innerHTML = "A webpage dedacated to the local testing room!";
      text[1].innerHTML =
        "You might be wondering to yourself if you have no context and clicked on this page, <a href='pages/about.html'>What is testing room?</a>";
    }, 500);
  }
}, 5000);

document.getElementById("titlescreen").addEventListener("click", titleClick); // Randomizes the chance of getting rare screen

var scaryColors = [2, 1, 6];
var scaryVaild = [true, true, true];
// ooOOoooOO scary transition.......
function titleClick() {
  check();
  scaryVaild = 0;

  mainMusic.playbackRate -= 0.001;

  if (scaryColors[0] > 254) {
    scaryVaild[0] = false;
    scaryColors[0] = 255;
  } else {
    scaryVaild[0] = true;
    scaryColors[0] += 2;
  }

  if (scaryColors[1] < 1) {
    scaryVaild[1] = false;
    scaryColors[1] = 0;
  } else {
    scaryVaild[1] = true;
    scaryColors[1] += -10;
  }

  if (scaryColors[2] < 1) {
    scaryVaild[2] = false;
    scaryColors[2] = 0;
  } else {
    scaryColors[2] += -10;
  }

  let color = RGB2HTML(scaryColors[0], scaryColors[1], scaryColors[2]);

  document.body.style.backgroundColor = color;
  document.html.style.color = color;

  console.log(scaryColors);
  console.log(RGB2HTML(scaryColors[0], scaryColors[1], scaryColors[2]));
}
// bleh
function check() {
  clicks += 1;
  let Fun = getRndInteger(0, 30);
  funValue = getRndInteger(0, 30);

  if (funValue === Fun) {
    createHappy();
  }

  if (clicks === 100) {
    mainMusic.pause();
    window.document.title = "Leave";
    window.alert("Stop.");
    document.getElementById("titlescreen").src = "imgs/CTR_LEAVE.png";
    for (let i = 0; i < 5; i++) {
      for (const child of allElements[i]) {
        child.innerHTML = "LEAVE";
      }
    }
    setInterval(function () {
      Music.pause();
      Music.currentTime = 40.5;
      Music.play();
      const para = document.createElement("h6");
      para.innerText = "LEAVE";
      document.body.appendChild(para);
    }, 100);
    setTimeout(function () {
      window.document.title = "GET OUT";
    }, 4000);
    setTimeout(close, 5000);
  }
}

function close() {
  location.replace("https://cohenkirbyultra.github.io/testingroom/lock.html");
}

// window stuff
function createHappy() {
  let bounce = {
    x: 0,
    y: 0,
    w: 400,
    h: 400, // Window position and size
    dx: 5,
    dy: 5, // Window velocity
    interval: 10, // Milliseconds between updates
    win: null, // The window we will create
    timer: null, // Return value of setInterval()

    // Start the animation
    start: function () {
      // Start with the window in the center of the screen
      bounce.x = (screen.width - bounce.w) / 2;
      bounce.y = (screen.height - bounce.h) / 2;

      // Create the window that we're going to move around
      // The javascript: URL is simply a way to display a short document
      // The final argument specifies the window size
      bounce.win = window.open(
        "happy.html",
        "IMSOHAPPY",
        "left=" +
          bounce.x +
          ",top=" +
          bounce.y +
          ",width=" +
          bounce.w +
          ",height=" +
          bounce.h +
          ",status=yes",
      );

      // Use setInterval() to call the nextFrame() method every interval
      // milliseconds. Store the return value so that we can stop the
      // animation by passing it to clearInterval().
      bounce.timer = setInterval(bounce.nextFrame, bounce.interval);
    },

    // Stop the animation
    stop: function () {
      clearInterval(bounce.timer); // Cancel timer
      if (!bounce.win.closed) bounce.win.close(); // Close window
    },

    // Display the next frame of the animation.  Invoked by setInterval()
    nextFrame: function () {
      // If the user closed the window, stop the animation
      if (bounce.win.closed) {
        clearInterval(bounce.timer);
        return;
      }

      // Bounce if we have reached the right or left edge
      if (
        bounce.x + bounce.dx > screen.availWidth - bounce.w ||
        bounce.x + bounce.dx < 0
      )
        bounce.dx = -bounce.dx;

      // Bounce if we have reached the bottom or top edge
      if (
        bounce.y + bounce.dy > screen.availHeight - bounce.h ||
        bounce.y + bounce.dy < 0
      )
        bounce.dy = -bounce.dy;

      // Update the current position of the window
      bounce.x += bounce.dx;
      bounce.y += bounce.dy;

      // Finally, move the window to the new position
      bounce.win.moveTo(bounce.x, bounce.y);

      // Display current position in window status line
      bounce.win.defaultStatus = "(" + bounce.x + "," + bounce.y + ")";
    },
  };
  bounce.start();
}
