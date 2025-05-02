async function deleteDataClients() {
    const cod_cliente = document.getElementById('client-code').value;
    const nome_cliente = document.getElementById('client-name').value;
    const showAlert = document.getElementById('alert-modal-box');
    const alertTitle = document.getElementById('alert-title');
    const alertParagraph = document.getElementById('alert-textp');
    const alertStatus = document.getElementById('alert-status');
    const alertClose = document.getElementById('btn-confirm-alert');
    const btnYes = document.getElementById('btn-yes');
    const btnNo = document.getElementById('btn-no');
    const modal = document.querySelector('.div-form-clients');

    const btnDelete = document.getElementById('btn-delete-clients')
    btnDelete.addEventListener('click', async function () {
        showAlert.style.display = 'flex';
        alertTitle.innerHTML = 'Deseja realmente excluir esse cliente?! <br> <br>'
        alertStatus.style.display = 'none'
        alertParagraph.style.display = 'block'
        alertParagraph.innerHTML = '<font color ="gray">Essa ação não pode ser desfeita!</font>'
        alertClose.style.display = 'none'
        btnYes.style.display = 'flex'
        btnNo.style.display = 'flex'

        btnYes.addEventListener('click', async function () {
            const response = await fetch('', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ cod_cliente }),
            });

            if (response.ok) {
                const result = await response.text();
                console.log(result);
                showAlert.style.display = 'flex';
                btnYes.style.display = 'none'
                btnNo.style.display = 'none'
                alertStatus.style.display = 'block'
                alertParagraph.style.display = 'block'
                alertClose.style.display = 'block'
                alertTitle.innerHTML = 'Uhuull!..'
                alertStatus.style.color = 'green'
                alertStatus.innerHTML = '<font color="gray">Status</font> <br>' + '(200) Ok!.';
                alertParagraph.innerHTML = ('Cliente ' + nome_cliente + ' removido!');
                alertClose.addEventListener('click', function () {
                    showAlert.style.display = 'none';
                    modal.style.display = 'none';
                })
            } else {
                const error = await response.text();
                console.error(error);
                showAlert.style.display = 'flex';
                alertStatus.style.display = 'block'
                alertParagraph.style.display = 'block'
                alertClose.style.display = 'block'
                alertTitle.innerHTML = 'Viishh...'
                alertStatus.style.color = 'red'
                alertStatus.innerHTML = ('<font color="gray">Status</font> <br>' + error);
                alertParagraph.innerHTML = ('Não conseguimos remover o cliente ' + nome_cliente + ' para você. <br>');
                btnYes.style.display = 'none'
                btnNo.style.display = 'none'
                alertClose.addEventListener('click', function () {
                    showAlert.style.display = 'none';
                })
            }
        })
        })

    btnNo.addEventListener('click', function () {
        showAlert.style.display = 'none'
    })
};

export default deleteDataClients;