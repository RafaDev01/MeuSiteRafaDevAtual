const secondaryLanguages = [
    { name: "React", img: "assets/img/react.svg" },
    { name: "HTML", img: "assets/img/html.svg" },
    { name: "CSS", img: "assets/img/css.svg" },
    { name: "Javascript", img: "assets/img/javascript.svg" },
    { name: "Postman", img: "assets/img/postman.svg" },
    { name: "Linux Ubuntu", img: "assets/img/ubuntu.svg" },
    { name: "Node.js", img: "assets/img/node.svg" },
];

function renderCardsPrincipal() {
    const cardContainer = document.getElementById("cardContainer-1");
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

renderCardsPrincipal();
