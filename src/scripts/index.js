document.addEventListener("DOMContentLoaded", function () {
    scrollToElement("product-button", "product");
    scrollToElement("contactButton", "contact");
    scrollToElement("team-button", "team");
});

function init() {}

window.addEventListener("load", init);

function scrollToElement(buttonId, elementId) {
    const button = document.getElementById(buttonId);
    if (!button) throw Error("Botão não encontrado");

    button.addEventListener("click", function () {
        document.getElementById(elementId).scrollIntoView({
            behavior: "smooth",
            block: "center",
        });
    });
}
