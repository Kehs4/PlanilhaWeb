
const switchModal = () => {
  const modal = document.querySelector('.div-form-clients')
  const actualStyle = modal.style.display
  if(actualStyle == 'block') {
    modal.style.display = 'none'
  }
  else {
    modal.style.display = 'block'
  }
  
  const SalvarBtn = document.getElementById('btn-save')
  SalvarBtn.style.display = 'block'

  const deleteBtn = document.getElementById('btn-delete')
  deleteBtn.style.display = 'block'
  
  const saveBtn = document.getElementById('btn-save')
  saveBtn.style.display = 'block'

  const alterarBtn = document.getElementById('btn-update')
  alterarBtn.style.display = 'block'

    const btn = document.getElementById('tbody-list')
    if (btn) {
      btn.addEventListener('dblclick', switchModal);
    }

      const inputs = document.querySelectorAll('.btns')

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

      window.onclick = function(event) {
        const btnClose = document.querySelector('.btn-close')
        const inputs = document.querySelectorAll('.btns')
      if (event.target == btnClose) {
        switchModal()
        SalvarBtn.style.display = 'none'
        inputs.forEach(input => {
          input.disabled = true
      })
      }
    };
  };

    
export default switchModal;