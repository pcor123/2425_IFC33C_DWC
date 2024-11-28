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
for (let i = 0; i < 100; i++) {
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
  detailsButton.textContent = "Detalls";
  detailsButton.classList.add("action-btn"); // Añadimos una clase
  detailsButton.onclick = () => alert(`Veient detalls de: ${record.title}`);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Esborrar";
  deleteButton.classList.add("action-btn"); // Añadimos una clase
  deleteButton.onclick = () => alert(`Esborrant: ${record.title}`);

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
