const secondaryLanguages = [
    { name: "Tailwind", img: "assets/img/tailwind.svg" },
    { name: "Bootstrap", img: "assets/img/bootstrap.svg" },
    { name: "CSharp", img: "assets/img/csharp.svg" },
    { name: "Java", img: "assets/img/java.svg" },
];

function renderCardsSecondary() {
    const cardContainer = document.getElementById("cardContainer-2");
    cardContainer.innerHTML = ""; //

    secondaryLanguages.forEach(language => {
        const cardHTML = `
            <div class="card-language" onclick="toggleFlip(this)">
                <div class="card-front">
                    <img src="${language.img}" alt="${language.name}" title="${language.name}">
                </div>
                <div class="card-back">
                    <span>${language.name}</span>
                </div>
            </div>
        `;
        cardContainer.innerHTML += cardHTML;
    });
}

renderCardsSecondary();

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

