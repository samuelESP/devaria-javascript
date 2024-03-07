const $stepOne = $('.step.one');
const $stepTwo = $('.step.two');
const $stepThree = $('.step.three');

const $stepText = $('#step-text');
const $stepDescription = $('#step-description');


const $inputNome = $('#nome');
const $inputSobrenome = $('#sobrenome');
const $inputDataNascimento = $('#dataNascimento');
const $inputEmail = $('#email');
const $inputMinibio = $('#minibio');


const $containerBtnFormOne = $('#containerBtnFormOne');
const $btnFormOne = $('#btnFormOne');


const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
const minLength = 2;

let nomeValido = false;
let sobrenomeValido = false;
let emailValido = false;
let dataNascimentoValido = false;


// Inicio..........Função de validação dos inputs.................

function validaInput(element, minLength, maxlength, regex) {
    const closest = $(element).closest('.input-data');
    if (!element.value
        || (minLength && element.value.trim().length < minLength)
        || (maxlength && element.value.trim().length > maxlength)
        || (regex && !element.value.toLowerCase().match(regex))
        )
        {
            closest.addClass('error');
            return false
        }
            closest.removeClass('error');
            return true;
}
// Fim..........Função de validação dos inputs.................

// Inicio..........Função de validação do Form para a liberação do BTN.................

function validaFormOne() {
    if (nomeValido && sobrenomeValido && emailValido && dataNascimentoValido) {
        $containerBtnFormOne.removeClass('disabled');
        $btnFormOne.removeClass('disabled');
    } else {
        $containerBtnFormOne.addClass('disabled');
        $btnFormOne.addClass('disabled');
    }
}

// Fim..........Função de validação do Form para a liberação do BTN.................

function init(){

    // .hide() -> usado para esconder o arquivo, como se fosse um displau:none
    $stepTwo.hide();
    $stepThree.hide();

    $stepText.text("Passo 1 de 3 - Dados pessoais");
    $stepDescription.text("Descreva seus dados para que possamos te conhecer melhor");


// Inicio..........Validações dos inputs.................
    
// keyup -> Ao levantar a tecla
    $inputNome.keyup(function() {
        // .closest -> indica o elemento mais proximo do que eu quero
        nomeValido = validaInput(this, minLength);
        validaFormOne()
    });
    $inputSobrenome.keyup(function() {
        sobrenomeValido = validaInput(this, minLength);
        validaFormOne()
    });
    $inputDataNascimento.keyup(function () {
        dataNascimentoValido = validaInput(this, minLength);
        validaFormOne()
    });
    $inputDataNascimento.change(function () {
        dataNascimentoValido = validaInput(this, minLength);
        validaFormOne()
    });
    $inputEmail.keyup(function () {
        emailValido = validaInput(this, null, null, emailRegex)
        validaFormOne()
    });
    $inputMinibio.keyup(function () {
        validaFormOne()
    });
    


// Fim..........Validações dos inputs.................

// Inicio..........Troca de tipo da Data de Nascimento.................
    $inputDataNascimento.on('focus', function () {
        this.type = 'date';
    }); 
    $inputDataNascimento.on('blur', function () {
        if (!this.value) {
            this.type = 'text';
        }
    });
// Fim..........Troca de tipo da Data de Nascimento.................

}
init();
