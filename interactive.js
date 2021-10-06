let modal = document.getElementById("firstModal");
let fig = document.getElementById("hceImg");
let span = document.getElementsByClassName("close")[0];

fig.onmousemove = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }
}