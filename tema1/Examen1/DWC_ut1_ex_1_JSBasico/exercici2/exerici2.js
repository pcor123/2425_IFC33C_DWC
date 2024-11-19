const llibres = [
  {
    títol: "El Petit Príncep",
    autor: {
      nombre: "Antoine",
      apellidos: "de Saint-Exupéry",
    },
    preu: 15.5,
    ISBN: "978-3-16-148410-0",
    editorial: "Editorial Juventud",
    numeroDeEdicio: 1,
    anyDePublicacio: 1943,
    generos: ["Infantil", "Filosofia"],
  },
  {
    títol: "1984",
    autor: {
      nombre: "George",
      apellidos: "Orwell",
    },
    preu: 12.3,
    ISBN: "978-0-452-28423-4",
    editorial: "Signet Classics",
    numeroDeEdicio: 1,
    anyDePublicacio: 1949,
    generos: ["Ficció", "Dystopia"],
  },
  {
    títol: "La casa dels esperits",
    autor: {
      nombre: "Isabel",
      apellidos: "Allende",
    },
    preu: 18.0,
    ISBN: "978-84-204-8276-8",
    editorial: "Plaza & Janés",
    numeroDeEdicio: 2,
    anyDePublicacio: 1982,
    generos: ["Ficció", "Realisme Màgic"],
  },
  {
    títol: "Cien años de soledad",
    autor: {
      nombre: "Gabriel",
      apellidos: "García Márquez",
    },
    preu: 20.0,
    ISBN: "978-0-06-088328-7",
    editorial: "Harper & Row",
    numeroDeEdicio: 1,
    anyDePublicacio: 1967,
    generos: ["Ficció", "Realisme Màgic"],
  },
  {
    títol: "Moby Dick",
    autor: {
      nombre: "Herman",
      apellidos: "Melville",
    },
    preu: 14.5,
    ISBN: "978-1-56619-909-4",
    editorial: "Pleiades Press",
    numeroDeEdicio: 1,
    anyDePublicacio: 1851,
    generos: ["Ficció", "Aventura"],
  },
];

function Llibre(titol, autorNom, autorApellido, preu, isbn, editorial, numeroDeEdicio, generos) {
  this.titol = titol;
  this.autorNom = autorNom;
  this.autorApellido=autorApellido;
  this.preu = preu;
  this.isbn = isbn;
  this.editorial = editorial;
  this.numeroDeEdicio = numeroDeEdicio;
  this.generos = generos;
}

/** 
function autor(nom, apellidos) {
  this.nom = nom;
  this.apellidos = apellidos;
}
*/


const llibres2 = [];

for (const valor in llibres) {
  llibres[valor].títol = new Llibre(
    llibres[valor].títol,
    llibres[valor].autor.nombre,
    llibres[valor].autor.apellidos,
    llibres[valor].preu,
    llibres[valor].ISBN,
    llibres[valor].editorial,
    llibres[valor].numeroDeEdicio,
    llibres[valor].anyDePublicacio,
    llibres[valor].generos
  );
  llibres2.push(llibres[valor].títol);
}
/**tots els objectes tenen el mateix nom, no ho he pogut canviar,
 * igualment els genera sense error
 * se que no es una bona practica.
 */
console.log("------------");
console.log(llibres2);
console.log("------------");

