const projects = [
    {
        "name": "Na Faixa",
        "technologies": ["React-Native", "React", "styled-components", "Node", "Express", "MySQL", "Postman", "Git"],
        "link": "https://www.youtube.com/watch?v=eTCbDVuNkWc",
        "img": "na-faixa.webp",
        "details": "Projeto desenvolvido como Trabalho de Conclusão de Curso (TCC) na ETEC. O 'Na Faixa' é um aplicativo criado para motoristas de aplicativos monitorarem seus gastos com o veículo. A plataforma permite o registro de despesas, previsão de custos futuros e emissão de alertas para controle financeiro. Desenvolvi toda a lógica do sistema, incluindo backend, banco de dados, diagramas e frontend web."
    },
    {
        "name": "PokeNext",
        "technologies": ["TypeScript", "Nextjs", "React", "Tailwind", "Git"],
        "link": "https://pokemon-nextjs-1s2qg143a-rafadev01s-projects.vercel.app/",
        "img": "pokenext.webp",
        "details": "Projeto desenvolvido para aprimorar habilidades, o projeto consome a API do pokemon e possui design responsivo utilizando tailwind."
    },
    {
        name: "Perfil",
        technologies: ["React-Native", "css"],
        link: "https://github.com/RafaDev01/etec-atividade-perfil",
        img: "perfil.webp",
        details: "Aplicativo desenvolvido em React Native simulando uma página de perfil, com foco em explorar componentes e funcionalidades nativas da plataforma."
    },
    {
        name: "To-do-list full stack",
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Node", "Express", "MySQL"],
        link: "https://github.com/RafaDev01/lista-de-tarefas-full-stack",
        img: "todolist.webp",
        details: "Uma aplicação full stack de lista de tarefas com frontend responsivo em Bootstrap, backend em Node.js e banco de dados MySQL para gerenciamento de tarefas."
    },
    {
        name: "Golf Burguer",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://golf-burguer.vercel.app/",
        img: "golf-burguer.webp",
        details: "Landing page desenvolvida com foco em responsividade e design atraente para promover uma ação social."
    },
    {
        name: "4Fun Café",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://4funcafe.vercel.app/",
        img: "4funcafe.webp",
        details: "Site responsivo para um catálogo de canecas personalizadas, utilizando JavaScript para implementar funcionalidades dinâmicas, como navegação interativa."
    },
    {
        name: "Pokedex",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://pokemon-deck-five.vercel.app/",
        img: "pokedex.webp",
        details: "Simulação de uma Pokédex que consome uma API pública para exibir informações detalhadas sobre os Pokémons."
    },
    {
        name: "Conecta Periferia",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://conectaperiferia.vercel.app/",
        img: "conecta-periferia.webp",
        details: "Projeto de TCC focado na inclusão digital e no fortalecimento de comunidades periféricas, com design responsivo e navegação intuitiva."
    },
    {
        name: "DigBank",
        technologies: ["CSharp"],
        link: "https://github.com/RafaDev01/DigBank",
        img: "bank.webp",
        details: "Simulação de um sistema bancário via terminal, explorando conceitos de POO e boas práticas em C#."
    },
    {
        name: "Tela de Login",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://pagina-de-log-in-lol.vercel.app/#",
        img: "lol.webp",
        details: "Interface de login estilizada, inspirada no universo de League of Legends, com foco em design visual e experiência do usuário."
    },
    {
        name: "Gerador de Senhas",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://gerador-de-senha-one.vercel.app/",
        img: "gerador-senha.webp",
        details: "Ferramenta para gerar senhas aleatórias, permitindo configuração personalizada."
    },
    {
        name: "Jogo da velha",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://jogo-da-velha-silk-tau.vercel.app/",
        img: "tic-tac-toe.webp",
        details: "Jogo da velha para duas pessoas, desenvolvido com HTML, CSS e JavaScript, com interface amigável."
    },
    {
        name: "Mario Jump",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://mario-game-cyan.vercel.app/",
        img: "mario-jump.webp",
        details: "Jogo interativo inspirado no universo Mario, desenvolvido para explorar animações e interações básicas com JavaScript."
    },
    {
        name: "Clone Google",
        technologies: ["HTML", "CSS"],
        link: "https://clone-google2.vercel.app",
        img: "google.webp",
        details: "Clone fiel da página inicial de busca do Google, criado para praticar habilidades de design responsivo e semântica em HTML e CSS."
    },
    {
        name: "Pokemon Game",
        technologies: ["Java"],
        link: "https://github.com/RafaDev01/jogoJavaFacul",
        img: "pokemon.webp",
        details: "Jogo de console simples, desenvolvido como primeiro projeto utilizando conceitos de Programação Orientada a Objetos em Java."
    }
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
