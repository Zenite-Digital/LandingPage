const membros = [
    {
        nome: "Arthur",
        sobrenome: "Ricken",
        imagem: "./assets/imgs/team/tui_2.jpeg",
        texto: "Lorem",
    },
    {
        nome: "Eduardo",
        sobrenome: "Garcia",
        imagem: "./assets/imgs/team/eduardo.jpeg",
        texto: "Lorem Ipsum ",
    },
    {
        nome: "Vitor",
        sobrenome: "Garcia",
        imagem: "./assets/imgs/team/vitor.png",
        texto: "Olá! Me chamo Vitor, no ensino médio me formei em Tecnologia da Informação, onde tive o primeiro contato nas áreas de desenvolvimento de jogos, robótica e desenvolvimento de sistemas. Meu TCC foi um sistema de gerenciamento de pedidos e funcionários para restaurantes, chamado STEIN, feito em Python (Django). Agora, estou me formando em Engenharia de Software no IFPR. Tenho experiência com as linguagens Java, JavaScript, TypeScript, Python, SQL e Dart, já trabalhei com as tecnologias React, Angular, Nest e Flutter.  ",
    },
    {
        nome: "Rafael",
        sobrenome: "Leonardo",
        imagem: "./assets/imgs/team/rafael.png",
        texto: "Lorem Ipsum Dolor Sit",
    },
    {
        nome: "Lucas",
        sobrenome: "Ribeiro",
        imagem: "./assets/imgs/team/luscas.png",
        texto: "Lorem Ipsum Dolor Sit Amet",
    },
    {
        nome: "Victor",
        sobrenome: "Martins",
        imagem: "./assets/imgs/team/victor.png",
        texto: "Prazer, meu nome é Victor Martins, tenho 27 anos, sou formado em Engenharia Civil pela UNIPAR e atualmente curso Engenharia de Software no IFPR. Com forte base em lógica, planejamento e resolução de problemas, aplico esses conhecimentos no desenvolvimento de sistemas e projetos de engenharia. Tenho experiência com Java, Python, C++, Flutter e HTML, e participo de projetos acadêmicos completos, da análise à implementação. Sou motivado por desafios, aprendizado contínuo e pela criação de soluções relevantes.",
    },
    {
        nome: "Danilo",
        sobrenome: "Avelar",
        imagem: "./assets/imgs/team/danilo.png",
        texto: "Sou estudante de Engenharia de Software no Instituto Federal do Paraná, com experiência em desenvolvimento de projetos utilizando Python, Java, JavaScript, Flutter, HTML e CSS. Além da formação acadêmica, atuo como autônomo no ramo de terraplanagem, o que reforça meu perfil proativo, responsável e focado em resultados. Busco aplicar minhas habilidades em tecnologia para desenvolver soluções práticas e eficientes, sempre com dedicação ao aprendizado contínuo.",
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
        } = membros[index];

        const fullName = `${name} ${Boolean(surname) ? surname : ""}`;

        const fullNameDiv = document.createElement("div");
        const messageDiv = document.createElement("div");
        fullNameDiv.classList.add("full-name");
        messageDiv.classList.add("message");

        fullNameDiv.textContent = fullName;
        messageDiv.textContent = memberText;

        teamTextSection.innerHTML = "";
        teamTextSection.appendChild(fullNameDiv);
        teamTextSection.appendChild(messageDiv);
        scrollToText();
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

        if (side === "left") {
            let novoMembroAtivo = membroAtivo - 1;
            if (novoMembroAtivo < 0) novoMembroAtivo = membros.length - 1;
            deactivateMember(membroAtivo);
            activateMember(novoMembroAtivo);
            membroAtivo = novoMembroAtivo;
        } else if (side === "right") {
            let novoMembroAtivo = membroAtivo + 1;
            if (novoMembroAtivo >= membros.length) novoMembroAtivo = 0;
            deactivateMember(membroAtivo);
            activateMember(novoMembroAtivo);
            membroAtivo = novoMembroAtivo;
        }
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
