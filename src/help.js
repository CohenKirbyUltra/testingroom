countdown();
document.getElementById("locket").addEventListener("keypress", update);
document.getElementById("locket").addEventListener("change", update);
document.getElementById("goodbye").enabled = false;
document.getElementById("goodbye").addEventListener("click", submit);

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

    switch(ans) {
        case "Goner":
            location.replace("https://cohenkirbyultra.github.io/testingroom/pages/goodbye.html");
            break;
        case "goner":
            location.replace("https://cohenkirbyultra.github.io/testingroom/pages/goodbye.html");
            break;
        case "Polygons":
            location.replace("https://cohenkirbyultra.github.io/testingroom/pages/find.html");
            break;
        case "polygons":
            location.replace("https://cohenkirbyultra.github.io/testingroom/pages/find.html");
            break;
        case "Dakota":
            location.replace("https://cohenkirbyultra.github.io/testingroom/pages/Smile/Dakota.html");
            break;
        case "dakota":
            location.replace("https://cohenkirbyultra.github.io/testingroom/pages/Smile/Dakota.html");
            break;
        default:
            window.alert("Failure.");
            location.replace("about:blank");
            break;
    }
}

function countdown() {
    let current = 60;
    let timer = setInterval(function() {
        if (current < 0) {
            clearInterval(timer);
            lost(); 
        } else {
            window.document.title = current;
            document.getElementById("hellothere").innerHTML = current;
            console.log(current);
            current -= 1;
        }
    }, 1000);
}

function lost() {
    window.document.title = "Times up";
    setTimeout(function() {
        location.replace("about:blank");
    }, 2000);
}