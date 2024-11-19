































/**
 * 
// Crear la tabla
let tabla = document.createElement("table");

// Crear la columna de la tabla
let columna = document.createElement("thead");
let trColumna = document.createElement("tr");
let thColumna = document.createElement("th");
thColumna.colSpan = 2; // Hace que la celda abarque dos columnas
thColumna.textContent = "Tablas de Multiplicar (1 al 10)";
trColumna.appendChild(thColumna);
columna.appendChild(trColumna);
tabla.appendChild(columna);

// Crear el cuerpo de la tabla
let tbody = document.createElement("tbody");

// Crear las tablas de multiplicar del 1 al 10
for (let j = 1; j <= 10; j++) {
  // Insertar una fila de título para cada tabla
  let trTitulo = document.createElement("tr");
  let tdTitulo = document.createElement("td");
  tdTitulo.colSpan = 2;
  tdTitulo.textContent = `Tabla del ${j}`;
  trTitulo.appendChild(tdTitulo);
  tbody.appendChild(trTitulo);

  // Crear las filas de cada tabla de multiplicar
  for (let i = 1; i <= 10; i++) {
    let trResultado = document.createElement("tr"); // Crear una nueva fila
    let tdMultiplicacion = document.createElement("td");
    let tdResultado = document.createElement("td");

    // Asignar el texto a las celdas
    tdMultiplicacion.textContent = `${j} x ${i}`;
    tdResultado.textContent = j * i;

    // Agregar las celdas a la fila
    trResultado.appendChild(tdMultiplicacion);
    trResultado.appendChild(tdResultado);

    // Agregar la fila al cuerpo de la tabla
    tbody.appendChild(trResultado);
  }
}

// Agregar el cuerpo de la tabla a la tabla principal
tabla.appendChild(tbody);

// Agregar la tabla al body o a un contenedor específico
document.body.appendChild(tabla);
*/
