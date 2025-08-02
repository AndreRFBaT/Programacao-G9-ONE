let listaDeNumerosSorteados = [];
let numeroMaximoDaLista = 10; // Número máximo da lista de números sorteados
let numeroSecreto = gerarNumeroAleatorio();
// let numeroSecreto = 5; // Número secreto para teste
let tentativas = 1;
// habilita fala
let falaHabilitada = true;



function exibirTextoTela(tag, texto) {
    let campoHTML = document.querySelector(tag);
    campoHTML.innerHTML = texto;
    // responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate : 1.2});
    if (falaHabilitada && 'speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR';
        utterance.rate = 1.2;
        window.speechSynthesis.speak(utterance);
    } else if(!('speechSynthesis' in window)) {
        console.log("Web Speech API não suportada neste navegador.");
    }
}


function alternarFala() {
    falaHabilitada = !falaHabilitada;

    const botao = document.getElementById('botao-fala');
    botao.textContent = falaHabilitada ? '🔈 Fala: Ligada' : '🔇 Fala: Desligada';

    if (falaHabilitada) {
        const titulo = document.querySelector('h1').textContent;
        const paragrafo = document.querySelector('p').textContent;

        if (titulo) {
            // Fala o título se ele existir
            exibirTextoTela('h1', titulo);
        }
        // Verifica se o parágrafo existe antes de tentar falar
        if (paragrafo) {
            exibirTextoTela('p', paragrafo);
        }
    }
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
    // return Math.floor(Math.random() * 10) + 1;
    let numeroEscolhido = Math.floor(Math.random() * numeroMaximoDaLista) + 1;
    let quantidadeDeElementosLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosLista == numeroMaximoDaLista) {
        alert("Lista de números sorteados cheia!\n Limpando lista de números sorteados.");
        listaDeNumerosSorteados = []; // Limpa a lista se já tiver 10 números sorteados
    }

    if ( listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio(); // Chama a função recursivamente se o número já foi sorteado
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido); // Adiciona o número sorteado à lista
        console.log(`Número sorteado: ${numeroEscolhido}`); // Exibe o número sorteado no console
        console.log(`Lista de números sorteados: ${listaDeNumerosSorteados}`); // Exibe a lista de números sorteados no console
        return numeroEscolhido; // Retorna o número se ele não foi sorteado
    }
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


exibirMensagemInicial();