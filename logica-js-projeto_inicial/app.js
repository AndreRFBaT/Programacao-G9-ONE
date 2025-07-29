alert("Boas vindas ao jogo do número secreto!");
let valorMaximo = 100
let numeroSecreto = parseInt(Math.random() * valorMaximo + 1); // Gera um número aleatório entre 1 e 10
console.log("Número secreto:", numeroSecreto);
let chute;
let tentativas = 1;

while (chute !== numeroSecreto && tentativas <= 3) {
    chute = Number(prompt(`Escolha um número entre 1 e ${valorMaximo}:`));

    if (isNaN(chute)) {
        alert("Digite um número válido!");
        continue;
    }
    // 1. Verifica se a palavra tentativa deve ser plural ou singular
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

    if (chute === numeroSecreto) {
        alert(`Isso aí! Você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`);
        break;
    } else {
        // Aqui o chute já tem valor
        let mensagem = numeroSecreto > chute
            ? "O número secreto é maior que o seu chute!"
            : "O número secreto é menor que o seu chute!";
        alert(mensagem);

        tentativas++;
        if (tentativas <= 3) {
            alert(`Você errou! Tentativa número ${tentativas}.`);
        } else {
            alert("Você esgotou suas tentativas! O número secreto era " + numeroSecreto + ".");
            break;
        }

        console.log(`Tentativa número ${tentativas}: ${chute}`);
        console.log("Número secreto:", numeroSecreto);
    }
}
