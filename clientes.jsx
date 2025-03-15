import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Clientes() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/clientes')
      .then(response => setClientes(response.data))
      .catch(error => console.error('Erro ao carregar clientes', error));
  }, []);

  return (
    <div>
      <h2>Clientes</h2>
      <ul>
        {clientes.map(cliente => (
          <li key={cliente.id}>
            <button onClick={() => alert('Exibir referências para o cliente ' + cliente.id)}>
              {cliente.nome}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Clientes;