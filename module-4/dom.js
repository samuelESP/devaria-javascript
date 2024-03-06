const divs = document.getElementsByTagName('div');
console.log(divs);
const H1s = document.getElementsByTagName('h1');
console.log(H1s);
const titulo = document.getElementById("titulo");
console.log(titulo);
const novaClasse = document.getElementsByClassName("font-weight-normal");
console.log(novaClasse);
const entrada = document.getElementById("input");
console.log(entrada);
const texto = document.getElementsByClassName("textoAlt");

function alterarHTML() {
    titulo.textContent = "Novo Titulo, depois de manipular o DOM";
    divs[0].style.color = "#fff";
    texto[0].textContent = entrada.value;
    for(let elemento of novaClasse){
        elemento.className = "font-weight-bold"
    }
    entrada.value = "";

    const novoP = document.createElement('p');
    novoP.textContent = "Novo Texto adicionado";
    titulo.parentElement.appendChild(novoP);
}