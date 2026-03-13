import jogador from '../models/jogador.js';

let listaJogadores = [
    new jogador(1, 'boldo', 1000),
    new jogador(2, 'pablo', 2000),
    new jogador(3, 'fellipe', 3000)
]

const jogadorontroller = {
         listar: (req, res) => {
        res.render('jogador.ejs', { jogadores: listaJogadores });
    },
    adicionar: (req, res) => {
        const { nome, pontos } = req.body

        try {
            const novoJogador = new jogador(
                listaJogadores.length + 1,
                nome,
                pontos

            );
            listaJogadores.push(novoJogador);
            res.redirect('/jogadores');
        } catch (e) {
            res.status(400).render('jogadores.ejs', { lista: listaJogadores, erro: e.message });
        }
        adicionarpontos: (req, res) => {
            const { id } = req.body;
            const jogador = listaJogadores.find(j => j.id === Number(id));
            jogador.adicionarpontos();
            res.redirect('/jogadores');
        }
    }
}

export default jogadorontroller