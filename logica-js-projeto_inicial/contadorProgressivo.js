let contador = 0;
let numerosSoma = 0;
let numerosAdd = 0;

while (contador < 10) {
    numerosAdd = parseInt(prompt("Digite um número para adicionar ao contador:"));
    if (isNaN(numerosAdd)) {
        alert("Por favor, digite um número válido.");
        continue;
    }
    contador += 1;
    numerosSoma = numerosSoma + numerosAdd;
    alert(`Contador: ${contador}, Número adicionado: ${numerosAdd}\nSoma total: ${numerosSoma}`);
}