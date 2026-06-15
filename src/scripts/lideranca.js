const teamMembers = [
    {
        name: "Arthur Ricken",
        position: "Desenvolvedor de Software",
        description: "Inserir texto",
        about: "Olá!! Me chamo Arthur, estou cursando Engenharia de Software no IFPR-Campus-Paranavaí, onde foi meu primeiro contato com desenvolvimento de software e afins. Minhas experiencias foram no Campus, sendo elas tendo contato com as linguagens: Java, Python, Dart, JavaScript, CSS, C++, HTML e SQL. Atuo como PO no grupo Zênite Digital. Além disso trabalho com o ramo agro, sendo o foco principal na pecuária.",
        image: "./src/assets/imgs/team/tui.png"
    },
    {
        name: "Eduardo Garcia",
        position: "Desenvolvedor de Software",
        description: "Inserir texto",
        image: "./src/assets/imgs/team/eduardo2.jpeg",
        about: "Olá! Me chamo Eduardo, Estou me formando em Engenharia de Software no IFPR. Tenho experiência com as linguagens Python, Java, Dart e SQL. Atuo como Scrum Master no grupo Zênite Digital.",
    },
    {
        name: "Lucas Ribeiro",
        position: "Desenvolvedor de Software",
        description: "Inserir texto",
        image: "./src/assets/imgs/team/luscas.png",
        about: "Meu nome é Lucas Ribeiro, atualmente tenho 19 anos e curso Engenharia de Software no IFPR - Campus Paranavaí. Meu primeiro contato com desenvolvimento foi justamente na faculdade devido a uma curiosidade de trabalhar com isso durante o 2° grau no colégio. Atualmente, trabalho como programador trainee atuando em desenvlvimento back-end e tenho experiência em Java, JavaScript, TypeScript, Python, Dart, SQL, além de frameworks como Spring Boot, Nest, React e Flutter.",
    },
    {
        name: "Rafael Ouverney",
        position: "Desenvolvedor de Software",
        description: "Inserir texto",
        image: "./src/assets/imgs/team/rafael.png",
        about: "Olá sou Rafael Ouverney, estudante de bacharelado em engenharia de software pelo IFPR campus Paranavaí, apaixonado por tecnologia, inovação e porque não arte e fotografia. Já desenvolvi projetos de sistemas para restaurantes, projetos móbile, protótipos de robôs, jogos eletrônicos e sites, possuo conhecimento de diversas linguagens e frameworks como Dart, Flutter, C#, Java, JavaScript, Python e outros."
    },
    {
        name: "Vitor Garcia",
        position: "Desenvolvedor de Software",
        description: "Inserir texto",
        image: "./src/assets/imgs/team/vitor.png",
        about: "Olá! Me chamo Vitor, no ensino médio me formei em Tecnologia da Informação, onde tive o primeiro contato nas áreas de desenvolvimento de jogos, robótica e desenvolvimento de sistemas. Meu TCC foi um sistema de gerenciamento de pedidos e funcionários para restaurantes, chamado STEIN, feito em Python (Django). Agora, estou me formando em Engenharia de Software no IFPR. Tenho experiência com as linguagens Java, JavaScript, TypeScript, Python, SQL e Dart, já trabalhei com as tecnologias React, Angular, Nest e Flutter."
    }
];

function renderTeamMembers() {
    const grid = document.getElementById('teamGrid');

    if (!grid) {
        console.error('Elemento teamGrid não encontrado!');
        return;
    }

    grid.innerHTML = '';

    teamMembers.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.className = 'team-member';

        memberCard.innerHTML = `
            <div class="photo-container">
                <img src="${member.image}" alt="${member.name}">
                <div class="overlay">
                    <h3>${member.name}</h3>
                    <div class="position">${member.position}</div>
                    <div class="description">${member.about}</div>
                </div>
            </div>
            <div class="member-info">
                <h3>${member.name}</h3>
                <div class="position">${member.position}</div>
                <div class="description">${member.description}</div>
            </div>
        `;

        grid.appendChild(memberCard);
    });
}

document.addEventListener('DOMContentLoaded', renderTeamMembers);

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { renderTeamMembers, teamMembers };
}