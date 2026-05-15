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


// FORMULARIO

const form = document.getElementById('contact-form');

form.addEventListener('submit', async function (e) {

    e.preventDefault();

    const formData = new FormData(form);

    const message = document.getElementById('form-message');

    try {

        const response = await fetch(
            'https://formspree.io/f/mwvydnpo',
            {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            }
        );

        if (response.ok) {

            message.innerHTML = "Solicitud enviada correctamente.";
            message.style.color = "#25d366";

            form.reset();

        } else {

            message.innerHTML = "Error enviando formulario.";
            message.style.color = "red";

        }

    } catch (error) {

        console.error(error);

        message.innerHTML = "Error de conexión.";
        message.style.color = "red";

    }

});