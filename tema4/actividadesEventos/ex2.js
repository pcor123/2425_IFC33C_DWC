//Evento para que al cargar la pagina, se ejecute bien el codigo.
document.addEventListener("DOMContentLoaded", () => {
  //Se obtiene el boton del html con el id y se guarda en una variable (boton).
  let boton = document.getElementById("boton");
  //Se llama a la funcion y le passamos la variable como parametro.
  alertaBoton(boton);
});

//Funcion que muestra un alerta al hacer click en un boton.
function alertaBoton(boton) {
  //Se agrega un evento al boton para que al hacer click, muestre la alerta i canvie el texto del boton.
  boton.addEventListener("click", () => {
    alert("Hiciste click");
    boton.innerText = "texto cambiado";
  });
}
