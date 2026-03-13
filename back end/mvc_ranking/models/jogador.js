class jogador {
    constructor(id, nome, pontos) {
        this.id = id
        this.nome = nome
        this.pontos = Number(pontos)
    }

    resumo() {
        return `${this.id} - ${this.nome} - ${this.pontos}`
    }
    AdicionarPontos() {
        this.pontos += 50;
    }
    nivel() {
        if(this.pontos <= 100) return 'iniciante'
        if(this.pontos <= 300) return 'intermediario'
        return 'avancado'
    }

}

export default jogador