import { useState, useEffect } from 'react'
import '../App.css'
import getClientes from '../api/getclients.js'
import getSearch from '../api/search.js'
import switchModal from '../modal.js'
import saveData from '../api/saveDataModal.js'
import $ from 'jquery'
import DT from 'datatables.net-dt'
import DataTable from 'datatables.net-dt'
import insertData from '../api/insertData.js'
import insertModal from '../api/insertmodal.js'
import deleteData from '../api/deleteDataModal.js'
import { Link } from 'react-router-dom'
import infoClientes from '../infoclientes.js'
import atualizarVisibilidadeColunas from '../api/escondertable.js'
 
DataTable.use(DT);

function Home() {

  const [clienteId, setClienteId] = useState(null);
  useEffect(() => {
    const carregarScripts = async () => {
      try {
        const data1 = await getClientes();

        const data2 = await switchModal();

        const tableId = '#clientes-table';

    // Garante que DataTables só seja inicializado uma vez
    if ($.fn.DataTable.isDataTable(tableId)) {
      $(tableId).DataTable().destroy();
    }

    $(tableId).DataTable({
      paging: false,
      ordering: true,
      info: true,
      searching: true,
      pageLength: -1
    });

    // Remove o seletor "entries per page"
    document.querySelector('.dt-length')?.remove();
  
    const label = document.querySelector('.dt-search label');
    if (label && label.textContent.includes('Search')) {
      label.textContent = 'Cliente: ';
    }
     
    const esconderTable = await atualizarVisibilidadeColunas();
    
      } catch (error) {
        console.error("Erro ao carregar os dados:", error);
      }
    };

    carregarScripts();

  }, []); // O array vazio garante que isso seja chamado apenas uma vez, na montagem do componente

  return (
    <>
        <header>
          <nav>
              <div className="nav-title">
              <Link to='/gpi' target='blank'><img src="./vertisheader.png" width={105} height={35}></img></Link>
                  <h1 className="gpi-title">GPI - Planilha de Clientes</h1>
              </div>
          </nav>
        </header>

      <div className='div-insert-client'>
        <button id='insertClientBtn' onClick={insertModal}>+ Incluir novo cliente.</button>
      </div>

      <div className="div-form-clients">
        <div className="div-form-clients-content">
          <form className="form-clients" action="">
          <div className='client-identifier'>
            <h1 id='client-modal'></h1>
          
            <button id='btn-info-client' className='btn-info-client' onClick={infoClientes}>+ Informações</button>

          </div>
          
              <div className="search-clients">
                <fieldset className='client-data'>
                <legend>Dados do Cliente</legend>
                  <label htmlFor="client-name">Nome do Cliente <font color="red">*</font></label>
                  <input type="text" className='btns' id="client-name-input" placeholder="Nome do Cliente" required disabled></input>

                  <label htmlFor="client-cod-unid">Código Unidade de Negócio<font color="red">*</font></label>
            <input type="number" className='btns' id="client-cod-unid" placeholder="Código da Unidade de Negócio" required disabled></input>

            <label htmlFor="client-cod-unid-oper">Código Unid. Operacional <font color="red">*</font></label>
            <input type="number" className='btns' id="client-cod-unid-oper" placeholder="Código da Unid. Operacional" required disabled></input>
                    
                  <label htmlFor="client-cod">Cód. Planilha GPI</label>
                  <input type="number" className='btns' id="client-cod" placeholder="Código do Cliente" disabled></input>

                  <label htmlFor="client-version">Versão do Vertis</label>
                  <input type="text" className='btns' id="client-version" placeholder="Versão do Vertis" disabled></input>
                
                  <label htmlFor="client-maintenance">Manutenção Realizada</label>
                  <input type="text" className='btns' id="client-maintenance" placeholder="Manutenção do Vertis" disabled></input>

                  <label htmlFor="client-maintenance">Manutenção Futura</label>
                  <input type="text" className='btns' id="client-maintenance-future" placeholder="Próxima Manutenção" disabled></input>
                
                  <label htmlFor="client-licences">Licenças da Unidade</label>
                  <input type="text" className='btns' id="client-licences" placeholder="Total de Licenças" disabled></input>
                </fieldset>
                    
                <fieldset className='client-access'>
                  <legend>Dados de Acesso</legend>
                  <label htmlFor="client-teamviewer">TeamViewer</label>
                  <input type="text" className='btns' id="client-teamviewer" placeholder="TeamViewer do cliente" disabled></input>

                  <label htmlFor="client-teamviewer-password">Senha TeamViewer</label>
                  <input type="text" className='btns' id="client-teamviewer-password" placeholder="Senha do TeamViewer" disabled></input>

                  <label htmlFor="client-anydesk">AnyDesk</label>
                  <input type="text" className='btns' id="client-anydesk" placeholder="AnyDesk do cliente" disabled></input>

                  <label htmlFor="client-anydesk-password">Senha AnyDesk</label>
                  <input type="text" className='btns' id="client-anydesk-password" placeholder="Senha do AnyDesk" disabled></input>

                  <label htmlFor="client-licences">IP Servidor do Cliente</label>
                  <input type="text" className='btns' id="client-ip-server" placeholder="IP" disabled></input>

                  <label htmlFor="client-alternative">Acesso Alternativo Servidor</label>
                  <input type="text" className='btns' id="client-alternative" placeholder="Acessos Alternativos do Servidor" disabled></input>

                  <label htmlFor="client-user">Usuário do Servidor</label>
                  <input type="text" className='btns' id="client-user" placeholder="Usuário do Servidor do Cliente" disabled></input>
                
                  <label htmlFor="client-user-password">Senha do Usuário</label>
                  <input type="text" className='btns' id="client-user-password" placeholder="Senha do Usuário do Cliente" disabled></input>
                
                  <label htmlFor="client-bd-password">Senha Criptografada BD</label>
                  <input type="text" className='btns' id="client-bd-password" placeholder="Senha Criptografada BD" disabled></input>
                </fieldset>
                  
                <fieldset className='client-contacts'>
                  <legend>Contatos</legend>
                  <label htmlFor="client-manager">Responsável Unidade</label>
                  <input type="text" className='btns' id="client-manager" placeholder='Responsável pela unid.' disabled></input>
                  
                  <label htmlFor="client-email">E-mail</label>
                  <input type="text" className='btns' id="client-email" placeholder='E-mail do Cliente' disabled></input>
                  
                  <label htmlFor="client-ddd">DDD</label>
                  <input type="number" className='btns' id="client-ddd" placeholder='DDD do Cliente' disabled></input>

                  <label htmlFor="client-contact-1">Telefone 1</label>
                  <input type="text" className='btns' id="client-contact-1" placeholder='Telefone 1' disabled></input>

                  <label htmlFor="client-contact-2">Telefone 2</label>
                  <input type="text" className='btns' id="client-contact-2" placeholder='Telefone 2' disabled></input>
                
                  <label htmlFor="client-observation">Observação</label>
                  <input type="text" className='btns' id="client-observation" placeholder="Observações Gerais do Cliente" disabled></input>
                </fieldset>
                  
              </div>
              
              <div className="search-clients-buttons">
                  <button className="btn-update" id='btn-update' type="button">Alterar</button>
                  <button className="btn-insert" id='btn-insert' type="button" onClick={insertData}>Incluir</button>
                  <button className="btn-save" id='btn-save' type="button" onClick={saveData}>Salvar</button>
                  <button className="btn-close" id='btn-close' type="button">Fechar</button>
                  <div className='btn-delete-box'>
                  <button className="btn-delete" id='btn-delete' type="button" onClick={deleteData}>
                    <div className='btn-delete-content'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                      </svg> 
                    </div>
                  </button>
                  </div>
              </div>
          </form>
        </div>
      </div>
      <div className='alert-modal-box' id='alert-modal-box'>
        <div className='alert-modal' id='alert-modal'>
            <h1 id='alert-title'></h1>
            <p id='alert-textp'></p>
            <p id='alert-status'></p>
            <div className='btn-alert-modal'>
              <button className='btn-yes' id='btn-yes' type='button'>Sim</button>
              <button className='btn-no' id='btn-no' type='button'>Não</button>
              <button className='btn-confirm' id='btn-confirm-alert'>OK</button>
            </div>
        </div>
      </div>
    <img className='vertisimg' src='/public/vertislogo2.png'></img>

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

      <footer className='footer-vertis'>
        <div className='div-all-footer'>
                <div className='footer-logo'>
                  <a href="https://vertisvet.com.br" target='_blank'><img src='./public/vertislogo.png' width={150} height={100}></img></a>
                  <p>© 2025 por Vertis.</p>
                </div>

                <div className='footer-links'>
                  <h1>CONHEÇA-NOS</h1>
                  <a href='https://www.vertisvet.com.br/quemsomos' target='_blank'><p>QUEM SOMOS</p></a>
                  <a href='https://www.vertisvet.com.br/lgpd' target='_blank'><p>POLÍTICA DE PRIVACIDADE</p></a>
                  <a href='https://www.vertisvet.com.br/api' target='_blank'><p>DOCUMENTAÇÃO API</p></a>
                </div>

                <div className='footer-infos'>
                  <div className='time-svg'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                    </svg>
                    <p>De segunda a sexta-feira das 09h às 18h</p>
                  </div>
                  
                <div className='mail-svg'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                    </svg>
                    <a href="mailto:contato@gpiti.com.br" className='a-contact'><p>contato@gpiti.com.br</p></a>
                </div>

                <div className='telefone-svg'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-telephone-inbound" viewBox="0 0 16 16">
                    <path d="M15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0m-12.2 1.182a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                  </svg>
                  <p>(11) 3564-7839 | (11) 3564-7840</p>
                </div>
                
                <div className='whatsapp-svg'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                    </svg>
                    <a href="https://wa.me/5511964410631" className='a-whatsapp' target='_blank'><p>(11) 96441-0631</p></a>
                </div>

                <div className='instagram-logo'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                  </svg>
                  <a href='https://instagram.com/sistemavertis' className='a-instagram' target='_blank'><p>@sistemavertis</p></a>
                </div>

              </div> 

        </div>
        <div className='footer-local'>
            <p>Av. Engenheiro Armando de Arruda Pereira, 2937 - Bloco A - Sala 115.</p>
            <p>Jabaquara - São Paulo - SP, CEP: 04309-011.</p>
        </div>
        
      </footer>
      </>
  )
  
}

export default Home
