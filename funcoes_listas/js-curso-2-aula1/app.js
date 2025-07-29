let numeroSecreto = gerarNumeroAleatorio();
// let numeroSecreto = 5; // Número secreto para teste
let tentativas = 1;


function exibirTextoTela(tag, texto) {
    let campoHTML = document.querySelector(tag);
    campoHTML.innerHTML = texto;
}
function exibirMensagemInicial() {
    exibirTextoTela('h1', "Jogo do Número Secreto");
    exibirTextoTela('p', "Escolha um número entre 1 e 10");
}

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoTela('h1', "Acertou!");
        let mensagemTentativas = tentativas > 1 ? ` \n Voce acertou com ${tentativas} tentativas.` : ' \n Com UMA tentativa!!';
        exibirTextoTela('p', "Parabéns, você acertou o número secreto!" + mensagemTentativas);
        // Habilita o botão de reiniciar jogo
        document.getElementById('reiniciar').removeAttribute('disabled');
    
    } else {
        let exibir = chute > numeroSecreto? 'menor' : 'maior';
        exibirTextoTela('h1', "Errou!");
        exibirTextoTela('p', `O número secreto é ${exibir}`);
        tentativas++;
        limparCampo();
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 10) + 1;
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


exibirMensagemInicial();