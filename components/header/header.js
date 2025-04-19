document.addEventListener('DOMContentLoaded', function () {
    fetch('../../../../components/header/header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao carregar o header: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
            initializeNavigation(); // Inicializa os botões após o header ser carregado
        })
        .catch(error => console.error(error.message));
});

function initializeNavigation() {
    const path = window.location.pathname;
    const match = path.match(/modelo(\d+)/);

    if (match) {
        const modelNumber = parseInt(match[1], 10);
        const totalModels = 46;

        const prevButton = document.getElementById('prev-model');
        const nextButton = document.getElementById('next-model');
        const modelInfo = document.getElementById('model-info');

        if (!modelInfo || !prevButton || !nextButton) {
            console.error("Elementos necessários não encontrados!");
            return;
        }

        modelInfo.textContent = `Modelo ${modelNumber}`;

        const baseUrl = `${window.location.origin}/src/pages/modelos`;

        if (modelNumber <= 1) {
            prevButton.disabled = true;
        } else {
            prevButton.disabled = false;
            prevButton.onclick = function () {
                window.location.href = `${baseUrl}/modelo${modelNumber - 1}/index.html`;
            };
        }

        if (modelNumber >= totalModels) {
            nextButton.disabled = true;
        } else {
            nextButton.disabled = false;
            nextButton.onclick = function () {
                window.location.href = `${baseUrl}/modelo${modelNumber + 1}/index.html`;
            };
        }
    } else {
        console.error("Número do modelo não encontrado na URL!");
    }
}