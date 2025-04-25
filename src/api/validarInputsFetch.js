function validarCamposInvalidos() {
    const inputs = document.querySelectorAll('input, select, textarea');
    const inputsInvalidos = [];
  
    for (const input of inputs) {
      input.classList.remove('input-erro');
  
      if (!input.checkValidity()) {
        input.classList.add('input-erro');
        inputsInvalidos.push(input);
      }
    }
  
    return inputsInvalidos;
  }
  
  export default validarCamposInvalidos;