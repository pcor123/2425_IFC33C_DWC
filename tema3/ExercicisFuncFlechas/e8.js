(() => {
    const generarListaNumerica = () => {
        const lista = document.createElement('ol');
        Array.from({ length: 10 }, (_, i) => i + 1).forEach(numero => {
            const item = document.createElement('li');
            item.textContent = numero;
            lista.appendChild(item);
        });
        document.body.appendChild(lista);
    };

    generarListaNumerica();
})();
