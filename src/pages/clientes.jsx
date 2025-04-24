import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './clientes.css'
import saveData from '../api/saveData.js'
import deleteData from '../api/deleteData.js'
import MenuVertis from '../menuvertis.js'
import { Link } from 'react-router-dom'

 function useQuery() {
  return new URLSearchParams(useLocation().search);
}

 function Clientes(){
  const query = useQuery();
  const cod_cliente = query.get('id'); // <- aqui você pega o id corretamente

  useEffect(() => {
    const fetchData = async () => {
      if (cod_cliente) {
        try {
          const response = await fetch(`http://localhost:3000/clientes/id=${cod_cliente}`);
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

        } catch (error) {
          console.error(error);
        }
      } else {
        console.error('Client ID is missing');
      }
    };
    fetchData();
  }, [cod_cliente]);

  

    return (
    <>
        <header>
          <nav>
              <div className="nav-title">
                <img src="/public/menu.svg" className='menu-img' id='menu-vertis-img' alt="Menu Vertis" width={40} height={40} onClick={MenuVertis}/>
                <Link to='/gpi' target='blank'><img src="./vertisheader.png" width={105} height={35}></img></Link>
                  <h1 className="gpi-title">GPI - Planilha de Clientes</h1>
              </div>
          </nav>
        </header>

      <div className='menu-vertis-box' id='menu-vertis-box'>
        <div className='menu-vertis-content'>
          <Link to='/gpi' target='blank'><p className='menu-items'>Clientes GPI</p></Link>
        </div>
      </div>
          
        <h1 id='client-modal'></h1>
        <div className="search-clients-info">
                <fieldset className='client-data-info'>
                <legend>Dados do Cliente</legend>
                
                    <div>
                      <label htmlFor="client-name">Nome do Cliente <font color="red">*</font></label>
                      <input type="text" className='btns' id="client-name" placeholder="Nome do Cliente"></input>
                    
                      <label htmlFor="client-cod-unid">Código Unidade de Negócio<font color="red">*</font></label>
                      <input type="number" className='btns' id="client-cod-unid" placeholder="Código da Unidade de Negócio"></input> 
                    
                      <label htmlFor="client-cod-unid-oper">Código Unid. Operacional <font color="red">*</font></label>
                      <input type="number" className='btns' id="client-cod-unid-oper" placeholder="Código da Unid. Operacional"></input> 
                    </div>
                      
                    <div>
                      <label htmlFor="client-version">Versão do Vertis</label>
                      <input type="text" className='btns' id="client-version" placeholder="Versão do Vertis"></input>
                    
                      <label htmlFor="client-update">Atualização do Vertis</label>
                      <input type="text" className='btns' id="client-update" placeholder="Data da Atualização do Sistema"></input>
                    
                      <label htmlFor="client-update-sql">Script SQL</label>
                      <input type="text" className='btns' id="client-update-sql" placeholder="SQL's Scripts rodados"></input>
                    </div>
                      
                    <div>
                      <label htmlFor="client-code">Cód. Planilha GPI</label>
                      <input type="number" className='btns' id="client-code" placeholder="Código do Cliente" disabled></input>
                    
                      <label htmlFor="client-type">Tipo da Unidade</label>
                      <input type="text" className='btns' id="client-type" placeholder="Tipo da Unidade do Cliente"></input>
                    
                      <label htmlFor="client-observation">Observação</label>
                      <input type="text" className='btns' id="client-observation" placeholder="Observações Gerais do Cliente"></input>
                    </div>
                      
                    <div>
                      <label htmlFor="client-audit"> Auditoria Table BD</label>
                      <input type="text" className='btns' id="client-audit" placeholder="Tabela com Auditoria do Cliente"></input>
                    </div>
                </fieldset>
                    
                <fieldset className='client-access-info'>
                  <legend>Dados de Acesso</legend>
                  
                    <div>
                      <label htmlFor="client-teamviewer">TeamViewer</label>
                      <input type="text" className='btns' id="client-teamviewer" placeholder="TeamViewer do cliente"></input>

                      <label htmlFor="client-teamviewer-password">Senha TeamViewer</label>
                      <input type="text" className='btns' id="client-teamviewer-password" placeholder="Senha do TeamViewer"></input>
                    </div>
                      
                    <div>
                      <label htmlFor="client-anydesk">AnyDesk</label>
                      <input type="text" className='btns' id="client-anydesk" placeholder="AnyDesk do cliente"></input>
                      
                      <label htmlFor="client-anydesk-password">Senha AnyDesk</label>
                      <input type="text" className='btns' id="client-anydesk-password" placeholder="Senha do AnyDesk"></input>
                    </div>

                    <div>
                      <label htmlFor="client-user">Usuário do Servidor</label>
                      <input type="text" className='btns' id="client-user" placeholder="Senha do AnyDesk"></input>
                    
                      <label htmlFor="client-user-password">Senha do Usuário</label>
                      <input type="text" className='btns' id="client-user-password" placeholder="Senha do AnyDesk"></input>
                    </div>
                    
                    <div>
                      <label htmlFor="client-alternative-info">Acesso Alternativo Servidor</label>
                      <input type="text" className='btns' id="client-alternative-info" placeholder="Acessos Alternativos do Servidor"></input>

                      <label htmlFor="client-licences">IP Servidor do Cliente</label>
                      <input type="text" className='btns' id="client-ip-server" placeholder="IP"></input>
                    </div>

                    <div>
                      <label htmlFor="client-bd-password">Senha Criptografada BD</label>
                      <input type="text" className='btns' id="client-bd-password" placeholder="Senha Criptografada BD"></input>
                      
                      <label htmlFor="client-bd-port">Porta do Banco de Dados</label>
                      <input type="text" className='btns' id="client-bd-port" placeholder="Porta do Banco de Dados"></input>
                      </div>
                        
                      <div>
                        <label htmlFor="client-so-server">Sistema Operacional do Servidor</label>
                        <input type="text" className='btns' id="client-so-server" placeholder="Sistema Operacional do Servidor"></input>
                      
                        <label htmlFor="client-postgres">Versão do PostgreSQL</label>
                        <input type="text" className='btns' id="client-postgres" placeholder="Versão do PostgreSQL"></input>
                      </div>
                </fieldset>

            <div className='div-client-contacts-maintenance'>
                <fieldset className='client-contacts-info'>
                  <legend>Contatos</legend>

                    <div>
                      <label htmlFor="client-manager">Responsável Unidade</label>
                      <input type="text" className='btns' id="client-manager" placeholder='Responsável pela unid.'></input>

                      <label htmlFor="client-email">E-mail</label>
                      <input type="text" className='btns' id="client-email" placeholder='E-mail do Cliente'></input>
                    </div> 
                      
                    <div>
                      <label htmlFor="client-ddd">DDD</label>
                      <input type="text" className='btns' id="client-ddd" placeholder='DDD do Cliente'></input>
                    </div> 
                      
                    <div>
                      <label htmlFor="client-contact-1">Telefone 1</label>
                      <input type="text" className='btns' id="client-contact-1" placeholder='Telefone 1'></input>
                    
                      <label htmlFor="client-contact-2">Telefone 2</label>
                      <input type="text" className='btns' id="client-contact-2" placeholder='Telefone 2'></input>
                    </div> 
                </fieldset>

                <fieldset className='client-manteinance-info'>
                  <legend>Manutenção</legend>

                    <div>
                      <label htmlFor="client-licences">Licenças da Unidade</label>
                      <input type="text" className='btns' id="client-licences" placeholder="Total de Licenças"></input>

                      <label htmlFor="client-maintenance">Manutenção Realizada</label>
                      <input type="text" className='btns' id="client-maintenance" placeholder="Manutenção do Vertis"></input>
                      
                      <label htmlFor="client-maintenance-future">Manutenção Futura</label>
                      <input type="text" className='btns' id="client-maintenance-future" placeholder="Próxima Manutenção"></input>
                    </div>
                      
                    <div>
                      <label htmlFor="client-maintenance-alert">Solicita acesso?</label>
                      <input type="text" className='btns' id="client-maintenance-alert" placeholder="Aviso do Cliente para Acesso"></input>

                      <label htmlFor="client-maintenance-data">Armazenamento do Cliente</label>
                      <input type="text" className='btns' id="client-maintenance-data" placeholder="Espaço de Armazenamento do Cliente"></input>
                      
                      <label htmlFor="client-maintenance-antivirus">Antivírus do Cliente</label>
                      <input type="text" className='btns' id="client-maintenance-antivirus" placeholder="Antivírus do Cliente"></input>
                    </div>
                </fieldset>
            </div>

            <fieldset className='client-finance-info'>
                  <legend>Financeiro</legend>

                    <div>
                      <label htmlFor="client-boletos">Licenças da Unidade</label>
                      <input type="text" className='btns' id="client-licences" placeholder="Total de Licenças"></input>

                      <label htmlFor="client-maintenance">Manutenção Realizada</label>
                      <input type="text" className='btns' id="client-maintenance" placeholder="Manutenção do Vertis"></input>
                      
                      <label htmlFor="client-maintenance-future">Manutenção Futura</label>
                      <input type="text" className='btns' id="client-maintenance-future" placeholder="Próxima Manutenção"></input>
                    </div>
                      
                    <div>
                      <label htmlFor="client-maintenance-alert">Solicita acesso?</label>
                      <input type="text" className='btns' id="client-maintenance-alert" placeholder="Aviso do Cliente para Acesso"></input>

                      <label htmlFor="client-maintenance-data">Armazenamento do Cliente</label>
                      <input type="text" className='btns' id="client-maintenance-data" placeholder="Espaço de Armazenamento do Cliente"></input>
                      
                      <label htmlFor="client-maintenance-antivirus">Antivírus do Cliente</label>
                      <input type="text" className='btns' id="client-maintenance-antivirus" placeholder="Antivírus do Cliente"></input>
                    </div>
                </fieldset>

                
        </div>
        <div className="search-clients-buttons-info">
                <button className="btn-update" id='btn-update' type="button">Alterar</button>
                <button className="btn-save" id='btn-save' type="button" onClick={saveData}>Salvar</button>
                <div className='btn-delete-box'>
                    <button className="btn-delete" id='btn-delete' type="button" onClick={deleteData}>
                        <div className='btn-delete-content'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
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

    </>
    )
}

export default Clientes;