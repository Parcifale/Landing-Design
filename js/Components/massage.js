function openMassage() {
    document.getElementById("myMassage").style.display = "block";
}

function closeMassage() {
    document.getElementById("myMassage").style.display = "none";
}


document.querySelector("#in2").addEventListener("click", openMassage)

document.querySelector("#in1").addEventListener("click", openMassage)

document.querySelector("#accept").addEventListener("click", closeMassage)