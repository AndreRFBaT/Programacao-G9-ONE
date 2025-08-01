alert("Vamos começar com as perguntas aleatórias!");

let perguntaSobreODia = prompt("Qual é o dia da semana? (ex: segunda, terça, etc.)");
if (["segunda", "terça", "quarta", "quinta", "sexta"].includes(perguntaSobreODia.toLowerCase())){
    alert("Boa semana para você!");
} else {
    alert("Bom final de semana para você!");
}

let verificarNumero = prompt("Digite um número para saber se é positivo ou negativo:");
if (parseFloat(verificarNumero) > 0) {
    alert("O número é positivo.");
} else if (parseFloat(verificarNumero) < 0) {
    alert("O número é negativo.");
} else {
    alert("O número é zero.");
}
let totalPontos = 0;
let pontuacaoDoJogo = prompt("Qual é a sua pontuação no jogo?");
while (totalPontos < 100) {
    if (isNaN(pontuacaoDoJogo)) {
        alert("Por favor, insira um número válido para a pontuação:");
    } else {
        totalPontos += parseInt(pontuacaoDoJogo);
    }
    if (totalPontos >= 100) {
        alert("Parabéns! Você alcançou 100 pontos!");
        break;
    } else {
        pontuacaoDoJogo = prompt(`Você tem ${totalPontos} pontos. Adicione mais pontos para alcançar 100:`);
    }
}

let saldoConta = parseFloat(prompt("Qual é o saldo da sua conta?"));
if (isNaN(saldoConta)) {
    alert("Por favor, insira um número válido para o saldo.");
} else {
    alert(`Seu saldo atual é: R$ ${saldoConta.toFixed(2)}`);
}

let nomeUsuario = prompt("Qual é o seu nome?");
if (nomeUsuario !== null) {
    alert(`Olá, ${nomeUsuario}! Bem-vindo(a)!`);
} else {
    alert("Olá! Bem-vindo(a)!");
}