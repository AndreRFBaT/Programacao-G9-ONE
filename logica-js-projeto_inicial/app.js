alert("Boas vindas ao jogo do número secreto!");

let numeroSecreto = 29;
let chute = prompt('Escolha um número entre 1 e 100');

if (chute == numeroSecreto) {
    alert(`Isso ai! Você acertou o número secreto ${numeroSecreto}!`);
} else {
    alert ("Que pena! Você errou o número secreto!");
}