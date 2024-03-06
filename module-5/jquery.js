const divs = $('div');

const classeAlterada = $('.bg-info');
  
const entrada = $('input');
function clicaNobtn(){
    divs.eq(0).css('color', '#fff');
    // eq(NUMERO) representa qual item do meu jquery eu quero usar, por exemplo, eu tenho 2 itens com a mesma classe selecionados, porém eu so quero usar o pirmeiro dele, logo eu uso o .eq(0)
    classeAlterada.eq(1).text(entrada.val());
    entrada.val('');

    for (let elemento of classeAlterada){
        $(elemento).removeClass('bg-info').addClass('bg-success')
    }

    const novoP = document.createElement('p');
    novoP.textContent = "Novo Paragrafo criado";
    // last() seleciona o ultimo elemento do meu jquery
    classeAlterada.last().after(novoP);
}