import { Link } from "react-router-dom";
import {
  MessageCircle, CheckCircle, TrendingUp, Target, BarChart2,
  ArrowRight, User, ArrowLeft,
} from "lucide-react";

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

export default function MentoriaPFPage() {
  return (
    <div style={{ backgroundColor: "#080808", color: "#ffffff", fontFamily: "'Inter', sans-serif", minHeight: "100vh" }}>

      {/* BACK */}
      <div className="pt-5 px-4 max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-medium transition-all duration-200"
          style={{ color: "#6b7280" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#22c55e")}
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
            <div className="p-3 rounded-2xl" style={{ backgroundColor: "#0d2010" }}>
              <User size={32} style={{ color: "#22c55e" }} />
            </div>
          </div>
          <span
            className="text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full inline-block mb-5"
            style={{ border: "1px solid #22c55e", color: "#22c55e" }}
          >
            Pessoa Física
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Mentoria PF</h1>
          <p className="text-lg font-semibold mb-2" style={{ color: "#22c55e" }}>"Destravando suas Finanças"</p>
          <p className="text-base mb-4" style={{ color: "#9ca3af" }}>Conquiste sua Liberdade Financeira</p>
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
            <div className="px-8 py-6" style={{ backgroundColor: "#0d1a0d", borderBottom: "1px solid #1f2937" }}>
              <p className="text-sm leading-relaxed" style={{ color: "#d1d5db" }}>
                Você se sente sobrecarregado(a) com suas finanças? Sonha em ter controle sobre seu dinheiro, quitar dívidas e fazer seu patrimônio crescer? A Mentoria PF é um programa completo e personalizado para indivíduos que buscam clareza, estratégia e ação para transformar sua relação com o dinheiro.
              </p>
            </div>

            <div className="px-8 py-6 space-y-6">
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
                  Entre em contato para agendar sua sessão <span className="uppercase font-bold">gratuita</span> e dar o primeiro passo!
                </p>
              </div>

              {/* CTA */}
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
                to="/produtos/mentoria-pj"
                className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded-xl transition-all duration-200"
                style={{ backgroundColor: "#111111", border: "1px solid #1f2937", color: "#9ca3af" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#60a5fa30";
                  (e.currentTarget as HTMLElement).style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#1f2937";
                  (e.currentTarget as HTMLElement).style.color = "#9ca3af";
                }}
              >
                Mentoria PJ <ArrowRight size={14} />
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
