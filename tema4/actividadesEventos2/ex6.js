document.addEventListener("DOMContentLoaded", cargarDOM);

function cargarDOM() {
  let contenedor = document.getElementById("contenedor");
  let listaBotones = document.querySelectorAll("#boton");

  contenedor.addEventListener("click", clicDiv);

  listaBotones.addEventListener
}
function clicDiv(e) {
  if (e.target.classList.contains("boton")) {
    console.log(`Click en ${e.target.textContent}`);
  }
}
function clickBoton(e) {
  e.stopPropagation();
  e.preventDefault();
  console.log(`Evento detenido en ${e.target.textContent}`);
}
