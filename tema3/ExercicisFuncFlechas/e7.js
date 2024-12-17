(() => {
    const mostrarInfoNavegador = () => {
        const parrafo1 = document.createElement('p');
        const parrafo2 = document.createElement('p');
        parrafo1.textContent = `Navegador: ${navigator.userAgent}`;
        parrafo2.textContent = `Idioma: ${navigator.language}`;
        document.body.append(parrafo1, parrafo2);
    };

    mostrarInfoNavegador();
})();
