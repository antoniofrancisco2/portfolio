// Obtém os elementos do DOM
const navbarToggle = document.getElementById('navbar-toggle');
const navbarLinks = document.getElementById('navbar-links');

// Função para alternar a visibilidade do menu
navbarToggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('active'); // Adiciona ou remove a classe active
});



gsap.registerPlugin(ScrollTrigger);

    // Animação do texto
    gsap.fromTo(
        "#conta",
        { x: -100, opacity: 0 },
        {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".content",
                start: "top 80%", // Quando 80% do container entrar na tela
                end: "bottom 20%",
                toggleActions: "play none none none",
            },
        }
    );

    // Animação da imagem
    gsap.fromTo(
        "#img1",
        { y: -100, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".content",
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none none",
            },
        }
    );



    ScrollReveal().reveal('#sobre');

    ScrollReveal().reveal('#sobre');
    ScrollReveal().reveal('.container', { 
        delay: 500
     });
    ScrollReveal().reveal('#img2', { 
        delay: 600 
    });



    window.sr = new ScrollReveal();

    sr.reveal('#servs');
    sr.reveal('.box', { 
        delay: 400 
    });



    window.sr = new ScrollReveal();

    sr.reveal('.skills');
    sr.reveal('#html-skill', { delay: 400 });
    sr.reveal('#css-skill', { delay: 500 });
    sr.reveal('#js-skill', { delay: 600 });


    window.sr = new ScrollReveal();

    sr.reveal('#cards');