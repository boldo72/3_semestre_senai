import livro from "../modules/livro";

//vetor e seus objetivos

var listalivros = [
    new livro('Aprendendo Java', 'Paulo Silveira', 2019, 1),
    new livro('Aprendendo Python', 'Paulo Silveira', 2019, 2),
    new livro('Aprendendo C++', 'Paulo Silveira', 2019, 3)

];


const livroController = {
    listar: (req, res) => {
        res.render('livros.ejs', { livros: listaLivros });
    },
    adicionar: (req, res) => {
        const { titulo, autor, ano, id } = req.body

        try {
            const novolivro = new livro(
                titulo,
                autor,
                ano,
                id,
                Number(paginas)
            );
            listaLivros.push(novolivro);
        } catch (e) {
            res.status(400).render('livros.ejs', { livros: listaLivros, erro: e.message });
        }
        marcarcomolido: (req, res) => {
            const { id } = req.body;
            const livro = listaLivros.find(livro => livro.id === Number(id));
            livro.marcarComoLido();
            res.redirect('/livros');
        }
    }
};

export default livroController;