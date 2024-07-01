document.addEventListener('DOMContentLoaded', (event) => {
    const input = document.getElementById('miInput');
    const container = document.getElementById('miDiv');
    const contador = document.getElementById('contador');
    const partesMensaje = document.getElementById('partesMensaje');
    const mensajeDefault = document.getElementById('mensajeDefault');
    const codificacion = document.getElementById('codificacion');
    const caracteresMaximos = document.getElementById('caracteresMaximos');

    const specialChars = '|^€{}[]~\\';
    const unicodeChars = 'áíóúÁÍÓÚ`';

    input.addEventListener('input', function() {
        // Limpiar el contenedor
        container.innerHTML = '';

        // Obtener el valor del textarea
        const value = input.value;

        // Ocultar el mensaje predeterminado si hay texto en el textarea
        if (value.length > 0) {
            mensajeDefault.style.display = 'none';
        } else {
            mensajeDefault.style.display = 'block';
        }

        // Inicializar el contador de caracteres reales
        let actualCharCount = 0;
        let isUnicode = false;

        // Crear un nuevo div o span por cada carácter
        for (let i = 0; i < value.length; i++) {
            const charElement = document.createElement('span');
            charElement.classList.add('char');

            // Verificar el carácter actual
            const currentChar = value[i];

            // Determinar la clase de fondo predeterminada
            let backgroundClass = 'bg-default';

            // Verificar si el carácter es especial
            if (specialChars.includes(currentChar)) {
                // Si estamos en 7 bits, agregar "Esc" antes del carácter especial
                
                // Si es un carácter especial y estamos en Unicode, cambiar a bg-greenLight
                if (isUnicode) {
                    backgroundClass = 'bg-greenLight';
                }
            } else if (unicodeChars.includes(currentChar)) {
                // Si es un carácter Unicode, aplicar bg-green
                backgroundClass = 'bg-green';
                isUnicode = true; // Marcar que estamos en Unicode
            } else if (isUnicode) {
                // Si estamos en Unicode y no es un carácter especial, aplicar bg-greenLight
                backgroundClass = 'bg-greenLight';
            }

            // Aplicar la clase de fondo al elemento de carácter
            charElement.classList.add(backgroundClass);
            charElement.textContent = currentChar;

            // Agregar el elemento de carácter al contenedor
            container.appendChild(charElement);

            // Incrementar el contador de caracteres
            actualCharCount++;
        }

        // Calcular el número de mensajes basado en el número de caracteres
        let maxCaracteres = isUnicode ? 70 : 160;
        const messageCount = Math.ceil(actualCharCount / maxCaracteres);

        // Actualizar los elementos de información
        contador.textContent = actualCharCount;
        partesMensaje.textContent = messageCount;
        codificacion.textContent = isUnicode ? 'Unicode' : '7-bit';
        caracteresMaximos.textContent = maxCaracteres;

        // Verificar y cambiar los caracteres anteriores con bg-yellow y bg-default a bg-greenLight si es Unicode
        if (isUnicode) {
            const charElements = container.querySelectorAll('.char.bg-yellow, .char.bg-default');
            charElements.forEach(charElement => {
                charElement.classList.remove('bg-yellow', 'bg-default');
                charElement.classList.add('bg-greenLight');
            });

            // Eliminar el elemento Esc si la codificación cambió a Unicode
            const escElements = container.querySelectorAll('.esc-text');
            escElements.forEach(escElement => {
                escElement.remove();
            });
        }
    });
});
