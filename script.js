// script.js

// Problema: Falta de manejo de eventos básicos y retroalimentación visual
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();  // Problema: No se avisa al usuario que el formulario no se envió

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Recuperar el elemento para mostrar retroalimentación
    const feedback = document.getElementById('feedback');

    // Limpiar mensaje previo
    feedback.textContent = '';
    feedback.classList.remove('error', 'success');

    // Problema: No se avisa al usuario que el formulario no se envió
    if (!name && !email && !message) {
        feedback.textContent = 'Por favor, complete todos los campos.'; // Problema: Mensaje genérico y poco informativo
        feedback.classList.add('error');
    } else {
        let errorMessage = 'Por favor, complete los siguientes campos:';
        let isError = false;

        if (!name) {
            errorMessage += ' Nombre';
            isError = true;
        }
        if (!email) {
            errorMessage += isError ? ', Correo' : ' Correo';
            isError = true;
        }
        if (!message) {
            errorMessage += isError ? ', Mensaje' : ' Mensaje';
            isError = true;
        }
        if (isError) {
            feedback.textContent = errorMessage + '.';
            feedback.classList.add('error');
        } else {
            // Si todos los campos están completos, muestra el mensaje de éxito
            console.log('Formulario enviado:', { name, email, message });
            feedback.textContent = 'Gracias por contactarnos. Hemos recibido tu mensaje.';// Problema: No redirige ni proporciona confirmación visual en la página
            feedback.classList.add('success');
        }
    }
});
