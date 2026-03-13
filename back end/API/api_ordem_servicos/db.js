import { Pool } from "pg";

const BD = new Pool({
    user: "postgres",
    password: "Admin",
    host: "localhost",
    port: 5432,
    database: "bd_ordem_servicos",
});
//const BD = new Pool({
 //   user: "postgres",
  //  password: "bancodedadossenai",
  //  host: "db.xtpwpcyrrdoxeuajmvqw.supabase.co",
   // port: 5432,
  //  database: "postgres",
//});

const testarConexao = async () => {
    try {
        await BD.connect();
        console.log("Conectado ao banco de dados com sucesso!");
    } catch (error) {
        console.error("Erro ao conectar ao banco de dados:", error);
    }   
}
export {BD, testarConexao};