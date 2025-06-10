const dataInicial = new Date('2023-08-09T00:00:00');

function atualizarData() {
    const dataAtual = new Date();
    const diff = dataAtual - dataInicial;

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('dias').textContent = dias;
    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;
}

setInterval(atualizarData, 1000);
atualizarData();

const imagens = ['foto.jpeg','foto3.jpeg', 'foto4.jpeg', 'foto5.jpeg', 'foto6.jpeg'];
let indice = 0;
const img = document.getElementById('foto');

setInterval(() => {
    img.style.opacity = 0; // Fade out
    img.style.transition = 'opacity 0.5s ease-in-out';
    setTimeout(() => {
        img.style.opacity = 1; // Fade in// Wait for fade out to complete
        indice = (indice + 1) % imagens.length;
        img.src = imagens[indice];
    }, 500);
}, 2000);