const reveals = document.querySelectorAll('.reveal');

function revealElements() {

    reveals.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 120) {
            el.classList.add('active');
        }

    });

}

window.addEventListener('scroll', revealElements);

revealElements();


// FORMULARIO EMAILJS

const form = document.getElementById('contact-form');

form.addEventListener('submit', function (e) {

    e.preventDefault();

    const message = document.getElementById('form-message');

    emailjs.sendForm(
        'service_8cj0thm',
        'template_2ldtole',
        this
    )

        .then(function () {

            message.innerHTML = "Solicitud enviada correctamente.";
            message.style.color = "#25d366";

            form.reset();

        }, function (error) {

            console.error(error);

            message.innerHTML = "Error enviando solicitud.";
            message.style.color = "red";

        });

});