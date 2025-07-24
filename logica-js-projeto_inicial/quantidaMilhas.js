let usuarioMilhas = prompt('Quantas milhas você tem?');
let quantidadeMilhas = parseInt(usuarioMilhas); // converte string para número
let porcentagemDesconto = 0;

if (quantidadeMilhas < 5000) {
    alert('Quantidade insuficiente de milhas para obter desconto.');
} else {
    if (quantidadeMilhas >= 30000) {
        porcentagemDesconto = 20;
    } else if (quantidadeMilhas >= 5000) {
        porcentagemDesconto = 10;
    }

    alert(`Desconto de ${porcentagemDesconto}%.`);
}
