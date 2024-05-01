// Function for carousel
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

// Function for image animation based on scroll events
const imageContainer = document.getElementById('imageContainer');
const images1 = document.querySelectorAll('.image-wrapper1');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const windowWidth = window.innerWidth;

    images1.forEach((image, index) => {
        const offset = index * windowWidth / 2;
        const distanceFromTop = image.offsetTop - scrollY;
        const translateX = (windowWidth / 2) - offset - distanceFromTop * 0.5;

        image.style.transform = `translateX(${translateX}px)`;
    });
});
