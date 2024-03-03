const valido = false;

if (valido) {
  console.log(valido); // resultado: true
} else {
  console.log(valido); // resultado: false
}



const idade = 56

if(idade < 16){
    console.log("Não pode entrar");
}else if( idade >= 16){
    console.log("Pode entrar acompanhando");
}
else{
    console.log("Pode entrar direto");
}




const nome = "Douglas";

switch (nome) {
  case "João":
    console.log("João encontrado");
    break;
  case "Douglas":
    console.log("Douglas encontrado");
    break;
  default:
    console.log("Nenhum encontrado");
    break;
}



const numero1 = 32;
const numero2 = 24;
const numero3 = 14;
const numero4 = 1;
const stringNumero = '1';

if(numero3 >= numero4){
    console.log('Número 3 é maior');
}else {
    console.log('Número 4 é maior');
}