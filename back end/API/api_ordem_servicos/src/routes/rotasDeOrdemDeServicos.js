
import { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

// Rota para obter todos os usuários
router.get("/ordem_servicos", async (req, res) => {
    try {
        const query = `SELECT * FROM ordem_servicos order by id_ordem`;
        const ordem_servicos = await BD.query(query);
        res.status(200).json(ordem_servicos.rows);
    } catch (error) {
        console.error("Erro ao obter usuários:", error.message);
        res.status(500).json({ error: "Erro ao obter serviços" });
    }
});

router.post("/ordem_servicos", async (req, res) => {
    const { descricao, id_departamento, id_usuario } = req.body;
    try {
        const comando = `INSERT INTO ordem_servicos (descricao, id_departamento, id_usuario) VALUES ($1, $2, $3)`;
        const values = [descricao, id_departamento, id_usuario];
        
        console.log(comando, values);
        await BD.query(comando, values);
        
        res.status(201).json({ message: "Ordem de Serviço criada com sucesso!" });
    } catch (error) {
        console.error("Erro ao criar ordem de serviço:", error.message);
        res.status(500).json({ error: "Erro ao criar ordem de serviço" });
    }
});

router.put("/ordem_servicos/:id_ordem", async (req, res) => {
    const { id_ordem } = req.params;
    const { descricao, id_departamento, id_usuario } = req.body;
    try {
        const comando = `UPDATE ordem_servicos SET descricao = $1, id_departamento = $2, id_usuario = $3 WHERE id_ordem = $4`;
        const values = [descricao, id_departamento, id_usuario, id_ordem];
        
        console.log(comando, values);
        await BD.query(comando, values);
        
        res.status(200).json({ message: "Ordem de Serviço atualizada com sucesso!" });
    } catch (error) {
        console.error("Erro ao atualizar ordem de serviço:", error.message);
        res.status(500).json({ error: "Erro ao atualizar ordem de serviço" });
    }
});


export default router;