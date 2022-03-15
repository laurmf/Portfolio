(function() {
    // https://dashboard.emailjs.com/admin/integration
    emailjs.init('KxsILRv-GsaJ13Vyu');

})();
window.onload = function() {
    // 'contact-form' debe ser el ID de tu FORMULARIO
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        $("#enviar").css({"display": "none"})
        event.preventDefault();
        emailjs.sendForm('service_45jnsgf', 'template_ill6np9', this)
            .then(function(success) {
                console.log('SUCCESS!');
                console.log(success);
                // Aquí podríamos cambiar el mensaje de envío de correo con éxito por el formulario
                // Ocultar formulario
                $("#contact-form").css({"display": "none"});
                // Mostrar mensaje de exito
                $(".exito").css({"display": "block"});

            }, function(error) {
                console.log('FAILED...', error);
        });
    });
}
