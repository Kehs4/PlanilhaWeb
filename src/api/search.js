// Função para puxar os dados dos clientes por doubleclick.

 async function getSearch(event) {
    try {
        
        const rowID = event.target.parentElement.id;
        const client = rowID - 1;

        // Endpoint retornando os dados das informações dos clientes PostgreSQL.
        const response = await fetch('http://localhost:3000/clientes');
        const data = await response.json();

        const clientModal = document.getElementById('client-modal');
        clientModal.innerText = data[client].nome_cliente;
        
        // Retornando todos os inputs das informações dos Dados dos Clientes.
        const getNomeCliente = document.getElementById('client-name-input');
        const getCodCliente = document.getElementById('client-cod');
        const getVersCliente = document.getElementById('client-version');
        const getMainCliente = document.getElementById('client-maintenance');
        const getMainFCliente = document.getElementById('client-maintenance-future');
        const getLicCliente = document.getElementById('client-licences');
        
            // Declarando as informações dentro dos inputs dos Dados dos Clientes.
            getNomeCliente.value = data[client].nome_cliente || null;
            getCodCliente.value = data[client].cod_cliente || null;
            getVersCliente.value = data[client].versao_vertis_cliente || null;
            getMainCliente.value = data[client].dth_manutencao_realizada || null;
            getMainFCliente.value = data[client].dth_manutencao_futura || null;
            getLicCliente.value = data[client].licencas_cliente || null;

        // Retornando todos os inputs das informações dos Dados de Acesso dos Clientes.
        const getAcessoTVCliente = document.getElementById('client-teamviewer');
        const getAcessoPWTVCliente = document.getElementById('client-teamviewer-password');
        const getAcessoADCliente = document.getElementById('client-anydesk');
        const getAcessoPWADCliente = document.getElementById('client-anydesk-password');
        const getIPServidorCliente = document.getElementById('client-ip-server');
        const getAlternativeAccess = document.getElementById('client-alternative');
        const getUserServer = document.getElementById('client-user');
        const getUserPasswordServer = document.getElementById('client-user-password');

            // Declarando as informações dentro dos inputs dos Dados de Acesso dos Clientes.
            getAcessoTVCliente.value = data[client].acesso_cliente_teamviewer || null;
            getAcessoPWTVCliente.value = data[client].senha_acesso_cliente_teamviewer || null;
            getAcessoADCliente.value = data[client].acesso_cliente_anydesk || null;
            getAcessoPWADCliente.value = data[client].senha_acesso_cliente_anydesk || null;
            getIPServidorCliente.value = data[client].ip_servidor_cliente || null;
            getAlternativeAccess.value = data[client].alternativo || null;
            getUserServer.value = data[client].usuario_acesso_cliente || null;
            getUserPasswordServer.value = data[client].senha_acesso_usuario || null;
        
            // Retornando todos os inputs das informações dos Dados dos Contatos dos Clientes.
        const getRespCliente = document.getElementById('client-manager');
        const getEmailCliente = document.getElementById('client-email');
        const getDDDCliente = document.getElementById('client-ddd');
        const getContact1Cliente = document.getElementById('client-contact-1');
        const getContact2Cliente = document.getElementById('client-contact-2');

            // Declarando as informações dentro dos inputs dos Dados dos Contatos dos Clientes.
            getRespCliente.value = data[client].contatos || null;
            getEmailCliente.value = data[client].email_cliente || null;
            getDDDCliente.value = data[client].ddd_telefone || null;
            getContact1Cliente.value = data[client].telefone1 || null;
            getContact2Cliente.value = data[client].telefone2 || null;
    
    } catch (error) {
        console.error('Erro ao buscar dados do cliente:', error);
            }

};

export default getSearch;