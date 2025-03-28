import { useState, useEffect } from 'react'
import './App.css'
import getClientes from '../getclients.js'
import getSearch from '../search.js'
import switchModal from '../modal.js'
import DT from 'datatables.net-dt';
import DataTable from 'datatables.net-dt'
 
DataTable.use(DT);


function App() {
  const [clienteId, setClienteId] = useState(null);
  useEffect(() => {
    // Defina uma função assíncrona interna
    const carregarScripts = async () => {
      try {
        const data1 = await switchModal();

        const data2 = await getClientes();

        let table = async () => {
          table = new DataTable('#clientes-table')};

        const data3 = await table();
      } catch (error) {
        console.error("Erro ao carregar os dados:", error);
      }
    };

    // Chama a função assíncrona dentro do useEffect
    carregarScripts();

  }, []); // O array vazio garante que isso seja chamado apenas uma vez, na montagem do componente
  

  return (
    <>
        <header>
          <nav>
              <div class="nav-title">
                <a href="https://vertisvet.com.br" target='blank'><img src="./vertislogo.png" width={150} height={45}></img></a>
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
      
    

      <footer class='footer-vertis'>
        <div class='div-all-footer'>
                <div class='footer-logo'>
                  <a href="https://vertisvet.com.br" target='_blank'><img src='./public/vertislogo.png' width={230} height={70}></img></a>
                  <p>© 2025 por Vertis.</p>
                </div>

                <div class='footer-links'>
                  <h1>CONHEÇA-NOS</h1>
                  <a href='https://www.vertisvet.com.br/quemsomos' target='_blank'><p>QUEM SOMOS</p></a>
                  <a href='https://www.vertisvet.com.br/lgpd' target='_blank'><p>POLÍTICA DE PRIVACIDADE</p></a>
                  <a href='https://www.vertisvet.com.br/api' target='_blank'><p>DOCUMENTAÇÃO API</p></a>
                </div>

                <div class ='footer-infos'>
                  <div class='time-svg'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                    </svg>
                    <p>De segunda a sexta-feira das 09h às 18h</p>
                  </div>
                  
                <div class='mail-svg'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                    </svg>
                    <a href="mailto:contato@gpiti.com.br"><p>contato@gpiti.com.br</p></a>
                </div>

                <div class='telefone-svg'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-telephone-inbound" viewBox="0 0 16 16">
                    <path d="M15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0m-12.2 1.182a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                  </svg>
                  <p>(11) 3564-7839 | (11) 3564-7840</p>
                </div>
                
                <div class='whatsapp-svg'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                    </svg>
                    <a href="https://wa.me/5511964410631" target='_blank'><p>(11) 96441-0631</p></a>
                </div>

                <div class='instagram-logo'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                  </svg>
                  <a href='https://instagram.com/sistemavertis' target='_blank'><p>@sistemavertis</p></a>
                </div>
              </div> 

        </div>
      </footer>
      </>
  )
  
}

export default App
