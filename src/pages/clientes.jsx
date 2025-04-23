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
  const client = query.get('id') - 1; // <- aqui você pega o id corretamente

  useEffect(() => {
    const fetchData = async () => {
      if (client) {
        try {
          const response = await fetch('http://localhost:3000/clientes?id${client}');
          const data = await response.json();
          
          const clientModal = document.getElementById('client-modal');
          clientModal.innerHTML = data[client].nome_cliente;
        
        // Retornando todos os inputs das informações dos Dados dos Clientes.
        const getNomeCliente = document.getElementById('client-name');
        const getCodCliente = document.getElementById('client-code');
        const getVersCliente = document.getElementById('client-version');
        const getMainCliente = document.getElementById('client-maintenance');
        const getMainFCliente = document.getElementById('client-maintenance-future');
        const getLicCliente = document.getElementById('client-licences');
        
            // Declarando as informações dentro dos inputs dos Dados dos Clientes.
            getNomeCliente.value = data[client].nome_cliente || "Sem dado.";
            getCodCliente.value = data[client].cod_cliente || "Sem dado.";
            getVersCliente.value = data[client].versao_vertis_cliente || "Sem dado.";
            getMainCliente.value = data[client].dth_manutencao_realizada || "Sem dado.";
            getMainFCliente.value = data[client].dth_manutencao_futura || "Sem dado.";
            getLicCliente.value = data[client].licencas_cliente || "Sem dado.";

        // Retornando todos os inputs das informações dos Dados de Acesso dos Clientes.
        const getAcessoTVCliente = document.getElementById('client-teamviewer');
        const getAcessoPWTVCliente = document.getElementById('client-teamviewer-password');
        const getAcessoADCliente = document.getElementById('client-anydesk');
        const getAcessoPWADCliente = document.getElementById('client-anydesk-password');
        const getIPServidorCliente = document.getElementById('client-ip-server');

            // Declarando as informações dentro dos inputs dos Dados de Acesso dos Clientes.
            getAcessoTVCliente.value = data[client].acesso_cliente_teamviewer || "Sem dado.";
            getAcessoPWTVCliente.value = data[client].senha_acesso_cliente_teamviewer || "Sem dado.";
            getAcessoADCliente.value = data[client].acesso_cliente_anydesk || "Sem dado.";
            getAcessoPWADCliente.value = data[client].senha_acesso_cliente_anydesk || "Sem dado.";
            getIPServidorCliente.value = data[client].ip_servidor_cliente || "Sem dado.";
        
        // Retornando todos os inputs das informações dos Dados dos Contatos dos Clientes.
        const getRespCliente = document.getElementById('client-manager');
        const getEmailCliente = document.getElementById('client-email');
        const getDDDCliente = document.getElementById('client-ddd');
        const getContact1Cliente = document.getElementById('client-contact-1');
        const getContact2Cliente = document.getElementById('client-contact-2');

            // Declarando as informações dentro dos inputs dos Dados dos Contatos dos Clientes.
            getRespCliente.value = data[client].contatos || "Sem dado.";
            getEmailCliente.value = data[client].email_cliente || "Sem dado.";
            getDDDCliente.value = data[client].ddd_telefone || "Sem dado.";
            getContact1Cliente.value = data[client].telefone1 || "Sem dado.";
            getContact2Cliente.value = data[client].telefone2 || "Sem dado.";

          console.log(data);
        } catch (error) {
          console.error(error);
        }
      } else {
        console.error('Client ID is missing');
      }
    };
    fetchData();
  }, [client]);

  

    return (
    <>
        <header>
          <nav>
              <div class="nav-title">
                <img src="/public/menu.svg" className='menu-img' id='menu-vertis-img' alt="Menu Vertis" width={40} height={40} onClick={MenuVertis}/>
                <Link to='/gpi' target='blank'><img src="./vertisheader.png" width={105} height={35}></img></Link>
                  <h1 class="gpi-title">GPI - Planilha de Clientes</h1>
              </div>
          </nav>
        </header>

      <div className='menu-vertis-box' id='menu-vertis-box'>
        <div className='menu-vertis-content'>
          <Link to='/gpi' target='blank'><p className='menu-items'>Clientes GPI</p></Link>
        </div>
      </div>
          
        <h1 id='client-modal'></h1>
        <div class="search-clients-info">
                <fieldset class='client-data-info'>
                <legend>Dados do Cliente</legend>
                  <label for="client-name">Nome do Cliente <font color="red">*</font></label>
                  <input type="text" class='btns' id="client-name" placeholder="Nome do Cliente" disabled></input>
                    
                  <label for="client-cod">Código do Cliente <font color="red">*</font></label>
                  <input type="number" class='btns' id="client-code" placeholder="Código do Cliente" disabled></input>

                  <label for="client-version">Versão do Vertis</label>
                  <input type="text" class='btns' id="client-version" placeholder="Versão do Vertis" disabled></input>
                
                  <label for="client-maintenance">Manutenção Realizada</label>
                  <input type="text" class='btns' id="client-maintenance" placeholder="Manutenção do Vertis" disabled></input>

                  <label for="client-maintenance">Manutenção Futura</label>
                  <input type="text" class='btns' id="client-maintenance-future" placeholder="Próxima Manutenção" disabled></input>
                
                  <label for="client-licences">Licenças da Unidade</label>
                  <input type="text" class='btns' id="client-licences" placeholder="Total de Licenças" disabled></input>
                </fieldset>
                    
                <fieldset class='client-access-info'>
                  <legend>Dados de Acesso</legend>
                  <label for="client-teamviewer">TeamViewer</label>
                  <input type="text" class='btns' id="client-teamviewer" placeholder="TeamViewer do cliente" disabled></input>

                  <label for="client-teamviewer-password">Senha TeamViewer</label>
                  <input type="text" class='btns' id="client-teamviewer-password" placeholder="Senha do TeamViewer" disabled></input>

                  <label for="client-anydesk">AnyDesk</label>
                  <input type="text" class='btns' id="client-anydesk" placeholder="AnyDesk do cliente" disabled></input>

                  <label for="client-anydesk-password">Senha AnyDesk</label>
                  <input type="text" class='btns' id="client-anydesk-password" placeholder="Senha do AnyDesk" disabled></input>

                  <label for="client-licences">IP Servidor do Cliente</label>
                  <input type="text" class='btns' id="client-ip-server" placeholder="IP" disabled></input>
                </fieldset>
                  
                <fieldset class='client-contacts-info'>
                  <legend>Contatos</legend>
                  <label for="client-manager">Responsável Unidade</label>
                  <input type="text" class='btns' id="client-manager" placeholder='Responsável pela unid.' disabled></input>
                  
                  <label for="client-email">E-mail</label>
                  <input type="text" class='btns' id="client-email" placeholder='E-mail do Cliente' disabled></input>
                  
                  <label for="client-ddd">DDD</label>
                  <input type="text" class='btns' id="client-ddd" placeholder='DDD do Cliente' disabled></input>

                  <label for="client-contact-1">Telefone 1</label>
                  <input type="text" class='btns' id="client-contact-1" placeholder='Telefone 1' disabled></input>

                  <label for="client-contact-2">Telefone 2</label>
                  <input type="text" class='btns' id="client-contact-2" placeholder='Telefone 2' disabled></input>
                </fieldset>
        </div>
        <div class="search-clients-buttons-info">
                <button class="btn-update" id='btn-update' type="button">Alterar</button>
                <button class="btn-save" id='btn-save' type="button" onClick={saveData}>Salvar</button>
                <div className='btn-delete-box'>
                    <button class="btn-delete" id='btn-delete' type="button" onClick={deleteData}>
                        <div class='btn-delete-content'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                        </svg> 
                        </div>
                    </button>
                </div>
            </div>
            
      <div class='alert-modal-box' id='alert-modal-box'>
        <div class='alert-modal' id='alert-modal'>
            <h1 id='alert-title'></h1>
            <p id='alert-textp'></p>
            <p id='alert-status'></p>
            <div className='btn-alert-modal'>
              <button className='btn-yes' id='btn-yes' type='button'>Sim</button>
              <button className='btn-no' id='btn-no' type='button'>Não</button>
              <button class='btn-confirm' id='btn-confirm-alert'>OK</button>
            </div>
        </div>
      </div>

    </>
    )
}

export default Clientes;