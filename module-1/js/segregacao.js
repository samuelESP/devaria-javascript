
const dataAtual = new Date();
const msgFinal = "Vlw, e Flw"
console.log("Olá mundo Devaria...");
console.log(`Data Atual é ${dataAtual}`);

function menssage1(chamada){
    alert(chamada)
}
function menssage2(){
    menssage1("Bom Dia Devaria")
}

const mensagemFinal = (msg1) => console.log(msg1);

mensagemFinal(msgFinal);


const verdadeiro = true;
const naoVerdadeiro = !verdadeiro;
const tudoEVerdadeiro = verdadeiro && naoVerdadeiro;
const tudoEFalso = !verdadeiro && naoVerdadeiro;
const algumEverdadeiro = verdadeiro || naoVerdadeiro;
const algumEFalso = verdadeiro || naoVerdadeiro;

console.log('verdadeiro', verdadeiro);
console.log('naoVerdadeiro', naoVerdadeiro);
console.log('tudoEVerdadeiro', tudoEVerdadeiro);
console.log('tudoEFalso', tudoEFalso);
console.log('algumEverdadeiro', algumEverdadeiro);
console.log('algumEFalso', algumEFalso);

if (1=="1") {
    // == --> Compara o valor
    console.log("São equivalentes");
}

if (1 === 1) {
    // === --> Compara o valor e o tipo
    console.log("São idênticos");
}

if (1 != 2) {
    // != --> Compara o valor
    console.log("1 é diferente de 2");
}
  
if (1 !== "1") {
    // !== --> Compara o valor e o tipo
    console.log("1 numérico é diferente de 1 como string");
}