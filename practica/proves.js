/** 
var a = "hola";
console.log(a);

var arrayObjectes = [
  {
    nom: "pepito",
    edad: 25,
    hobby: "ser npc",
  },
  {
    nom: "pep",
    edad: 22,
    hobby: "ser npc",
  },
  {
    nom: "peto",
    edad: 21,
    hobby: "ser npc",
  },
  {
    nom: "botito",
    edad: 21,
    hobby: "ser npc",
  },
];

for (i = 0; i < arrayObjectes.length; i++) {
  console.log("==========");
  console.log("Nom:", arrayObjectes[i].nom);
  console.log("Edad:", arrayObjectes[i].edad);
  console.log("Hobby:", arrayObjectes[i].hobby);
}
*/
/**
 * 
 
var ObjecteambArray = 
  {
    nom: "objecte amb array",
    arr: ["abeja", "banana", "camion", "dado"],
  }
;

for (i = 0; i < ObjecteambArray.arr.length; i++){
    console.log('==========')
    console.log(ObjecteambArray.arr[i], 'jaja');
}
    */

/** 
En la carpeta JSBasico_Ejercicio1 tenéis los siguientes ficheros:
index.html -> Fichero HTML para hacer la llamada del fichero js.Hay que implementarlo.
ejercicio1.js -> Fichero JS dónde se realizará el código del ejercicio 
y dónde tenéis implementada una línea de código solicitando un número entre el 1 y el 10 al usuario.
*/
/*** */
let numero = prompt("Donem un numero del 1 al 10");

var min = 1;
var max = 10;
numRandom = Math.floor(Math.random() * (max - min + 1) + min);
console.log(numRandom);

numero = parseInt(numero);

if (numero === numRandom) {
  var resultat = true;
  console.log("Acertat");
} else {
  resultat = false;
  console.log("botito");
}

console.log(resultat)
