import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from 'datatables.net-dt';
import Clientes from './clientes';


// Função para puxar os dados dos clientes por doubleclick.


 async function getSearch() {
    try {
        // Endpoint retornando os dados das informações dos clientes PostgreSQL.
        const response = await fetch('http://localhost:3000/clientes');
        const data = await response.json();
        await data;
        const client = document.getElementById("tbody-list").addEventListener('dblclick', function(event) {
           
                // Obtém o valor da célula clicada
                const valorClicado = event.target.innerText
                
                // Encontra a posição do valor no array
                const posicao = data.indexOf(Number(valorClicado));
        
                // Exibe a posição no console
             
                    console.log("Valor clicado:", valorClicado, "Posição no array:", posicao);
                client = posicao
                });

        
        // Retornando todos os inputs das informações dos Dados dos Clientes.
        const getNomeCliente = document.getElementById('client-name-input');
        const getCodCliente = document.getElementById('client-cod');
        const getVersCliente = document.getElementById('client-version');
        const getMainCliente = document.getElementById('client-maintenance');
        const getMainFCliente = document.getElementById('client-maintenance-future');
        const getLicCliente = document.getElementById('client-licences');
        
            // Declarando as informações dentro dos inputs dos Dados dos Clientes.
            getNomeCliente.value = `${data[client].nome_cliente}`;
            getCodCliente.value = `${data[client].cod_cliente}`;
            getVersCliente.value = `${data[client].versao_vertis_cliente}`;
            getMainCliente.value = `${data[client].dth_manutencao_realizada}`;
            getMainFCliente.value = `${data[client].dth_manutencao_futura}`;
            getLicCliente.value = `${data[client].licencas_cliente}`;

        // Retornando todos os inputs das informações dos Dados de Acesso dos Clientes.
        const getAcessoTVCliente = document.getElementById('client-teamviewer');
        const getAcessoPWTVCliente = document.getElementById('client-teamviewer-password');
        const getAcessoADCliente = document.getElementById('client-anydesk');
        const getAcessoPWADCliente = document.getElementById('client-anydesk-password');
        const getIPServidorCliente = document.getElementById('client-ip-server');

            // Declarando as informações dentro dos inputs dos Dados de Acesso dos Clientes.
            getAcessoTVCliente.value = `${data[0].acesso_cliente_teamviewer}`;
            getAcessoPWTVCliente.value = `${data[0].senha_acesso_cliente_teamviewer}`;
            getAcessoADCliente.value = `${data[0].acesso_cliente_anydesk}`;
            getAcessoPWADCliente.value = `${data[0].senha_acesso_cliente_anydesk}`;
            getIPServidorCliente.value = `${data[0].ip_servidor_cliente}`
        
        // Retornando todos os inputs das informações dos Dados dos Contatos dos Clientes.
        const getRespCliente = document.getElementById('client-manager');
        const getEmailCliente = document.getElementById('client-email');
        const getDDDCliente = document.getElementById('client-ddd');
        const getContact1Cliente = document.getElementById('client-contact-1');
        const getContact2Cliente = document.getElementById('client-contact-2');

            // Declarando as informações dentro dos inputs dos Dados dos Contatos dos Clientes.
            getRespCliente.value = `${data[0].contatos}`;
            getEmailCliente.value = `${data[0].email_cliente}`;
            getDDDCliente.value = `${data[0].ddd_telefone}`;
            getContact1Cliente.value = `${data[0].telefone1}`;
            getContact2Cliente.value = `${data[0].telefone2}`;

    } catch (error) {
                console.error('Erro ao buscar cliente:', error);
            } 
};





export default getSearch;