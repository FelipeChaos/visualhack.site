const reveals = document.querySelectorAll('.reveal');

function revealElements(){
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        const visible = 120;

        if(top < window.innerHeight - visible){
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealElements);
revealElements();


// FORMULARIO

const form = document.getElementById('contact-form');

form.addEventListener('submit', async function(e){

    e.preventDefault();

    const formData = new FormData(form);

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

    const message = document.getElementById('form-message');

    if(response.ok){

        message.innerHTML = "Solicitud enviada correctamente.";
        message.style.color = "#25d366";

        form.reset();

    } else {

        message.innerHTML = "Error enviando solicitud.";
        message.style.color = "red";

    }

});
