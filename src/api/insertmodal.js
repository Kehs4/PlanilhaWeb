import switchModal from "../modal"

async function insertModal() {
const modal = document.querySelector('.div-form-clients')
    const actualStyle = modal.style.display
    if(actualStyle == 'block') {
      modal.style.display = 'none'
    }
    else {
      modal.style.display = 'block'
    }
  
    const insertBtn = document.getElementById('btn-insert')
    insertBtn.style.display = 'block'

    const SalvarBtn = document.getElementById('btn-save')
    SalvarBtn.style.display = 'none'

    const alterarBtn = document.getElementById('btn-update')
    alterarBtn.style.display = 'none'

    const deleteBtn = document.getElementById('btn-delete')
    deleteBtn.style.display = 'none'

    const inputs = document.querySelectorAll('.btns')
    inputs.forEach(input => {
        input.disabled = false
    });

    const InsertBtn = document.getElementById('insertClientBtn')
    if (InsertBtn) {
        InsertBtn.addEventListener('dblclick', switchModal) 
        const clientModal = document.getElementById('client-modal');
        clientModal.innerText = 'Cadastro de Clientes';
        
        // Retornando todos os inputs das informações dos Dados dos Clientes.
        const getNomeCliente = document.getElementById('client-name-input');
        const getCodCliente = document.getElementById('client-cod');
        const getVersCliente = document.getElementById('client-version');
        const getMainCliente = document.getElementById('client-maintenance');
        const getMainFCliente = document.getElementById('client-maintenance-future');
        const getLicCliente = document.getElementById('client-licences');
        
            // Declarando as informações dentro dos inputs dos Dados dos Clientes.
            getNomeCliente.value = null;
            getCodCliente.value = null;
            getVersCliente.value = null;
            getMainCliente.value = null;
            getMainFCliente.value = null;
            getLicCliente.value = null;

        // Retornando todos os inputs das informações dos Dados de Acesso dos Clientes.
        const getAcessoTVCliente = document.getElementById('client-teamviewer');
        const getAcessoPWTVCliente = document.getElementById('client-teamviewer-password');
        const getAcessoADCliente = document.getElementById('client-anydesk');
        const getAcessoPWADCliente = document.getElementById('client-anydesk-password');
        const getIPServidorCliente = document.getElementById('client-ip-server');

            // Declarando as informações dentro dos inputs dos Dados de Acesso dos Clientes.
            getAcessoTVCliente.value = null;
            getAcessoPWTVCliente.value = null;
            getAcessoADCliente.value = null;
            getAcessoPWADCliente.value = null;
            getIPServidorCliente.value = null;
        
        // Retornando todos os inputs das informações dos Dados dos Contatos dos Clientes.
        const getRespCliente = document.getElementById('client-manager');
        const getEmailCliente = document.getElementById('client-email');
        const getDDDCliente = document.getElementById('client-ddd');
        const getContact1Cliente = document.getElementById('client-contact-1');
        const getContact2Cliente = document.getElementById('client-contact-2');

            // Declarando as informações dentro dos inputs dos Dados dos Contatos dos Clientes.
            getRespCliente.value = null;
            getEmailCliente.value = null;
            getDDDCliente.value = null;
            getContact1Cliente.value = null;
            getContact2Cliente.value = null;
    }
    
    window.onclick = function(event) {
        const btnClose = document.querySelector('.btn-close')
        const inputs = document.querySelectorAll('.btns')
        if (event.target == btnClose) {
            modal.style.display = 'none'
            insertBtn.style.display = 'none'
            inputs.forEach(input => {
            input.disabled = true
        })
        }
    };
};

export default insertModal;