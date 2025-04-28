const membros = [
    {
        nome: "Arthur",
        sobrenome: "Ricken",
        cargo: "Product Owner",
        imagem: "./src/assets/imgs/team/tui_2.jpeg",
        texto: "Olá!! Me chamo Arthur, estou cursando Engenharia de Software no IFPR-Campus-Paranavaí, onde foi meu primeiro contato com desenvolvimento de software e afins. Minhas experiencias foram no Campus, sendo elas tendo contato com as linguagens: Java, Python, Dart, JavaScript, CSS, C++, HTML e SQL. Atuo como PO no grupo Zênite Digital. Além disso trabalho com o ramo agro, sendo o foco principal na pecuária.",
        altText:
            "Arthur montado em um boi branco em um gramado, usando chapéu de palha, camiseta cinza e calça jeans, com árvores ao fundo.",
    },
    {
        nome: "Eduardo",
        sobrenome: "Garcia",
        cargo: "Scrum Master",
        imagem: "./src/assets/imgs/team/eduardo.jpeg",
        texto: "Olá! Me chamo Eduardo,  Estou me formando em Engenharia de Software no IFPR. Tenho experiência com as linguagens Python, Java, Dart e SQL. Atuo como Scrum Master no grupo Zênite Digital.",
        altText:
            "Eduardo montado em um cavalo marrom em uma área de terra batida, usando camiseta preta e calça jeans.",
    },
    {
        nome: "Vitor",
        sobrenome: "Garcia",
        cargo: "Desenvolvedor",
        imagem: "./src/assets/imgs/team/vitor.png",
        texto: "Olá! Me chamo Vitor, no ensino médio me formei em Tecnologia da Informação, onde tive o primeiro contato nas áreas de desenvolvimento de jogos, robótica e desenvolvimento de sistemas. Meu TCC foi um sistema de gerenciamento de pedidos e funcionários para restaurantes, chamado STEIN, feito em Python (Django). Agora, estou me formando em Engenharia de Software no IFPR. Tenho experiência com as linguagens Java, JavaScript, TypeScript, Python, SQL e Dart, já trabalhei com as tecnologias React, Angular, Nest e Flutter.",
        altText:
            "Vitor sorrindo, de barba feita e camisa social preta, posando ao lado de uma parede de plantas verdes.",
    },
    {
        nome: "Rafael",
        sobrenome: "Leonardo",
        cargo: "Desenvolvedor",
        imagem: "./src/assets/imgs/team/rafael.png",
        texto: "Ola sou Rafael Ouverney, estudante de bacharelado em engenharia de software pelo IFPR campus Paranavaí, apaixonado por tecnologia, inovação e porque não arte e fotografia. Já desenvolvi projetos de sistemas para restaurantes, projetos móbile, protótipos de robôs, jogos eletrônicos e sites, possuo conhecimento de diversas linguagens e frameworks como Dart, Flutter, C#, Java, JavaScript, Python e outros.",
        altText:
            "Rafael jovem, de óculos e expressão séria, usando roupa preta com detalhes brancos, em fundo escuro.",
    },
    {
        nome: "Lucas",
        sobrenome: "Ribeiro",
        cargo: "Desenvolvedor",
        imagem: "./src/assets/imgs/team/luscas.png",
        texto: "Meu nome é Lucas Ribeiro, atualmente tenho 19 anos e curso Engenharia de Software no IFPR - Campus Paranavaí. Meu primeiro contato com desenvolvimento foi justamente na faculdade devido a uma curiosidade de trabalhar com isso durante o 2° grau no colégio. Atualmente, trabalho como programador trainee atuando em desenvlvimento back-end e tenho experiência em Java, JavaScript, TypeScript, Python, Dart, SQL, além de frameworks como Spring Boot, Nest, React e Flutter.",
        altText:
            "Lucas sorrindo, jovem, vestindo camisa branca, em ambiente interno com parede clara ao fundo.",
    },
    {
        nome: "Victor",
        sobrenome: "Martins",
        cargo: "Desenvolvedor",
        imagem: "./src/assets/imgs/team/victor.png",
        texto: "Prazer, meu nome é Victor Martins, tenho 27 anos, sou formado em Engenharia Civil pela UNIPAR e atualmente curso Engenharia de Software no IFPR. Com forte base em lógica, planejamento e resolução de problemas, aplico esses conhecimentos no desenvolvimento de sistemas e projetos de engenharia. Tenho experiência com Java, Python, C++, Flutter e HTML, e participo de projetos acadêmicos completos, da análise à implementação. Sou motivado por desafios, aprendizado contínuo e pela criação de soluções relevantes.",
        altText:
            "Victor sorridente com barba, usando camiseta preta, em frente a fundo colorido e escuro.",
    },
    {
        nome: "Danilo",
        sobrenome: "Avelar",
        cargo: "Desenvolvedor",
        imagem: "./src/assets/imgs/team/danilo.png",
        texto: "Sou estudante de Engenharia de Software no Instituto Federal do Paraná, com experiência em desenvolvimento de projetos utilizando Python, Java, JavaScript, Flutter, HTML e CSS. Além da formação acadêmica, atuo como autônomo no ramo de terraplanagem, o que reforça meu perfil proativo, responsável e focado em resultados. Busco aplicar minhas habilidades em tecnologia para desenvolver soluções práticas e eficientes, sempre com dedicação ao aprendizado contínuo.",
        altText:
            "Danilo sorridente usando camisa xadrez azul e chapéu de cowboy, em ambiente externo.",
    },
];

document.addEventListener("DOMContentLoaded", () => {
    let membroAtivo = 0;
    const teamMembersSection = document
        .getElementsByClassName("team-members")
        ?.item(0);
    const teamTextSections = document.getElementsByClassName("team-text");
    const teamTextSection = teamTextSections.item(0);
    const teamLeftArrowBtn = document.getElementById("team-left-arrow");
    const teamRightArrowBtn = document.getElementById("team-right-arrow");

    const scrollToText = () => {
        teamTextSection.scrollIntoView({
            behavior: "smooth",
            block: "end",
        });
    };

    const showMemberText = (index) => {
        const {
            texto: memberText,
            nome: name,
            sobrenome: surname,
            cargo: role,
        } = membros[index];

        const fullName = `${name} ${Boolean(surname) ? surname : ""} - ${
            Boolean(role) ? role : ""
        }`;

        const fullNameDiv = document.createElement("div");
        const messageDiv = document.createElement("div");
        fullNameDiv.classList.add("full-name");
        messageDiv.classList.add("message");

        fullNameDiv.textContent = fullName;
        messageDiv.textContent = memberText;

        teamTextSection.innerHTML = "";
        teamTextSection.appendChild(fullNameDiv);
        teamTextSection.appendChild(messageDiv);
    };

    const onClickMember = (index) => {
        const members = document.getElementsByClassName("team-member");

        const membersArray = Array.from(members);

        deactivateMember(membroAtivo);
        activateMember(index);
        membroAtivo = index;

        scrollToText();
    };

    const onClickArrow = (side) => {
        const membros = document.getElementsByClassName("team-member");
        let novoMembroAtivo;
        if (side === "left") {
            novoMembroAtivo = membroAtivo - 1;
            if (novoMembroAtivo < 0) novoMembroAtivo = membros.length - 1;
        } else if (side === "right") {
            novoMembroAtivo = membroAtivo + 1;
            if (novoMembroAtivo >= membros.length) novoMembroAtivo = 0;
        }

        deactivateMember(membroAtivo);
        activateMember(novoMembroAtivo);
        membroAtivo = novoMembroAtivo;
    };

    const deactivateMember = (index) => {
        const member = document.getElementById(`team-member-${index}`);
        member.classList.remove("active");
    };

    const activateMember = (index) => {
        const member = document.getElementById(`team-member-${index}`);
        member.classList.add("active");

        member.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
        });

        showMemberText(index);
    };

    const createMember = (member, index) => {
        const isFirst = index === 0;
        const isEven = (index + 1) % 2 === 0;
        const memberDiv = document.createElement("div");
        memberDiv.id = `team-member-${index}`;

        const classes = ["team-member"];
        if (isFirst) classes.push("active");
        if (isEven) classes.push("even");
        memberDiv.classList.add(...classes);

        const memberImg = document.createElement("img");
        memberImg.src = member.imagem;
        memberImg.alt = member.altText;

        const memberName = document.createElement("div");
        memberName.classList.add("name");
        memberName.textContent = member.nome;

        memberDiv.appendChild(memberImg);
        memberDiv.appendChild(memberName);
        memberDiv.onclick = () => onClickMember(index);

        teamMembersSection?.appendChild(memberDiv);
    };

    function ajustarJustificacao() {
        if (teamMembersSection?.scrollWidth > teamMembersSection?.clientWidth) {
            teamMembersSection.classList.add("mobile");
        } else {
            teamMembersSection.classList.remove("mobile");
        }
    }

    window.addEventListener("resize", ajustarJustificacao);

    window.addEventListener("load", ajustarJustificacao);

    teamLeftArrowBtn.onclick = () => onClickArrow("left");
    teamRightArrowBtn.onclick = () => onClickArrow("right");
    membros.forEach((member, index) => createMember(member, index));
    showMemberText(0);
});
