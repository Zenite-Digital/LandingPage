document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                }
            });
            
            item.classList.toggle('active');
            const isNowActive = item.classList.contains('active');
            question.setAttribute('aria-expanded', isNowActive);
        });
    });
});

function openFAQItem(index) {
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems[index]) {
        faqItems[index].classList.add('active');
        faqItems[index].querySelector('.faq-question').setAttribute('aria-expanded', 'true');
    }
}

function closeAllFAQItems() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.classList.remove('active');
        item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
    });
}