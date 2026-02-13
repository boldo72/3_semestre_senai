class Pessoa {
    //atributos privados
    #Ducumento

    //atributo publico
    nome;
    idade;

    construtor(nome, idade, documento) {
        this.#Ducumento = documento;//privado
        this.nome = nome;
        this.idade = idade;
    }


    apresentar(){
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }

    mostrarDocumento(){
        return this.#Ducumento;
    }
}
const pessoa1 = new Pessoa('boldo', 16, '123456789');
console.log(pessoa1.apresentar());  
console.log(pessoa1.mostrarDocumento);

