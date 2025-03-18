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

 const btnUpdate = document.getElementById('btn-update')

 
export default switchModal;