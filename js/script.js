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
    let courrentImage = images[i]
    slider.innerHTML +=`<div class="slide">
                            <img src="${courrentImage}">
                        </div>`
}

//creo un HTML collection con tutte le slide
let allSlides = document.getElementsByClassName('slide');

//rendo visibile la prima slide
let visibleElement = 0;
allSlides[visibleElement].classList.add('visible');
