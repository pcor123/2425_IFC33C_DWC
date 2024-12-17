(() => {
    const mostrarDimensiones = () => {
        const parrafo = document.createElement('p');
        parrafo.textContent = `Ancho: ${window.innerWidth}, Alto: ${window.innerHeight}`;
        document.getElementById('contenedor').appendChild(parrafo);
    };

    mostrarDimensiones();
})();
