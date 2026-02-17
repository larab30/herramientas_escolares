document.getElementById('btnConvertir').addEventListener('click', () => {
    const pesos = parseFloat(document.getElementById('pesos').value);
    const tipoCambio = parseFloat(document.getElementById('tipoCambio').value);

    if (Number.isNaN(pesos) || Number.isNaN(tipoCambio) || pesos < 0 || tipoCambio <= 0) {
        alert('Por favor completa todos los campos');
        return;
    }

    const dolares = pesos / tipoCambio;
    document.getElementById('dolares').value = dolares.toFixed(2);
});
