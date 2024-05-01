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

$(document).ready(function() {
    // Dummy data for the table
    var dummyTableData = [
        { name: "Toyota", model: "Corolla", specifications: "4-door sedan", price: "$20,000" },
        { name: "Honda", model: "Civic", specifications: "Compact car", price: "$22,000" },
        { name: "Ford", model: "F-150", specifications: "Pickup truck", price: "$35,000" }
        // Add more dummy data as needed
    ];

    // Populate the table with dummy data
    var $tableBody = $('#carTable-12 tbody');
    $.each(dummyTableData, function(index, data) {
        var $row = $('<tr>');
        $row.append('<td>' + data.name + '</td>');
        $row.append('<td>' + data.model + '</td>');
        $row.append('<td>' + data.specifications + '</td>');
        $row.append('<td>' + data.price + '</td>');
        $tableBody.append($row);
    });

    // Dummy data for card views
    var cardData = [
        { image: "./images/Create ultrarealestic and dystopian (1).jpg", name: "Toyota Corolla", specifications: "4-door sedan" },
        // { image: "./images/car2.jpg", name: "Honda Civic", specifications: "Compact car" },
        // { image: "./images/car3.jpg", name: "Ford F-150", specifications: "Pickup truck" }
        // Add more dummy data as needed
    ];

    // Populate the card views with dummy data
    var $cardContainer = $('#carContainer-12');
    $.each(cardData, function(index, data) {
        var $card = $('<div class="card-12">');
        $card.append('<img src="' + data.image + '" alt="' + data.name + '">');
        var $cardContent = $('<div class="card-content-12">');
        $cardContent.append('<h3>' + data.name + '</h3>');
        $cardContent.append('<p>' + data.specifications + '</p>');
        $cardContent.append('<a href="#" class="buy-button-12">Buy Now</a>');
        $card.append($cardContent);
        $cardContainer.append($card);
    });
});
