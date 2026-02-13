class livro {
    constructor(titulo, autor, ano, id) {
        if (!titulo || !autor || !ano || !id) {
            throw new Error('Todos os campos são obrigatórios');
        }
        this.id = id
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
        this.lido = false
    }

    descricao() {
        return `${this.titulo} - ${this.autor}`
    }

    verificarLeitura() {
        if (this.paginas <= 150) return 'Leitura rápida'
        if (this.paginas <= 300) return 'Leitura media'
        return 'Leitura lenta'  
    }

    marcarComoLido() {
        this.lido = true
    }




}
export default livro