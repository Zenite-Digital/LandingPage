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
    const teamMembersSection = document.getElementsByClassName("team-members");
    const teamTextSections = document.getElementsByClassName("team-text");
    const teamTextSection = teamTextSections.item(0);

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
    };

    const onClickMember = (index) => {
        const members = document.getElementsByClassName("team-member");

        const membersArray = Array.from(members);

        membersArray.forEach((member, memberIndex) => {
            if (member.classList.contains("active"))
                member.classList.remove("active");
            if (memberIndex === index) {
                member.classList.add("active");
                showMemberText(index);
            }
        });

        scrollToText();
    };

    const createMember = (member, index) => {
        const isFirst = index === 0;
        const isEven = (index + 1) % 2 === 0;
        const memberDiv = document.createElement("div");
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

        teamMembersSection.item(0)?.appendChild(memberDiv);
    };

    membros.forEach((member, index) => createMember(member, index));
    showMemberText(0);
});
