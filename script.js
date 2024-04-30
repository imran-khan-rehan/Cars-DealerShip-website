const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');

let counter = 1;
const size = images[0].clientWidth;

function slide() {
    carouselImages.style.transform = 'translateX(' + (-size * counter) + 'px)';
    counter++;

    if (counter === images.length) {
        counter = 0;
    }
}

setInterval(slide, 3000); // Change image every 3 seconds
