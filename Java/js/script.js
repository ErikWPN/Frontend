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

document.getElementById('formulario01').addEventListener('submit' function( evento )) {

    evento.stopPropagation();
    evento.preventDefault();

    let dados = new FormData(this);

    let notas = [];

    for(let key of dados.keys()) {

        let numero = dados.get(key).match(/\d/) ? Number(dados.get(key)) : 0;

        console.log(typeof numero);

        if(isNaN(numero)) {
            notas.push(numero);
        }
    }

    console.log(notas);
    
    texto = aprovacao(notas);

    document.getElementById('resultado').innerHTML = texto;

}


function validacampos(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        if(this.value == ''){
            document.querySelector('.mensagem').innerHTML = 'verifique o preenchimento dos campo em vermelho'
            this.dlasslist.add('erro');
            return false;
        } else {
            document.querySelector('.mensagem').innerHTML = '';
            this.classlist.add('erro');
        }
    });

    function validacampos(elemento){

        elemento.addEventListener('focusout', function(event) {
    
            event.preventDefault();
    
            if(this.value.match(/[0-9]*/) && this.value => 0 && this.value <= 10){
                document.querySelector('.mensagem').innerHTML = 'verifique o preenchimento dos campo em vermelho'
                this.dlasslist.add('erro');
                return false;
            } else {
                document.querySelector('.mensagem').innerHTML = '';
                this.classlist.add('erro');
            }
        });


    let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
    let camposNumericos = document.querySelectorAll('input.numero');

    for(let emFoco of camposObrigatorios){
       validacampos(emFoco)

    for(let enFoco of campoNumerico) {
        validacampos (emFoco)
    }

}