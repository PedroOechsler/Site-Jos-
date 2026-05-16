import { MessageCircle, CheckCircle, TrendingUp, Target, BarChart2, Users, Award, ArrowRight, Building2, User } from "lucide-react";

const WA_URL = "https://wa.me/5551980611212";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg font-bold mb-3 flex items-center gap-2" style={{ color: "#22c55e" }}>
      {children}
    </h3>
  );
}

function BulletItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-sm mb-2" style={{ color: "#d1d5db" }}>
      <CheckCircle size={15} className="mt-0.5 flex-shrink-0" style={{ color: "#22c55e" }} />
      <span>{children}</span>
    </li>
  );
}

function CTAWhatsApp() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 font-bold uppercase tracking-wider text-white rounded-lg px-8 py-4 text-sm transition-all duration-200 w-full mt-6"
      style={{ backgroundColor: "#22c55e" }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#16a34a")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#22c55e")}
    >
      <MessageCircle size={18} />
      QUERO SABER MAIS
      <ArrowRight size={16} />
    </a>
  );
}

function MentoriaPF() {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{ backgroundColor: "#111111", border: "1px solid #1f2937" }}
    >
      {/* Header */}
      <div className="px-8 py-6" style={{ backgroundColor: "#0d1a0d", borderBottom: "1px solid #1f2937" }}>
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg" style={{ backgroundColor: "#14532d" }}>
            <User size={22} style={{ color: "#22c55e" }} />
          </div>
          <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={{ border: "1px solid #22c55e", color: "#22c55e" }}>
            Pessoa Física
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Mentoria PF</h2>
        <p className="text-base font-semibold" style={{ color: "#22c55e" }}>"Destravando suas Finanças"</p>
        <p className="text-sm mt-2" style={{ color: "#9ca3af" }}>Conquiste sua Liberdade Financeira</p>
      </div>

      {/* Body */}
      <div className="px-8 py-6 space-y-6">
        <p className="text-sm leading-relaxed" style={{ color: "#d1d5db" }}>
          Você se sente sobrecarregado(a) com suas finanças? Sonha em ter controle sobre seu dinheiro, quitar dívidas e fazer seu patrimônio crescer? A Mentoria PF é um programa completo e personalizado para indivíduos que buscam clareza, estratégia e ação para transformar sua relação com o dinheiro.
        </p>

        {/* Módulo 1 */}
        <div>
          <SectionTitle><Target size={16} /> 1. Organização Financeira Total</SectionTitle>
          <ul className="space-y-1">
            <BulletItem><strong>Diagnóstico Financeiro Detalhado</strong> — Entenda sua realidade atual e descubra para onde seu dinheiro está indo.</BulletItem>
            <BulletItem><strong>Orçamento Inteligente</strong> — Crie um orçamento realista que funcione para você, permitindo economizar sem abrir mão do que é importante.</BulletItem>
            <BulletItem><strong>Controle de Gastos</strong> — Hábitos e ferramentas para monitorar seus gastos diários, evitando surpresas.</BulletItem>
            <BulletItem><strong>Planejamento para Metas</strong> — Defina metas claras e crie um plano para alcançá-las — imóvel, viagem ou aposentadoria.</BulletItem>
          </ul>
        </div>

        {/* Módulo 2 */}
        <div>
          <SectionTitle><BarChart2 size={16} /> 2. Gestão e Eliminação de Dívidas</SectionTitle>
          <ul className="space-y-1">
            <BulletItem><strong>Análise de Dívidas</strong> — Compreenda o impacto e priorize as mais urgentes e caras.</BulletItem>
            <BulletItem><strong>Estratégias de Quitação</strong> — Plano estratégico para negociar e quitar suas dívidas de forma eficiente.</BulletItem>
            <BulletItem><strong>Prevenção de Novas Dívidas</strong> — Aprenda a evitar o endividamento futuro e construa uma base financeira segura.</BulletItem>
          </ul>
        </div>

        {/* Módulo 3 */}
        <div>
          <SectionTitle><TrendingUp size={16} /> 3. Investimentos Inteligentes</SectionTitle>
          <ul className="space-y-1">
            <BulletItem><strong>Educação Financeira</strong> — Desmistifique o mundo dos investimentos e entenda as opções disponíveis.</BulletItem>
            <BulletItem><strong>Perfil de Investidor</strong> — Descubra seu perfil (conservador, moderado, arrojado) para decisões alinhadas aos seus objetivos.</BulletItem>
            <BulletItem><strong>Montagem de Carteira</strong> — Orientações para construir uma carteira diversificada adequada às suas metas.</BulletItem>
            <BulletItem><strong>Acompanhamento e Ajustes</strong> — Aprenda a monitorar seus investimentos e otimizar seus retornos.</BulletItem>
          </ul>
        </div>

        {/* Como funciona */}
        <div className="rounded-xl p-5 space-y-3" style={{ backgroundColor: "#0d1a0d", border: "1px solid #14532d" }}>
          <h3 className="text-base font-bold text-white mb-2">Como Funciona</h3>
          <div className="flex items-start gap-3">
            <span className="text-lg font-bold flex-shrink-0" style={{ color: "#22c55e" }}>→</span>
            <p className="text-sm" style={{ color: "#d1d5db" }}>6 sessões online no seu ritmo, com acompanhamento personalizado e suporte pelo WhatsApp durante toda a jornada.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-lg font-bold flex-shrink-0" style={{ color: "#22c55e" }}>→</span>
            <p className="text-sm" style={{ color: "#d1d5db" }}>Após o final (30–45 dias): sessão extra para ajustes e correções de rota.</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-lg font-bold flex-shrink-0" style={{ color: "#22c55e" }}>→</span>
            <p className="text-sm" style={{ color: "#d1d5db" }}>Material de apoio para acompanhamento e consulta.</p>
          </div>
        </div>

        {/* Destaque */}
        <div className="rounded-xl p-4 text-center" style={{ backgroundColor: "#052e16", border: "1px solid #22c55e" }}>
          <p className="text-sm font-semibold" style={{ color: "#22c55e" }}>
            Entre em contato para agendar sua sessão <span className="uppercase font-bold">gratuíta</span> e dar o primeiro passo!
          </p>
        </div>

        <CTAWhatsApp />
      </div>
    </div>
  );
}

function MentoriaPJ() {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{ backgroundColor: "#111111", border: "1px solid #1f2937" }}
    >
      {/* Header */}
      <div className="px-8 py-6" style={{ backgroundColor: "#0d1218", borderBottom: "1px solid #1f2937" }}>
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg" style={{ backgroundColor: "#1e3a5f" }}>
            <Building2 size={22} style={{ color: "#60a5fa" }} />
          </div>
          <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full" style={{ border: "1px solid #60a5fa", color: "#60a5fa" }}>
            Pessoa Jurídica
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Mentoria PJ</h2>
        <p className="text-base font-semibold" style={{ color: "#60a5fa" }}>"Empresa de Alta Performance"</p>
        <p className="text-sm mt-2" style={{ color: "#9ca3af" }}>Transforme sua Visão em Lucro</p>
      </div>

      {/* Body */}
      <div className="px-8 py-6 space-y-6">
        <p className="text-sm leading-relaxed" style={{ color: "#d1d5db" }}>
          No dinâmico cenário empresarial atual, empreendedores e gestores de PMEs precisam de estratégia e clareza financeira. A Mentoria "Empresa de Alta Performance" é um programa abrangente e personalizado para impulsionar o crescimento sustentável e a lucratividade do seu negócio.
        </p>

        {/* Módulo 1 */}
        <div>
          <h3 className="text-lg font-bold mb-3 flex items-center gap-2" style={{ color: "#60a5fa" }}>
            <Target size={16} /> 1. Diagnóstico e Alinhamento Estratégico
          </h3>
          <ul className="space-y-1">
            <li className="flex items-start gap-2 text-sm mb-2" style={{ color: "#d1d5db" }}>
              <CheckCircle size={15} className="mt-0.5 flex-shrink-0" style={{ color: "#60a5fa" }} />
              <span><strong>Sessão de Alinhamento PJ</strong> — Diagnóstico rápido das suas necessidades e objetivos empresariais.</span>
            </li>
            <li className="flex items-start gap-2 text-sm mb-2" style={{ color: "#d1d5db" }}>
              <CheckCircle size={15} className="mt-0.5 flex-shrink-0" style={{ color: "#60a5fa" }} />
              <span><strong>Rota Financeira Inicial PJ</strong> — Diagnóstico financeiro, Roda do Dinheiro e metas práticas de curto prazo.</span>
            </li>
            <li className="flex items-start gap-2 text-sm mb-2" style={{ color: "#d1d5db" }}>
              <CheckCircle size={15} className="mt-0.5 flex-shrink-0" style={{ color: "#60a5fa" }} />
              <span><strong>Roda do Negócio</strong> — Avaliação das principais áreas do empreendimento para identificar prioridades.</span>
            </li>
          </ul>
        </div>

        {/* Módulo 2 */}
        <div>
          <h3 className="text-lg font-bold mb-3 flex items-center gap-2" style={{ color: "#60a5fa" }}>
            <Users size={16} /> 2. Objetivos e Perfil Comportamental
          </h3>
          <ul className="space-y-1">
            <li className="flex items-start gap-2 text-sm mb-2" style={{ color: "#d1d5db" }}>
              <CheckCircle size={15} className="mt-0.5 flex-shrink-0" style={{ color: "#60a5fa" }} />
              <span><strong>Objetivos & Metas PJ</strong> — Metas SMART totalmente alinhadas ao crescimento do seu negócio.</span>
            </li>
            <li className="flex items-start gap-2 text-sm mb-2" style={{ color: "#d1d5db" }}>
              <CheckCircle size={15} className="mt-0.5 flex-shrink-0" style={{ color: "#60a5fa" }} />
              <span><strong>Perfil Comportamental</strong> — Avaliação para personalizar estratégias financeiras e de gestão.</span>
            </li>
          </ul>
        </div>

        {/* Módulo 3 */}
        <div>
          <h3 className="text-lg font-bold mb-3 flex items-center gap-2" style={{ color: "#60a5fa" }}>
            <BarChart2 size={16} /> 3. Separação Financeira PF x PJ
          </h3>
          <ul className="space-y-1">
            <li className="flex items-start gap-2 text-sm mb-2" style={{ color: "#d1d5db" }}>
              <CheckCircle size={15} className="mt-0.5 flex-shrink-0" style={{ color: "#60a5fa" }} />
              <span><strong>Análise de Dados PF x PJ</strong> — Diagnóstico claro e prático dos dados financeiros pessoais e empresariais.</span>
            </li>
            <li className="flex items-start gap-2 text-sm mb-2" style={{ color: "#d1d5db" }}>
              <CheckCircle size={15} className="mt-0.5 flex-shrink-0" style={{ color: "#60a5fa" }} />
              <span><strong>Diagnóstico Separação PF x PJ</strong> — Implementação da separação clara das finanças pessoais e empresariais.</span>
            </li>
            <li className="flex items-start gap-2 text-sm mb-2" style={{ color: "#d1d5db" }}>
              <CheckCircle size={15} className="mt-0.5 flex-shrink-0" style={{ color: "#60a5fa" }} />
              <span><strong>Levantamento de Dados</strong> — Registro detalhado dos dados financeiros para análise precisa.</span>
            </li>
          </ul>
        </div>

        {/* Módulo 4 */}
        <div>
          <h3 className="text-lg font-bold mb-3 flex items-center gap-2" style={{ color: "#60a5fa" }}>
            <TrendingUp size={16} /> 4. Otimização de Custos e Fluxo de Caixa
          </h3>
          <ul className="space-y-1">
            <li className="flex items-start gap-2 text-sm mb-2" style={{ color: "#d1d5db" }}>
              <CheckCircle size={15} className="mt-0.5 flex-shrink-0" style={{ color: "#60a5fa" }} />
              <span><strong>Metas de Gastos PF x PJ</strong> — Ferramentas visuais para controle diário e equilíbrio financeiro.</span>
            </li>
            <li className="flex items-start gap-2 text-sm mb-2" style={{ color: "#d1d5db" }}>
              <CheckCircle size={15} className="mt-0.5 flex-shrink-0" style={{ color: "#60a5fa" }} />
              <span><strong>Fluxo de Caixa</strong> — Análise e diagnóstico dos dados financeiros empresariais.</span>
            </li>
            <li className="flex items-start gap-2 text-sm mb-2" style={{ color: "#d1d5db" }}>
              <CheckCircle size={15} className="mt-0.5 flex-shrink-0" style={{ color: "#60a5fa" }} />
              <span><strong>Análise de DRE e Balanço</strong> — Avaliação da saúde financeira via indicadores estratégicos.</span>
            </li>
            <li className="flex items-start gap-2 text-sm mb-2" style={{ color: "#d1d5db" }}>
              <CheckCircle size={15} className="mt-0.5 flex-shrink-0" style={{ color: "#60a5fa" }} />
              <span><strong>Redução de Custos</strong> — Identificação prática de oportunidades de redução e aumento de eficiência.</span>
            </li>
            <li className="flex items-start gap-2 text-sm mb-2" style={{ color: "#d1d5db" }}>
              <CheckCircle size={15} className="mt-0.5 flex-shrink-0" style={{ color: "#60a5fa" }} />
              <span><strong>Ciclo Financeiro Operacional</strong> — Ajuste estratégico do ciclo operacional para estabilidade do caixa.</span>
            </li>
          </ul>
        </div>

        {/* Módulo 5 */}
        <div>
          <h3 className="text-lg font-bold mb-3 flex items-center gap-2" style={{ color: "#60a5fa" }}>
            <Award size={16} /> 5. Planejamento Contínuo e Evolução
          </h3>
          <ul className="space-y-1">
            <li className="flex items-start gap-2 text-sm mb-2" style={{ color: "#d1d5db" }}>
              <CheckCircle size={15} className="mt-0.5 flex-shrink-0" style={{ color: "#60a5fa" }} />
              <span><strong>Foco na Solução</strong> — Plano estratégico com análise SWOT e ações de curto e médio prazo.</span>
            </li>
            <li className="flex items-start gap-2 text-sm mb-2" style={{ color: "#d1d5db" }}>
              <CheckCircle size={15} className="mt-0.5 flex-shrink-0" style={{ color: "#60a5fa" }} />
              <span><strong>Relatório Final de Evolução</strong> — Análise dos resultados com recomendações estratégicas para o futuro.</span>
            </li>
            <li className="flex items-start gap-2 text-sm mb-2" style={{ color: "#d1d5db" }}>
              <CheckCircle size={15} className="mt-0.5 flex-shrink-0" style={{ color: "#60a5fa" }} />
              <span><strong>Plano 90 Dias</strong> — Objetivos claros e ações estratégicas para resultados impactantes em até 90 dias.</span>
            </li>
          </ul>
        </div>

        {/* Destaque */}
        <div className="rounded-xl p-4 text-center" style={{ backgroundColor: "#0d1a2e", border: "1px solid #60a5fa" }}>
          <p className="text-sm font-semibold" style={{ color: "#60a5fa" }}>
            Invista no futuro da sua empresa — orientação personalizada, clareza financeira e crescimento sustentável.
          </p>
        </div>

        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 font-bold uppercase tracking-wider text-white rounded-lg px-8 py-4 text-sm transition-all duration-200 w-full mt-6"
          style={{ backgroundColor: "#2563eb" }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1d4ed8")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#2563eb")}
        >
          <MessageCircle size={18} />
          QUERO SABER MAIS
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}

export default function Produtos() {
  return (
    <div style={{ backgroundColor: "#080808", color: "#ffffff", fontFamily: "'Inter', sans-serif", minHeight: "100vh" }}>

      {/* Hero da página */}
      <section className="py-16 px-4 text-center" style={{ borderBottom: "1px solid #1f2937" }}>
        <span
          className="text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full inline-block mb-6"
          style={{ border: "1px solid #22c55e", color: "#22c55e" }}
        >
          TODOS OS PRODUTOS
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Escolha o Programa Ideal para Você
        </h1>
        <p className="text-sm max-w-xl mx-auto" style={{ color: "#9ca3af" }}>
          Seja para organizar sua vida financeira pessoal ou impulsionar o crescimento da sua empresa, temos a mentoria certa para você.
        </p>
      </section>

      {/* Cards */}
      <section className="py-12 px-4 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <MentoriaPF />
          <MentoriaPJ />
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #1f2937" }} className="py-8 px-4 text-center">
        <p className="text-sm mb-2" style={{ color: "#6b7280" }}>
          © 2025 José Gonçalves — Destravando suas Finanças. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
