let x = document.getElementById("manu");
let mIcon = document.getElementById("manuIcon");
let cIcon = document.getElementById("closeIcon");

function openMenu() {
  x.style.marginTop= "0";
  mIcon.style.opacity = "0";
  cIcon.style.display = "block";
}
function closeMenu() {
  x.style.marginTop = "-9500px";
  mIcon.style.opacity = "1";
  cIcon.style.display = "none";
}