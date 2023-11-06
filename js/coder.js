function calcularIva() {
    let numeroUser;
    do {
        const userInput = prompt('Ingrese un número para calcular su IVA: ');
        numeroUser = parseInt(userInput);

        if (isNaN(numeroUser)) {
            alert('Por favor, ingrese un número válido.');
        }
    } while (isNaN(numeroUser));

    if (!isNaN(numeroUser)) {
        const iva = numeroUser * 0.21;
        alert(`El IVA es: ` + iva);
    }
}

calcularIva();
calcularIva();
calcularIva();
calcularIva();
calcularIva();