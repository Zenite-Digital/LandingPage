document.addEventListener('DOMContentLoaded', function() {
    const accordionHeader = document.querySelector('.accordion-header');
    const accordionIcon = document.querySelector('.accordion-icon');
    const accordionContent = document.querySelector('.accordion-content');

    // accordionContent.computedStyleMap.display = 'block';

    const style = getComputedStyle(accordionContent);
    if(style.display === 'block'){
        accordionContent.style.display = 'none';
        accordionIcon.style.transform = 'rotate(180deg)';
    }

    accordionHeader.addEventListener('click', function(){
        const style = getComputedStyle(accordionContent);
        if(style.display === 'block') {
            accordionContent.style.display = 'none';
            accordionIcon.style.transform = 'rotate(180deg)';

        }
        else {
            accordionContent.style.display = 'block';
            accordionIcon.style.transform = 'rotate(0deg)';
        }
    });

    const downloadBtn = document.querySelector('.download-btn');
    downloadBtn.addEventListener('click', function(){
        open('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
    })
})