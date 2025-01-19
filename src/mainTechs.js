const primaryLanguages = [
    { name: "HTML", img: "assets/img/html.svg" },
    { name: "CSS", img: "assets/img/css.svg" },
    { name: "Javascript", img: "assets/img/javascript.svg" },
    { name: "React", img: "assets/img/react.svg" },
    { name: "NextJS", img: "assets/img/nextjs.svg" },
    { name: "Styled Components", img: "assets/img/styled-components.svg" },
    { name: "Node.js", img: "assets/img/node.svg" },
    { name: "ExpressJS", img: "assets/img/express.svg" },
    { name: "MySQL", img: "assets/img/mysql.svg" },
    { name: "Postman", img: "assets/img/postman.svg" },
    { name: "Linux Ubuntu", img: "assets/img/ubuntu.svg" },
];

function renderCardsPrincipal() {
    const cardContainer = document.getElementById("cardContainer-1");
    cardContainer.innerHTML = ""; // Limpa o conteúdo existente

    primaryLanguages.forEach(language => {
        const isReact = language.name === "React"; // Verifica se é React
        const cardHTML = `
            <div class="card-language" onclick="toggleFlip(this)">
                <div class="card-front">
                    <img 
                        src="${language.img}" 
                        alt="${language.name}" 
                        title="${language.name}" 
                        class="${isReact ? 'react' : ''}" 
                    />
                </div>
                <div class="card-back">
                    <span>${language.name}</span>
                </div>
            </div>
        `;
        cardContainer.innerHTML += cardHTML;
    });
}

renderCardsPrincipal();
