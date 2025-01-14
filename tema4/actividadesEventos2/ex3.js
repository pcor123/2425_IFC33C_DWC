document.addEventListener("DOMContentLoaded", cargarDOM);

function cargarDOM() {
  let listaLi = document.querySelectorAll("li");

  listaLi.forEach((li) =>
    li.addEventListener("click", (e) => {
      if (e.target.tagName === "LI") {
        alert(`Selecionaste ${e.target.textContent}`);
      }
    })
  );

  let boton = document.getElementById("button");
  let ul = document.querySelector("ul");

  boton.addEventListener("click", () => {
    let nuevaTarea = document.createElement("li");
    let listaLi = ul.querySelectorAll("li");
    nuevaTarea.innerHTML = `Tarea ${listaLi.length + 1}`;
    nuevaTarea.addEventListener("click", (e) => {
      alert(`Haz hecho clic en: ${nuevaTarea.innerHTML}`);
    });
    ul.appendChild(nuevaTarea);
  });
}
