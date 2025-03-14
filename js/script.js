// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar Links 
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id + ']').classList.add('active');
            })
        }
    })

    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

}

document.addEventListener("DOMContentLoaded", function () {
    const skills = document.querySelectorAll(".progress-bar");
    skills.forEach(skill => {
        const percentage = skill.getAttribute("data-percentage");
        skill.style.width = percentage + "%";
    });
});

document.getElementById("contactForm").addEventListener("submit",function(event){
    event.preventDefault();
    
    //Captura de Los datos Integrados
    const nombre = document.querySelector('input[name="nombre"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const telefono = document.querySelector('input[name="telefono"]').value;
    const asunto = document.querySelector('input[name="asunto"]').value;
    const mensaje = document.querySelector('textarea[name="mensaje"]').value;

    // Simulación de envío (puedes mostrarlo en la consola o como alerta)
    console.log("Formulario enviado con los siguientes datos: ");
    console.log("Nombre:",nombre);
    console.log("Email:",email);
    console.log("Teléfono:", telefono);
    console.log("Asunto:", asunto);
    console.log("Mensaje:", mensaje);

    alert("¡Mensaje enviado correctamente");

    // Opcional: Resetear el formulario después del envío simulado
    document.getElementById("contactForm").reset();
});