function init() {}

window.addEventListener("load", init);

function scrollToAnchor_produtos(){
    const anchor = document.getElementById('product');
    anchor.scrollIntoView({
        behavior: 'smooth'
    });
}
