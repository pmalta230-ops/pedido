const btnNao = document.getElementById('btn-nao');
const btnSim = document.getElementById('btn-sim');
const dialogOriginal = document.querySelectorAll('.mc-dialog')[0];
const mensagemSucesso = document.getElementById('mensagem-sucesso');

function moverBotaoNao() {
    const larguraJanela = window.innerWidth - btnNao.offsetWidth - 40;
    const alturaJanela = window.innerHeight - btnNao.offsetHeight - 40;

    const novoX = Math.floor(Math.random() * Math.max(0, larguraJanela));
    const novoY = Math.floor(Math.random() * Math.max(0, alturaJanela));

    btnNao.style.position = 'fixed';
    btnNao.style.left = `${novoX}px`;
    btnNao.style.top = `${novoY}px`;
}

btnNao.addEventListener('mouseover', moverBotaoNao);

btnNao.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moverBotaoNao();
});

btnSim.addEventListener('click', () => {
    dialogOriginal.classList.add('hidden');
    mensagemSucesso.classList.remove('hidden');
});
