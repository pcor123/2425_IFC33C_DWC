// Constructor Nota
function Nota(nom, sostingut) {
  this.nom = nom;
  this.sostingut = sostingut;
}

// Constructor Esquelet
const esquelet = {
  cerca: [], // array que guarda les notes afegides per addCerca
  partitures: [
      { nom: "La Balanguera", melodia: ["DO", "RE", "MI", "FA", "FA", "SOL", "SOL", "LA#", "LA#"] },
      { nom: "Happy Birthday", melodia: ["DO", "DO", "RE", "DO", "FA", "MI", "DO", "DO", "RE", "DO", "SOL", "FA"] }
  ]
};

// funcio per afegir una nota a l'array de cerca
function addCerca(nomNota, esSostingut) {
  let novaNota = new Nota(nomNota, esSostingut);
  esquelet.cerca.push(novaNota.nom + (novaNota.sostingut ? "#" : ""));
}

// compara si un subconjunt de notes apareix en la melodia
function cercaEnMelodia(melodia, cerca) {
  for (let i = 0; i <= melodia.length - cerca.length; i++) {
      let trobat = true;
      for (let j = 0; j < cerca.length; j++) {
          if (melodia[i + j] !== cerca[j]) {
              trobat = false;
              break;
          }
      }
      if (trobat) return true;
  }
  return false;
}

// cerca dins l'array de partitures si hi ha coincidències
function cercador() {
  const cercaNotes = esquelet.cerca; // Array de les notes a cercar
  const melodiesTrobades = [];

  // Crea un array de strings a partir de cercaNotes sense usar map
  const cercaString = [];
  for (let i = 0; i < cercaNotes.length; i++) {
      cercaString.push(cercaNotes[i]);
  }

  // comprova si la cerca existeix en cada partitura
  esquelet.partitures.forEach(partitura => {
      if (cercaEnMelodia(partitura.melodia, cercaString)) {
          melodiesTrobades.push(partitura.nom);
      }
  });

  // Mostra resultats
  if (melodiesTrobades.length > 0) {
      console.log("Melodies trobades:", melodiesTrobades.join(", "));
  } else {
      console.log("Sense resultats");
  }
}

addCerca("DO", false);
addCerca("RE", false);
cercador(); // Resultat: La Balanguera, Happy Birthday
