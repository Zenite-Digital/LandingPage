
        document.getElementById('current-year').textContent = new Date().getFullYear();
        

        const scrollTopBtn = document.getElementById('scroll-top');
        
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('active');
            } else {
                scrollTopBtn.classList.remove('active');
            }
        });
        
        scrollTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Newsletter form validation
        const newsletterForm = document.getElementById('newsletter-form');
        const emailInput = document.getElementById('email-input');
        const errorMessage = document.getElementById('error-message');
        
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = emailInput.value.trim();
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!emailPattern.test(email)) {
                errorMessage.style.display = 'block';
                emailInput.focus();
                return;
            }
            
            errorMessage.style.display = 'none';
            
            alert('Obrigado por acompanhar a Zênite Digital!');
            emailInput.value = '';
        });
        

        emailInput.addEventListener('input', function() {
            errorMessage.style.display = 'none';
        });