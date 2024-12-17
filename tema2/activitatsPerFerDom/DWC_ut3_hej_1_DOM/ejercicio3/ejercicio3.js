const nombres = ['Juan', 'María', 'Pedro', 'Ana'];
const lista = document.createElement('ul');

nombres.forEach(nombre => {
    const item = document.createElement('li');
    item.textContent = nombre;
    lista.appendChild(item);
});

document.getElementById('contenedorLista').appendChild(lista);

