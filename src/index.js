import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import pkg, { Pool } from "pg"; // Biblioteca que permite a conexão com o banco 

const {pool} = pkg; //função que eu quero da biblioteca pkg

const connection = new Pool({
    host: 'localhost',
    port: '5432',
    user: 'postgres',
    password: 'root',
    database: 'NOME DO BANCO'
}); // Fimando a conexão com o banco

const app = express();

app.get('/NOME DA ROTA', async (req, res) => {
    const {id} = req.params;

    const NOME DA VARIAVEL QUE CARREGA A ROTA = await connection.query('SELECT * FROM NOME DA TABELA A SER CONSULTADA WHERE id=$1',[id]),
    console.log(NOME DA TABELA A SER CONSULTADA),
    res.send(NOME DA TABELA A SER CONSULTADA)

});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Server listening on port ${port}'));