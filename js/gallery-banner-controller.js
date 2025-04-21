const images = [
    { src: '../assets/fotos/Banner.png'},
    { src: '../assets/fotos/BannerPizza.jpg'},
    { src: '../assets/fotos/BannerBebida.png'}
];
let currentIndex = 0;

const imgElement = document.getElementById('gallery-image');
const descriptionElement = document.getElementById('gallery-description');

function updateGallery() {
    imgElement.src = images[currentIndex].src;
    descriptionElement.textContent = images[currentIndex].description;
}

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateGallery();
});

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateGallery();
});

updateGallery();