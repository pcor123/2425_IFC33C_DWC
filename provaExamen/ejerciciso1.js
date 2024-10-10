let jsonObj = {
  squadName: "Super hero squad",
  homeTown: "Metro City",
  formed: 2020,
  secretBase: "Super tower",
  active: true,
  members: [
    {
      name: "Molecule Man",
      age: 29,
      secretIdentity: "Dan Jukes",
      powers: [" Radiation resistance", "Turning tiny", "Radiation blast"],
    },
    {
      name: "Madame Uppercut",
      age: 39,
      secretIdentity: "Jane Wilson",
      powers: [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes",
      ],
    },
    {
      name: "Eternal Flame",
      age: 1000000,
      secretIdentity: "Unknown",
      powers: [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel",
      ],
    },
  ],
};

console.log("----------", jsonObj.squadName, "----------");
console.log("-----", jsonObj.homeTown, "//", jsonObj.formed, "-----");

// Usar for...of para iterar sobre los miembros
for (var i = 0; i < jsonObj.members.length; i++) {
  var member = jsonObj.members[i];
  console.log("----------------------------------");

  for (var key in member) {
    if (Array.isArray(member[key])) {
      console.log(
        key.charAt(0).toUpperCase() +
          key.slice(1) +
          ": " +
          member[key].join(", ")
      );
    } else {
      console.log(
        key.charAt(0).toUpperCase() + key.slice(1) + ": " + member[key]
      );
    }
  }
}  

  console.log("***********************************");

  // Solució
  
  // declarar les variables abans per alligerar la carrega de processament

  let escuadron = jsonObj.squadName;
  let ciudad = jsonObj.homeTown;
  let fechaOrigen = jsonObj.formed;
  let nom;
  let edad;
  let identidad;
  let poderes; // String de strings
  let superHeroe;
  
  for (let member of jsonObj.members) {
    poderes = "";  // Inicializar la variable de poderes vacía
    nom = member.name;
    edad = member.age;
    identidad = member.secretIdentity;
  
    // Asignar el primer poder
    poderes = member.powers[0];
    
    // Iterar sobre los poderes a partir del segundo (i=1)
    for (let i = 1; i < member.powers.length; i++) {
      poderes += ", " + member.powers[i];  // Concatenar los poderes
    }
  
    // Crear la salida final
    superHeroe = "Nombre: " + nom + "\n" +
                 "Edad: " + edad + "\n" +
                 "Identidad: " + identidad + "\n" +
                 "Poderes: " + poderes;
    
    // Imprimir el resultado en consola
    console.log(superHeroe);
  }


  function sacarInfo(){
    let scuadName = jsonObj.squadName;
    let homeTown = jsonObj.homeTown;
    let formed = jsonObj.formed;
    
    console.log("-".repeat(26), scuadName, "-".repeat(26));
    console.log("----- Ciudad de origen: ", homeTown, " // ", "Fecha de origen: ", formed, " -----");  

    for(let i = 0; i < jsonObj.members.length; i++){
        let member = jsonObj.members[i];
        let name = member.name;
        let age = member.age;
        let secretIdentity = member.secretIdentity;

        console.log("Nombre: ", name);
        console.log("Edad: ", age);
        console.log("Identidad secreta: ", secretIdentity);
        console.log("Poderes: ", member.powers.join(", "));
        console.log("-".repeat(70));
    }
}
sacarInfo();