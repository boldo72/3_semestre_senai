import express from 'express';
import jogadorontroller from '../controllers/jogadorController.js';

const routes = express.routes();

routes.get('/jogadores', jogadorontroller.listar);
routes.post('/jogadores', jogadorontroller.adicionar);
routes.put('/jogadores/adicionarpontos', jogadorontroller.adicionarpontos);

export default routes