// Seleccionem el contenidor on injectarem la taula
const tableContainer = document.getElementById("tabla-partitures");

// Creem la taula inicial buida amb innerHTML
tableContainer.innerHTML = '<table id="score-table"></table>';

// Accedim a la taula creada
const table = document.getElementById("score-table");

// Creem el capçal de la taula
const thead = document.createElement("thead");
const headerRow = document.createElement("tr");

// Array amb els títols de les columnes
const columnTitles = ["Títol", "Idioma original", "Accions"];

// Creem els encapçalaments (th) i els afegim a la fila
columnTitles.forEach((title) => {
  const th = document.createElement("th");
  th.textContent = title; // Afegim el text del títol
  headerRow.appendChild(th); // Afegim el th a la fila
});

// Afegim la fila d'encapçalament al thead
thead.appendChild(headerRow);

// Afegim el thead a la taula
table.appendChild(thead);

// Creem el cos de la taula (tbody)
const tbody = document.createElement("tbody");

// Dades de mostra
const records = [
  { title: "La Balaguera", language: "ca" },
  { title: "El Llac dels Cignes", language: "es" },
  { title: "Rhapsody in Blue", language: "eng" },
  { title: "Happy Birthday", language: "eng" },
];

// Generem 100 registres
for (let i = 1; i <= 100; i++) {
  const record = records[i % records.length]; // Agafa un registre de manera cíclica
  const row = document.createElement("tr"); // Crea una nova fila

  // Creem les cel·les
  const titleCell = document.createElement("td");
  titleCell.textContent = record.title;

  const languageCell = document.createElement("td");
  languageCell.textContent = record.language;

  const actionCell = document.createElement("td");

  // Afegim els dos botons a la cel·la d'accions
  const detailsButton = document.createElement("button");
  detailsButton.classList.add("action-btn", "fa-solid", "fa-pen-to-square"); // Añadimos el icono
  detailsButton.textContent = " Detalls"; // El icono con el texto
  detailsButton.onclick = () =>
    alert(`Veient detalls de: ${record.title} ${i} `);

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("action-btn", "fa-solid", "fa-trash"); // Añadimos el icono de papelera
  deleteButton.textContent = " Esborrar"; // El icono con el texto
  deleteButton.onclick = () => alert(`Esborrant: ${record.title} ${i}`);

  // Afegim els botons a la cel·la
  actionCell.appendChild(detailsButton);
  actionCell.appendChild(deleteButton);

  // Afegim les cel·les a la fila
  row.appendChild(titleCell);
  row.appendChild(languageCell);
  row.appendChild(actionCell);

  // Afegim la fila al tbody
  tbody.appendChild(row);
}

// Afegim el tbody a la taula
table.appendChild(tbody);

// Seleccionem els botons "Esborrar"
const deleteButtons = document.querySelectorAll(".action-btn");

// Afegim l'esdeveniment de clic a cada botó d'esborrar
deleteButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Mostrem una finestra emergent per confirmar l'eliminació
    const confirmDelete = confirm(
      "Estàs segur que vols eliminar aquesta partitura?"
    );

    if (confirmDelete) {
      // Si l'usuari confirma, mostrem un missatge d'èxit
      alert("Element esborrat");
    } else {
      // Si l'usuari cancela, mostrem un missatge de cancel·lació
      alert("Acció cancel·lada");
    }
  });
});

//crear la funcio per al fer clicl al login, que surti una nova finestra piano.html
let popup; // Variable global para almacenar la referencia de la ventana emergente

        // Abre la ventana emergente
        function abrirLogin() {
            popup = window.open("/login.html", "_blank", "width=800,height=600");
        }

        // Cierra la ventana emergente si está abierta
        function cerrarPopup() {
            if (popup && !popup.closed) {
                popup.close(); // Cerrar la ventana emergente si está abierta
            } else {
                alert("La ventana emergente no está abierta o ya ha sido cerrada.");
            }
        }