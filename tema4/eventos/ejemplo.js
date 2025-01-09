document.addEventListener("DOMContentLoaded",(event) => {  

let textArea = document.getElementById("area");
let boton = document.getElementById("boton");

textArea.onkeydown = (event) => {
    alert(`Tecla presionada: ${event.key}`);
    console.log(event);
};

boton.addEventListener('click', () => {
    alert('Hiciste click');
});

});