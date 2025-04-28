document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide)
    startSlideInterval();
});

let currentSlide = 0;
const slides = document.querySelectorAll('.carrousel .slide');
const dots = document.querySelectorAll('.carrousel .dot');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - index) * 100}%)`;
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
    currentSlide = index;
}

function nextSlide() {
    restartSlideInterval();
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);

}

function prevSlide() {
    restartSlideInterval();
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
}

function goToSlide(index) {
    showSlide(index);
}

function startSlideInterval() {
    slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

function restartSlideInterval(){
    clearInterval(slideInterval);
    startSlideInterval();
}

// Initialize the carrousel
showSlide(currentSlide);