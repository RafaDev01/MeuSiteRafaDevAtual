const projects = [
  {
    name: "PDV Legal",
    technologies: ["ts", "React", "tailwind"],
    link: "https://sistema.pdvlegal.com.br/",
    img: "pdvlegal.png",
    details:
      "Plataforma web de PDV (Ponto de Venda) para gestão comercial, desenvolvida com TypeScript, React e Tailwind CSS, com interface moderna e responsiva.",
  },
  {
    name: "Na Faixa",
    technologies: [
      "React-Native",
      "React",
      "styled-components",
      "Node",
      "Express",
      "MySQL",
    ],
    link: "https://www.youtube.com/watch?v=eTCbDVuNkWc",
    img: "na-faixa.webp",
    details:
      "Projeto desenvolvido como TCC na ETEC. Aplicativo para motoristas de aplicativos monitorarem gastos com o veículo. Inclui registro de despesas, previsão de custos e alertas de controle financeiro. Desenvolvi toda a lógica do sistema: backend, banco de dados, diagramas e frontend web.",
  },
  {
    name: "Crypto Currency",
    technologies: ["ts", "React"],
    link: "https://github.com/RafaDev01/crypto",
    img: "crypto.webp",
    details:
      "Projeto que consome uma API de criptomoedas, processa os dados e apresenta as cotações de forma dinâmica e organizada.",
  },
  {
    name: "Petshop Senac",
    technologies: ["JavaScript", "React"],
    link: "https://petshop-senac.vercel.app",
    img: "petshop.webp",
    details:
      "Projeto desenvolvido durante o curso do SENAC, explorando os principais conceitos do React.",
  },
  {
    name: "PokeNext",
    technologies: ["ts", "Nextjs", "React", "Tailwind"],
    link: "https://pokemon-nextjs-1s2qg143a-rafadev01s-projects.vercel.app/",
    img: "pokenext.webp",
    details:
      "Projeto desenvolvido para aprimorar habilidades, consome a API do Pokémon e possui design responsivo utilizando Tailwind.",
  },
  {
    name: "Perfil",
    technologies: ["React-Native", "css"],
    link: "https://github.com/RafaDev01/etec-atividade-perfil",
    img: "perfil.webp",
    details:
      "Aplicativo desenvolvido em React Native simulando uma página de perfil, com foco em explorar componentes e funcionalidades nativas da plataforma.",
  },
  {
    name: "To-do-list Full Stack",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Node",
      "Express",
      "MySQL",
    ],
    link: "https://github.com/RafaDev01/lista-de-tarefas-full-stack",
    img: "todolist.webp",
    details:
      "Aplicação full stack de lista de tarefas com frontend responsivo em Bootstrap, backend em Node.js e banco de dados MySQL.",
  },
  {
    name: "Golf Burguer",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://golf-burguer.vercel.app/",
    img: "golf-burguer.webp",
    details:
      "Landing page com foco em responsividade e design atraente para promover uma ação social.",
  },
  {
    name: "4Fun Café",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://4funcafe.vercel.app/",
    img: "4funcafe.webp",
    details:
      "Site responsivo para catálogo de canecas personalizadas, com JavaScript para navegação interativa.",
  },
  {
    name: "Pokedex",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://pokemon-deck-five.vercel.app/",
    img: "pokedex.webp",
    details:
      "Simulação de uma Pokédex que consome uma API pública para exibir informações detalhadas sobre os Pokémons.",
  },
  {
    name: "Conecta Periferia",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://conectaperiferia.vercel.app/",
    img: "conecta-periferia.webp",
    details:
      "Projeto de TCC focado na inclusão digital e fortalecimento de comunidades periféricas, com design responsivo.",
  },
  {
    name: "DigBank",
    technologies: ["CSharp"],
    link: "https://github.com/RafaDev01/DigBank",
    img: "bank.webp",
    details:
      "Simulação de sistema bancário via terminal, explorando conceitos de POO e boas práticas em C#.",
  },
  {
    name: "Tela de Login",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://pagina-de-log-in-lol.vercel.app/#",
    img: "lol.webp",
    details:
      "Interface de login estilizada, inspirada no universo de League of Legends, com foco em design visual.",
  },
  {
    name: "Gerador de Senhas",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://gerador-de-senha-one.vercel.app/",
    img: "gerador-senha.webp",
    details:
      "Ferramenta para gerar senhas aleatórias com configuração personalizada.",
  },
  {
    name: "Jogo da Velha",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://jogo-da-velha-silk-tau.vercel.app/",
    img: "tic-tac-toe.webp",
    details:
      "Jogo da velha para duas pessoas com interface amigável.",
  },
  {
    name: "Mario Jump",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://mario-game-cyan.vercel.app/",
    img: "mario-jump.webp",
    details:
      "Jogo interativo inspirado no universo Mario, desenvolvido para explorar animações com JavaScript.",
  },
  {
    name: "Clone Google",
    technologies: ["HTML", "CSS"],
    link: "https://clone-google2.vercel.app",
    img: "google.webp",
    details:
      "Clone da página inicial de busca do Google, criado para praticar design responsivo e semântica HTML.",
  },
  {
    name: "Pokemon Game",
    technologies: ["Java"],
    link: "https://github.com/RafaDev01/jogoJavaFacul",
    img: "pokemon.webp",
    details:
      "Jogo de console simples desenvolvido como primeiro projeto em Java, explorando conceitos de POO.",
  },
];

const techLabels = {
  ts: "TypeScript",
  tailwind: "Tailwind",
  Tailwind: "Tailwind",
  "React-Native": "React Native",
  CSharp: "C#",
  css: "CSS",
  Nextjs: "Next.js",
};

function getTechLabel(tech) {
  return techLabels[tech] || tech;
}

function renderProjectCards() {
  const cardContainer = document.getElementById("projectCardContainer");
  cardContainer.innerHTML = "";

  projects.forEach((project) => {
    const iconsHTML = project.technologies
      .map((tech) => {
        const ext = tech === "React-Native" || tech === "ts" ? "webp" : "svg";
        return `<img src="./assets/img/${tech.toLowerCase()}.${ext}" alt="${getTechLabel(tech)}" title="${getTechLabel(tech)}" />`;
      })
      .join("");

    const tagsHTML = project.technologies
      .slice(0, 4)
      .map((tech) => `<span class="project-tag">${getTechLabel(tech)}</span>`)
      .join("");

    const cardHTML = `
      <div class="project-wrapper">
        <div class="project-card" id="card-${project.name}">
          <div class="image-container">
            <img class="img-project" src="./assets/img/projects/${project.img}" alt="${project.name}" loading="lazy" />
            <div class="overlay-tech hidden" id="tech-${project.name}">
              ${iconsHTML}
            </div>
            <div class="project-details hidden" id="details-${project.name}">
              <p>${project.details}</p>
            </div>
          </div>
        </div>
        <div class="project-footer">
          <h3 class="title-project">${project.name}</h3>
          <div class="project-tags">${tagsHTML}</div>
          <div class="actions">
            <button onclick="toggleTechnologies('${project.name}')">Tech</button>
            <button onclick="toggleDetails('${project.name}')">Info</button>
            <button onclick="goToLink('${project.link}')">Abrir ↗</button>
          </div>
        </div>
      </div>
    `;

    cardContainer.insertAdjacentHTML("beforeend", cardHTML);
  });
}

function toggleTechnologies(projectName) {
  const techDiv = document.getElementById(`tech-${projectName}`);
  const detailsDiv = document.getElementById(`details-${projectName}`);

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

function setupProjectsToggle() {
  const toggleBtn = document.getElementById("projectsToggleBtn");
  const container = document.getElementById("projectCardContainer");
  const collapsedLimit = 6;

  if (!toggleBtn || !container) return;

  if (projects.length <= collapsedLimit) {
    toggleBtn.remove();
    return;
  }

  toggleBtn.addEventListener("click", () => {
    const expanded = container.classList.toggle("show-all");
    toggleBtn.textContent = expanded ? "Ver menos" : "Ver mais projetos";
    toggleBtn.setAttribute("aria-expanded", String(expanded));
    if (!expanded) {
      document
        .getElementById("portfolio")
        .scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

renderProjectCards();
setupProjectsToggle();
