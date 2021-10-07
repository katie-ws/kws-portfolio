let modalHCE = document.getElementById("firstModal");
let modalKFP = document.getElementById("secondModal");
let modalFoto = document.getElementById("thirdModal");

let figHCE = document.getElementById("hceCase");
let figKFP = document.getElementById("kfpCase");
let figFoto = document.getElementById("fotoCase");

let modalFigHCE = document.getElementById("img01");
let modalFigKFP = document.getElementById("img02");
let modalFigFoto = document.getElementById("img03");

let textHCE = document.getElementById("hceOverlay");
let textKFP = document.getElementById("kfpOverlay");
let textFoto = document.getElementById("fotoOverlay");

// HCE Modal
figHCE.onclick = function() {
    modalHCE.style.display = "block";
    modalFigHCE.src = hceImg.src;
}

let spanHCE = document.getElementsByClassName("close")[0];

spanHCE.onclick = function() {
    modalHCE.style.display = "none";
}

// KFP Modal
figKFP.onclick = function() {
    modalKFP.style.display = "block";
    modalFigKFP.src = kfpImg.src;
}

let spanKFP = document.getElementsByClassName("close")[1];

spanKFP.onclick = function() {
    modalKFP.style.display = "none";
}

// Foto Modal
figFoto.onclick = function() {
    modalFoto.style.display = "block";
    modalFigFoto.src = fotoImg.src;
}

let spanFoto = document.getElementsByClassName("close")[2];

spanFoto.onclick = function() {
    modalFoto.style.display = "none";
}