function Nota(nota, tipus) {
  this.nota = nota;
  this.tipus = tipus;
}

let cerca = [];

function addCerca(nota, tipus, cerca) {
  cerca.push(new Nota(nota, tipus));
}

addCerca("Do", "", cerca);
addCerca("Re", "", cerca);

function partitura(nombre, melodia) {
  this.nombre = nombre;
  this.melodia = melodia;
}

let melodiaBalanguera = [
  new Nota("Do", ""),
  new Nota("Re", ""),
  new Nota("Mi", "#"),
  new Nota("Fa", ""),
  new Nota("Fa", ""),
  new Nota("Sol", ""),
];

let melodiaHappyBirthday = [
  new Nota("RE", ""),
  new Nota("DO", ""),
  new Nota("FA", ""),
  new Nota("MI", ""),
  new Nota("DO", ""),
  new Nota("DO", ""),
  new Nota("RE", ""),
  new Nota("SOL", ""),
];

partituraHappyBirthday = new Partitura("Happy Birthday", melodiaHappyBirthday);
partituraBalanguera = new Partitura("Balanguera", melodiaBalanguera);

let partituras = []

partituras.push(partituraHappyBirthday);
partituras.push(partituraBalanguera);

console.log(partitura)

function cercador(partituras, cerca) {
  let resultat = [];

  for (let i = 0; i < partituras.length; i++) {
    let partitura = partituras[i]; // Cambiado a "partitura" para mantener la referencia a la partitura actual
    for (let j = 0; j < partitura.melodia.length; j++) {
      let trobat = true;
      for (let k = 0; k < cerca.length; k++) {
        // Verifica si no se sale de los límites de la melodía
        if (
          j + k >= partitura.melodia.length ||
          partitura.melodia[j + k].nota !== cerca[k].nota ||
          partitura.melodia[j + k].tipus !== cerca[k].tipus
        ) {
          trobat = false;
          break; // Salir del bucle si no se encuentra
        }
      }

      // Si se encontró la secuencia, añadir a resultat
      if (trobat) {
        resultat.push(partitura); // Almacena la partitura que coincide
        break; // Salir del bucle para no buscar más en esta partitura
      }
    }
  }

  return resultat; // Devolver las partituras que coinciden
}

