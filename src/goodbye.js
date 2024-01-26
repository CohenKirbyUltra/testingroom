document.getElementById("game").addEventListener("ended", goodbye);

function goodbye() {
    window.alert("Where are you going?")
    document.getElementById("skull").style.opacity = 0;
}