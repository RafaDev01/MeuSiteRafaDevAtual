const primaryLanguages = [
    { name: "HTML", img: "assets/img/html.svg" },
    { name: "CSS", img: "assets/img/css.svg" },
    { name: "Javascript", img: "assets/img/javascript.svg" },
    { name: "React", img: "assets/img/react.svg" },
    { name: "NextJS", img: "assets/img/nextjs.svg" },
    { name: "Styled Components", img: "assets/img/styled-components.svg" },
    { name: "Tailwind", img: "assets/img/tailwind.svg" },
    { name: "Node.js", img: "assets/img/node.svg" },
    { name: "ExpressJS", img: "assets/img/express.svg" },
    { name: "MySQL", img: "assets/img/mysql.svg" },
    { name: "Postman", img: "assets/img/postman.svg" },
    { name: "Git", img: "assets/img/git.svg" },
    { name: "Linux Ubuntu", img: "assets/img/ubuntu.svg" },
    { name: "Unified modeling language", img: "assets/img/uml.svg" },
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

const cards = document.querySelectorAll('.card-language');
let isFlipping = false;
let timeoutIds = [];

function isDesktop() {
    return window.matchMedia('(min-width: 768px)').matches;
}

function resetCards() {
    cards.forEach(card => card.classList.remove('flipped'));
}

function clearAllTimeouts() {
    timeoutIds.forEach(id => clearTimeout(id));
    timeoutIds = [];
}

function flipCardsSequentially() {
    if (!isDesktop() || isFlipping) return;

    isFlipping = true;
    cards.forEach((card, index) => {
        const timeoutId = setTimeout(() => {
            card.classList.add('flipped');
        }, index * 500);
        timeoutIds.push(timeoutId);
    });

    const unflipTimeoutId = setTimeout(unflipCardsSequentially, cards.length * 500 + 2000);
    timeoutIds.push(unflipTimeoutId);
}

function unflipCardsSequentially() {
    Array.from(cards)
        .reverse()
        .forEach((card, index) => {
            const timeoutId = setTimeout(() => {
                card.classList.remove('flipped');
            }, index * 500);
            timeoutIds.push(timeoutId);
        });

    const repeatTimeoutId = setTimeout(() => {
        isFlipping = false;
        flipCardsSequentially();
    }, cards.length * 500 + 2000);
    timeoutIds.push(repeatTimeoutId);
}

function handleResize() {
    clearAllTimeouts();
    resetCards();
    isFlipping = false;

    if (isDesktop()) {
        flipCardsSequentially();
    }
}

if (isDesktop()) {
    flipCardsSequentially();
}

window.addEventListener('resize', handleResize);
