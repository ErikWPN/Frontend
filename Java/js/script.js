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

const formulario01 = document.getElementById('formulario01').

if(forulario01)
formulario01.addEventListener('submit', function( evento ) {

    evento.preventDefault();
    evento.stopPropagation();

    if( this.getArrtibute('class').match(/erro/) ) {
        return false;
    }
    
    let dados = new FormData(this);

    let notas = [];

    for(let key of dados.keys()) {

        let numero = dados.get(key).match(/\d/) ? Number(dados.get(key)) : 0;

        if(!isNaN(numero)) {
            notas.push(numero);
        }
    }

    console.log(notas);
    
    texto = aprovacao(notas);

    document.getElementById('resultado').innerHTML = texto;

});


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

function validaCamposNumero(elemento){

        elemento.addEventListener('focusout', function(event) {
    
            event.preventDefault();

            let Numero = rhis.value.match(/^[\d]5-[\d]3/) ? this.value.replace(/-/,'') : this.value;
    
            if(Numero != ""(/[0-9]*/) && Numero >= 0 && Numero <= 10){
                document.querySelector('.mensagem').innerHTML = '';
                this.classlist.remove('erro');
                ehis.parentNode.classlist.remove('erro');
            } else {
                document.querySelector('.mensagem').innerHTML = 'verifique o preenchimento dos campo em vermelho';
                this.classlist.add('erro');
                this.parentNode.classlist.add('erro');
                return false;
            }
        });
    }

    function validaEmail(elemento){

        elemento.addEventListener('focusout', function(event) {
            event.preventDefault();

            const emailValido = /^[a-z0-9]+@[az0-9]+\.[a-z]+\.[a-z]?$/i
            if(this.value.match(/@/)) {
                document.querySelector('.mensagem').innerHTML = '';
                this.classlist.remove('erro');
                ehis.parentNode.classlist.remove('erro');
            } else {
                document.querySelector('.mensagem').innerHTML = 'verifique o preenchimento dos campo em vermelho';
                this.classlist.add('erro');
                this.parentNode.classlist.add('erro');
                return false;
            }

    });

}    
    let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
    let camposNumericos = document.querySelectorAll('input.numero');
    let camposEmail = document.querySelectorAll('input.email');

    for(let emFoco of camposObrigatorios){
       validacampos(emFoco)

    }
    for(let enFoco of campoNumerico) {
        validaCamposNumero (emFoco)
    }

    for(let enFoco of camposEmail) {
        validaEmail (emFoco)
    }
