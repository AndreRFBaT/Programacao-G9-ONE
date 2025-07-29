alert("Boas vindas ao jogo do número secreto!");
let numeroSecreto = 29;
console.log("Número secreto:", numeroSecreto);
let chute;
let tentativas = 1;

while (chute !== numeroSecreto && tentativas <= 3) {
    chute = Number(prompt("Escolha um número entre 1 e 100"));

    if (isNaN(chute)) {
        alert("Digite um número válido!");
        continue;
    }
    if (chute === numeroSecreto) {
        alert(`Isso aí! Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativas!`);
    } else {
        if (numeroSecreto > chute) {
            alert("O número secreto é maior que o seu chute!");
        } else {
            alert("O número secreto é menor que o seu chute!");
        }
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
