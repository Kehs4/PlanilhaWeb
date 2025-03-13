import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clientes from '../clientes'
import getClientes from '../getclients'


function App() {
  const [clienteId, setClienteId] = useState(null);

  return (
    <>
        <header>
          <nav>
              <div class="nav-title">
                  <h1 class="gpi-title">GPI - Planilha de Clientes</h1>
              </div>
          </nav>
        </header>

        <div class="text-1">
            <h3>Pesquisa dos cadastros dos clientes da GPI</h3>
            <p>Digite o nome ou os dados da sua pesquisa abaixo.</p>
        </div>

        <form class="form-clients" action="">
            <div class="search-clients">
                <label for="name-client">Nome</label>
                <input type="text" id="name-client" placeholder="Digite o nome do cliente" required></input>
                <label for="cod">Código do Cliente</label>
                <input type="number" id="cod" placeholder="Digite o código do cliente"></input>
                <button class="btn-search" type="submit">Procurar</button>
            </div>
        </form>

        <h1 class="client-list">Lista de Clientes</h1>
      <table id="clientes-table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>CNPJ/CPF</th>
                <th>Tipo Acesso</th>
                <th>Número Acesso</th>
                <th>Email</th>
                <th>Telefone</th>
            </tr>
        </thead>
        <tbody>
        
        </tbody>
      </table>
      
    </>
  )
}

export default App
