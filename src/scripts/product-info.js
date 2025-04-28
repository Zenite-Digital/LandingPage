document.addEventListener("DOMContentLoaded", function () {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach((header) => {
        const accordionIcon = header.querySelector(".accordion-icon");
        const accordionContent = header.nextElementSibling;

        accordionContent.style.display = "none";
        accordionContent.style.maxHeight = "0";
        accordionContent.style.overflow = "hidden";
        accordionContent.style.transition = "max-height 0.3s ease";

        header.addEventListener("click", function () {
            if (accordionContent.style.display === "none") {
                accordionContent.style.display = "block";
                accordionContent.style.maxHeight =
                    accordionContent.scrollHeight + "px";
                accordionIcon.style.transform = "rotate(0deg)";
            } else {
                accordionContent.style.maxHeight = "0";
                accordionIcon.style.transform = "rotate(180deg)";
                setTimeout(function () {
                    accordionContent.style.display = "none";
                }, 300);
            }
        });
    });

    // Funcionalidade do botão de download
    const downloadBtn = document.querySelector(".download-btn");
    if (downloadBtn) {
        downloadBtn.addEventListener("click", function () {
            window.location.href = "./src/not-found.html"; // Altere para o caminho correto do arquivo a ser baixado
        });
    } else {
        console.error("Botão de download não encontrado na página");
    }
});
