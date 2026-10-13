const slides = document.querySelectorAll('.banner-slide');
let indiceAtual = 0;

function trocarBanner() {
    
    slides[indiceAtual].classList.remove('active');


    indiceAtual = (indiceAtual + 1) % slides.length;

    slides[indiceAtual].classList.add('active');
}


setInterval(trocarBanner, 4000);