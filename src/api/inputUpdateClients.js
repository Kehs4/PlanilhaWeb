function ChangeInputs() {
const alterarBtn = document.getElementById('btn-update-clients')
const inputs = document.querySelectorAll('.btns')
const codGPI  = document.getElementById('client-code')

    // Verifique se o botão foi encontrado
    if (alterarBtn) {
        // Adiciona um evento de clique ao botão
        alterarBtn.addEventListener('click', function() {
            // Habilita os inputs
            inputs.forEach(input => {
                codGPI.disabled = true
                input.disabled = false
            });
        })
    } else {
        console.error("Botão 'alterarBtn' não encontrado!");
    };
};

export default ChangeInputs;