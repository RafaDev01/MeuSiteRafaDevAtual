const mainLanguages = [
    { name: "CSharp", img: "assets/img/csharp.svg" },
    { name: "Bootstrap", img: "assets/img/bootstrap.svg" },
    { name: "Java", img: "assets/img/java.svg" },
    { name: "Tailwind", img: "assets/img/tailwind.svg" },

];

function renderCardsSecondary() {
    const cardContainer = document.getElementById("cardContainer-2");
    cardContainer.innerHTML = ""; //

    mainLanguages.forEach(language => {
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

// Função para virar os cards sequencialmente (primeiro para o último)
function flipCardsSequentially() {
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('flipped');
        }, index * 500); // 500ms de intervalo entre os flips
    });

    // Após virar todos, iniciar o processo de desvirar
    setTimeout(unflipCardsSequentially, cards.length * 500 + 2000); // 2000ms de pausa antes de desvirar
}

// Função para desvirar os cards sequencialmente (último para o primeiro)
function unflipCardsSequentially() {
    Array.from(cards)
        .reverse() // Inverte a ordem dos cards
        .forEach((card, index) => {
            setTimeout(() => {
                card.classList.remove('flipped');
            }, index * 500); // 500ms de intervalo entre os flips
        });

    // Repetir o processo
    setTimeout(flipCardsSequentially, cards.length * 500 + 2000); // 2000ms de pausa antes de começar novamente
}

// Iniciar o loop
flipCardsSequentially();