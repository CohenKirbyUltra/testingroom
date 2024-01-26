const nodes = Array.from(document.getElementsByTagName("center"));
document.getElementById("test").addEventListener("click", Test);
function Test() {
    for (let i in nodes) {
        nodes[i].innerHTML = "LEAVE";
    }
}