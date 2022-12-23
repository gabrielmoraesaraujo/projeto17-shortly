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

app.get('/status', async (req, res) => {
    const {id} = req.params;

    const result = await connection.query('SELECT * FROM "user" WHERE id=$1',[id]),
    console.log("users"),
    res.send(users.row);

});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Server listening on port ${process.env.PORT}'));