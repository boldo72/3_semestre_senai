class Heroi {
    nome
    poderes
    EquipamentoPrincipal
    #forca = 100;

    constructor(nome, poderes, EquipamentoPrincipal) {
        this.nome = nome;
        this.poderes = poderes;
        this.EquipamentoPrincipal = EquipamentoPrincipal
    }

    verForca() {
        return this.#forca;
    }
    regarregarForca() {
        this.#forca += 10;
    }
    UsarForca() {
        this.#forca -= 10;
    }
    apresentar() {
        return `Me chamo ${this.nome}!! Meus poderes são ${this.poderes} e meu equipamento principal é ${this.EquipamentoPrincipal}`
    }
    atacarPoder() {
        return `O herói ${this.nome}, usou o poder ${this.poderes}`
    }
}

const homemDeFerro = new Heroi('homem de ferro', "rico", "armaduras", 20);
console.log(homemDeFerro.apresentar())
console.log(homemDeFerro.verForca());
homemDeFerro.UsarForca();
console.log(homemDeFerro.regarregarForca());
console.log(homemDeFerro.regarregarForca());
console.log(homemDeFerro.UsarForca());

class estiloCombate extends Heroi {
    constructor(nome, poderes, EquipamentoPrincipal,) {
        super(nome, poderes, EquipamentoPrincipal,)
        this.estiloLuta = estiloLuta
    }
    apresentar() {
        return `Me chamo ${this.nome}!! Meu estilo de combate é ${this.estiloLuta}`
    }

}
class DC extends Heroi {
    constructor(nome, universo, golpe) {
        super(nome, golpe, universo)
        this.universo = universo
    }
    apresentar() {
        return `Olá!, meu nome é ${this.nome} da Marvel e meu poder é ${this.poder}`
    }
}

const viuvaNegra = new Marvel("viuva negra", "Marvel", "agilidade",)
console.log(viuvaNegra.apresentar())
console.log(viuvaNegra.lancarGolpe())

const superman = new DC("superman", "DC", "super força")
console.log(superman.apresentar())
console.log(superman.lancarGolpe())

const aleatorio = new Heroi("aleatorio", "Nivel Generico")
console.log(aleatorio.apresentar())
