//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeAmigos = [];
let amigoSorteado = '';
let falaHabilitada = false;


function falarTextoTela(texto) {
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
        const titulo = document.querySelector('.main-title')?.textContent;
        const instrucao = document.querySelector('.section-title')?.textContent;
        if (titulo) falarTextoTela(titulo);
        if (instrucao) falarTextoTela(instrucao);
    }
}


function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let nome = input.value.trim();

    // Verifica se o campo de entrada está vazio ou é valido
    let nomeValido = /^[a-zA-ZÀ-ÿ\s]{2,}$/; // Regex para validar nomes com letras e espaços

    if (!nomeValido.test(nome)) {
        alert("Por favor, insira um nome valido (Apelidos de 2 ou mais letras são aceitos).");
        input.value = '';
        return;
    } else if (listaDeAmigos.includes(nome)) {
        alert("Este nome já está na lista de amigos.");
        return;
    }

    // Adiciona o nome à lista de amigos
    listaDeAmigos.push(nome);
    console.log(`Nome adicionado: ${nome}`);
    // Limpa o campo de entrada após adicionar o amigo
    input.value = '';
    atualizarListaAmigos();
    // Limpa o resultado anterior
    document.getElementById('resultado').textContent = '';
    falarTextoTela(`Amigo ${nome} adicionado com sucesso!`);
}

function atualizarListaAmigos() {
    let ul = document.getElementById('listaAmigos');
    ul.innerHTML = '';

    listaDeAmigos.forEach((amigo) => {
        let li = document.createElement('li');
        li.textContent = amigo;
        ul.appendChild(li);
    });
    console.log(`Lista de amigos atualizada: ${listaDeAmigos}`);
}
function listarAmigos() {
    return listaDeAmigos;
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione amigos para sortear.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    amigoSorteado = listaDeAmigos[indiceSorteado];
    console.log(`Amigo sorteado: ${amigoSorteado}`);

    mostrarAmigoSorteado();
    // Limpa a tudo após o sorteio
    listaDeAmigos = [];
    amigoSorteado = '';
    atualizarListaAmigos();
}
function mostrarAmigoSorteado() {
    if (amigoSorteado === '') {
        alert("Nenhum amigo foi sorteado ainda.");
        return;
    }
    let mensagem = `O amigo secreto sorteado foi: ${amigoSorteado}`;
    let ul = document.getElementById('resultado');
    ul.textContent = mensagem;
    console.log(`Resultado exibido: ${amigoSorteado}`);
    falarTextoTela(mensagem);

}