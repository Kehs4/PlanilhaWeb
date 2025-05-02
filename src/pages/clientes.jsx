import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './clientes.css'
import MenuVertis from '../menuvertis.js'
import { Link } from 'react-router-dom'
import saveDataClients from '../api/saveDataClients.js';
import deleteDataClients from '../api/deleteDataClients.js';
import validarCamposInvalidos from '../api/validarInputsFetch.js';
import ChangeInputs from '../api/inputUpdateClients.js';
import { error } from 'jquery';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Clientes() {
  const query = useQuery();
  const cod_cliente = query.get('id'); // <- aqui você pega o id corretamente

  useEffect(() => {
    
    const ExemploForm = () => {
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const erros = validarCamposInvalidos();
        if (erros.length > 0) {
          alert('Corrija os campos destacados antes de enviar.');
          return;
        }}}

    const fetchData = async () => {
      if (cod_cliente) {
        try {
          const proxy = 'https://cors-anywhere.herokuapp.com/';
          const url = 'http://177.11.209.38/vertis/VertisConnect.dll/api/V1.1/vertis/clientesfat';
          const fullUrl = proxy + url;
          const response = await fetch(fullUrl + `/id=${cod_cliente}`);
          //const response = await fetch(`http://localhost:3000/clientes/id=${cod_cliente}`);
          const data = await response.json();

          const clientModal = document.getElementById('client-modal');
          clientModal.innerHTML = data.nome_cliente;

          // Retornando todos os inputs das informações dos Dados dos Clientes.
          const getNomeCliente = document.getElementById('client-name');
          const getCodUnid = document.getElementById('client-cod-unid')
          const getCodUnidOper = document.getElementById('client-cod-unid-oper');
          const getVersCliente = document.getElementById('client-version');
          const getUpdateCliente = document.getElementById('client-update')
          const getVersionSQL = document.getElementById('client-update-sql')
          const getCodCliente = document.getElementById('client-code');
          const getTipCliente = document.getElementById('client-type');
          const getObsCliente = document.getElementById('client-observation');
          const getAuditCliente = document.getElementById('client-audit')

          // Declarando as informações dentro dos inputs dos Dados dos Clientes.
          getNomeCliente.value = data.nome_cliente || null;
          getCodUnid.value = data.cod_unid_neg || null;
          getCodUnidOper.value = data.cod_unid_oper || null;
          getVersCliente.value = data.versao_vertis_cliente || null;
          getUpdateCliente.value = data.data_atualizado || null;
          getVersionSQL.value = data.sql_cliente || null;
          getCodCliente.value = data.cod_cliente || null;
          getTipCliente.value = data.tipo_unidade || null;
          getObsCliente.value = data.observacao || null;
          getAuditCliente.value = data.ind_auditoria || null;

          // Retornando todos os inputs das informações dos Dados de Acesso dos Clientes.
          const getAcessoTVCliente = document.getElementById('client-teamviewer');
          const getAcessoPWTVCliente = document.getElementById('client-teamviewer-password');
          const getAcessoADCliente = document.getElementById('client-anydesk');
          const getAcessoPWADCliente = document.getElementById('client-anydesk-password');
          const getUserServer = document.getElementById('client-user');
          const getUserPasswordServer = document.getElementById('client-user-password');
          const getAlternativeAccess = document.getElementById('client-alternative-info');
          const getIPServidorCliente = document.getElementById('client-ip-server');
          const getPasswordCriptog = document.getElementById('client-bd-password');
          const getPortBD = document.getElementById('client-bd-port');
          const getSOServer = document.getElementById('client-so-server');
          const getPostgreSQLVersion = document.getElementById('client-postgres');

          // Declarando as informações dentro dos inputs dos Dados de Acesso dos Clientes.
          getAcessoTVCliente.value = data.acesso_cliente_teamviewer || null;
          getAcessoPWTVCliente.value = data.senha_acesso_cliente_teamviewer || null;
          getAcessoADCliente.value = data.acesso_cliente_anydesk || null;
          getAcessoPWADCliente.value = data.senha_acesso_cliente_anydesk || null;
          getUserServer.value = data.usuario_acesso_cliente || null;
          getUserPasswordServer.value = data.senha_acesso_usuario || null;
          getAlternativeAccess.value = data.alternativo || null;
          getIPServidorCliente.value = data.ip_servidor_cliente || null;
          getPasswordCriptog.value = data.senha_criptografada || null;
          getPortBD.value = data.porta_bd || null;
          getSOServer.value = data.so_server || null;
          getPostgreSQLVersion.value = data.postgres_versao || null;

          // Retornando todos os inputs das informações dos Dados dos Contatos dos Clientes.
          const getRespCliente = document.getElementById('client-manager');
          const getEmailCliente = document.getElementById('client-email');
          const getDDDCliente = document.getElementById('client-ddd');
          const getContact1Cliente = document.getElementById('client-contact-1');
          const getContact2Cliente = document.getElementById('client-contact-2');

          // Declarando as informações dentro dos inputs dos Dados dos Contatos dos Clientes.
          getRespCliente.value = data.contatos || null;
          getEmailCliente.value = data.email_cliente || null;
          getDDDCliente.value = data.ddd_telefone || null;
          getContact1Cliente.value = data.telefone1 || null;
          getContact2Cliente.value = data.telefone2 || null;

          // Retornando todos os inputs das informações das Manutenções dos Clientes.
          const getLicCliente = document.getElementById('client-licences');
          const getMainCliente = document.getElementById('client-maintenance');
          const getMainFCliente = document.getElementById('client-maintenance-future');
          const getAvisaMan = document.getElementById('client-maintenance-alert');
          const getArmazenamento = document.getElementById('client-maintenance-data');
          const getAntivirus = document.getElementById('client-maintenance-antivirus');

          // Declarando as informações dentro dos inputs das Manutenções dos Clientes.
          getLicCliente.value = data.licencas_cliente || null;
          getMainCliente.value = data.dth_manutencao_realizada || null;
          getMainFCliente.value = data.dth_manutencao_futura || null;
          getAvisaMan.value = data.ind_script || null;
          getArmazenamento.value = data.manutencao_backup || null;
          getAntivirus.value = data.antivirus_cliente || null;

          // Retornando todos os inputs das informações Financeiras dos Clientes.
          const getBoletoCliente = document.getElementById('client-boleto');
          const getMunicipioCliente = document.getElementById('client-municipio');
          const getSATCliente = document.getElementById('client-sat');
          const getClientLOL = document.getElementById('client-lol');
          const getClientLOE = document.getElementById('client-loe');
          const getGeradorPDF = document.getElementById('client-generator-pdf');
          const getFatEmail = document.getElementById('client-fat-email');
          const getPortalNovo = document.getElementById('client-portal-new');
          const getContigencia = document.getElementById('client-contigencia');
          const getExamLdoOnline = document.getElementById('client-exames-ldonline');
          const getIBPTCliente = document.getElementById('client-ibpt');
          const getNFAPI = document.getElementById('client-nf-api');
          const getPublS3 = document.getElementById('client-publ-s3');
          const getITFM = document.getElementById('client-itf-m');

          // Declarando as informações dentro dos inputs das informações Financeiras dos Clientes.
          getBoletoCliente.value = data.ind_banco_boleto || null;
          getMunicipioCliente.value = data.cliente_municipio || null;
          getSATCliente.value = data.ind_sat || null;
          getClientLOL.value = data.ind_lol || null;
          getClientLOE.value = data.ind_loe || null;
          getGeradorPDF.value = data.ind_gerador_pdf || null;
          getFatEmail.value = data.ind_faturamento_email || null;
          getPortalNovo.value = data.ind_portal_novo || null;
          getContigencia.value = data.ind_contigencia || null;
          getExamLdoOnline.value = data.ind_solic_exam_portal || null;
          getIBPTCliente.value = data.ibt_calculo_correto || null;
          getNFAPI.value = data.ind_emite_nfs_api || null;
          getPublS3.value = data.ind_publ_s3 || null;
          getITFM.value = data.ind_itf_m || null;

          // Retornando todos os inputs dos informações de Backup dos Clientes.
          const getCaminhoBackup = document.getElementById('client-path-backup');
          const getEmailBackup = document.getElementById('client-email-backup');
          const getPasswordBackup = document.getElementById('client-password-backup');
          const getTypeBackup = document.getElementById('client-type-backup');
          const getPINGoogle = document.getElementById('client-pin-google');
          const getSizeBackup = document.getElementById('client-size-backup');
          const getTimeBackup = document.getElementById('client-time-backup');
          const getTimeVaccum = document.getElementById('client-time-vaccum');
          const getTimeReindex = document.getElementById('client-time-reindex');
          const getSenhaSmartVertis = document.getElementById('client-pw-smartvertis')
          const getQRCode = document.getElementById('client-qrcode');

          // Declarando as informações dentro dos inputs das informações de Backup dos Clientes.
          getCaminhoBackup.value = data.manutencao_armazenamento || null;
          getEmailBackup.value = data.conta_nuvem_backup || null;
          getPasswordBackup.value = data.senha_conta_nuvem || null;
          getTypeBackup.value = data.tipo_backup_nuvem || null;
          getPINGoogle.value = data.pin_google_desktop || null;
          getSizeBackup.value = data.tamanho_backup || null;
          getTimeBackup.value = data.horario_backups || null;
          getTimeVaccum.value = data.horario_vacuum || null;
          getTimeReindex.value = data.horarios_reindex || null;
          getSenhaSmartVertis.value = data.senha_smartvertis || null;
          getQRCode.value = data.ind_qrcode || null;

          const data1 = await ChangeInputs()

        } catch (error) {
          const showAlert = document.getElementById('alert-modal-box')
          const alertTitle = document.getElementById('alert-title')
          const alertParagraph = document.getElementById('alert-textp')
          const alertStatus = document.getElementById('alert-status')
          const alertClose = document.getElementById('btn-confirm-alert')
          showAlert.style.display = 'flex';
            alertTitle.innerHTML = 'Viishh...'
            alertStatus.style.color = 'red'
            alertStatus.innerHTML = ('<font color="gray">Status</font> <br>' + error);
            alertParagraph.innerHTML = ('Não conseguimos carregar os dados do cliente para você :( <br>');
            alertClose.addEventListener('click', function () {
                showAlert.style.display = 'none';
          })
        }
      } else {
        console.error(error);
      }
    };
    fetchData();
  }, [cod_cliente]);

  

  return (
    <>
      <header>
        <nav>
          <div className="nav-title">
            <img src="/public/menu.svg" className='menu-img' id='menu-vertis-img' alt="Menu Vertis" width={40} height={40} onClick={MenuVertis} />
            <Link to='/gpi' target='blank'><img src="./vertisheader.png" width={105} height={35}></img></Link>
            <h1 className="gpi-title">GPI - Planilha de Clientes</h1>
          </div>
        </nav>
      </header>

      <div className='menu-vertis-box' id='menu-vertis-box'>
        <div className='menu-vertis-content'>
          <Link to='/gpi' target="_self"><p className='menu-items'>Clientes GPI</p></Link>
        </div>
      </div>

      <h1 id='client-modal'></h1>
      <div className="search-clients-info">
        <fieldset className='client-data-info'>
          <legend>Dados do Cliente</legend>
          
          <div className='responsive-div'> 
          <div>
            <label htmlFor="client-name">Nome do Cliente <font color="red">*</font></label>
            <input type="text" className='btns' id="client-name" placeholder="Nome do Cliente" required disabled></input>

            <label htmlFor="client-cod-unid">Código Unidade de Negócio<font color="red">*</font></label>
            <input type="number" className='btns' id="client-cod-unid" placeholder="Código da Unidade de Negócio" required disabled></input>

            <label htmlFor="client-cod-unid-oper">Código Unid. Operacional <font color="red">*</font></label>
            <input type="number" className='btns' id="client-cod-unid-oper" placeholder="Código da Unid. Operacional" required disabled></input>
          </div>
          
          <div>
            <label htmlFor="client-version">Versão do Vertis</label>
            <input type="text" className='btns' id="client-version" placeholder="Versão do Vertis" disabled></input>

            <label htmlFor="client-update">Atualização do Vertis</label>
            <input type="text" className='btns' id="client-update" placeholder="Data da Atualização do Sistema" disabled></input>

            <label htmlFor="client-update-sql">Script SQL</label>
            <input type="text" className='btns' id="client-update-sql" placeholder="SQL's Scripts rodados" disabled></input>
          </div>
          </div>

          <div className='responsive-div'>
          <div>
            <label htmlFor="client-code">Cód. Planilha GPI</label>
            <input type="number" className='btns' id="client-code" placeholder="Código do Cliente" disabled></input>

            <label htmlFor="client-type">Tipo da Unidade</label>
            <input type="text" className='btns' id="client-type" placeholder="Tipo da Unidade do Cliente" disabled></input>

            <label htmlFor="client-observation">Observação</label>
            <input type="text" className='btns' id="client-observation" placeholder="Observações Gerais do Cliente" disabled></input>
          </div>

          <div>
            <label htmlFor="client-audit"> Auditoria Table BD</label>
            <input type="text" className='btns' id="client-audit" placeholder="Tabela com Auditoria do Cliente" disabled></input>
          </div>
          </div>
        </fieldset>

        <fieldset className='client-access-info'>
          <legend>Dados de Acesso</legend>

          <div className='responsive-div'>
          <div>
            <label htmlFor="client-teamviewer">TeamViewer</label>
            <input type="text" className='btns' id="client-teamviewer" placeholder="TeamViewer do cliente" disabled></input>

            <label htmlFor="client-teamviewer-password">Senha TeamViewer</label>
            <input type="text" className='btns' id="client-teamviewer-password" placeholder="Senha do TeamViewer" disabled></input>
          </div>

          <div>
            <label htmlFor="client-anydesk">AnyDesk</label>
            <input type="text" className='btns' id="client-anydesk" placeholder="AnyDesk do cliente" disabled></input>

            <label htmlFor="client-anydesk-password">Senha AnyDesk</label>
            <input type="text" className='btns' id="client-anydesk-password" placeholder="Senha do AnyDesk" disabled></input>
          </div>
          </div>

          <div className='responsive-div'>
          <div>
            <label htmlFor="client-user">Usuário do Servidor</label>
            <input type="text" className='btns' id="client-user" placeholder="Senha do AnyDesk" disabled></input>

            <label htmlFor="client-user-password">Senha do Usuário</label>
            <input type="text" className='btns' id="client-user-password" placeholder="Senha do AnyDesk" disabled></input>
          </div>

          <div>
            <label htmlFor="client-alternative-info">Acesso Alternativo Servidor</label>
            <input type="text" className='btns' id="client-alternative-info" placeholder="Acessos Alternativos do Servidor" disabled></input>

            <label htmlFor="client-licences">IP Servidor do Cliente</label>
            <input type="text" className='btns' id="client-ip-server" placeholder="IP" disabled></input>
          </div>
          </div>

          <div className='responsive-div'>
          <div>
            <label htmlFor="client-bd-password">Senha Criptografada BD</label>
            <input type="text" className='btns' id="client-bd-password" placeholder="Senha Criptografada BD" disabled></input>

            <label htmlFor="client-bd-port">Porta do Banco de Dados</label>
            <input type="text" className='btns' id="client-bd-port" placeholder="Porta do Banco de Dados" disabled></input>
          </div>

          <div>
            <label htmlFor="client-so-server">Sistema Operacional do Servidor</label>
            <input type="text" className='btns' id="client-so-server" placeholder="Sistema Operacional do Servidor" disabled></input>

            <label htmlFor="client-postgres">Versão do PostgreSQL</label>
            <input type="text" className='btns' id="client-postgres" placeholder="Versão do PostgreSQL" disabled></input>
          </div>
          </div>
        </fieldset>

        
        <div className='div-client-contacts-maintenance'>
          <fieldset className='client-contacts-info'>
            <legend>Contatos</legend>
            <div className='responsive-div'>
            <div>
              <label htmlFor="client-manager">Responsável Unidade</label>
              <input type="text" className='btns' id="client-manager" placeholder='Responsável pela unid.' disabled></input>

              <label htmlFor="client-email">E-mail</label>
              <input type="text" className='btns' id="client-email" placeholder='E-mail do Cliente' disabled></input>
            </div>

            <div>
              <label htmlFor="client-ddd">DDD</label>
              <input type="text" className='btns' id="client-ddd" placeholder='DDD do Cliente' disabled></input>
            </div>

            <div>
              <label htmlFor="client-contact-1">Telefone 1</label>
              <input type="text" className='btns' id="client-contact-1" placeholder='Telefone 1' disabled></input>

              <label htmlFor="client-contact-2">Telefone 2</label>
              <input type="text" className='btns' id="client-contact-2" placeholder='Telefone 2' disabled></input>
            </div>
            </div>
          </fieldset>

          <fieldset className='client-manteinance-info'>
            <legend>Manutenção</legend>
            <div className='responsive-div'>
            <div>
              <label htmlFor="client-licences">Licenças da Unidade</label>
              <input type="text" className='btns' id="client-licences" placeholder="Total de Licenças" disabled></input>

              <label htmlFor="client-maintenance">Manutenção Realizada</label>
              <input type="text" className='btns' id="client-maintenance" placeholder="Manutenção do Vertis" disabled></input>

              <label htmlFor="client-maintenance-future">Manutenção Futura</label>
              <input type="text" className='btns' id="client-maintenance-future" placeholder="Próxima Manutenção" disabled></input>
            </div>

            <div>
              <label htmlFor="client-maintenance-alert">Solicita acesso?</label>
              <input type="text" className='btns' id="client-maintenance-alert" placeholder="Aviso do Cliente para Acesso" disabled></input>

              <label htmlFor="client-maintenance-data">Armazenamento do Cliente</label>
              <input type="text" className='btns' id="client-maintenance-data" placeholder="Espaço de Armazenamento do Cliente" disabled></input>

              <label htmlFor="client-maintenance-antivirus">Antivírus do Cliente</label>
              <input type="text" className='btns' id="client-maintenance-antivirus" placeholder="Antivírus do Cliente" disabled></input>
            </div>
            </div>
          </fieldset>
        </div>

        <fieldset className='client-finance-info'>
          <legend>Financeiro</legend>

          <div className='responsive-div'>
          <div>
            <label htmlFor="client-boletos">Boleto</label>
            <input type="text" className='btns' id="client-boleto" placeholder="Banco do Boleto do Cliente" disabled></input>

            <label htmlFor="client-municipio">Município do Cliente</label>
            <input type="text" className='btns' id="client-municipio" placeholder="Município da NF Cliente" disabled></input>

            <label htmlFor="client-sat">SAT</label>
            <input type="text" className='btns' id="client-sat" placeholder="SAT Utilizado pelo Cliente" disabled></input>
          </div>

          <div>
            <label htmlFor="client-lol">LOL</label>
            <input type="number" className='btns' id="client-lol" placeholder="LOL Cliente" disabled></input>

            <label htmlFor="client-loe">LOE</label>
            <input type="number" className='btns' id="client-loe" placeholder="LOE Cliente" disabled></input>

            <label htmlFor="client-generator-pdf">Gerador PDF</label>
            <input type="text" className='btns' id="client-generator-pdf" placeholder="Gerador PDF do Cliente" disabled></input>
          </div>

          <div>
            <label htmlFor="client-fat-email">Faturamento Email</label>
            <input type="text" className='btns' id="client-fat-email" placeholder="Faturamento Email?" disabled></input>
          </div>
          </div>

          <div className='responsive-div'>
          <div>
            <div className='selects-option'>
              <label htmlFor="client-portal-new" className='label-select'>Portal Novo?</label>
              <select className='btns' name="Portal Cliente" id="client-portal-new" disabled>
                <option value=""></option>
                <option value="S">Sim</option>
                <option value="N">Não</option>
              </select>

              <label htmlFor="client-contigencia" className='label-select'>Contigência?</label>
              <select className='btns' name="Contigencia" id="client-contigencia" disabled>
                <option value=""></option>
                <option value="S">Sim</option>
                <option value="N">Não</option>
              </select>

              <label htmlFor="client-exames-ldonline">Solicita Exame Portal?</label>
              <select className='btns' name="Exames Laudos Online" id="client-exames-ldonline" disabled>
                <option value=""></option>
                <option value="S">Sim</option>
                <option value="N">Não</option>
              </select>
            </div>
          </div>

          <div>
            <div className='selects-option'>

              <label htmlFor="client-ibpt">IBPT Cálculo Correto?</label>
              <select className='btns' name="IBPT Calculo Correto" id="client-ibpt" disabled>
                <option value=""></option>
                <option value="X">Sim</option>
                <option value="N">Não</option>
              </select>

              <label htmlFor="client-nf-api">Emite NF via API?</label>
              <select className='btns' name="Emite NF via API" id="client-nf-api" disabled>
                <option value=""></option>
                <option value="X">Sim</option>
                <option value="N">Não</option>
              </select>

              <label htmlFor="client-publ-s3">Publica S3?</label>
              <select className='btns' name="Publica S3" id="client-publ-s3" disabled>
                <option value=""></option>
                <option value="X">Sim</option>
                <option value="N">Não</option>
              </select>
            </div>
          </div>

          <div className='selects-option'>
            <label htmlFor="client-itf-m">ITF M?</label>
            <select className='btns' name="ITF M" id="client-itf-m" disabled>
              <option value=""></option>
              <option value="S">Sim</option>
              <option value="N">Não</option>
            </select>
          </div>
          </div>
        </fieldset>

        <fieldset className='client-backups-info'>
          <legend>Backups</legend>
          <div className='responsive-div'>
          <div>
            <label htmlFor="client-path-backup">Diretório/Caminho Backup</label>
            <input type="text" className='btns' id="client-path-backup" placeholder="Caminho do /Backup Servidor" disabled></input>

            <label htmlFor="client-email-backup">Email Conta de Backup</label>
            <input type="email" className='btns' id="client-email-backup" placeholder="E-mail da Conta de Backup" disabled></input>

            <label htmlFor="client-password-backup">Senha Conta de Backup </label>
            <input type="text" className='btns' id="client-password-backup" placeholder="Senha da Conta de Backup" disabled></input>
          </div>

          <div>
            <label htmlFor="client-type-backup">Tipo de Backup Nuvem</label>
            <input type="text" className='btns' id="client-type-backup" placeholder="Tipo do Backup da Nuvem" disabled></input>

            <label htmlFor="client-pin-google">PIN do Google Desktop</label>
            <input type="text" className='btns' id="client-pin-google" placeholder="PIN do Google Desktop" disabled></input>

            <label htmlFor="client-size-backup">Tamanho do Backup</label>
            <input type="text" className='btns' id="client-size-backup" placeholder="Tamanho do Backup da Conta Nuvem" disabled></input>
          </div>
          </div>

          <div className='responsive-div'>
          <div>
            <label htmlFor="client-time-backup">Horário dos Backups</label>
            <input type="text" className='btns' id="client-time-backup" placeholder="Horários dos Backups do Cliente" disabled></input>

            <label htmlFor="client-time-vaccum">Horários do Vaccum BD</label>
            <input type="text" className='btns' id="client-time-vaccum" placeholder="Horários do Vaccum do Cliente" disabled></input>

            <label htmlFor="client-time-reindex">Horários ReIndex</label>
            <input type="text" className='btns' id="client-time-reindex" placeholder="Horários do ReIndex do Cliente" disabled></input>
          </div>

          <div>
            <label htmlFor="client-pw-smartvertis">Senha do Smart Vertis</label>
            <input type="text" className='btns' id="client-pw-smartvertis" placeholder="Senha do Smart Vertis do Cliente" disabled></input>
          </div>
          

          <div className='selects-option'>
            <label htmlFor="client-qrcode">QR Code</label>
            <select className='btns' name="QR Code" id="client-qrcode" disabled>
              <option value=""></option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </select>
          </div>
          </div>
        </fieldset>

      </div>
      <div className="search-clients-buttons-info">
        <button className="btn-update-clients" id='btn-update-clients' type="button">Alterar</button>
        <button className="btn-save-clients" id='btn-save-clients' type="button" onClick={saveDataClients}>Salvar</button>
        <div className='btn-delete-box-clients'>
          <button className="btn-delete-clients" id='btn-delete-clients' type="button" onClick={deleteDataClients}>
            <div className='btn-delete-content'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
              </svg>
            </div>
            <p>Excluir</p>
          </button>
        </div>
      </div>

      <div className='alert-modal-box' id='alert-modal-box'>
        <div className='alert-modal' id='alert-modal'>
          <h1 id='alert-title'></h1>
          <p id='alert-textp'></p>
          <p id='alert-status'></p>
          <div className='btn-alert-modal'>
            <button className='btn-yes' id='btn-yes' type='button'>Sim</button>
            <button className='btn-no' id='btn-no' type='button'>Não</button>
            <button className='btn-confirm' id='btn-confirm-alert'>OK</button>
          </div>
        </div>
      </div>

      <footer className='footer-vertis'>
        <div className='div-all-footer'>
          <div className='footer-logo'>
            <a href="https://vertisvet.com.br" target='_blank'><img src='./public/vertislogo.png' width={150} height={100}></img></a>
            <p>© 2025 por Vertis.</p>
          </div>

          <div className='footer-links'>
            <h1>CONHEÇA-NOS</h1>
            <a href='https://www.vertisvet.com.br/quemsomos' target='_blank'><p>QUEM SOMOS</p></a>
            <a href='https://www.vertisvet.com.br/lgpd' target='_blank'><p>POLÍTICA DE PRIVACIDADE</p></a>
            <a href='https://www.vertisvet.com.br/api' target='_blank'><p>DOCUMENTAÇÃO API</p></a>
          </div>

          <div className='footer-infos'>
            <div className='time-svg'>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
              </svg>
              <p>De segunda a sexta-feira das 09h às 18h</p>
            </div>

            <div className='mail-svg'>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
              </svg>
              <a href="mailto:contato@gpiti.com.br" className='a-contact'><p>contato@gpiti.com.br</p></a>
            </div>

            <div className='telefone-svg'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-telephone-inbound" viewBox="0 0 16 16">
                <path d="M15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0m-12.2 1.182a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
              </svg>
              <p>(11) 3564-7839 | (11) 3564-7840</p>
            </div>

            <div className='whatsapp-svg'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
              <a href="https://wa.me/5511964410631" className='a-whatsapp' target='_blank'><p>(11) 96441-0631</p></a>
            </div>

            <div className='instagram-logo'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
              <a href='https://instagram.com/sistemavertis' className='a-instagram' target='_blank'><p>@sistemavertis</p></a>
            </div>

          </div>

        </div>
        <div className='footer-local'>
          <p>Av. Engenheiro Armando de Arruda Pereira, 2937 - Bloco A - Sala 115.</p>
          <p>Jabaquara - São Paulo - SP, CEP: 04309-011.</p>
        </div>

      </footer>
    </>
  )
}

export default Clientes;