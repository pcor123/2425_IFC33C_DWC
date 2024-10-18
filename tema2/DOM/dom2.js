function Marca(nom) {
  this.nom = nom;
}

function Modelo(marca, modelo) {
  this.marca = marca;
  this.modelo = modelo;
}

var ford = new Marca("FORD");
//console.log(ford);
var citroen = new Marca("CITROEN");
var seat = new Marca("SEAT");

var ffocus = new Modelo(ford, "FOCUS");
var fiesta = new Modelo(citroen, "FIESTA");
var saxo = new Modelo(seat, "SAXO");
var c4 = new Modelo(citroen, "C4");

var coches = [ffocus, fiesta, saxo, c4];
console.log(coches);

//mostrar array del coches

//var div_app = document.getElementById("#app");
// opcio 2: var div_app =document.querySelector("body div:first-child")
// opcio 3:
var div = document.querySelector("#app");

//crear una taula

var table = document.createElement("TABLE");
table.id = "coches";

// afegir thead a table
var thead = document.createElement("thead");
table.appendChild(thead);

var tr = document.createElement("tr");
thead.appendChild(tr);

var cabeceras = ["MARCA", "MODELO"];

// refactorizat, evitar declarar dins bucles, millor
var th;
for (let cabecera of cabeceras) {
  th = document.createElement("th");
  th.innerText = cabecera;
  tr.appendChild(th);
}

/*
th = document.createElement("th");
  th.innerText = cabecera;
  tr.appendChild(th);

var th = document.createElement("th");
th.innerText = "MODELO";
tr.appendChild(th); */

var tbody = document.createElement("tbody");
table.appendChild(tbody);

//intentar refactorizar

var td;

for (var i = 0; i < coches.length; i++) {
  tr = document.createElement("tr");
  tbody.appendChild(tr);

  for (let proiedad in coches[i]) {
    td = document.createElement("td");

    if (typeof coches[i][proiedad] === "string") {
      td.innerText = coches[i][proiedad];
    } else {
      td.innerText = coches[i];
    }
    tr.appendChild(td);
  }
}

/** 
for (var i = 0; i < coches.length; i++) {
  tr = document.createElement("tr");
  tbody.appendChild(tr);

  td = document.createElement("td");
  console.log(i, coches[i].marca);
  td.innerText = coches[i].marca.nom;
  tr.appendChild(td);

  td = document.createElement("td");
  td.innerText = coches[i].modelo;
  tr.appendChild(td);
}
*/

div.appendChild(table);

table.style.backgroundColor = "yellow";
table.style.border = "solid black";

console.log(table);
table.style.backgroundColor = "yellow";

for (var i = 0; i < coches.length; i++) {
  console.log(i);
}
