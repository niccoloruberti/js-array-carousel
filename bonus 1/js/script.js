'use strict';

//creo l'array di immagini

let images = [
    './img/01.webp',
    './img/02.webp',
    './img/03.webp',
    './img/04.webp',
    './img/05.webp',
]

let slider = document.querySelector('.slider');

//creo un ciclo che inserisce tutte le immagini dell'array nello slider

for (let i = 0; i < images.length; i++) {
    let currentImage = images[i]
    slider.innerHTML +=`<div class="slide">
                            <img src="${currentImage}">
                        </div>`
}

//creo un HTML collection con tutte le slide

let allSlides = document.getElementsByClassName('slide');

//rendo visibile la prima slide

let visibleElement = 0;
allSlides[visibleElement].classList.add('visible');

//creo l'evento per il teasto che fa scorrere le slide in avanti

let buttonDown = document.querySelector('.down');

buttonDown.addEventListener('click', function() {
    if (visibleElement < images.length - 1) {
        allSlides[visibleElement].classList.remove('visible');
        visibleElement++;
        allSlides[visibleElement].classList.add('visible');
    } else {
        //vuol dire che sono all'ultima immagine e devo tornare alla prima
        allSlides[visibleElement].classList.remove('visible');
        visibleElement = 0;
        allSlides[visibleElement].classList.add('visible');
    }
})

//creo l'evento per il tasto che fa scorrere le slide indietro

let buttonUp = document.querySelector('.up');

buttonUp.addEventListener('click', function() {
    if (visibleElement > 0) {
        allSlides[visibleElement].classList.remove('visible');
        visibleElement--;
        allSlides[visibleElement].classList.add('visible');
    } else {
        //vuol dire che sono alla prima immagine e devo passare all'ultima
        allSlides[visibleElement].classList.remove('visible');
        visibleElement = images.length - 1;
        allSlides[visibleElement].classList.add('visible');
    }
})