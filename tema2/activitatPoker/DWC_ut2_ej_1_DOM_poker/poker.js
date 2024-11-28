function CrearCarta(numero, tipo) {
    this.numero = numero;
    this.tipo = tipo;
    this.imagen = `cards/${numero}_of_${tipo.toLowerCase()}.png`; // Ruta relativa
}

let llistaCarta = [];
let cartaEjemplo = new CrearCarta('2', 'clubs');
console.log(cartaEjemplo.imagen); // Debería mostrar "cards/2_of_clubs.png"
// Palos de la baraja
let palos = ['hearts', 'diamonds', 'clubs', 'spades'];

// Números y figuras de las cartas
let numeros = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];

// Llenar el array con todas las combinaciones de número y palo
for (let palo of palos) {
    for (let numero of numeros) {
        llistaCarta.push(new CrearCarta(numero, palo));
    }
}

// Función para sacar una carta sin repetirla
function sacarCartaAleatoria(baraja) {
    var n = baraja.length;
    if (n === 0) {
        console.log("No quedan más cartas en la baraja.");
        return null;
    }
    var m = Math.floor(Math.random() * n); // Índice aleatorio entre 0 y el tamaño actual de la baraja
    var cartaAleatoria = baraja.splice(m, 1)[0]; // Extraer la carta y eliminarla del array
    return cartaAleatoria;
}

function jugar() {
    let cartasJugadas = [];
    let numerosJugados = {}; // Para contar las cartas jugadas por número

    // Sacar 5 cartas
    for (let i = 0; i < 5; i++) {
        let carta = sacarCartaAleatoria(llistaCarta);
        if (carta) {
            cartasJugadas.push(carta);
            numerosJugados[carta.numero] = (numerosJugados[carta.numero] || 0) + 1; // Contar cuántas veces se ha jugado cada número
        }
    }

    // Mostrar las cartas en el DOM
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<h2>Cartas Jugadas:</h2>";
    cartasJugadas.forEach(carta => {
        resultadoDiv.innerHTML += `
            <div>
                <img src="${carta.imagen}" alt="${carta.numero} de ${carta.tipo}" style="width: 100px; height: auto;">
                <br>${carta.numero} de ${carta.tipo}
            </div>
        `;
    });

    // Verificar si hay pareja
    let hayPareja = Object.values(numerosJugados).some(count => count === 2);

    // Mostrar resultado
    if (hayPareja) {
        resultadoDiv.innerHTML += "<h2>¡Has ganado! Tienes una pareja.</h2>";
    } else {
        resultadoDiv.innerHTML += "<h2>Lo siento, no has ganado esta vez.</h2>";
    }

    console.log("Cartas restantes en la baraja:", llistaCarta.length);
}