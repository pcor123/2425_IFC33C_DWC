/**
 * Classifica una persona segons la seva edat.
 * @param {number} edat - L'edat de la persona.
 * @returns {string} - La classificació de la persona.
 */
function classificarPerEdat(edat) {
  let classificacio;
  let resultat;

  if (edat < 0) {
    resultat = 0;
  }
  if ((edat) => 0 && edat <= 12) {
    resultat = 1;
  }
  if (edat >= 13 && edat <= 17) {
    resultat = 2;
  }
  if (edat >= 18 && edat < 65) {
    resultat = 3;
  }
  if (edat >= 65) {
    resultat = 4;
  }

  switch (resultat) {
    case 1:
      classificacio = "Nena/o";
      console.log("Nena/o");
      break;

    case 2:
      classificacio = "Adoslescent";
      console.log("Adoslescent");
      break;

    case 3:
      classificacio = "Adult";
      console.log("Adult");
      break;

    case 4:
      classificacio = "Persona gran";
      console.log("Persona gran");
      break;

    default:
      classificacio = "Edat no valida";
      console.log("Edat no valida");
      break;
  }
  console.log(edat);

  // AÑADIR EL CÓDIGO DEL PUNT 1 AQUÍ

  return classificacio;
}

classificarPerEdat(18); // prova

// Array d'objectes que representen pacients
const pacients = [
  { nom: "Laura", edat: 5 },
  { nom: "Javier", edat: 15 },
  { nom: "Rosa", edat: 25 },
  { nom: "Antonio", edat: 70 },
  { nom: "Sofia", edat: -3 },
];

// Classificació i impressió de cada pacient
for (key in pacients) {
  // AÑADIR EL CÓDIGO DEL PUNTO 2 AQUÍ
  console.log(
    "A la pacient: ",
    pacients[key].nom,
    " edad: ",
    pacients[key].edat,
    " la classificació és: ",
    classificarPerEdat(pacients[key].edat)
  );

}

/** 
console.log("A la pacient: ",
    pacients.nom," edad: ",
    pacients.edat," la classificació és: ",
    classificarPerEdat(pacients.edat))*/
