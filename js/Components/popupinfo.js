function openInfo() {
    document.getElementById("infoForm").style.display = "block";
}

function closeInfo() {
    document.getElementById("infoForm").style.display = "none";
}


const openinfo = document.getElementById("btn10")
openinfo.addEventListener("click", openInfo)

const closeinfo = document.getElementById("btn11")
closeinfo.addEventListener("click", closeInfo)