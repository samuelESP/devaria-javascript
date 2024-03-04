
class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  }

const pessoa1 = new Pessoa("João", "2002-05-02");
console.log(pessoa1.nome); // João

const pessoa2 = new Pessoa("Rafael", "2006-01-22");
console.log(pessoa2.idade); // 2006-01-22




class Aluno extends Pessoa {
    constructor(nome, idade, matricula) {
      super(nome, idade);
      this.matricula = matricula;
    }
  }
  
  const aluno = new Aluno("José", "2002-05-04", "RM2504");
  console.log(aluno.nome, aluno.matricula);


  class Usuario {
    constructor(login, id){
        this.login = login;
        this.id = id;
    }
    validarLogin() {
        return this.login.includes('@') && this.login.includes('.') ? "Login Válido" : "Login Invalido;"
    }
  }

  const Samuel = new Usuario("samuelnegocios1509@gmail.com", '1213141');
    console.log(Samuel.validarLogin());
    console.log(Samuel.id);