document.addEventListener('DOMContentLoaded', function() {
    const accordionHeader = document.querySelector('.accordion-header');
    const accordionIcon = document.querySelector('.accordion-icon');
    const accordionContent = document.querySelector('.accordion-content');

    accordionContent.style.display = 'none';
    accordionContent.style.maxHeight = '0';
    accordionContent.style.overflow = 'hidden';
    accordionContent.style.transition = 'max-height 0.3s ease';

    accordionHeader.addEventListener('click', function() {
        if (accordionContent.style.display === 'none') {
            accordionContent.style.display = 'block';
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            accordionIcon.style.transform = 'rotate(0deg)';
        } else {
            accordionContent.style.maxHeight = '0';
            accordionIcon.style.transform = 'rotate(180deg)';
            setTimeout(function() {
                accordionContent.style.display = 'none';
            }, 300);
        }
    });

    const downloadBtn = document.querySelector('.download-btn');
    downloadBtn.addEventListener('click', function() {
        open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    });
});
