var v1 = document.getElementById("hombre");
console.log(v1);

console.log(v1.attributes);

var v2 = document.getElementById("Input");
console.log(v2);

var v3 = document.getElementById("body");
console.log(v3);
console.log(v3[0]);
console.log(v3[0].childNodes);
console.log(v3[0].children);
console.log(v3[0].parentElement);

var v4 = document.getElementsByClassName("sexo");
console.log(v4);

var v5 = document.getElementById("sexo");
console.log(v5);

var v6 = document.getRootNode();
console.log(v6);

var v7 = document.querySelectorAll("#mujer");
var v8 = document.querySelector(".css");

// crear elements
var v8 = document.createElement("h2");
// Introduir nomes text
v8.innerHTML = "Hola <Strong>tú</Strong>";

// v8.innerHTML="Hola <span style="color="red">Tú</span>
// v8.innerHTML="Hola <Strong>tú</Strong>"

console.log(v8);
