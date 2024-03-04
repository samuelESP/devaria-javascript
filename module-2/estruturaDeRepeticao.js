
for (let pneusTrocados = 0; pneusTrocados < 4; pneusTrocados++) {
    if(pneusTrocados < 4 ){
        console.log(`Foram trocados ${pneusTrocados + 1} no total`);
    }else{
        continue;
    }
}


let salario = 1000

while (salario < 5000) {
  salario += 1000;

  console.log("O salário é R$" + salario);
}



let aumento = 100;

do {
  console.log("O salário é R$" + aumento);

  aumento += 100;
} while (aumento < 500)





function darBoasVindas(aluno) {
    console.log(`Bom dia ${aluno}`);
}

const novosAlunos = ["João", "Felipe", "Alfredo"];
for (const aluno of novosAlunos) {
    darBoasVindas(aluno);
}