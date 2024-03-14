// Pagina dos Formularos
const $stepOne = $('.step.one');
const $stepTwo = $('.step.two');
const $stepThree = $('.step.three');

// Repetição de texto para cada formulario
const $stepText = $('#step-text');
const $stepDescription = $('#step-description');
const $mainTitle = $('#title');

// inputs dos Forms (1)
const $inputNome = $('#nome');
const $inputSobrenome = $('#sobrenome');
const $inputDataNascimento = $('#dataNascimento');
const $inputEmail = $('#email');
const $inputMinibio = $('#minibio');

// inputs dos Forms (2)
const $inputEndereco = $('#endereco');
const $inputComplemento = $('#complemento');
const $inputCidade = $('#cidade');
const $inputCep = $('#cep');


// inputs dos Forms (3)
const $inputHabilidades = $('#habilidades');
const $inputPontosForte = $('#pontosForte');

// Botões 
const $containerBtnFormOne = $('#containerBtnFormOne');
const $containerBtnFormTwo = $('#containerBtnFormTwo');
const $containerBtnFormThree = $('#containerBtnFormThree');
const $btnFormOne = $('#btnFormOne');
const $btnFormTwo = $('#btnFormTwo');
const $btnFormThree = $('#btnFormThree');

// variáveis fixas
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
const cepRegex = /^([\d]{2})([\d]{3})([\d]{3})|^[\d]{2}.[\d]{3}-[\d]{3}/;
const minLength = 2;
const minLengthTextArea = 10;

//  Validadores
let nomeValido = false;
let sobrenomeValido = false;
let emailValido = false;
let dataNascimentoValido = false;
let enderecoValido = false;
let cidadeValido = false;
let CepValido = false;
let habilidadesValido = false;
let pontosFortesValido = false;



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

// ...........Forms liberar botão(1)
function validaFormOne() {
    if (nomeValido && sobrenomeValido && emailValido && dataNascimentoValido) {
        $containerBtnFormOne.removeClass('disabled');
        $btnFormOne.removeClass('disabled');
        $btnFormOne.off('click').on('click', iniciarPasso2)
    } else {
        $containerBtnFormOne.addClass('disabled');
        $btnFormOne.addClass('disabled');
        $btnFormOne.off('click');
    }
}

// ...........Liberar Forms2 e esconder Forms1
function iniciarPasso2(){
    $stepText.text('Passo 2 de 3 - Dados de correspondência');
    $stepDescription.text('Precisamos desses dados para que possamos entrar em contato.');
    $stepTwo.show();
    $stepOne.hide();

// Inicio..........Validações dos inputs Forms (2).................
    $inputEndereco.keyup(function () {
        enderecoValido = validaInput(this, minLengthTextArea);
        validaFormTwo();
    });
    $inputCidade.keyup(function () {
        cidadeValido = validaInput(this, minLength);
        validaFormTwo();
    });
    $inputCep.keyup(function(){
        this.value = this.value.replace(/\D/g,'');
        CepValido = validaInput(this, null, null, cepRegex);
        if(CepValido){
            this.value = this.value.replace(cepRegex, "$1.$2-$3");
        }
        validaFormTwo();
    })
    $inputComplemento.keyup(function(){
        validaFormTwo();
    })
// Fim..........Validações dos inputs Forms (1).................
}

// Inicio...........Forms liberar botão(2)
function validaFormTwo() {
    if (CepValido && enderecoValido && cidadeValido ) {
        $containerBtnFormTwo.removeClass('disabled');
        $btnFormTwo.removeClass('disabled');
        $btnFormTwo.off('click').on('click', iniciarPasso3)
    } else {
        $containerBtnFormTwo.addClass('disabled');
        $btnFormTwo.addClass('disabled');
        $btnFormTwo.off('click');
    }
}
// Fim..........Função de validação do Form para a liberação do BTN.................

// Liberar Forms 3 e esconder Forms 2
function iniciarPasso3() {
    $stepText.text('Passo 3 de 3 - Dados de correspondência');
    $stepDescription.text('Não economize palavras, aqui é onde você pode se destacar.');
    $stepThree.show();
    $stepTwo.hide();

// Inicio..........Validações dos inputs Forms (3).................
$inputHabilidades.keyup(function(){
    habilidadesValido = validaInput(this, minLengthTextArea);
    validaFormThree();
})
$inputPontosForte.keyup(function(){
    pontosFortesValido = validaInput(this, minLengthTextArea);
    validaFormThree();
})
// Fim..........Validações dos inputs Forms (3).................
}

// Inicio...........Forms liberar botão(3)
function validaFormThree() {
    if (habilidadesValido && pontosFortesValido) {
        $containerBtnFormThree.removeClass('disabled');
        $btnFormThree.removeClass('disabled');
        $btnFormThree.off('click').on('click', salvarNoTrello)
    } else {
        $containerBtnFormThree.addClass('disabled');
        $btnFormThree.addClass('disabled');
        $btnFormThree.off('click');
    }
}
// Fim..........Função de validação do Form para a liberação do BTN.................

// Finalizar o Forms
function finalizaFormulario() {
    $stepThree.hide();
    $stepDescription.hide();
    $mainTitle.text('Muito obrigado pela sua inscrição!');
    $stepText.text('Entraremos em contato assim que possível, nosso prazo médio de resposta é de 5 dias. Fique atento na sua caixa de email.');
}


async function salvarNoTrello() {
    try {
        const nome = $inputNome.val();
        const sobrenome = $inputSobrenome.val();
        const email = $inputEmail.val();
        const dataNascimento = $inputDataNascimento.val();
        const minibio = $inputMinibio.val();
        const endereco = $inputEndereco.val();
        const complemento = $inputComplemento.val();
        const cidade = $inputCidade.val();
        const cep = $inputCep.val();
        const habilidades = $inputHabilidades.val();
        const pontosForte = $inputPontosForte.val();
        if (!nome || !sobrenome || !email
        || !dataNascimento || !endereco
        || !cidade || !cep
        || !habilidades || !pontosForte) {
            return alert('Favor preencher todos os dados para seguir');
        }

        const body = {
            name: 'Formulário de candidatura - ' + nome,
            desc: `Seguem dados do candidato:
            
            ------------------- Dados pessoais ------------
            Nome: ${nome}
            Sobrenome: ${sobrenome}
            Email: ${email}
            Data nascimento: ${dataNascimento}
            Minibio: ${minibio}
            ------------------- Dados de endereco ------------
            Endereço: ${endereco}
            Complemento: ${complemento}
            Cidade: ${cidade}
            CEP: ${cep}
            ------------------- Dados do candidato ------------
            Habilidades: ${habilidades}
            Pontos Fortes: ${pontosForte}
            `
        }

        await fetch('https://api.trello.com/1/cards?idList=65ebdc95d0658dc01030770e&key=de69300cad9878db12c1f0b82e0c0f67&token=ATTA1f2640e9535a37933a09da2d825bb254b86b5a95d2438c54c3fea9d0dd81c8a0F4EBE78E', {
        method : 'POST',
        headers : {
            "Content-type": "application/json"
        },
        body : JSON.stringify(body)
        });
        return finalizaFormulario();
    } catch (e) {
        console.log('Ocorreu erro ao salvar no Trello:', e);
    }
}




// ...........Liberar Forms1 e esconder Forms2 e Forms2
function init(){

    $stepTwo.hide();
    $stepThree.hide();

    $stepText.text("Passo 1 de 3 - Dados pessoais");
    $stepDescription.text("Descreva seus dados para que possamos te conhecer melhor");

// Inicio..........Validações dos inputs Forms (1).................
    $inputNome.keyup(function() {
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
