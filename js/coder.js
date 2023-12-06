const tasasIva = [
    { producto: 'Producto A', iva: 0.18 },
    { producto: 'Producto B', iva: 0.21 },
];


function obtenerTasaIva(producto) {
    const tasaEnLocalStorage = localStorage.getItem(producto);
    return tasaEnLocalStorage ? parseFloat(tasaEnLocalStorage) : 0.21;
}

function calcularIva() {
    const productoInput = document.getElementById('producto');
    const precioInput = document.getElementById('precio');
    const resultadoDiv = document.getElementById('resultado');

    const producto = productoInput.value;
    const tasaIva = obtenerTasaIva(producto);

    const precio = parseFloat(precioInput.value);

    if (isNaN(precio)) {
        resultadoDiv.textContent = 'Por favor, ingrese un precio válido.';
        return;
    }

    const iva = precio * tasaIva;


    resultadoDiv.textContent = `El IVA para ${producto} es: ${iva.toFixed(2)} (Tasa: ${tasaIva * 100}%)`;


    localStorage.setItem(producto, tasaIva);
}

function handleClick() {
    calcularIva();
}


const botonCalcular = document.getElementById('calcular');


botonCalcular.addEventListener('click', handleClick);

