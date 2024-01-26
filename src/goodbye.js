document.getElementById("game").addEventListener("ended", goodbye);

function goodbye() {
    window.alert("An error has occurred.")
    document.getElementById("skull").style.opacity = 0;
}