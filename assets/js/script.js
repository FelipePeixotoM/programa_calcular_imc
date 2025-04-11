const funcoesReutilizaveis = {
    pegarElemento: (elemento) => {
        return document.querySelector(elemento);
    },
    criarElemento: (elemento) => {
        return document.createElement(elemento);
    },
};

// butao de enviar

function calcularImc(peso, altura) {
    return Number(peso / (altura * altura)).toFixed(2);
}

function funcaoPrincipal() {
    const divResposta = funcoesReutilizaveis.pegarElemento('#resultado');
    divResposta.innerHTML = ''

    const paragrafo = funcoesReutilizaveis.criarElemento('p');
    paragrafo.setAttribute('class', 'paragrafoGenerico');

    const peso = funcoesReutilizaveis.pegarElemento('#inputPeso');
    const altura = funcoesReutilizaveis.pegarElemento('#inputAltura');

    const pesoNumber = Number(peso.value);
    const alturaNumber = Number(altura.value);

    const calculo = calcularImc(pesoNumber, alturaNumber);
    let mensagem = '';

    if (calculo < 18.5) {
        mensagem = 'abaixo do peso';
    } else if (calculo >= 18.5 && calculo <= 24.9) {
        mensagem = 'Peso normal';
    } else if (calculo >= 25 && calculo <= 29.9) {
        mensagem = 'Sobrepeso';
    } else if (calculo >= 30 && calculo <= 34.9) {
        mensagem = 'Obesidade grau 1';
    } else if (calculo >= 35 && calculo <= 39.9) {
        mensagem = 'Obesidade grau 2';
    } else if (calculo >= 40) {
        mensagem = 'Obesidade grau 3';
    } else {
        paragrafo.textContent = `Voce não digitou o necessario para o calculo, digite novamente`
        divResposta.appendChild(paragrafo)
        return
    }
    
    paragrafo.textContent = `Seu IMC é ${calculo} (${mensagem})`

    divResposta.appendChild(paragrafo)
    
}

const butaoIniciar = document.getElementById('enviar');
butaoIniciar.addEventListener('click', (evento) =>  {
    evento.preventDefault();
    funcaoPrincipal()
});

// butao de reinicar

function funcaoReiniciar() {
    location.reload()
}

const butaoReiniciar = funcoesReutilizaveis.pegarElemento('#reiniciar');
butaoReiniciar.addEventListener('click', (evento) => {
    evento.preventDefault();
    funcaoReiniciar();
})