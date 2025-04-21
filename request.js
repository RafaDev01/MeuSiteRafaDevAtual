document.addEventListener('DOMContentLoaded', () => {
    fetch('https://rafaeldev01/visitas')
        .then(response => response.json())
        .then(data => {
            document.getElementById('visitas').textContent = data.visitas;
        })
        .catch(error => console.error('Erro ao buscar visitas:', error));
});