document.addEventListener("DOMContentLoaded", cargarDOM);

function cargarDOM() {
  let contenedor = document.getElementById("contenedor");
  let section = document.getElementById("seccion");
  let boton = document.getElementById("boton");

  contenedor.addEventListener("click", () => {console.log("div - captura "), true;
  });
  section.addEventListener("click", () => {console.log("seccion - captura "), true;
  });
  boton.addEventListener("click", () => {console.log("boton - captura "), true;
  });
}
