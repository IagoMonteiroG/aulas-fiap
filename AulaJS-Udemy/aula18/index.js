const pessoa1 = {
    nome: 'Iago',
    sobrenome: 'Monteiro',
    idade: 19,

    fala(){
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementa(){
        this.idade ++;
    }
}

pessoa1.fala();
pessoa1.incrementa();
pessoa1.fala();
pessoa1.incrementa();
pessoa1.fala();
pessoa1.incrementa();
pessoa1.fala();
pessoa1.incrementa();
pessoa1.fala();
pessoa1.incrementa();
pessoa1.fala();

// function criaPessoa(nome, sobrenome, idade){
//     return {nome, sobrenome, idade}
// }

// const pessoa1 = criaPessoa('Iago', 'Monteiro', 19);

// console.log(pessoa1.idade);