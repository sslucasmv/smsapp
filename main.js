
/* PONERLE ESCRIBIR MENSAJE DONDE APARECEN, LOS NUMEROS UN MENSAJE DEFAULT */

/* HACER LAS MEDIA QUERIES */

/* HACER LA FUNCIONALIDAD DE CARACTERES ESPECIALES */


document.addEventListener('DOMContentLoaded', (event) => {
    const input = document.getElementById('miInput');
    const container = document.getElementById('miDiv');
    const contador = document.getElementById('contador');
    const partesMensaje = document.getElementById('partesMensaje');
    const mensajeDefault = document.getElementById('mensajeDefault');

    
    input.addEventListener('input', function() {
        
        // Limpiar el contenedor
        container.innerHTML = "";
        
        // Obtener el valor del textarea
        const value = input.value;

        // evaluar si tiene algo el input para mostrar mensaje default
        if(value.length > 0){
            mensajeDefault.style.display = 'none';
        } else {
            mensajeDefault.style.display = 'block';
        }



        // Calcular el mensaje basado en el número de caracteres
        const messageCount = Math.floor(value.length / 160) + 1;
        
        // Actualizar el contador de caracteres

        contador.textContent = `${value.length}`;
        partesMensaje.textContent = `${messageCount}`;

    

        // Crear un nuevo div o span por cada carácter
        for (let i = 0; i < value.length; i++) {
            const charElement = document.createElement('div');
            charElement.className = 'char';
            charElement.textContent = value[i];
            container.appendChild(charElement);
        }
    });
});
