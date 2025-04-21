document.addEventListener('DOMContentLoaded', () => {
    fetch('http://<IP_DA_VPS>:3000/visitas')
        .then(response => response.json())
        .then(data => {
            document.getElementById('visitas').textContent = data.visitas;
        })
        .catch(error => console.error('Erro ao buscar visitas:', error));
});