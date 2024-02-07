function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var Music = new Audio();
Music.src = "audio/music/Website_Off.mp3";

var mainMusic = new Audio();
mainMusic.src = "audio/music/Website_Main.mp3";
mainMusic.type = "audio/mpeg";
mainMusic.loop = true;

mainMusic.play();

var clicks = 0;
var funValue;
var randomchance = 0;

const text = [
  document.getElementById("text1"),
  document.getElementById("text2"),
];

document.onload = function () {
  mainMusic.play();
};

//arg chance
setInterval(function () {
  randomchance = getRndInteger(40, 80);

  if (randomchance === 80) {
    document.getElementById("goner").play();
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

document.getElementById("titlescreen").addEventListener("click", check); // Randomizes the chance of getting rare screen

function check() {
  clicks += 1;
  let Fun = getRndInteger(0, 30);
  funValue = getRndInteger(0, 30);

  if (funValue === Fun) {
    createHappy();
  }

  if (clicks === 40) {
    mainMusic.pause();
    window.document.title = "Leave";
    window.alert("Stop.");
    document
      .querySelectorAll("center")
      .forEach((index) => (index.innerHTML = "LEAVE"));
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
    w: 200,
    h: 100, // Window position and size
    dx: 5,
    dy: 5, // Window velocity
    interval: 100, // Milliseconds between updates
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
      bounce.win = window.open("happy.html", "", x, y, w, h);

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
