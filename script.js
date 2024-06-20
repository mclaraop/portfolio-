    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm('service_oq87lkq', 'template_ux7oafs', this)
            .then(function() {
                alert('Mensagem enviada com sucesso!');
            }, function(error) {
                alert('Falha ao enviar a mensagem: ' + JSON.stringify(error));
            });
    });
