var subs = document.querySelector(".subscribe-newsletters");
var nav = document.querySelector(".navigation");
var local = document.querySelectorAll(".local");
var inter = document.querySelectorAll(".inter");
var trend = document.querySelectorAll(".trend");
var locala = document.querySelector("#local");
var intera = document.querySelector("#inter");
var trenda = document.querySelector("#trend");
var alla = document.querySelector("#all");

function subscribe() {
    subs.style.display = "flex";
}
function closeSub() {
    subs.style.display = "none";
}
function opennav() {
    nav.style.width = "250px";
    nav.style.paddingLeft = "15px";
}
function closenav() {
    nav.style.width = "0px";
    nav.style.paddingLeft = "0px";
}


function showAll() {
    alla.classList.add("active");
    intera.classList.remove("active");
    trenda.classList.remove("active");
    locala.classList.remove("active");
    for(var i=0; i<trend.length; i++) {
        trend[i].style.display = "block";
    }
    for(var i=0; i<local.length; i++) {
        local[i].style.display = "block";
    }
    for(var i=0; i<inter.length; i++) {
        inter[i].style.display = "block";
    }
}
function showLocal() {
    locala.classList.add("active");
    intera.classList.remove("active");
    trenda.classList.remove("active");
    alla.classList.remove("active");
    for(var i=0; i<trend.length; i++) {
        trend[i].style.display = "none";
    }
    for(var i=0; i<inter.length; i++) {
        inter[i].style.display = "none";
    }
    for(var i=0; i<local.length; i++) {
        local[i].style.display = "block";
    }
}
function showInter() {
    intera.classList.add("active");
    locala.classList.remove("active");
    trenda.classList.remove("active");
    alla.classList.remove("active");
    for(var i=0; i<trend.length; i++) {
        trend[i].style.display = "none";
    }
    for(var i=0; i<local.length; i++) {
        local[i].style.display = "none";
    }
    for(var i=0; i<inter.length; i++) {
        inter[i].style.display = "block";
    }
}
function showTrend() {
    trenda.classList.add("active");
    intera.classList.remove("active");
    locala.classList.remove("active");
    alla.classList.remove("active");
    for(var i=0; i<local.length; i++) {
        local[i].style.display = "none";
    }
    for(var i=0; i<inter.length; i++) {
        inter[i].style.display = "none";
    }
    for(var i=0; i<trend.length; i++) {
        trend[i].style.display = "block";
    }
}