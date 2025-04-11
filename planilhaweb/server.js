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
    const result = await pool.query('SELECT * FROM clientes ORDER BY cod_cliente');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao consultar clientes', error);
    res.status(500).send('Erro no servidor');
  }
});

app.put('/clientes', async (req, res) => {
  try {
      const { nome_cliente, versao_vertis_cliente, dth_manutencao_realizada, dth_manutencao_futura, licencas_cliente, acesso_cliente_teamviewer, senha_acesso_cliente_teamviewer, acesso_cliente_anydesk, senha_acesso_cliente_anydesk, ip_servidor_cliente, contatos, email_cliente, ddd_telefone, telefone1, telefone2, cod_cliente } = req.body;

      const result = await pool.query(
          'UPDATE clientes SET nome_cliente = $1, versao_vertis_cliente = $2, dth_manutencao_realizada = $3, dth_manutencao_futura = $4, licencas_cliente = $5, acesso_cliente_teamviewer = $6, senha_acesso_cliente_teamviewer = $7, acesso_cliente_anydesk = $8, senha_acesso_cliente_anydesk = $9 ,ip_servidor_cliente = $10, contatos = $11, email_cliente = $12, ddd_telefone = $13, telefone1 = $14, telefone2 = $15  WHERE cod_cliente = $16',
          [nome_cliente, versao_vertis_cliente, dth_manutencao_realizada, dth_manutencao_futura, licencas_cliente, acesso_cliente_teamviewer, senha_acesso_cliente_teamviewer, acesso_cliente_anydesk, senha_acesso_cliente_anydesk, ip_servidor_cliente, contatos, email_cliente, ddd_telefone, telefone1, telefone2, cod_cliente]
      );
      
      res.status(200).send(result.rows[0]);

  } catch (error) {
    return res.status(404).send('Erro 404: Cliente não encontrado.');
  }
});

  app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
