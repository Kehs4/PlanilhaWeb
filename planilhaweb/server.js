
const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3000;
const cors = require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration


const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'planilhaweb',
  port: 5432,
  password: 'boeing',
});

pool.connect();

module.exports = pool;

app.use(express.json());

// Endpoint para obter a lista de clientes
app.get('/clientes', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM clientes');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao consultar clientes', error);
    res.status(500).send('Erro no servidor');
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
