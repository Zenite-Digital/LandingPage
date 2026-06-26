const teamMembers = [
    {
        name: "Arthur Ricken",
        position: "PO | Developer",
        // description: "Inserir texto",
        about: "Me chamo Arthur, formando de Engenharia de Software no IFPR-Campus-Paranavaí. Minhas experiencias contemplam as linguagens: Java, Python, Dart, JavaScript, CSS, C++ e SQL. Atuo como PO no grupo Zenite. Além disso trabalho com o ramo agro, sendo o foco principal na pecuária.",
        image: "./src/assets/imgs/team/tui.jpeg"
    },
    {
        name: "Eduardo Garcia",
        position: "PM | Developer",
        // description: "Inserir texto",
        image: "./src/assets/imgs/team/eduardo2.jpeg",
        about: "Me chamo Eduardo, formando de Engenharia de Software no IFPR. Tenho experiência com as linguagens Python, Java, Dart e SQL. Atuo como Product Manager no grupo Zenite.",
    },
    {
        name: "Lucas Ribeiro",
        position: "Dev Ops",
        // description: "Inserir texto",
        image: "./src/assets/imgs/team/luquinhas.png",
        about: "Meu nome é Lucas Ribeiro, formando de Engenharia de Software no IFPR - Campus Paranavaí. Meu primeiro contato com desenvolvimento foi justamente na faculdade devido a uma curiosidade de trabalhar com isso durante o 2° grau no colégio. Atualmente, trabalho como programador atuando em desenvlvimento back-end e tenho experiência em Java, JavaScript, TypeScript, Python, Dart, SQL, além de frameworks como Spring Boot, Nest, React e Flutter.",
    },
    {
        name: "Rafael Ouverney",
        position: "UX/UI | Developer",
        // description: "Inserir texto",
        image: "./src/assets/imgs/team/rafael.png",
        about: "Sou Rafael Ouverney, formando em engenharia de software pelo IFPR campus Paranavaí, apaixonado por tecnologia, inovação e porque não arte e fotografia. Já desenvolvi projetos de sistemas para restaurantes, projetos móbile, protótipos de robôs, circuitos eletrônicos, jogos e sites, possuo conhecimento de diversas linguagens e frameworks como Dart, Flutter, C#, Java, JavaScript, Python dentre tantos outros outros."
    },
    {
        name: "Vitor Garcia",
        position: "Dev Ops",
        // description: "Inserir texto",
        image: "./src/assets/imgs/team/vitor.png",
        about: "Olá! Me chamo Vitor, formado em Tecnologia da Informação, com experiência em desenvolvimento de jogos, robótica e desenvolvimento de sistemas. Agora, estou me formando em Engenharia de Software no IFPR. Tenho experiência com as linguagens Java, JavaScript, TypeScript, Python, SQL e Dart, já trabalhei com as tecnologias React, Angular, Nest e Flutter."
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
            </div>
        `;

        grid.appendChild(memberCard);
    });
}

document.addEventListener('DOMContentLoaded', renderTeamMembers);

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { renderTeamMembers, teamMembers };
}