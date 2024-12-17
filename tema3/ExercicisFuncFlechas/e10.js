(() => {
    const numeros = [10, 20, 30, 40, 50];
    const calcularPromedio = () => numeros.reduce((a, b) => a + b, 0) / numeros.length;

    const parrafo = document.createElement('p');
    parrafo.textContent = `El promedio es: ${calcularPromedio()}`;
    document.body.appendChild(parrafo);
})();
