(() => {
    const numero = 5;

    const generarTablaMultiplicar = () => {
        const tabla = document.createElement('table');
        tabla.border = '1';

        for (let i = 1; i <= 10; i++) {
            const fila = tabla.insertRow();
            fila.innerHTML = `<td>${numero} x ${i}</td><td>${numero * i}</td>`;
        }

        document.getElementById('contenedor').appendChild(tabla);
    };

    generarTablaMultiplicar();
})();
