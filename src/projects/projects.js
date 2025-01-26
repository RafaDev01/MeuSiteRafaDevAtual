const projects = [
    {
        name: "Perfil",
        technologies: ["React-Native"],
        link: "https://github.com/RafaDev01/etec-atividade-perfil",
        img: "perfil.webp",
        details: "Simulando uma página de perfil desenvolvida em uma atividade da ETEC."
    },
    {
        name: "To-do-list full stack",
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Node", "express", "MySQL"],
        link: "https://github.com/RafaDev01/lista-de-tarefas-full-stack",
        img: "todolist.webp",
        details: "Uma lista de tarefas full stack."
    },
    {
        name: "Golf Burguer",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://golf-burguer.vercel.app/",
        img: "golf-burguer.webp",
        details: "Projeto desenvolvido para promover uma ação social."
    },
    {
        name: "4Fun Café",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://4funcafe.vercel.app/",
        img: "4funcafe.webp",
        details: "Site responsivo criado para apresentar um catálogo de canecas personalizadas, utilizando manipulação do DOM para funcionalidades dinâmicas."
    },
    {
        name: "Pokedex",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://pokemon-deck-five.vercel.app/",
        img: "pokedex.webp",
        details: "Simulação de uma Pokédex do universo Pokémon. Realiza o consumo de uma API pública para exibir informações detalhadas sobre os Pokémons selecionados."
    },
    {
        name: "Conecta Periferia",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://conectaperiferia.vercel.app/",
        img: "conecta-periferia.webp",
        details: "Site fictício e responsivo criado como parte de um projeto de TCC, focado em promover a inclusão digital e o fortalecimento de comunidades periféricas."
    },
    {
        name: "DigBank",
        technologies: ["CSharp"],
        link: "https://github.com/RafaDev01/DigBank",
        img: "bank.webp",
        details: "Simulação de um banco via terminal."
    },
    {
        name: "Tela de Login",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://pagina-de-log-in-lol.vercel.app/#",
        img: "lol.webp",
        details: "Interface de login inspirada no universo do League of Legends, com design atraente"
    },
    {
        name: "Gerador de Senhas",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://gerador-de-senha-one.vercel.app/",
        img: "gerador-senha.webp",
        details: "Ferramenta para gerar senhas aleatórias, permitindo ao usuário definir a quantidade de caracteres desejada para maior personalização."
    },
    {
        name: "Jogo da velha",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://jogo-da-velha-silk-tau.vercel.app/",
        img: "tic-tac-toe.webp",
        details: "Jogo da velha para jogar em duas pessoas."
    },
    {
        name: "Mario Jump",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://mario-game-cyan.vercel.app/",
        img: "mario-jump.webp",
        details: "Jogo simples e interativo inspirado no universo Mario. Criado para explorar funcionalidades básicas das tecnologias web."
    },
    {
        name: "Clone Google",
        technologies: ["HTML", "CSS"],
        link: "https://clone-google2.vercel.app",
        img: "google.webp",
        details: "Clone da página inicial de busca do Google, recriado com fidelidade ao design original para prática de habilidades em HTML e CSS."
    },
    {
        name: "Pokemon Game",
        technologies: ["Java"],
        link: "https://github.com/RafaDev01/jogoJavaFacul",
        img: "pokemon.webp",
        details: "Meu primeiro projeto; é um jogo de console utilizando POO."
    },
];


function renderProjectCards() {
    const cardContainer = document.getElementById("projectCardContainer");
    cardContainer.innerHTML = ""; // Limpa o conteúdo existente

    projects.forEach(project => {
        // Gera o HTML dos ícones das tecnologias
        const iconsHTML = project.technologies
            .map(tech => {
                const fileExtension = tech === "React-Native" ? "webp" : "svg";
                return `<img src="./assets/img/${tech.toLowerCase()}.${fileExtension}" alt="${tech}" title="${tech}" />`;
            })
            .join("");

        // Gera o HTML do card do projeto
        const cardHTML = `
            <div>
                <h3 class="title-project">${project.name}</h3>
                <div class="project-card" id="card-${project.name}">
                    <div class="image-container">
                        <img class="img-project" src="./assets/img/projects/${project.img}" alt="${project.name}" />
                        <div>
                            <div class="overlay-tech hidden" id="tech-${project.name}">
                                ${iconsHTML}
                            </div>
                            <div class="project-details hidden" id="details-${project.name}">
                                <p>${project.details}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="actions">
                    <button onclick="toggleTechnologies('${project.name}')">Tecnologias</button>
                    <button onclick="toggleDetails('${project.name}')">Detalhes</button>
                    <button onclick="goToLink('${project.link}')">Deploy</button>
                </div>
            </div>
        `;

        // Adiciona o card ao container
        cardContainer.innerHTML += cardHTML;
    });
}

function toggleTechnologies(projectName) {
    const techDiv = document.getElementById(`tech-${projectName}`);
    const detailsDiv = document.getElementById(`details-${projectName}`);

    // Alterna a exibição de tecnologias e garante que detalhes sejam ocultados
    if (!techDiv.classList.contains("visible")) {
        detailsDiv.classList.remove("visible");
        detailsDiv.classList.add("hidden");
    }
    techDiv.classList.toggle("hidden");
    techDiv.classList.toggle("visible");
}

function toggleDetails(projectName) {
    const techDiv = document.getElementById(`tech-${projectName}`);
    const detailsDiv = document.getElementById(`details-${projectName}`);

    // Alterna a exibição de detalhes e garante que tecnologias sejam ocultadas
    if (!detailsDiv.classList.contains("visible")) {
        techDiv.classList.remove("visible");
        techDiv.classList.add("hidden");
    }
    detailsDiv.classList.toggle("hidden");
    detailsDiv.classList.toggle("visible");
}

function goToLink(link) {
    window.open(link, "_blank");
}

// Renderiza os cards ao carregar a página
renderProjectCards();
