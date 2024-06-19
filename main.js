document.addEventListener('DOMContentLoaded', (event) => {
    const input = document.getElementById('miInput');
    const container = document.getElementById('miDiv');
    const contador = document.getElementById('contador');
    const partesMensaje = document.getElementById('partesMensaje');
    const mensajeDefault = document.getElementById('mensajeDefault');

    const specialChars = '|^€{}[]~\\';


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

        // anadir 

      // scripts.js

        // Crear un nuevo div o span por cada carácter
        for (let i = 0; i < value.length; i++) {
            const charElement = document.createElement('span');
            charElement.className = 'char';
            charElement.textContent = value[i];

            // Si el carácter es uno de los especiales, agregar el "Esc"
            if (specialChars.includes(value[i])) {
                // Crear el elemento "Esc"
                const escElement = document.createElement('div');
                escElement.className = 'esc-text';
                escElement.textContent = 'Esc';
                
                // Crear un contenedor para el carácter especial y el texto "Esc"
                const specialContainer = document.createElement('div');
                specialContainer.style.display = 'flex';
                specialContainer.style.alignItems = 'center';
                
                // Agregar "Esc" y el carácter especial al contenedor
                specialContainer.appendChild(escElement);
                specialContainer.appendChild(charElement);
                
                // Agregar el contenedor al contenedor principal
                container.appendChild(specialContainer);

                // Incrementar el contador de caracteres en 2
                actualCharCount += 2;
            } else {
                // Agregar el carácter normal directamente al contenedor principal
                container.appendChild(charElement);

                // Incrementar el contador de caracteres en 1
                actualCharCount += 1;
            }
        }

        // Calcular el número de mensajes basado en el número de caracteres
        const messageCount = Math.floor(actualCharCount / 160) + 1;

        // Actualizar el contador de caracteres y el número de partes del mensaje
        contador.textContent = actualCharCount;
        partesMensaje.textContent = messageCount;
    });

    // Funcionalidad del sticky header
    const header = document.getElementById('header');
    const sticky = header.offsetTop;

    function checkSticky() {
        if (window.pageYOffset > sticky) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    }

    window.onscroll = function() {
        checkSticky();
    };


});
