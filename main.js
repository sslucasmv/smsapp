document.addEventListener('DOMContentLoaded', (event) => {
    const input = document.getElementById('miInput');
    const container = document.getElementById('miDiv');
    const contador = document.getElementById('contador');

    input.addEventListener('input', function() {
        // Limpiar el contenedor
        container.innerHTML = '';
        
        // Obtener el valor del input
        const value = input.value;

        // Actualizar el contador de caracteres
        contador.textContent = value.length;

        // Crear un nuevo div o span por cada carácter
        for (let i = 0; i < value.length; i++) {
            const charElement = document.createElement('div');
            charElement.className = 'char';
            charElement.textContent = value[i];
            container.appendChild(charElement);
        }
    });
});
