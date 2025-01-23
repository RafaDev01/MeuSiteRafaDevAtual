const projects = [
    {
        name: "Projeto 1",
        technologies: ["React", "Node.js", "ExpressJS"],
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
    }, {
        name: "Projeto 1",
        technologies: ["React", "Node.js", "ExpressJS"],
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
        const cardHTML = `
            <div class="project-card">
                <h3>${project.name}</h3>
                <img class="img-project" src="./assets/img/perfil.png" />
                <div>
                    <button onclick="showTechnologies('${project.name}')">Tecnologias</button>
                    <button onclick="goToLink('${project.link}')">Ver Projeto</button>
                    <button onclick="showDetails('${project.name}')">Mais Detalhes</button>
                    <div class="project-technologies hidden" id="tech-${project.name}">
                        <p>Tecnologias: ${project.technologies.join(", ")}</p>
                    </div>
                </div>
                <div class="project-details hidden" id="details-${project.name}">
                    <p>${project.details}</p>
                </div>
            </div>
        `;
        cardContainer.innerHTML += cardHTML;
    });
}

function showTechnologies(projectName) {
    const techDiv = document.getElementById(`tech-${projectName}`);
    techDiv.classList.toggle("hidden");
}

function goToLink(link) {
    window.open(link, "_blank");
}

function showDetails(projectName) {
    const detailsDiv = document.getElementById(`details-${projectName}`);
    detailsDiv.classList.toggle("hidden");
}

renderProjectCards();