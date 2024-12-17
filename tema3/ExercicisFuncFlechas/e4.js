(() => {
    const datos = [
        { nombre: 'Juan', edad: 30 },
        { nombre: 'María', edad: 25 }
    ];

    const generarTabla = () => {
        const tabla = document.createElement('table');
        tabla.border = '1';

        const encabezado = tabla.insertRow();
        encabezado.innerHTML = '<th>Nombre</th><th>Edad</th>';

        datos.forEach(({ nombre, edad }) => {
            const fila = tabla.insertRow();
            fila.innerHTML = `<td>${nombre}</td><td>${edad}</td>`;
        });

        document.getElementById('contenedor').appendChild(tabla);
    };

    generarTabla();
})();
