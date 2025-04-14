import getClientes from "./getclients";

async function deleteData() {
    const cod_cliente = document.getElementById('client-cod').value;
    const nome_cliente = document.getElementById('client-name-input').value;
    const showAlert = document.getElementById('alert-modal-box')
    const alertTitle = document.getElementById('alert-title')
    const alertParagraph = document.getElementById('alert-textp')
    const alertStatus = document.getElementById('alert-status')
    const alertClose = document.getElementById('btn-confirm-alert')

    const response = await fetch('http://localhost:3000/clientes', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({cod_cliente}),
    });
    
    if (response.ok) {
        const result = await response.text();
        console.log(result);
        showAlert.style.display = 'flex';
        alertTitle.innerHTML = 'Uhuull!..'
        alertStatus.style.color = 'green'
        alertStatus.innerHTML = '<font color="gray">Status</font> <br>' + '(200) Ok!.';
        alertParagraph.innerHTML = ('Cliente ' + nome_cliente + ' removido!');
        alertClose.addEventListener('click', function() {
            showAlert.style.display = 'none';
            getClientes();
        })
    } else {
        const error = await response.text();
        console.error(error);
        showAlert.style.display = 'flex';
        alertTitle.innerHTML = 'Viishh...'
        alertStatus.style.color = 'red'
        alertStatus.innerHTML = ('<font color="gray">Status</font> <br>' + error);
        alertParagraph.innerHTML = ('Não conseguimos remover o cliente ' + nome_cliente + ' para você. <br>' );
        alertClose.addEventListener('click', function() {
            showAlert.style.display = 'none';
            getClientes();
        })
    }
};

export default deleteData;
