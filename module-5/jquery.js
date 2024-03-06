const divs = $('div');

const H1s = $('h1');

const titulo = $("#titulo");

const novaClasse = $(".font-weight-normal");

const entrada = $("input");

const texto = $("#textoAlt");

function alterarHTML() {
    titulo.text("Novo Titulo, depois de manipular o DOM");

    divs.eq(0).css('color', '#fff'); // Como ele me retorna duas divs eu preciso especificar qual delas eu quero usar, no caso é a primeira

    texto.text(entrada.val());
    entrada.val('');
    
    for(let elemento of novaClasse){

    $(elemento).removeClass('font-weight-normal').addClass('font-weight-bold');
    }

    const novoP = document.createElement('p');
    novoP.textContent = "Novo Texto adicionado";

    texto.after(novoP);
    
    
}