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
                        <td>${cliente.nome_cliente}</td>
                        <td>${cliente.num_cnpj_cpf}</td>
                        <td>${cliente.acesso_cliente_tipo}</td>
                        <td>${cliente.acesso_cliente_num}</td>
                        <td>${cliente.email}</td>
                        <td>${cliente.telefone}</td>
                    `;
                    tableBody.appendChild(row);
                });
            } catch (error) {
                console.error('Erro ao buscar clientes:', error);
            }
        }

        window.onload = getClientes;

export default getClientes