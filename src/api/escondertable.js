function atualizarVisibilidadeColunas() {
    const larguraTela = window.innerWidth;
    const table = document.getElementById("clientes-table");
  
    if (!table) return;
  
    const colgroup = table.querySelector("colgroup");
    const theadRows = table.querySelectorAll("thead tr");
    const tbodyRows = table.querySelectorAll("tbody tr");
  
    const esconder = larguraTela <= 950;
  
    for (let i = 3; i < 7; i++) {
      // Colunas <col>
      if (colgroup.children[i]) {
        colgroup.children[i].style.display = esconder ? "none" : "";
      }
  
      // Cabeçalho <th>
      theadRows.forEach(tr => {
        const th = tr.children[i];
        if (th) th.style.display = esconder ? "none" : "";
      });
  
      // Corpo <td>
      tbodyRows.forEach(tr => {
        const td = tr.children[i];
        if (td) td.style.display = esconder ? "none" : "";
      });
    }
  }
  
  // Chamar ao carregar a página
  window.addEventListener("load", atualizarVisibilidadeColunas);
  // Chamar ao redimensionar
  window.addEventListener("resize", atualizarVisibilidadeColunas);

export default atualizarVisibilidadeColunas;