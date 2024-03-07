const $stepOne = $('.step.one');
const $stepTwo = $('.step.two');
const $stepThree = $('.step.three');

const $stepText = $('#step-text');
const $stepDescription = $('#step-description');
const $inputNome = $('#nome');
const $inputSobrenome = $('#sobrenome');
const $inputDataNascimento = $('#dataNascimento');

function init(){
    // .hide() -> usado para esconder o arquivo, como se fosse um displau:none
    $stepTwo.hide();
    $stepThree.hide();

    $stepText.text("Passo 1 de 3 - Dados pessoais");
    $stepDescription.text("Descreva seus dados para que possamos te conhecer melhor");
// keyup -> Ao levantar a tecla
    $inputNome.keyup(function() {
        // .closest -> indica o elemento mais proximo do que eu quero
        const closest = $(this).closest('.input-data');
        if(!this.value || this.value.trim().length < 2){
            return closest.addClass('error');
        }
            return closest.removeClass('error');
    });
    $inputSobrenome.keyup(function() {
        const closest = $(this).closest('.input-data');
        if (!this.value || this.value.trim().length < 2) {
            return closest.addClass('error');
        }
            return closest.removeClass('error');
        }
    );
    
    $inputDataNascimento.on('focus', function () {
        this.type = 'date';
    }); 
    $inputDataNascimento.on('blur', function () {
        if (!this.value) {
            this.type = 'text';
        }
    });

}
init();
