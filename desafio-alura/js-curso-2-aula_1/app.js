let numeroSecreto = gerarNumeroAleatorio();


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}


exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número secreto de 1 a 30');

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
}


function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 20 + 1);
}

