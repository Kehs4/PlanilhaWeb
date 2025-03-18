const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors({
    origin: 'http://localhost:5173', // use your actual domain name (or localhost), using * is not recommended
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
    credentials: true
}))

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'planilhaweb',
  port: 5432,
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



