import { Link } from "react-router-dom";
import {
  MessageCircle, CheckCircle, TrendingUp, Target, BarChart2,
  Users, Award, ArrowRight, Building2, ArrowLeft,
} from "lucide-react";

const WA_URL = "https://wa.me/5551980611212";

function SectionTitleBlue({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-lg font-bold mb-3 flex items-center gap-2" style={{ color: "#60a5fa" }}>
      {children}
    </h3>
  );
}

function BulletItemBlue({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-sm mb-2" style={{ color: "#d1d5db" }}>
      <CheckCircle size={15} className="mt-0.5 flex-shrink-0" style={{ color: "#60a5fa" }} />
      <span>{children}</span>
    </li>
  );
}

export default function MentoriaPJPage() {
  return (
    <div style={{ backgroundColor: "#080808", color: "#ffffff", fontFamily: "'Inter', sans-serif", minHeight: "100vh" }}>

      {/* BACK */}
      <div className="pt-5 px-4 max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-medium transition-all duration-200"
          style={{ color: "#6b7280" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#60a5fa")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
        >
          <ArrowLeft size={14} />
          Voltar à página inicial
        </Link>
      </div>

      {/* HERO */}
      <section className="pt-10 pb-12 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-center mb-5">
            <div className="p-3 rounded-2xl" style={{ backgroundColor: "#0d1a2e" }}>
              <Building2 size={32} style={{ color: "#60a5fa" }} />
            </div>
          </div>
          <span
            className="text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full inline-block mb-5"
            style={{ border: "1px solid #60a5fa", color: "#60a5fa" }}
          >
            Pessoa Jurídica
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Mentoria PJ</h1>
          <p className="text-lg font-semibold mb-2" style={{ color: "#60a5fa" }}>"Empresa de Alta Performance"</p>
          <p className="text-base mb-4" style={{ color: "#9ca3af" }}>Transforme sua Visão em Lucro</p>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="pb-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div
            className="rounded-2xl overflow-hidden"
            style={{ backgroundColor: "#111111", border: "1px solid #1f2937" }}
          >
            {/* Header do card */}
            <div className="px-8 py-6" style={{ backgroundColor: "#0d1218", borderBottom: "1px solid #1f2937" }}>
              <p className="text-sm leading-relaxed" style={{ color: "#d1d5db" }}>
                No dinâmico cenário empresarial atual, empreendedores e gestores de PMEs precisam de estratégia e clareza financeira. A Mentoria "Empresa de Alta Performance" é um programa abrangente e personalizado para impulsionar o crescimento sustentável e a lucratividade do seu negócio.
              </p>
            </div>

            <div className="px-8 py-6 space-y-6">
              {/* Módulo 1 */}
              <div>
                <SectionTitleBlue><Target size={16} /> 1. Diagnóstico e Alinhamento Estratégico</SectionTitleBlue>
                <ul className="space-y-1">
                  <BulletItemBlue><strong>Sessão de Alinhamento PJ</strong> — Diagnóstico rápido das suas necessidades e objetivos empresariais.</BulletItemBlue>
                  <BulletItemBlue><strong>Rota Financeira Inicial PJ</strong> — Diagnóstico financeiro, Roda do Dinheiro e metas práticas de curto prazo.</BulletItemBlue>
                  <BulletItemBlue><strong>Roda do Negócio</strong> — Avaliação das principais áreas do empreendimento para identificar prioridades.</BulletItemBlue>
                </ul>
              </div>

              {/* Módulo 2 */}
              <div>
                <SectionTitleBlue><Users size={16} /> 2. Objetivos e Perfil Comportamental</SectionTitleBlue>
                <ul className="space-y-1">
                  <BulletItemBlue><strong>Objetivos & Metas PJ</strong> — Metas SMART totalmente alinhadas ao crescimento do seu negócio.</BulletItemBlue>
                  <BulletItemBlue><strong>Perfil Comportamental</strong> — Avaliação para personalizar estratégias financeiras e de gestão.</BulletItemBlue>
                </ul>
              </div>

              {/* Módulo 3 */}
              <div>
                <SectionTitleBlue><BarChart2 size={16} /> 3. Separação Financeira PF x PJ</SectionTitleBlue>
                <ul className="space-y-1">
                  <BulletItemBlue><strong>Análise de Dados PF x PJ</strong> — Diagnóstico claro e prático dos dados financeiros pessoais e empresariais.</BulletItemBlue>
                  <BulletItemBlue><strong>Diagnóstico Separação PF x PJ</strong> — Implementação da separação clara das finanças pessoais e empresariais.</BulletItemBlue>
                  <BulletItemBlue><strong>Levantamento de Dados</strong> — Registro detalhado dos dados financeiros para análise precisa.</BulletItemBlue>
                </ul>
              </div>

              {/* Módulo 4 */}
              <div>
                <SectionTitleBlue><TrendingUp size={16} /> 4. Otimização de Custos e Fluxo de Caixa</SectionTitleBlue>
                <ul className="space-y-1">
                  <BulletItemBlue><strong>Metas de Gastos PF x PJ</strong> — Ferramentas visuais para controle diário e equilíbrio financeiro.</BulletItemBlue>
                  <BulletItemBlue><strong>Fluxo de Caixa</strong> — Análise e diagnóstico dos dados financeiros empresariais.</BulletItemBlue>
                  <BulletItemBlue><strong>Análise de DRE e Balanço</strong> — Avaliação da saúde financeira via indicadores estratégicos.</BulletItemBlue>
                  <BulletItemBlue><strong>Redução de Custos</strong> — Identificação prática de oportunidades de redução e aumento de eficiência.</BulletItemBlue>
                  <BulletItemBlue><strong>Ciclo Financeiro Operacional</strong> — Ajuste estratégico do ciclo operacional para estabilidade do caixa.</BulletItemBlue>
                </ul>
              </div>

              {/* Módulo 5 */}
              <div>
                <SectionTitleBlue><Award size={16} /> 5. Planejamento Contínuo e Evolução</SectionTitleBlue>
                <ul className="space-y-1">
                  <BulletItemBlue><strong>Foco na Solução</strong> — Plano estratégico com análise SWOT e ações de curto e médio prazo.</BulletItemBlue>
                  <BulletItemBlue><strong>Relatório Final de Evolução</strong> — Análise dos resultados com recomendações estratégicas para o futuro.</BulletItemBlue>
                  <BulletItemBlue><strong>Plano 90 Dias</strong> — Objetivos claros e ações estratégicas para resultados impactantes em até 90 dias.</BulletItemBlue>
                </ul>
              </div>

              {/* Destaque */}
              <div className="rounded-xl p-4 text-center" style={{ backgroundColor: "#0d1a2e", border: "1px solid #60a5fa" }}>
                <p className="text-sm font-semibold" style={{ color: "#60a5fa" }}>
                  Invista no futuro da sua empresa — orientação personalizada, clareza financeira e crescimento sustentável.
                </p>
              </div>

              {/* CTA */}
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

          {/* Ver outros produtos */}
          <div className="mt-8 text-center">
            <p className="text-sm mb-3" style={{ color: "#6b7280" }}>Também pode te interessar:</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/produtos/curso"
                className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded-xl transition-all duration-200"
                style={{ backgroundColor: "#111111", border: "1px solid #1f2937", color: "#9ca3af" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#22c55e30";
                  (e.currentTarget as HTMLElement).style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#1f2937";
                  (e.currentTarget as HTMLElement).style.color = "#9ca3af";
                }}
              >
                Curso Destravando suas Finanças <ArrowRight size={14} />
              </Link>
              <Link
                to="/produtos/mentoria-pf"
                className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded-xl transition-all duration-200"
                style={{ backgroundColor: "#111111", border: "1px solid #1f2937", color: "#9ca3af" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#22c55e30";
                  (e.currentTarget as HTMLElement).style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#1f2937";
                  (e.currentTarget as HTMLElement).style.color = "#9ca3af";
                }}
              >
                Mentoria PF <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: "#050505", borderTop: "1px solid #1f2937" }} className="py-8 px-4 text-center">
        <p className="text-sm mb-2" style={{ color: "#6b7280" }}>
          © 2025 José Gonçalves — Destravando suas Finanças. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
