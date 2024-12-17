(() => {
    const texto = 'Este es un ejemplo de texto con varias palabras.';
    const contarPalabras = () => texto.split(' ').length;

    const parrafo = document.createElement('p');
    parrafo.textContent = `El texto tiene ${contarPalabras()} palabras.`;
    document.body.appendChild(parrafo);
})();
