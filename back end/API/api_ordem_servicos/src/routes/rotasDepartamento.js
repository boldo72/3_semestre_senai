
import { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

// Rota para obter todos os usuários
router.get("/departamento", async (req, res) => {
    try {
        const query = `SELECT * FROM departamento order by id_departamento`;
        const departamentos = await BD.query(query);
        res.status(200).json(departamentos.rows);
    } catch (error) {
        console.error("Erro ao obter departamentos:", error.message);
        res.status(500).json({ error: "Erro ao obter departamentos" });
    }
});
router.post("/departamento", async (req, res) => {
    const { nome } = req.body;
    try {
        const comando = `INSERT INTO departamento (nome) VALUES ($1)`;
        const values = [nome];
        
        console.log(comando, values);
        await BD.query(comando, values);
        
        res.status(201).json({ message: "Departamento criado com sucesso!" });
    } catch (error) {
        console.error("Erro ao criar departamento:", error.message);
        res.status(500).json({ error: "Erro ao criar departamento" });
    }
});

router.put("/departamento/:id_departamento", async (req, res) => {
    const { id_departamento } = req.params;
    const { nome } = req.body;
    try {
        const query = `UPDATE departamento SET nome = $1 WHERE id_departamento = $2`;
        const values = [nome, id_departamento];
        
        console.log(query, values);
        await BD.query(query, values);
        
        res.status(200).json({ message: "Departamento atualizado com sucesso!" });
    } catch (error) {
        console.error("Erro ao atualizar departamento:", error.message);
        res.status(500).json({ error: "Erro ao atualizar departamento" });
    }
});

export default router;