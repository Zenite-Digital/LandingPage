async function loadFAQ() {
    try {
        // Carregar o arquivo JSON
        const response = await fetch('./assets/JSON/faq.json');
        const faqData = await response.json();

        // Selecionar o container onde os acordeons serão adicionados
        const faqContainer = document.getElementById('faq');

        // Criar o container principal para os accordions
        const faqAccordions = document.createElement('div');
        faqAccordions.className = 'faq-accordions';

        // Iterar sobre os dados e criar os acordeons
        faqData.forEach((item, index) => {
            // Criar o container para cada accordion
            const accordion = document.createElement('div');
            accordion.className = 'accordions';
            
            // Criar o header do accordion
            const accordionHeader = document.createElement('div');
            accordionHeader.className = 'accordion-header';
            accordionHeader.id = `header-faq-${index}`;
            
            // Criar o título
            const accordionTitle = document.createElement('h3');
            accordionTitle.className = 'accordion-title';
            accordionTitle.id = `faq-title-${index}`;
            accordionTitle.textContent = item.question;
            
            // Criar o ícone
            const accordionIcon = document.createElement('span');
            accordionIcon.className = 'accordion-icon';
            accordionIcon.textContent = '▼';
            
            // Criar o container de conteúdo
            const accordionContent = document.createElement('div');
            accordionContent.className = 'accordion-content';
            accordionContent.id = `resposta-faq-${index}`;
            accordionContent.style.display = 'none';
            accordionContent.style.paddingBottom = '10px';
            accordionContent.style.maxHeight = '0';
            accordionContent.style.overflow = 'hidden';
            accordionContent.style.marginBottom = '20px';
            
            // Criar o parágrafo da resposta
            const answerParagraph = document.createElement('p');
            answerParagraph.textContent = item.answer;
            
            // Montar a estrutura
            accordionHeader.appendChild(accordionTitle);
            accordionHeader.appendChild(accordionIcon);
            accordionContent.appendChild(answerParagraph);
            
            accordion.appendChild(accordionHeader);
            accordion.appendChild(accordionContent);
            
            faqAccordions.appendChild(accordion);
            
            // Adicionar evento de clique
            accordionHeader.addEventListener('click', () => {
                const isVisible = accordionContent.style.display === 'flex';
                accordionIcon.style.transform = isVisible ? 'rotate(180deg)' : 'rotate(0deg)';
                accordionContent.style.display = isVisible ? 'none' : 'flex';
                accordionContent.style.maxHeight = isVisible ? '0' : accordionContent.scrollHeight + 'px';
            });
        });
        
        // Adicionar a estrutura completa ao container
        faqContainer.appendChild(faqAccordions);
    } catch (error) {
        console.error('Erro ao carregar o FAQ:', error);
    }
}

// Chamar a função ao carregar a página
document.addEventListener('DOMContentLoaded', loadFAQ);