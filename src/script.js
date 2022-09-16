var subs = document.querySelector(".subscribe-newsletters");
var nav = document.querySelector(".navigation");

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