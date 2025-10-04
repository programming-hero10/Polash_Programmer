let x = document.getElementById("manu");
let mIcon = document.getElementById("manuIcon");
let cIcon = document.getElementById("closeIcon");

function openMenu() {
  x.style.marginTop = "0";
  mIcon.style.opacity = "0";
  cIcon.style.display = "block";
}
function closeMenu() {
  x.style.marginTop = "-9500px";
  mIcon.style.opacity = "1";
  cIcon.style.display = "none";
}

// ______________form_____________
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
