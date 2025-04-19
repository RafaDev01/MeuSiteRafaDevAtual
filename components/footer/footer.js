document.addEventListener('DOMContentLoaded', function () {
    fetch('../../../../components/footer/footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao carregar o footer: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            // Insere no fim da página
            document.body.insertAdjacentHTML('beforeend', data);
            initializeNavigation(); // Certifique-se que essa função está definida
        })
        .catch(error => console.error(error.message));
});
