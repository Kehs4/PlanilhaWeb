import { useState, useEffect } from 'react'
import './App.css'
import getClientes from '../getclients.js'
import DataTable from 'datatables.net-dt'
import getSearch from '../search.js'
import switchModal from '../modal.js'


let table = new DataTable('#clientes-table');

function App() {
  const [clienteId, setClienteId] = useState(null);

  return (
    <>
        <header>
          <nav>
              <div class="nav-title">
                <a href="http://vertisvet.com.br" target='blank'><img src="./vertislogo.png" width={120} height={35}></img></a>
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
                  <input type="text" id="client-version" placeholder="Versão do Vertis" disabled></input>
                
                  <label for="client-maintenance">Manutenção Realizada</label>
                  <input type="text" id="client-maintenance" placeholder="Manutenção do Vertis" disabled></input>

                  <label for="client-maintenance">Manutenção Futura</label>
                  <input type="text" id="client-maintenance-future" placeholder="Próxima Manutenção" disabled></input>
                
                  <label for="client-licences">Licenças da Unidade</label>
                  <input type="text" id="client-licences" placeholder="Total de Licenças" disabled></input>
                </fieldset>
                    
                <fieldset>
                  <legend>Dados de Acesso</legend>
                  <label for="client-teamviewer">TeamViewer</label>
                  <input type="text" id="client-teamviewer" placeholder="TeamViewer do cliente" disabled></input>

                  <label for="client-teamviewer-password">Senha TeamViewer</label>
                  <input type="text" id="client-teamviewer-password" placeholder="Senha do TeamViewer" disabled></input>

                  <label for="client-anydesk">AnyDesk</label>
                  <input type="text" id="client-anydesk" placeholder="AnyDesk do cliente" disabled></input>

                  <label for="client-anydesk-password">Senha AnyDesk</label>
                  <input type="text" id="client-anydesk-password" placeholder="Senha do AnyDesk" disabled></input>

                  <label for="client-licences">IP Servidor do Cliente</label>
                  <input type="text" id="client-ip-server" placeholder="IP" disabled></input>
                </fieldset>
                  
                <fieldset>
                  <legend>Contatos</legend>
                  <label for="client-manager">Responsável Unidade</label>
                  <input type="text" id="client-manager" placeholder='Responsável pela unid.' disabled></input>
                  
                  <label for="client-email">E-mail</label>
                  <input type="text" id="client-email" placeholder='E-mail do Cliente' disabled></input>
                  
                  <label for="client-ddd">DDD</label>
                  <input type="text" id="client-ddd" placeholder='DDD do Cliente' disabled></input>

                  <label for="client-contact-1">Telefone 1</label>
                  <input type="text" id="client-contact-1" placeholder='Telefone 1' disabled></input>

                  <label for="client-contact-2">Telefone 2</label>
                  <input type="text" id="client-contact-2" placeholder='Telefone 2' disabled></input>
                </fieldset>
                  
              </div>
              
              <div class="search-clients-buttons">
                  <button class="btn-update" id='btn-update' type="button">Alterar</button>
                  <button class="btn-save" id='btn-save' type="button">Salvar</button>
                  <button class="btn-close" id='btn-close' type="button">Fechar</button>
              </div>

          </form>
        </div>
      </div>
        

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
