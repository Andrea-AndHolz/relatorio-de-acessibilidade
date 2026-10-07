class ReportHeader extends HTMLElement {
  connectedCallback() {
    const currentPage = this.getAttribute("current-page");
    const links = [
      { page: "overview", href: "index.html", label: "Visão geral" },
      { page: "table", href: "tabela.html", label: "Avaliação detalhada" },
      { page: "orientation", href: "orienta.html", label: "Recomendações" },
    ];
    const navigation = links
      .map(({ page, href, label }) => {
        if (page === currentPage) {
          return `<span class="current-page" aria-current="page">${label}</span>`;
        }
        return `<a href="${href}">${label}</a>`;
      })
      .join("");

    this.innerHTML = `
      <nav class="page-nav" aria-label="Navegação do relatório">
        ${navigation}
      </nav>
      <header class="report-header">
        <h1>Relatório de Acessibilidade</h1>
        <div class="identificação">
          <table aria-label="Identificação da avaliação">
            <colgroup>
              <col class="label-column" />
              <col class="value-column" />
              <col class="label-column" />
              <col class="value-column" />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row">Título</th>
                <td>EBAC – Shop – Página de teste</td>
                <th scope="row">Página</th>
                <td><a href="http://lojaebac.ebaconline.art.br/">http://lojaebac.ebaconline.art.br/</a></td>
              </tr>
              <tr>
                <th scope="row">Resumo</th>
                <td>325 Erros Críticos - 637 Avisos de Melhoria</td>
                <th scope="row">Tamanho</th>
                <td>306964 Bytes</td>
              </tr>
              <tr>
                <th scope="row">Data/hora</th>
                <td>05/10/2026 19:37:13</td>
                <th scope="row">Responsável</th>
                <td>Andréa Buchholz</td>
              </tr>
            </tbody>
          </table>
        </div>
      </header>
    `;
  }
}

customElements.define("report-header", ReportHeader);

class ReportFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="report-footer">
        <p>
          O avaliador ASES é uma ferramenta de código aberto do Ministério da Economia do Brasil
          que avalia a acessibilidade digital de sites e aplicações web. Por meio de testes
          automatizados baseados em padrões internacionais, gera relatórios sobre erros e avisos
          no código-fonte.
        </p>
        <nav class="footer-links" aria-label="Referências de acessibilidade">
          <a href="https://asesweb.governoeletronico.gov.br/" target="_blank" rel="noopener noreferrer">Avaliador ASES</a>
          <a href="http://emag.governoeletronico.gov.br/" target="_blank" rel="noopener noreferrer">Acessibilidade Digital no Governo Federal</a>
          <a href="https://www.w3.org/WAI/standards-guidelines/" target="_blank" rel="noopener noreferrer">Diretrizes de acessibilidade W3C</a>
        </nav>
      </footer>
    `;
  }
}

customElements.define("report-footer", ReportFooter);
