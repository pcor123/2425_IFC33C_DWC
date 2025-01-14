document.addEventListener("DOMContentLoaded", cargarDOM);

function cargarDOM() {
  let formulario = document.querySelector("form");
  let boton = document.querySelector("button");

  formulario.addEventListener("submit", () => {
    alert("Formulario enviado");
  });
  
  boton.addEventListener("click", (e) => {
    alert("Botón pulsado");
    console.log(e);
    e.stopPropagation();
    e.preventDefault();
  });
}
