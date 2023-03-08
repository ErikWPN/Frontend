function calcularMedia( notas ) {

    let soma = 0
    for( c = 0; c <notas.length; c++) {
        soma += notas[c];
    }

    media = soma / notas.length;

    return media;
}

let media; // escopa global

function aprovacao( notas ) {

    let media = calcularMedia( notas ); // escopa global

    let condicao = media >= 8 ? "aprovado" : "reprovado";

    return 'Media:' + media + ' - Resultado' + condicao;

}

 //Funções recusivas

function contagemRegressiva(numero) {

    console.log(numero);

    let proximoNumero = numero - 1;

    if(proximoNumero > 0)
        contagemRegressiva(proximoNumero);
  
}

// contagemRegressiva(50);

document.addEventListener('submit' function( evento )) {

    evento.stopPropagation();
    evento.preventDefault();

    let formulario = document.getElementById('formulario01')

    let dados = new FormData(formulario);

    let objeto = {};

    let notas = [];

    for(let key of dados.keys()) {
        objeto[key] = dados.get(key);

        // adicionar itens no array
        notas.push( parseInt(dados.get(key)));
    }

    console.log(notas);

    console.log(objeto);

    document.getElementById('resultado').innerHTML = aprovacao(notas);
    
    texto = aprovacao(notas);
}

var branco = "preto";
var preto = "cinza";
var cinza = "branco";
var carro = "preto";
var valor = 30000;
var prestacao = 750;