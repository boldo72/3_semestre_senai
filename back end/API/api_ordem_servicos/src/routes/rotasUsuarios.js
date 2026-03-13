import { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

// Rota para obter todos os usuários
router.get("/usuarios", async (req, res) => {
    try {
        const query = `SELECT * FROM usuarios order by id_usuario`;
        const usuarios = await BD.query(query);
        return res.status(200).json(usuarios.rows);
    } catch (error) {
        console.error("Erro ao obter usuários:", error.message);
        return res.status(500).json({ error: "Erro ao obter usuários" });
    }
});

//endpoint para add um novo usuario
router.post("/usuarios", async (req, res) => {
    const { nome, email, senha } = req.body;
    try {
        const comando = `INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3)`;
        const values = [nome, email, senha];
        
        console.log(comando, values);
        await BD.query(comando, values);
        
        return res.status(201).json({ message: "Usuário criado com sucesso!" });
    } catch (error) {
        console.error("Erro ao criar usuário:", error.message);
        return res.status(500).json({ error: "Erro ao criar usuário" });
    }
});

router.put('/usuarios/:id_usuario', async (req, res) => {
    const { id_usuario } = req.params;
    const { nome, email, senha } = req.body;
    try {
        const virificaUsuario = await BD.query(`SELECT * FROM usuarios WHERE id_usuario = $1`, [id_usuario]);
        if (virificaUsuario.rows.length === 0) {
            return res.status(404).json({ error: "Usuário não encontrado" });
        }
        const comando = `UPDATE usuarios SET nome = $1, email = $2, senha = $3 WHERE id_usuario = $4`;
        const valores = [nome, email, senha, id_usuario];
        await BD.query(comando, values);
        
        return res.status(200).json({ message: "Usuário atualizado com sucesso!" });
    } catch (error) {
        console.error("Erro ao atualizar usuário:", error.message);
        return res.status(500).json({ error: "Erro ao atualizar usuário" });
    }
});

export default router;
