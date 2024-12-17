const datos = [
    { nombre: 'Juan', edad: 30, email: 'juan@example.com' },
    { nombre: 'María', edad: 25, email: 'maria@example.com' },
    { nombre: 'Pedro', edad: 35, email: 'pedro@example.com' }
];

const tabla = document.createElement('table');
tabla.border = '1';

const encabezado = tabla.insertRow();
Object.keys(datos[0]).forEach(titulo => {
    const celda = encabezado.insertCell();
    celda.textContent = titulo.charAt(0).toUpperCase() + titulo.slice(1);
});

datos.forEach(objeto => {
    const fila = tabla.insertRow();
    Object.values(objeto).forEach(valor => {
        const celda = fila.insertCell();
        celda.textContent = valor;
    });
});

document.getElementById('contenedorTabla').appendChild(tabla);
