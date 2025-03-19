
const switchModal = () => {
  const modal = document.querySelector('.div-form-clients')
  const actualStyle = modal.style.display
  if(actualStyle == 'block') {
    modal.style.display = 'none'
  }
  else {
    modal.style.display = 'block'
  }
}

const btn = document.getElementById('tbody-list')
if (btn) {
  btn.addEventListener('dblclick', switchModal);
}

  window.onclick = function(event) {
    const modal = document.querySelector('.btn-close')
  if (event.target == modal) {
    switchModal()
  }
};

  const alterarBtn = document.getElementById('btn-update')
  const inputs = document.querySelectorAll("input")

  // Verifique se o botão foi encontrado
  if (alterarBtn) {
      // Adiciona um evento de clique ao botão
      alterarBtn.addEventListener('click', function() {
          // Habilita os inputs
          inputs.forEach(input => {
              input.disabled = false
          });
      })
  } else {
      console.error("Botão 'alterarBtn' não encontrado!");
  };
  
  const SalvarBtn = document.getElementById('btn-save')

  // Verifique se o botão foi encontrado
  if (SalvarBtn) {
      // Adiciona um evento de clique ao botão
      SalvarBtn.addEventListener('click', function() {
          // Habilita os inputs
          inputs.forEach(input => {
              input.disabled = true
          })
      }
      )
    };
  
export default switchModal;