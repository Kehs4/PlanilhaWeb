import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'datatables.net-dt';
import Clientes from './clientes';
import getClientes from './getclients';


// Função para puxar os dados dos clientes por doubleclick.

 async function getSearch() {
    try {
        const client = event.target.parentElement.rowIndex - 1;
        // Endpoint retornando os dados das informações dos clientes PostgreSQL.
        const response = await fetch('http://localhost:3000/clientes');
        const data = await response.json();

        // Retornando todos os inputs das informações dos Dados dos Clientes.
        const getNomeCliente = document.getElementById('client-name-input');
        const getCodCliente = document.getElementById('client-cod');
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

    } catch (error) {
                console.error('Erro ao buscar cliente:', error);
            } 

            document.addEventListener('DOMContentLoaded', () => {
                const clientCodeElement = document.getElementById('client-code');
                if (clientCodeElement) {
                    clientCodeElement.addEventListener('dblclick', getSearch);
                }
    
})};


export default getSearch;