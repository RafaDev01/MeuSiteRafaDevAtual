const projects = [
    {
        name: "Projeto 1",
        technologies: ["React", "Node", "Express", "React", "Node", "Express"],
        link: "https://github.com/seuprojeto1",
        details: "Um projeto de dashboard interativo para monitorar gastos."
    },
    {
        name: "Projeto 2",
        technologies: ["NextJS", "Tailwind"],
        link: "https://github.com/seuprojeto2",
        details: "Aplicação de e-commerce com design responsivo."
    },
    {
        name: "Projeto 3",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://github.com/seuprojeto3",
        details: "Um site institucional moderno e otimizado para SEO."
    }
];

function renderProjectCards() {
    const cardContainer = document.getElementById("projectCardContainer");
    cardContainer.innerHTML = ""; // Limpa o conteúdo existente

    projects.forEach(project => {
        const iconsHTML = project.technologies
            .map(
                tech => `<img src="./assets/img/${tech.toLowerCase()}.svg" alt="${tech}" title="${tech}" />`
            )
            .join("");

        const cardHTML = `
            <div class="project-card" id="card-${project.name}">
                <h3 class="title-project">${project.name}</h3>
                <div class="image-container">
                    <img class="img-project" src="./assets/img/perfil.png" alt="${project.name}" />
                    <div class="overlay-tech hidden" id="tech-${project.name}">
                        ${iconsHTML}
                    </div>
                    <div class="project-details hidden" id="details-${project.name}">
                        <p>${project.details}</p>
                    </div>
                </div>
                <div class="actions">
                    <button onclick="toggleTechnologies('${project.name}')">Tecnologias</button>
                    <button onclick="toggleDetails('${project.name}')">Detalhes</button>
                    <button onclick="goToLink('${project.link}')">Deploy</button>
                </div>
            </div>
        `;
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
