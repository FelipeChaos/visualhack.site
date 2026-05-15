
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
