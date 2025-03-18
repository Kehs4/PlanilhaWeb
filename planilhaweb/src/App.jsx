import { useState } from 'react'
import './App.css'
import Clientes from '../clientes'
import getClientes from '../getclients'
import DataTable from 'datatables.net-dt'
import getSearch from '../search'
import switchModal from '../modal'
 
let table = new DataTable('#clientes-table');


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

      <div class="div-form-clients">
        <div class="div-form-clients-content">
          <form class="form-clients" action="">
              <div class="search-clients">
                <fieldset>
                <legend>Dados do Cliente</legend>
                  <label for="client-name">Nome do Cliente</label>
                  <input type="text" id="client-name-input" placeholder="Nome do Cliente" disabled></input>
                    
                  <label for="client-cod">Código do Cliente</label>
                  <input type="number" id="client-cod" placeholder="Código do Cliente" disabled></input>

                  <label for="client-version">Versão do Vertis</label>
                  <input type="text" id="client-version" placeholder="Versão do Vertis"></input>
                
                  <label for="client-maintenance">Manutenção Realizada</label>
                  <input type="text" id="client-maintenance" placeholder="Manutenção do Vertis"></input>

                  <label for="client-maintenance">Manutenção Futura</label>
                  <input type="text" id="client-maintenance-future" placeholder="Próxima Manutenção"></input>
                
                  <label for="client-licences">Licenças da Unidade</label>
                  <input type="text" id="client-licences" placeholder="Total de Licenças"></input>
                </fieldset>
                    
                <fieldset>
                  <legend>Dados de Acesso</legend>
                  <label for="client-teamviewer">TeamViewer</label>
                  <input type="text" id="client-teamviewer" placeholder="TeamViewer do cliente"></input>

                  <label for="client-teamviewer-password">Senha TeamViewer</label>
                  <input type="text" id="client-teamviewer-password" placeholder="Senha do TeamViewer"></input>

                  <label for="client-anydesk">AnyDesk</label>
                  <input type="text" id="client-anydesk" placeholder="AnyDesk do cliente"></input>

                  <label for="client-anydesk-password">Senha AnyDesk</label>
                  <input type="text" id="client-anydesk-password" placeholder="Senha do AnyDesk"></input>

                  <label for="client-licences">IP Servidor do Cliente</label>
                  <input type="text" id="client-ip-server" placeholder="IP"></input>
                </fieldset>
                  
                <fieldset>
                  <legend>Contatos</legend>
                  <label for="client-manager">Responsável Unidade</label>
                  <input type="text" id="client-manager" placeholder='Responsável pela unid.'></input>
                  
                  <label for="client-email">E-mail</label>
                  <input type="text" id="client-email" placeholder='E-mail do Cliente'></input>
                  
                  <label for="client-ddd">DDD</label>
                  <input type="text" id="client-ddd" placeholder='DDD do Cliente'></input>

                  <label for="client-contact-1">Telefone 1</label>
                  <input type="text" id="client-contact-1" placeholder='Telefone 1'></input>

                  <label for="client-contact-2">Telefone 2</label>
                  <input type="text" id="client-contact-2" placeholder='Telefone 2'></input>
                </fieldset>
                  
              </div>
              
              <div class="search-clients-buttons">
                  <button class="btn-update" id='btn-update' type="button">Alterar</button>
                  <button class="btn-close" id='btn-close' type="button">Fechar</button>
              </div>

          </form>
        </div>
      </div>
        
        <h1 class="client-list">Lista de Clientes Vertis</h1>
      <table id="clientes-table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nome do Cliente</th>
                <th>TeamViewer</th>
                <th>Senha TeamViewer</th>
                <th>AnyDesk</th>
                <th>Senha AnyDesk</th>
                <th>Versão Vertis</th>
            </tr>
        </thead>
        <tbody id='tbody-list' onDoubleClick={getSearch}>

        </tbody>
       

      </table>
    </>
  )
}

export default App
