document.addEventListener("DOMContentLoaded", cargarDOM);

function cargarDOM() {
    let div = document.getElementById("div");
    let section = document.querySelector("section");
    let boton = document.querySelectorAll("button")[0];

    div.addEventListener("click", () => {console.log("div - Captura")}, true);
    div.addEventListener("click", () => {console.log("div - Burbuja")}, false);

    section.addEventListener("click", () => {console.log("section - Captura")}, true);
    section.addEventListener("click", () => {console.log("section - Burbuja")}, false);

    boton.addEventListener("click", () => {console.log("boton - Captura")}, true);
    boton.addEventListener("click", () => {console.log("boton - Burbuja")}, false);
}
