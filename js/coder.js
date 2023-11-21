const tasasIva = [
    { producto: 'Producto A', iva: 0.18 },
    { producto: 'Producto B', iva: 0.21 },
];

function obtenerTasaIva(producto) {
    const tasaEncontrada = tasasIva.find(item => item.producto === producto);
    return tasaEncontrada ? tasaEncontrada.iva : 0.21;
}

function calcularIva() {
    let producto = prompt('Ingrese el nombre o código del producto: ');

    if (!producto) {
        alert('Operación cancelada. Inténtelo de nuevo.');
        return;
    }

    let numeroUser;
    do {
        const userInput = prompt('Ingrese el precio del producto: ');

        if (userInput === null) {
            alert('Operación cancelada. Inténtelo de nuevo.');
            return;
        }

        numeroUser = parseFloat(userInput);

        if (isNaN(numeroUser)) {
            alert('Por favor, ingrese un precio válido.');
        }
    } while (isNaN(numeroUser));

    const tasaIva = obtenerTasaIva(producto);
    const iva = numeroUser * tasaIva;

    alert(`El IVA para ${producto} es: ${iva.toFixed(2)} (Tasa: ${tasaIva * 100}%)`);
}

function ejecutarProcesos() {
    calcularIva();
}

ejecutarProcesos();