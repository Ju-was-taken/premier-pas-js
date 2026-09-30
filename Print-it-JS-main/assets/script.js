const slides = [
    {
        "image":"slide1.jpg",
        "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image":"slide2.jpg",
        "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image":"slide3.jpg",
        "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image":"slide4.png",
        "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
    }
];


const left = document.querySelector('.left');
const right = document.querySelector('.right');
const bannerImg = document.querySelector('.banner-img');
const tagLine = document.querySelector('#banner p');
const dotsContainer = document.querySelector('.dots');

// memo image en cours
let currentIndex = 0;

// génération bullet points
const numberOfSlides = slides.length;

for (let i = 0; i < numberOfSlides; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");

    if (i === 0) {
        dot.classList.add("dot_selected");
    }

    dotsContainer.appendChild(dot);
}


function updateCarousel() {
    // Changement de image
    bannerImg.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
    
    // Changement du texte
    tagLine.innerHTML = slides[currentIndex].tagLine;
    
    // Maj bullet points
    const allDots = document.querySelectorAll(".dots .dot");
    allDots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add("dot_selected");
        } else {
            dot.classList.remove("dot_selected");
        }
    });
} 

// Clic Flèche Gauche
left.addEventListener('click', () => {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }

    updateCarousel();
});

// Clic Flèche Droite
right.addEventListener('click', () => {
    currentIndex++;

    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }

    updateCarousel();
});