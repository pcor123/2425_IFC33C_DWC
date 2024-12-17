(() => {
    const enlaces = [
        { nombre: 'Google', url: 'https://google.com' },
        { nombre: 'YouTube', url: 'https://youtube.com' }
    ];

    const generarListaEnlaces = () => {
        const lista = document.createElement('ul');
        enlaces.forEach(({ nombre, url }) => {
            const item = document.createElement('li');
            const enlace = document.createElement('a');
            enlace.textContent = nombre;
            enlace.href = url;
            enlace.target = '_blank';
            item.appendChild(enlace);
            lista.appendChild(item);
        });
        document.body.appendChild(lista);
    };

    generarListaEnlaces();
})();
