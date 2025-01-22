// script.js

// Problema: Falta de manejo de eventos básicos y retroalimentación visual

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Problema: No se avisa al usuario que el formulario no se envió

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Por favor, complete todos los campos.'); // Problema: Mensaje genérico y poco informativo
    } else {
        console.log('Formulario enviado:', { name, email, message });
        alert('Gracias por contactarnos.'); // Problema: No redirige ni proporciona confirmación visual en la página
    }
});
