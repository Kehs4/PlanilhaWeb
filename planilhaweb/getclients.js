
        // Função para buscar os clientes
        async function getClientes() {
            try {
                const response = await fetch('http://localhost:3000/clientes');
                
                const data = await response.json();
            
                console.log(data)
                const tableBody = document.querySelector('#clientes-table tbody');

                tableBody.innerHTML = ''; 
        
                data.forEach(cliente => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td id="client-code">${cliente.cod_cliente}</td>
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
export default getClientes;
            
