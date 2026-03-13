import express from 'express';


const app = express();

app.use('/dogs', express.static('public'));


app.get('/', async (req, res) => {
    res.status(200).json('api funcionando');
})


app.get('/cep/:codigo', async (req, res) => {
    const codigo = req.params.codigo;
    const resposta = await fetch(`https://viacep.com.br/ws/${codigo}/json/`);
    const dados = await resposta.json();
    res.json(dados);


    const cidade = dados.localidade;
    const estado = dados.uf;

    res.status(200).json({ cidade, estado })

}),

app.get('/starwars/personagen/:id', async (req, res) => {
    const {id} = req.params.codigo;
    const resposta = await fetch(`https://swapi.dev/api/people/${id}/`);
    const dados = await resposta.json();

    const resultado = {

    }

    const cidade = dados.localidade;
    const estado = dados.uf;

    res.json({ cidade, estado })

}),

app.get('/dog/:id', async (req, res) => {
    const {id} = req.params;
    const url = (`https://http.dog/${id}.jpg`);

    res.json({url})
})










const port = 3000;
app.listen(port, () => {
    console.log(`servidor rodando http://localhost:${port}`);
})