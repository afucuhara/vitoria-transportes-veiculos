const Icon = ({ name }: { name: string }) => {
  const paths: Record<string, React.ReactNode> = {
    car: <><path d="M5 17h14l-1.5-5.5a2 2 0 0 0-1.9-1.5H8.4a2 2 0 0 0-1.9 1.5L5 17Z"/><path d="M7 17v2M17 17v2M4 14h16M8 14h.01M16 14h.01"/></>,
    route: <><circle cx="6" cy="18" r="2"/><circle cx="18" cy="6" r="2"/><path d="M8 18h3a3 3 0 0 0 3-3V9a3 3 0 0 1 3-3"/></>,
    shield: <><path d="M12 3 5 6v5c0 4.4 2.8 8.4 7 10 4.2-1.6 7-5.6 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-4"/></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    signal: <><path d="M4 20v-3M10 20v-7M16 20V9M22 20V4"/></>,
    headset: <><path d="M4 14v-2a8 8 0 0 1 16 0v2"/><path d="M18 19c0 1.1-.9 2-2 2h-3M4 14v3a2 2 0 0 0 2 2h1v-7H6a2 2 0 0 0-2 2ZM20 14v3a2 2 0 0 1-2 2h-1v-7h1a2 2 0 0 1 2 2Z"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    arrow: <><path d="M5 12h14M13 6l6 6-6 6"/></>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2"/></>,
    message: <><path d="M21 15a4 4 0 0 1-4 4H8l-5 3 1.7-5.1A7 7 0 0 1 3 12V8a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v7Z"/><path d="M8 10h.01M12 10h.01M16 10h.01"/></>,
  };
  return <svg className="icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
};

const WhatsAppIcon = () => (
  <img className="whatsapp-icon" src="/whatsapp.png" alt="" aria-hidden="true" />
);

const services = [
  { title:"Transporte de veículos leves", text:"Operação especializada para automóveis, utilitários leves e veículos de passeio, com cuidado em cada etapa — da coleta à entrega." },
  { title:"Transporte compartilhado", text:"Seu veículo compartilha a capacidade da cegonha com outras entregas compatíveis. Mais economia, sem abrir mão do nosso padrão de segurança." },
  { title:"Transporte dedicado", text:"Uma operação exclusiva, planejada para demandas urgentes, lotes estratégicos e prazos que exigem prioridade total." },
  { title:"Movimentação de frotas", text:"Soluções flexíveis para locadoras, concessionárias, montadoras e empresas que precisam movimentar veículos com previsibilidade." },
];

const partnerLogos = [
  { name:"Movida", src:"/partner-movida.png" },
  { name:"Localiza", src:"/partner-localiza.png" },
  { name:"BYD", src:"/partner-byd.jpg" },
  { name:"LM Mobilidade", src:"/partner-lm.svg" },
  { name:"CS Brasil", src:"/partner-cs.jpg" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Vitória Transportes — início">
          <img src="/vitoria-logo.png" alt="Vitória Transportes" />
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#empresa">A empresa</a><a href="#servicos">Soluções</a><a href="#diferenciais">Diferenciais</a><a href="#atuacao">Atuação</a>
        </nav>
        <a className="header-cta" href="#cotacao"><WhatsAppIcon /> Solicitar cotação</a>
        <details className="mobile-menu">
          <summary aria-label="Abrir menu"><span></span><span></span><span></span></summary>
          <nav><a href="#empresa">A empresa</a><a href="#servicos">Soluções</a><a href="#diferenciais">Diferenciais</a><a href="#cotacao">Cotação</a></nav>
        </details>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-glow"></div>
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow"><span></span> Logística que gera confiança</p>
            <h1>Seu veículo em boas mãos, <em>do início ao destino.</em></h1>
            <p className="hero-text">Transporte de veículos leves com segurança, tecnologia e acompanhamento próximo em cada etapa da operação.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#cotacao">Planejar meu transporte <Icon name="arrow" /></a>
              <a className="btn btn-ghost" href="#servicos">Conhecer soluções</a>
            </div>
          </div>
          <aside className="hero-card">
            <div className="hero-card-icon"><Icon name="shield" /></div>
            <p>Compromisso Vitória</p>
            <strong>Segurança e transparência em todo o percurso.</strong>
            <ul><li><Icon name="check"/> Atendimento próximo</li><li><Icon name="check"/> Planejamento inteligente</li><li><Icon name="check"/> Pontualidade inegociável</li></ul>
          </aside>
        </div>
        <div className="hero-strip">
          <div><Icon name="pin"/><span><small>Base operacional</small>Ilhéus, Bahia</span></div>
          <div><Icon name="route"/><span><small>Alcance</small>Operações em todo o Brasil</span></div>
          <div><Icon name="headset"/><span><small>Atendimento</small>Humano e transparente</span></div>
        </div>
      </section>

      <section className="logos" aria-label="Empresas que confiam na Vitória Transportes">
        <p>Grandes empresas já confiam em nosso trabalho</p>
        <div className="logo-marquee">
          <div className="logo-track">
            {[...partnerLogos,...partnerLogos].map((logo,index) => (
              <span className="partner-logo" key={logo.name + "-" + index}>
                <img src={logo.src} alt={logo.name} loading="lazy" referrerPolicy="no-referrer" />
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="about section" id="empresa">
        <div className="section-heading side-heading">
          <p className="eyebrow dark"><span></span> Quem somos</p>
          <h2>Nascemos para elevar o padrão do <em>transporte de veículos.</em></h2>
        </div>
        <div className="about-copy">
          <p className="lead">A Vitória Transportes de Veículos nasceu em Ilhéus com uma ideia simples e ambiciosa: fazer logística com mais excelência, proximidade e confiança.</p>
          <p>Com experiência consolidada no setor, fomos concebidos livres de vícios corporativos e com uma cultura orientada por resultados. Agilidade, flexibilidade operacional e pontualidade são princípios inegociáveis.</p>
        </div>
      </section>

      <section className="services section" id="servicos">
        <div className="section-heading centered">
          <p className="eyebrow dark"><span></span> Soluções logísticas</p>
          <h2>A modalidade certa para <em>cada operação.</em></h2>
          <p>Do transporte de uma unidade à movimentação estratégica de frotas, desenhamos a solução ideal para sua necessidade.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <h3>{service.title}</h3><p>{service.text}</p>
              <a href="#cotacao">Solicitar cotação <Icon name="arrow"/></a>
            </article>
          ))}
        </div>
      </section>

      <section className="control" id="diferenciais">
        <div className="control-visual">
          <img src="/vitoria-control-center.png" alt="Central de monitoramento de operações logísticas" />
          <div className="control-status"><span></span><small>OPERAÇÃO ACOMPANHADA</small><strong>Visibilidade em cada etapa</strong></div>
        </div>
        <div className="control-copy">
          <p className="eyebrow"><span></span> Inteligência logística</p>
          <h2>Tecnologia que transforma dados em <em>tranquilidade.</em></h2>
          <p>Investimos em tecnologia de ponta para monitorar, planejar e executar processos com precisão. Você ganha visibilidade, previsibilidade e segurança durante toda a operação.</p>
          <div className="benefit-list">
            <div><Icon name="signal"/><span><strong>Acompanhamento preciso</strong><small>Mais controle sobre cada movimentação.</small></span></div>
            <div><Icon name="clock"/><span><strong>Decisões mais rápidas</strong><small>Agilidade para antecipar necessidades.</small></span></div>
            <div><Icon name="shield"/><span><strong>Menos risco, mais confiança</strong><small>Processos planejados para proteger seu patrimônio.</small></span></div>
          </div>
        </div>
      </section>

      <section className="why section">
        <div className="section-heading side-heading">
          <p className="eyebrow dark"><span></span> Por que a Vitória</p>
          <h2>Uma parceira estratégica, não apenas uma transportadora.</h2>
          <a className="text-link" href="#cotacao">Conversar com um especialista <Icon name="arrow"/></a>
        </div>
        <div className="why-grid">
          <article><Icon name="users"/><h3>Atendimento humano</h3><p>Comunicação próxima, clara e acessível antes, durante e depois da operação.</p></article>
          <article><Icon name="route"/><h3>Flexibilidade operacional</h3><p>Soluções moldadas ao seu volume, prazo, rota e particularidades.</p></article>
          <article><Icon name="clock"/><h3>Pontualidade real</h3><p>Planejamento rigoroso para cumprir o prazo acordado com responsabilidade.</p></article>
          <article><Icon name="shield"/><h3>Confiabilidade</h3><p>Resultados consistentes e transparência para você acompanhar com tranquilidade.</p></article>
        </div>
      </section>

      <section className="coverage" id="atuacao">
        <div className="coverage-copy">
          <p className="eyebrow"><span></span> Conectamos o Brasil</p>
          <h2>De Ilhéus para onde o seu negócio precisar.</h2>
          <p>Mais do que movimentar veículos, conectamos negócios, pessoas e projetos. Cada rota é planejada para unir eficiência, confiabilidade e responsabilidade.</p>
          <div className="coverage-stats"><div><strong>Brasil</strong><small>alcance operacional</small></div><div><strong>360°</strong><small>visão da operação</small></div><div><strong>1:1</strong><small>atendimento próximo</small></div></div>
        </div>
        <div className="coverage-map"><img src="/vitoria-brazil-network.png" alt="Rede de rotas logísticas conectando o Brasil" /></div>
      </section>

      <section className="quote section" id="cotacao">
        <div className="quote-box">
          <div className="quote-copy">
            <p className="eyebrow"><span></span> Vamos planejar sua rota?</p>
            <h2>Seu próximo transporte começa com uma boa conversa.</h2>
            <p>Conte de onde o veículo sai, para onde vai e qual é sua necessidade. Nossa equipe prepara a solução mais segura e eficiente para sua operação.</p>
            <div className="quote-steps"><span>Origem e destino</span><span>Veículo e quantidade</span><span>Prazo desejado</span></div>
          </div>
          <div className="quote-card">
            <h3>Solicite uma cotação personalizada</h3>
            <p>Receba orientação para escolher entre transporte dedicado ou compartilhado.</p>
            <a className="btn btn-primary" href="https://www.facebook.com/p/Vit%C3%B3ria-Transportadora-de-Ve%C3%ADculos-61576329165590/" target="_blank" rel="noreferrer"><WhatsAppIcon /> Falar com a equipe</a>
            <small>Atendimento comercial • Ilhéus, Bahia</small>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-brand"><img src="/vitoria-logo.png" alt="Vitória Transportes" /></div>
        <p>Transportando confiança, conectando resultados.</p>
        <nav><a href="#empresa">A empresa</a><a href="#servicos">Soluções</a><a href="#diferenciais">Diferenciais</a><a href="#cotacao">Contato</a></nav>
        <small>© 2026 Vitória Transportes de Veículos. Todos os direitos reservados.</small>
      </footer>
      <a className="floating-contact" href="#cotacao" aria-label="Solicitar cotação pelo WhatsApp"><WhatsAppIcon /></a>
    </main>
  );
}
