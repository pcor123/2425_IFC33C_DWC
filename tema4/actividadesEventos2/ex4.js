document.addEventListener("DOMContentLoaded", cargarDOM);

function cargarDOM() {
  let enlace = document.querySelector("a");
  enlace.addEventListener("click", clicarEnlace);

  let div = document.getElementById("div");
  div.addEventListener("click", clicarDiv);
}

function clicarEnlace(e) {
  alert("Click en el enlace");
  e.prevenDefault();
  e.stopPropagation();
}

function clicarDiv() {
  alert("Click en el div");
}
