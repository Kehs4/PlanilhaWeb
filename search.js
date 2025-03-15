import React, { useEffect, useState } from 'react';
import axios from 'axios';


// Função para puxar os dados dos clientes por doubleclick.


 async function getSearch() {
    try {
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
        getNomeCliente.value = `${data[0].nome_cliente}`;
        getCodCliente.value = `${data[0].cod_cliente}`;
        getVersCliente.value = `${data[0].versao_vertis_cliente}`;
        getMainCliente.value = `${data[0].dth_manutencao_realizada}`;
        getMainFCliente.value = `${data[0].dth_manutencao_futura}`;
        getLicCliente.value = `${data[0].licencas_cliente}`;

    } catch (error) {
                console.error('Erro ao buscar cliente:', error);
            }
    

};


            



export default getSearch;