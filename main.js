document.getElementById('register-button').addEventListener('click', function() {
    // URL de la página del formulario de registro
    var registrationFormURL = 'paginas/formulario_registro.html'; // Ruta relativa

    // Tamaño y propiedades de la ventana emergente
    var popupWidth = 400;
    var popupHeight = 600;
    var popupOptions = 'width=' + popupWidth + ',height=' + popupHeight + ',resizable=yes';

    // Abrir la ventana emergente
    window.open(registrationFormURL, 'Registro de Usuario', popupOptions);
});

