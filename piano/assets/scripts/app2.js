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

melodiaBalanguera = [
  new Nota("Do", ""),
  new Nota("Re", ""),
  new Nota("Mi", "#"),
  new Nota("Fa", ""),
  new Nota("Fa", ""),
  new Nota("Sol", ""),
];

melodiaHappyBirthday = [
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

Partitura.push(partituraHappyBirthday);

function cercador(partitura, cerca) {
  let resultat = [];

  for (let i = 0; i < partitura.lenght; i++) {
    for (let j = 0; j < partitura.melodia.length; j++) {
      let trobat = true;
      for (let k = 0; k < cerca.lenght; k++) {
        if (
          j + k >= partitura[i].melodia.length ||
          partitura[i].melodia[j + k].nota !== cerca[k].nota ||
          partitura[i].melodia[j + k].tipus !== cerca[k].tipus
        ) {
          trobat = false;
        }
      }
    }
  }

  if (trobat) {
    resultat.push(partitura);
  }
}
