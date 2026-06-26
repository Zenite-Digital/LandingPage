document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    const DESTINATARIO_EMAIL = 'contato@teamzenite.com';
    
    const ASSUNTOS_MAP = {
        'Sistema de Gestão': 'Sistema de Gestão',
        'Quero um sistema': 'Quero um sistema',
        'Suporte Técnico': 'Suporte Técnico',
        'Outro': 'Outro'
    };

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const nome = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const assunto = document.getElementById('subject').value;
        const mensagem = document.getElementById('message').value.trim();

        if (!nome || !email || !assunto || !mensagem) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, informe um e-mail válido.');
            return;
        }

        const assuntoEmail = `${assunto} - Contato de ${nome}`;

        const corpoEmail = 
            `Nome: ${nome}\n` +
            `E-mail: ${email}\n` +
            `Assunto: ${assunto}\n` +
            `\n` +
            `Mensagem:\n` +
            `${mensagem}`;

        const assuntoCodificado = encodeURIComponent(assuntoEmail);
        const corpoCodificado = encodeURIComponent(corpoEmail);

        const mailtoLink = `mailto:${DESTINATARIO_EMAIL}?subject=${assuntoCodificado}&body=${corpoCodificado}`;

        window.location.href = mailtoLink;
    });
});