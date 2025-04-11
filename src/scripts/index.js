document.addEventListener('DOMContentLoaded', function() {
    scrollToAnchor();
});

function init() {}

window.addEventListener("load", init);

function scrollToAnchor(){
    const productButton = document.getElementById('product-button');
    productButton.addEventListener('click', function() {
        document.getElementById('product').scrollIntoView({
            behavior: 'smooth',
            alignToTop: true,
            block: 'start',
        });
    });
    const contactButton = document.getElementById('contactButton');
    contactButton.addEventListener('click', function() {
        document.getElementById('contact').scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });
}
