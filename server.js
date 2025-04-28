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
  host: '192.168.200.2',
  database: 'gpi_financ_paula',
  port: 5432,
  password: 'boeing',
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

pool.connect();

module.exports = pool;

async function getData() {
  const client = await pool.connect();
  try {
    const { rows } = await client.query('SELECT * FROM posts');
    return rows;
  } finally {
    client.release();
  }
}

export default async function Page() {
  const data = await getData();
  return (
    <div>
      {data.map((post, index) => (
        <div key={index}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

app.use(express.json());

// Endpoint do tipo GET para obter a lista de clientes ao inciar a página home.jsx.
app.get('/clientes', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM clientes ORDER BY cod_cliente');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao consultar clientes.', error);
    res.status(500).send('Erro 500: Erro no servidor.');
  }
});

//Endpoint do tipo PUT para dar UPDATE nos clientes, pelo código do cliente, clicando no botão de salvar do modal na home.jsx.
app.put('/clientes', async (req, res) => {
  try {
      const { nome_cliente, versao_vertis_cliente, dth_manutencao_realizada, dth_manutencao_futura, licencas_cliente, acesso_cliente_teamviewer, senha_acesso_cliente_teamviewer, acesso_cliente_anydesk, senha_acesso_cliente_anydesk, ip_servidor_cliente, alternativo, usuario_acesso_cliente, senha_acesso_usuario, senha_criptografada, contatos, email_cliente, ddd_telefone, telefone1, telefone2, cod_cliente } = req.body;

      const result = await pool.query(
          'UPDATE clientes SET nome_cliente = $1, versao_vertis_cliente = $2, dth_manutencao_realizada = $3, dth_manutencao_futura = $4, licencas_cliente = $5, acesso_cliente_teamviewer = $6, senha_acesso_cliente_teamviewer = $7, acesso_cliente_anydesk = $8, senha_acesso_cliente_anydesk = $9 , ip_servidor_cliente = $10, alternativo = $11, usuario_acesso_cliente = $12, senha_acesso_usuario = $13, senha_criptografada = $14, contatos = $15, email_cliente = $16, ddd_telefone = $17, telefone1 = $18, telefone2 = $19 WHERE cod_cliente = $20',
          [nome_cliente, versao_vertis_cliente, dth_manutencao_realizada, dth_manutencao_futura, licencas_cliente, acesso_cliente_teamviewer, senha_acesso_cliente_teamviewer, acesso_cliente_anydesk, senha_acesso_cliente_anydesk, ip_servidor_cliente, alternativo, usuario_acesso_cliente, senha_acesso_usuario, senha_criptografada, contatos, email_cliente, ddd_telefone, telefone1, telefone2, cod_cliente]);
      
      res.status(200).send(result.rows[0]);

  } catch (error) {
    return res.status(404).send('Erro 404: Cliente não encontrado.');
  }
});

//Endpoint do tipo POST para inserir os clientes ao clicar no botão incluir pelo modal de cadastro na home.jsx.
app.post('/clientes', async (req, res) => {
  try {
    const { nome_cliente, cod_cliente, versao_vertis_cliente, dth_manutencao_realizada, dth_manutencao_futura, licencas_cliente, acesso_cliente_teamviewer, senha_acesso_cliente_teamviewer, acesso_cliente_anydesk, senha_acesso_cliente_anydesk, ip_servidor_cliente, alternativo, usuario_acesso_cliente, senha_acesso_usuario, senha_criptografada, contatos, email_cliente, ddd_telefone, telefone1, telefone2 } = req.body;

    const result = await pool.query(
      'INSERT INTO clientes (nome_cliente, cod_cliente, versao_vertis_cliente, dth_manutencao_realizada, dth_manutencao_futura, licencas_cliente, acesso_cliente_teamviewer, senha_acesso_cliente_teamviewer, acesso_cliente_anydesk, senha_acesso_cliente_anydesk, ip_servidor_cliente, alternativo, usuario_acesso_cliente, senha_acesso_usuario, senha_criptografada, contatos, email_cliente, ddd_telefone, telefone1, telefone2) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20) RETURNING *',
      [nome_cliente, cod_cliente, versao_vertis_cliente, dth_manutencao_realizada, dth_manutencao_futura, licencas_cliente, acesso_cliente_teamviewer, senha_acesso_cliente_teamviewer, acesso_cliente_anydesk, senha_acesso_cliente_anydesk, ip_servidor_cliente, alternativo, usuario_acesso_cliente, senha_acesso_usuario, senha_criptografada, contatos, email_cliente, ddd_telefone, telefone1, telefone2]
    );

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error('Erro ao inserir cliente.', error);
    res.status(500).send('Erro 500: Erro na inclusão dos dados.');
  }
});

//Endpoint do tipo DELETE para deletar os clientes por código do cliente no modal na home.jsx.
app.delete('/clientes', async (req, res) => {
  try {
    const { cod_cliente } = req.body;
    const result = await pool.query('DELETE FROM clientes WHERE cod_cliente = $1 RETURNING *', [cod_cliente]);

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error('Erro ao excluir cliente.', error);
    res.status(500).send('Erro 500: Erro na exclusão dos dados.');
  }
});


//Endpoint do tipo GET retornando apenas um cliente pelo seu código puxado pelo getParams do React na Clientes.jsx.
app.get('/clientes/id=:cod_cliente', async (req, res) => {
  const { cod_cliente } = req.params;
  const query = 'SELECT * FROM clientes WHERE cod_cliente = $1';

  pool.query(query, [cod_cliente], (err, result) => {
    if (err) {
      res.status(500).send('Erro ao buscar cliente');
    } else {
      res.json(result.rows[0]); // Retorna o primeiro resultado
    }
  });
});


//Endpoint do tipo PUT dando UPDATE em apenas um cliente pelo seu código puxado pelo getParams do React na Clientes.jsx.
app.put('/clientes/id=:cod_cliente', async (req, res) => {
  try {
    const { nome_cliente, cod_unid_neg, cod_unid_oper, versao_vertis_cliente, data_atualizado, sql_cliente, cod_cliente, tipo_unidade, observacao, ind_auditoria, acesso_cliente_teamviewer, senha_acesso_cliente_teamviewer, acesso_cliente_anydesk, senha_acesso_cliente_anydesk, usuario_acesso_cliente, senha_acesso_usuario, alternativo, ip_servidor_cliente, senha_criptografada, porta_bd, so_server, postgres_versao, contatos, email_cliente, ddd_telefone, telefone1, telefone2, licencas_cliente, dth_manutencao_realizada, dth_manutencao_futura, ind_script, manutencao_backup, antivirus_cliente, ind_banco_boleto, cliente_municipio, ind_sat, ind_lol, ind_loe, ind_gerador_pdf, ind_faturamento_email, ind_portal_novo, ind_contigencia, ind_solic_exam_portal, ibt_calculo_correto, ind_emite_nfs_api, ind_publ_s3, ind_itf_m, manutencao_armazenamento, conta_nuvem_backup, senha_conta_nuvem, tipo_backup_nuvem, pin_google_desktop, tamanho_backup, horario_backups, horario_vacuum, horarios_reindex, senha_smartvertis, ind_qrcode } = req.body;

    const result = await pool.query(
        'UPDATE clientes SET nome_cliente = $1, cod_unid_neg = $2, cod_unid_oper = $3, versao_vertis_cliente = $4, data_atualizado = $5, sql_cliente = $6, cod_cliente = $7, tipo_unidade = $8, observacao = $9, ind_auditoria = $10, acesso_cliente_teamviewer = $11, senha_acesso_cliente_teamviewer = $12, acesso_cliente_anydesk = $13, senha_acesso_cliente_anydesk = $14, usuario_acesso_cliente = $15, senha_acesso_usuario = $16, alternativo = $17, ip_servidor_cliente = $18, senha_criptografada = $19, porta_bd = $20, so_server = $21, postgres_versao = $22, contatos = $23, email_cliente = $24, ddd_telefone = $25, telefone1 = $26, telefone2 = $27, licencas_cliente = $28, dth_manutencao_realizada = $29, dth_manutencao_futura = $30, ind_script = $31, manutencao_backup = $32, antivirus_cliente = $33, ind_banco_boleto = $34, cliente_municipio = $35, ind_sat = $36, ind_lol = $37, ind_loe = $38, ind_gerador_pdf = $39, ind_faturamento_email = $40, ind_portal_novo = $41, ind_contigencia = $42, ind_solic_exam_portal = $43, ibt_calculo_correto = $44, ind_emite_nfs_api = $45, ind_publ_s3 = $46, ind_itf_m = $47, manutencao_armazenamento = $48, conta_nuvem_backup = $49, senha_conta_nuvem = $50, tipo_backup_nuvem = $51, pin_google_desktop = $52, tamanho_backup = $53, horario_backups = $54, horario_vacuum = $55, horarios_reindex = $56, senha_smartvertis = $57, ind_qrcode = $58 WHERE cod_cliente = $7',
        [nome_cliente, cod_unid_neg, cod_unid_oper, versao_vertis_cliente, data_atualizado, sql_cliente, cod_cliente, tipo_unidade, observacao, ind_auditoria, acesso_cliente_teamviewer, senha_acesso_cliente_teamviewer, acesso_cliente_anydesk, senha_acesso_cliente_anydesk, usuario_acesso_cliente, senha_acesso_usuario, alternativo, ip_servidor_cliente, senha_criptografada, porta_bd, so_server, postgres_versao, contatos, email_cliente, ddd_telefone, telefone1, telefone2, licencas_cliente, dth_manutencao_realizada, dth_manutencao_futura, ind_script, manutencao_backup, antivirus_cliente, ind_banco_boleto, cliente_municipio, ind_sat, ind_lol, ind_loe, ind_gerador_pdf, ind_faturamento_email, ind_portal_novo, ind_contigencia, ind_solic_exam_portal, ibt_calculo_correto, ind_emite_nfs_api, ind_publ_s3, ind_itf_m, manutencao_armazenamento, conta_nuvem_backup, senha_conta_nuvem, tipo_backup_nuvem, pin_google_desktop, tamanho_backup, horario_backups, horario_vacuum, horarios_reindex, senha_smartvertis, ind_qrcode]);
    
    res.status(200).send(result.rows[0]);

} catch (error) {
  return res.status(404).send('Erro 404: Cliente não encontrado.');
}
});

//Endpoint do tipo DELETE para deletar os clientes por código do cliente no modal na Clientes.jsx.
app.delete('/clientes/id=:cod_cliente', async (req, res) => {
  try {
    const { cod_cliente } = req.body;
    const result = await pool.query('DELETE FROM clientes WHERE cod_cliente = $1 RETURNING *', [cod_cliente]);

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error('Erro ao excluir cliente.', error);
    res.status(500).send('Erro 500: Erro na exclusão dos dados.');
  }
});


  app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
