/**
Ejercicio 1: Crear y agregar elementos al DOM
Escribe un programa que cree dinámicamente un párrafo (<p>) con el texto "Este es un
párrafo dinámico" y lo agregue al final del documento usando una función flecha. 
*/

"Este es un párrafo dinámico"

// document.createElement("p")

let agregarParrafo = () => {
    //crear elemenet <p> 
    let parrafo = document.createElement("p");
    //String de dins <p> </p>
    parrafo.textContent = "Este es un párrafo dinámico";
    //On sera el final de la pagina > a la etiqueta /body

    document.body.appendChild(parrafo);
}

//cridar a la funcio
agregarParrafo();