import express from 'express';
import livrocontroller from '../controllers/livrocontroller.js';

const routes = express.routes();

routes.get('/livros', livrocontroller.listar);
routes.post('/livros', livrocontroller.adicionar);
routes.put('/livros', livrocontroller.marcarcomolido);