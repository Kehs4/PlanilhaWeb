import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Clientes from './clientes';


        // Função para buscar os clientes
        async function getClientes() {
            try {
                const response = await fetch('http://localhost:3000/clientes');
                const data = await response.json();
                console.log(data)
                const tableBody = document.querySelector('#clientes-table tbody');
                data.forEach(cliente => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${cliente.cod_cliente}</td>
                        <td id="client-name-id">${cliente.nome_cliente}</td>
                        <td>${cliente.acesso_cliente_teamviewer}</td>
                        <td>${cliente.senha_acesso_cliente_teamviewer}</td>
                        <td>${cliente.acesso_cliente_anydesk}</td>
                        <td>${cliente.senha_acesso_cliente_anydesk}</td>
                        <td>${cliente.versao_vertis_cliente}</td>
                    `;
                    tableBody.appendChild(row);
                });
            } catch (error) {
                console.error('Erro ao buscar clientes:', error);
            }
        }
        window.onload = getClientes;

export default getClientes;
            
