class Bruxo {

    #nivelDeEnergia = 100;
    constructor(nome, idade, feiticos, casa, nivelDeMagia, nivelDeEnergia) {
        this.nome = nome;
        this.idade = idade;
        this.feiticos = feiticos;
        this.casa = casa;
        this.nivelDeMagia = nivelDeMagia;
        this.#nivelDeEnergia = nivelDeEnergia;
    }

    verEnergia() {
        return this.#nivelDeEnergia;
    }

    recarregarEnergia() {
        this.#nivelDeEnergia += 10;
    }

    lancarfeitico() {
        this.#nivelDeEnergia -= 10;
    }

}

const bruxo1 = new Bruxo('boldo', 16, 'Expelliarmus, AvadaKedavra, Alohomora', 'soncerina', 1, 100);
console.log(bruxo1.verEnergia());
console.log(bruxo1.lancarfeitico());
console.log(bruxo1.recarregarEnergia());

