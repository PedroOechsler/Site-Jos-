import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Instagram, Facebook, Mail, ArrowRight, BookOpen, User, Building2, LayoutGrid } from "lucide-react";
import CursoPage from "./pages/CursoPage";
import MentoriaPFPage from "./pages/MentoriaPFPage";
import MentoriaPJPage from "./pages/MentoriaPJPage";

const INSTAGRAM_URL = "https://www.instagram.com/destravandoasfinancas/";
const FACEBOOK_URL = "https://www.facebook.com/destravandoasfinancas?locale=id_ID";
const EMAIL = "destravandominhasfinancas@gmail.com";
const HOTMART_URL = "https://pay.hotmart.com/J105769400U";
const WA_URL = "https://wa.me/5551980611212";

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav
      className="fixed top-0 right-0 z-50 flex items-center"
      style={{ padding: "12px 20px" }}
    >
      <Link
        to={isHome ? "/produtos/curso" : "/"}
        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full transition-all duration-200"
        style={{
          backgroundColor: !isHome ? "#22c55e" : "rgba(17,17,17,0.92)",
          color: !isHome ? "#ffffff" : "#22c55e",
          border: "1px solid #22c55e",
          backdropFilter: "blur(8px)",
        }}
      >
        <LayoutGrid size={13} />
        {isHome ? "Ver Produtos" : "Página Inicial"}
      </Link>
    </nav>
  );
}

function SocialButton({
  href,
  icon,
  label,
  color,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  color: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2.5 px-5 py-3 rounded-xl font-medium text-sm transition-all duration-200"
      style={{
        backgroundColor: "#111111",
        border: `1px solid ${color}30`,
        color: color,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = `${color}15`;
        e.currentTarget.style.borderColor = color;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "#111111";
        e.currentTarget.style.borderColor = `${color}30`;
      }}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}

interface ProductCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  accentColor: string;
  href: string;
  badge: string;
}

function ProductCard({ icon, title, subtitle, description, accentColor, href, badge }: ProductCardProps) {
  return (
    <Link
      to={href}
      className="block rounded-2xl overflow-hidden transition-all duration-300 group"
      style={{
        backgroundColor: "#111111",
        border: `1px solid #1f2937`,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = accentColor;
        (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "#1f2937";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      {/* Card top accent line */}
      <div style={{ height: 3, backgroundColor: accentColor }} />

      <div className="p-6">
        {/* Icon + Badge */}
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: `${accentColor}15` }}
          >
            {icon}
          </div>
          <span
            className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
            style={{ border: `1px solid ${accentColor}50`, color: accentColor, backgroundColor: `${accentColor}10` }}
          >
            {badge}
          </span>
        </div>

        {/* Text */}
        <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
        <p className="text-xs font-semibold mb-3" style={{ color: accentColor }}>{subtitle}</p>
        <p className="text-sm leading-relaxed" style={{ color: "#9ca3af" }}>{description}</p>

        {/* CTA */}
        <div
          className="flex items-center gap-2 mt-5 text-sm font-semibold transition-all duration-200"
          style={{ color: accentColor }}
        >
          Saiba mais
          <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}

function HomePage() {
  return (
    <div
      style={{
        backgroundColor: "#080808",
        color: "#ffffff",
        fontFamily: "'Inter', sans-serif",
        minHeight: "100vh",
      }}
    >
      {/* HERO */}
      <section className="pt-24 pb-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <span
              className="text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full"
              style={{ border: "1px solid #22c55e", color: "#22c55e" }}
            >
              TRANSFORMAÇÃO FINANCEIRA COMPROVADA
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Chega de Dívidas, Sufoco e{" "}
            <span style={{ color: "#22c55e" }}>Dinheiro Curto</span>{" "}
            no Final do Mês
          </h1>

          <p className="text-base md:text-lg leading-relaxed" style={{ color: "#9ca3af" }}>
            Descubra o método que já ajudou centenas de brasileiros a{" "}
            <strong style={{ color: "#ffffff" }}>sair das dívidas</strong>, organizar a vida financeira e começar a
            construir o futuro que merecem — sem complicação.
          </p>
        </div>
      </section>

      {/* PROFESSOR */}
      <section style={{ backgroundColor: "#0a0a0a" }} className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            {/* Foto */}
            <div className="flex-shrink-0">
              <div
                className="w-40 h-40 rounded-full overflow-hidden"
                style={{ border: "3px solid #22c55e" }}
              >
                <img
                  src="https://pub-c0bfb119504542e0b2e6ebc8f6b3b1df.r2.dev/user-uploads/user_33Qg0jfr0eu3UGB1JTHecnUCUau/3952272e-e1e6-4515-ac80-ee8b4271592a.png"
                  alt="José Gonçalves"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 10%" }}
                />
              </div>
            </div>

            {/* Bio */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "#22c55e" }}>
                QUEM VAI TE ENSINAR
              </p>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">José Gonçalves</h2>
              <p className="text-sm mb-3 leading-relaxed" style={{ color: "#9ca3af" }}>
                Sou José Gonçalves, Especialista em Finanças com mais de 30 anos de experiência no mercado financeiro, e estarei com você nessa jornada. Muita gente acha que para investir é preciso ter muito dinheiro ou ser um gênio da matemática. Eu estou aqui para te provar que isso não é verdade. O que você precisa não é de mais dinheiro agora, é de estratégia e método.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#9ca3af" }}>
                Já ajudei centenas de famílias brasileiras a saírem das dívidas, organizarem seu dinheiro e construírem um futuro com mais segurança e tranquilidade — sem precisar ganhar mais, apenas gerenciando melhor.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-3 mt-5">
                {["+500 alunos", "Método comprovado", "30+ anos de experiência"].map((stat, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium px-3 py-2 rounded-lg"
                    style={{ backgroundColor: "#0d2010", border: "1px solid #22c55e30", color: "#22c55e" }}
                  >
                    {stat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REDES SOCIAIS */}
      <section style={{ backgroundColor: "#080808" }} className="py-14 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#22c55e" }}>
            CONECTE-SE
          </p>
          <h2 className="text-xl md:text-2xl font-bold mb-2">Siga o José nas redes sociais</h2>
          <p className="text-sm mb-8" style={{ color: "#6b7280" }}>
            Dicas gratuitas sobre finanças todo dia
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <SocialButton
              href={INSTAGRAM_URL}
              icon={<Instagram size={18} />}
              label="@destravandoasfinancas"
              color="#e1306c"
            />
            <SocialButton
              href={FACEBOOK_URL}
              icon={<Facebook size={18} />}
              label="destravandoasfinancas"
              color="#1877f2"
            />
            <SocialButton
              href={`mailto:${EMAIL}`}
              icon={<Mail size={18} />}
              label={EMAIL}
              color="#22c55e"
            />
          </div>
        </div>
      </section>

      {/* DIVISOR */}
      <div style={{ height: 1, backgroundColor: "#1f2937", maxWidth: 800, margin: "0 auto" }} />

      {/* PRODUTOS */}
      <section style={{ backgroundColor: "#080808" }} className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-center mb-2" style={{ color: "#22c55e" }}>
            NOSSOS PROGRAMAS
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
            Escolha o caminho certo para você
          </h2>
          <p className="text-sm text-center mb-10" style={{ color: "#6b7280" }}>
            Clique em qualquer produto para ver todos os detalhes
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <ProductCard
              icon={<BookOpen size={24} style={{ color: "#22c55e" }} />}
              title="Curso Destravando suas Finanças"
              subtitle="Método completo em vídeo"
              description="Curso online com 6 módulos para você sair das dívidas, organizar as finanças e começar a investir — no seu ritmo."
              accentColor="#22c55e"
              href="/produtos/curso"
              badge="Mais Popular"
            />
            <ProductCard
              icon={<User size={24} style={{ color: "#22c55e" }} />}
              title="Mentoria PF"
              subtitle="Pessoa Física"
              description="Mentoria personalizada para indivíduos que buscam clareza financeira, quitação de dívidas e começo nos investimentos."
              accentColor="#22c55e"
              href="/produtos/mentoria-pf"
              badge="Personalizado"
            />
            <ProductCard
              icon={<Building2 size={24} style={{ color: "#60a5fa" }} />}
              title="Mentoria PJ"
              subtitle="Pessoa Jurídica"
              description="Mentoria para empreendedores e gestores de PMEs que querem clareza financeira, redução de custos e crescimento sustentável."
              accentColor="#60a5fa"
              href="/produtos/mentoria-pj"
              badge="Empresarial"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: "#050505", borderTop: "1px solid #1f2937" }} className="py-8 px-4 text-center">
        <div className="mb-5">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-sm px-6 py-3 rounded-full transition-all duration-200"
            style={{ backgroundColor: "#22c55e", color: "#ffffff" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#16a34a")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#22c55e")}
          >
            Ficou com dúvida? Fale no WhatsApp
          </a>
        </div>
        <p className="text-sm mb-2" style={{ color: "#6b7280" }}>
          © 2025 José Gonçalves — Destravando suas Finanças. Todos os direitos reservados.
        </p>
        <p className="text-xs" style={{ color: "#4b5563" }}>
          Os resultados apresentados são individuais e podem variar de pessoa para pessoa.
        </p>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produtos/curso" element={<CursoPage />} />
        <Route path="/produtos/mentoria-pf" element={<MentoriaPFPage />} />
        <Route path="/produtos/mentoria-pj" element={<MentoriaPJPage />} />
        {/* Rota legada */}
        <Route path="/produtos" element={<CursoPage />} />
      </Routes>
    </>
  );
}
