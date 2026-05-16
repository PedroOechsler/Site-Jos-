import { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { ArrowRight, ShieldCheck, Clock, Lock, BookOpen, BarChart2, Target, Lightbulb, PiggyBank, TrendingUp, CheckCircle, XCircle, ChevronDown, Star, LayoutGrid } from "lucide-react";
import Produtos from "./pages/Produtos";

const HOTMART_URL = "https://pay.hotmart.com/J105769400U";
const VIDEO_URL = "https://www.youtube.com/embed/ObVhAP82txE?si=UF5rGF72FeIuPbch";

function useCountdown(initialHours: number, initialMinutes: number, initialSeconds: number) {
  const [time, setTime] = useState({
    hours: initialHours,
    minutes: initialMinutes,
    seconds: initialSeconds,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return time;
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function CTAButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={HOTMART_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 font-bold uppercase tracking-wider text-white rounded-lg transition-all duration-200 cursor-pointer ${className}`}
      style={{ backgroundColor: "#22c55e" }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#16a34a")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#22c55e")}
    >
      QUERO DESTRAVAR MINHAS FINANÇAS AGORA! <ArrowRight size={18} />
    </a>
  );
}

function CountdownTimer({ hours, minutes, seconds }: { hours: number; minutes: number; seconds: number }) {
  return (
    <div className="flex items-center justify-center gap-6">
      <div className="text-center">
        <span className="text-5xl font-bold" style={{ color: "#22c55e" }}>{pad(hours)}</span>
        <p className="text-xs uppercase tracking-widest mt-1" style={{ color: "#22c55e" }}>HORAS</p>
      </div>
      <span className="text-3xl font-bold" style={{ color: "#22c55e" }}>:</span>
      <div className="text-center">
        <span className="text-5xl font-bold" style={{ color: "#22c55e" }}>{pad(minutes)}</span>
        <p className="text-xs uppercase tracking-widest mt-1" style={{ color: "#22c55e" }}>MIN</p>
      </div>
      <span className="text-3xl font-bold" style={{ color: "#22c55e" }}>:</span>
      <div className="text-center">
        <span className="text-5xl font-bold" style={{ color: "#22c55e" }}>{pad(seconds)}</span>
        <p className="text-xs uppercase tracking-widest mt-1" style={{ color: "#22c55e" }}>SEG</p>
      </div>
    </div>
  );
}

const painPoints = [
  "Tem mais dívidas do que consegue pagar",
  "Chega ao final do mês sem saber para onde foi o dinheiro",
  "Seu nome está negativado no SPC/Serasa",
  "Vive no cheque especial ou no limite do cartão",
  "Quer poupar mas nunca sobra nada",
  "Sente ansiedade e estresse por causa das contas",
  "Brigas em família por causa do dinheiro",
  "Sonhos engavetados por falta de dinheiro",
];

const modules = [
  {
    icon: <BarChart2 size={28} style={{ color: "#22c55e" }} />,
    title: "Saída das Dívidas",
    desc: "Estratégia passo a passo para liquidar suas dívidas do jeito mais inteligente, pagando menos juros e recuperando sua liberdade financeira.",
  },
  {
    icon: <BookOpen size={28} style={{ color: "#22c55e" }} />,
    title: "Organização Financeira",
    desc: "Sistema simples de controle do dinheiro que funciona de verdade. Saiba exatamente o que entra, o que sai e como sobrar dinheiro todo mês.",
  },
  {
    icon: <Target size={28} style={{ color: "#22c55e" }} />,
    title: "Metas e Futuro",
    desc: "Como criar metas financeiras claras e alcançáveis. Transforme sonhos vagos em planos concretos com datas e números reais.",
  },
  {
    icon: <Lightbulb size={28} style={{ color: "#22c55e" }} />,
    title: "Mentalidade Financeira",
    desc: "Reprograme sua relação com o dinheiro. Entenda os gatilhos que sabotam suas finanças e como superá-los definitivamente.",
  },
  {
    icon: <PiggyBank size={28} style={{ color: "#22c55e" }} />,
    title: "Reserva de Emergência",
    desc: "Aprenda a montar seu colchão financeiro mesmo ganhando pouco. Nunca mais seja pego de surpresa por imprevistos.",
  },
  {
    icon: <TrendingUp size={28} style={{ color: "#22c55e" }} />,
    title: "Primeiros Investimentos",
    desc: "Quando e como começar a fazer seu dinheiro trabalhar para você. Guia completo para iniciantes que querem multiplicar patrimônio.",
  },
];

const bonuses = [
  { icon: <BookOpen size={20} style={{ color: "#22c55e" }} />, title: "Curso Destravando suas Finanças", price: "R$ 397,00", bonus: null },
  { icon: <BookOpen size={20} style={{ color: "#22c55e" }} />, title: 'Bônus 1: E-book "Destravando suas Finanças"', price: "R$ 39,90", bonus: "GRÁTIS" },
  { icon: <BookOpen size={20} style={{ color: "#22c55e" }} />, title: "Bônus 2: Acesso à Comunidade no WhatsApp", price: "R$ 15,00/mês", bonus: "GRÁTIS" },
  { icon: <BookOpen size={20} style={{ color: "#22c55e" }} />, title: "Bônus 3: Consultoria Inicial Personalizada", price: "R$ 200,00", bonus: "GRÁTIS" },
];

const testimonials = [
  {
    initials: "FO",
    name: "Fernanda Oliveira",
    location: "São Paulo, SP",
    text: '"Eu estava com mais de R$ 38.000 em dívidas e sem ver saída. Em 4 meses aplicando o que aprendi com o José, quitei R$ 12.000 de dívida e finalmente consigo respirar. Esse curso mudou minha vida!"',
    result: "Quitou R$ 12.000 em 4 meses",
  },
  {
    initials: "RM",
    name: "Ricardo Mendes",
    location: "Belo Horizonte, MG",
    text: '"Nunca pensei que conseguiria guardar dinheiro. Hoje tenho minha reserva de emergência completa de R$ 15.000. O método do José é simples, sem complicação. Recomendo demais!"',
    result: "Reserva de R$ 15.000 formada",
  },
  {
    initials: "CS",
    name: "Camila Santos",
    location: "Rio de Janeiro, RJ",
    text: '"Cheguei aqui negativada no SPC há 3 anos. Depois do curso, limpei meu nome, organizei meu orçamento e já estou investindo R$ 500 por mês. Inacreditável a transformação!"',
    result: "Nome limpo + investindo todo mês",
  },
];

const faqs = [
  {
    question: "Para quem é esse curso?",
    answer:
      "Para qualquer pessoa que quer sair das dívidas, organizar suas finanças e construir um futuro mais tranquilo. Não importa quanto você ganha — o método funciona para qualquer renda.",
  },
  {
    question: "Preciso ter conhecimento prévio em finanças?",
    answer:
      "Não! O curso foi feito para quem está começando do zero. Tudo é explicado de forma simples e prática, sem jargões complicados.",
  },
  {
    question: "Em quanto tempo vou ver resultados?",
    answer:
      "Muitos alunos relatam mudanças já no primeiro mês. Com dedicação e aplicação do método, você começa a ver diferença no seu orçamento rapidamente.",
  },
  {
    question: "E se eu não gostar? Tem garantia?",
    answer:
      "Sim! Você tem 7 dias de garantia incondicional. Se por qualquer motivo não ficar satisfeito, basta nos enviar uma mensagem e devolvemos 100% do seu dinheiro — sem perguntas.",
  },
  {
    question: "Como funciona a consultoria inicial?",
    answer:
      "Após a compra, você agenda uma sessão de 30 minutos com o José Gonçalves para analisar sua situação financeira atual e criar um plano personalizado para você.",
  },
  {
    question: "Por quanto tempo tenho acesso?",
    answer:
      "Você tem acesso vitalício ao curso. Pode assistir quantas vezes quiser, no seu ritmo, de qualquer dispositivo.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-lg cursor-pointer"
      style={{ backgroundColor: "#111111", border: "1px solid #1f2937" }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between px-5 py-4">
        <span className="font-medium text-sm" style={{ color: "#e5e7eb" }}>{question}</span>
        <ChevronDown
          size={18}
          style={{ color: "#22c55e", transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}
        />
      </div>
      {open && (
        <div className="px-5 pb-4 text-sm" style={{ color: "#9ca3af" }}>
          {answer}
        </div>
      )}
    </div>
  );
}

function Navbar() {
  const location = useLocation();
  const isProdutos = location.pathname === "/produtos";

  return (
    <nav
      className="fixed top-0 right-0 z-50 flex items-center"
      style={{ padding: "12px 20px" }}
    >
      <Link
        to={isProdutos ? "/" : "/produtos"}
        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full transition-all duration-200"
        style={{
          backgroundColor: isProdutos ? "#22c55e" : "rgba(17,17,17,0.92)",
          color: isProdutos ? "#ffffff" : "#22c55e",
          border: "1px solid #22c55e",
          backdropFilter: "blur(8px)",
        }}
      >
        <LayoutGrid size={13} />
        {isProdutos ? "Página Inicial" : "Todos os Produtos"}
      </Link>
    </nav>
  );
}

function HomePage() {
  const countdown1 = useCountdown(5, 46, 45);
  const countdown2 = useCountdown(5, 46, 7);

  return (
    <div style={{ backgroundColor: "#080808", color: "#ffffff", fontFamily: "'Inter', sans-serif", minHeight: "100vh" }}>

      {/* HERO SECTION */}
      <section style={{ backgroundColor: "#080808" }} className="py-16 px-4 text-center">
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
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 max-w-3xl mx-auto">
          Chega de Dívidas, Sufoco e{" "}
          <span style={{ color: "#22c55e" }}>Dinheiro Curto</span>{" "}
          no Final do Mês
        </h1>

        <p className="text-base md:text-lg max-w-xl mx-auto mb-10" style={{ color: "#9ca3af" }}>
          Descubra o método que já ajudou centenas de brasileiros a{" "}
          <strong style={{ color: "#ffffff" }}>sair das dívidas</strong>, organizar a vida financeira e começar a
          construir o futuro que merecem — sem complicação.
        </p>

        {/* Video */}
        <div
          className="relative mx-auto mb-8 rounded-xl overflow-hidden"
          style={{ maxWidth: 680, border: "2px solid #1f2937" }}
        >
          <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
            <iframe
              src={VIDEO_URL}
              title="Destravando suas Finanças"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
            />
          </div>
        </div>

        {/* CTA */}
        <CTAButton className="text-sm md:text-base px-8 py-4 mb-3 w-full max-w-md" />
        <p className="text-xs mt-3" style={{ color: "#6b7280" }}>
          <Lock size={12} className="inline mr-1" />
          Compra 100% segura • 7 dias de garantia • Acesso imediato
        </p>
      </section>

      {/* COUNTDOWN BANNER */}
      <section style={{ backgroundColor: "#0d2010" }} className="py-8 px-4 text-center">
        <p className="flex items-center justify-center gap-2 text-sm mb-4" style={{ color: "#22c55e" }}>
          <Clock size={16} />
          <span>Esta oferta especial expira em:</span>
        </p>
        <CountdownTimer {...countdown1} />
      </section>

      {/* DOR / PAIN POINTS */}
      <section style={{ backgroundColor: "#080808" }} className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Você se reconhece em alguma dessas situações?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
            {painPoints.map((point, i) => (
              <div
                key={i}
                className="flex items-start gap-3 px-4 py-3 rounded-lg"
                style={{ backgroundColor: "#111111", border: "1px solid #1f2937" }}
              >
                <XCircle size={18} style={{ color: "#ef4444", flexShrink: 0, marginTop: 2 }} />
                <span className="text-sm" style={{ color: "#d1d5db" }}>{point}</span>
              </div>
            ))}
          </div>

          {/* Call to action text */}
          <div
            className="rounded-xl px-6 py-5 text-center"
            style={{ backgroundColor: "#0a1a0d", border: "1px solid #22c55e" }}
          >
            <p className="text-base font-medium">
              Se você marcou pelo menos um item, o{" "}
              <span style={{ color: "#22c55e" }}>Destravando suas Finanças</span>{" "}
              foi feito <strong>para você.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* PROFESSOR */}
      <section style={{ backgroundColor: "#0a0a0a" }} className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            {/* Photo */}
            <div className="flex-shrink-0">
              <div
                className="w-36 h-36 rounded-full overflow-hidden"
                style={{ border: "3px solid #22c55e" }}
              >
                <img
                  src="https://pub-c0bfb119504542e0b2e6ebc8f6b3b1df.r2.dev/user-uploads/user_33Qg0jfr0eu3UGB1JTHecnUCUau/3952272e-e1e6-4515-ac80-ee8b4271592a.png"
                  alt="José Gonçalves"
                  className="w-full h-full object-cover object-top"
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
              <p className="text-sm mb-3" style={{ color: "#9ca3af" }}>
                Sou José Gonçalves, Especialista em Finanças com mais de 30 anos de experiência no mercado financeiro, e estarei com você nessa jornada. Muita gente acha que para investir é preciso ter muito dinheiro ou ser um gênio da matemática. Eu estou aqui para te provar que isso não é verdade. O que você precisa não é de mais dinheiro agora, é de estratégia e método.
              </p>
              <p className="text-sm" style={{ color: "#9ca3af" }}>
                Já ajudei centenas de famílias brasileiras a saírem das dívidas, organizarem seu dinheiro e construírem um futuro com mais segurança e tranquilidade — sem precisar ganhar mais, apenas gerenciando melhor.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-3 mt-5">
                {["+500 alunos", "Método comprovado", "Resultados reais"].map((stat, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg"
                    style={{ backgroundColor: "#0d2010", border: "1px solid #22c55e", color: "#22c55e" }}
                  >
                    <CheckCircle size={14} />
                    {stat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section style={{ backgroundColor: "#080808" }} className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-center mb-2" style={{ color: "#22c55e" }}>
            CONTEÚDO DO CURSO
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            O que você vai aprender
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {modules.map((mod, i) => (
              <div
                key={i}
                className="rounded-xl p-5"
                style={{ backgroundColor: "#111111", border: "1px solid #1f2937" }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#0d2010" }}
                >
                  {mod.icon}
                </div>
                <h3 className="font-bold text-base mb-2">{mod.title}</h3>
                <p className="text-sm" style={{ color: "#9ca3af" }}>{mod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFER / PRICING */}
      <section style={{ backgroundColor: "#080808" }} className="py-16 px-4">
        <div className="max-w-xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-center mb-2" style={{ color: "#22c55e" }}>
            OFERTA ESPECIAL — TEMPO LIMITADO
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Tudo que você recebe hoje
          </h2>

          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: "2px solid #22c55e" }}
          >
            {/* Card header */}
            <div className="py-5 px-6 text-center" style={{ backgroundColor: "#22c55e" }}>
              <h3 className="text-xl font-bold text-white">Destravando suas Finanças</h3>
              <p className="text-sm text-white opacity-90">Curso Completo + Todos os Bônus</p>
            </div>

            {/* Items */}
            <div style={{ backgroundColor: "#111111" }}>
              {bonuses.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between px-6 py-4"
                  style={{ borderBottom: "1px solid #1f2937" }}
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <span className="text-sm" style={{ color: "#d1d5db" }}>{item.title}</span>
                  </div>
                  <div className="text-right ml-4">
                    {item.bonus ? (
                      <>
                        <p className="text-xs line-through" style={{ color: "#6b7280" }}>{item.price}</p>
                        <p className="text-sm font-bold" style={{ color: "#22c55e" }}>{item.bonus}</p>
                      </>
                    ) : (
                      <p className="text-sm font-semibold" style={{ color: "#22c55e" }}>{item.price}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Price */}
              <div className="px-6 pt-6 pb-2 text-center">
                <p className="text-sm mb-1" style={{ color: "#9ca3af" }}>
                  Valor total de tudo: <span className="line-through">R$ 644,90</span>
                </p>
                <p className="text-sm mb-3" style={{ color: "#9ca3af" }}>Você paga apenas:</p>
                <p className="font-bold mb-1" style={{ color: "#22c55e", fontSize: "3rem", lineHeight: 1 }}>
                  R$ 397<span style={{ fontSize: "1.5rem" }}>,00</span>
                </p>
                <p className="text-sm mb-6" style={{ color: "#9ca3af" }}>ou em até <strong style={{ color: "#ffffff" }}>12x</strong></p>
              </div>

              {/* CTA */}
              <div className="px-6 pb-6">
                <a
                  href={HOTMART_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center font-bold uppercase tracking-wider text-white rounded-lg py-4 transition-all duration-200"
                  style={{ backgroundColor: "#22c55e" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#16a34a")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#22c55e")}
                >
                  SIM! QUERO DESTRAVAR MINHAS FINANÇAS! <ArrowRight size={18} className="inline ml-1" />
                </a>
                <div className="flex items-center justify-center gap-4 mt-4 text-xs" style={{ color: "#9ca3af" }}>
                  <span className="flex items-center gap-1"><ShieldCheck size={13} /> Compra segura</span>
                  <span className="flex items-center gap-1"><Clock size={13} /> Acesso imediato</span>
                  <span className="flex items-center gap-1"><Lock size={13} /> 7 dias de garantia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section style={{ backgroundColor: "#080808" }} className="py-16 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ border: "2px solid #22c55e", backgroundColor: "#0d2010" }}
          >
            <ShieldCheck size={40} style={{ color: "#22c55e" }} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Garantia de 7 Dias — Risco Zero</h2>
          <p className="text-base" style={{ color: "#9ca3af" }}>
            Acreditamos tanto no resultado que oferecemos 7 dias de garantia incondicional. Se por qualquer motivo você não ficar satisfeito, basta nos enviar uma mensagem e devolvemos{" "}
            <strong style={{ color: "#ffffff" }}>100% do seu dinheiro</strong> — sem perguntas, sem burocracia.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ backgroundColor: "#080808" }} className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-center mb-2" style={{ color: "#22c55e" }}>
            HISTÓRIAS REAIS
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
            Vidas transformadas pelo método
          </h2>
          <p className="text-center text-sm mb-10" style={{ color: "#9ca3af" }}>
            Mais de 500 alunos já mudaram de vida. Confira alguns depoimentos reais:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-xl p-5 flex flex-col"
                style={{ backgroundColor: "#111111", border: "1px solid #1f2937" }}
              >
                {/* Avatar + name */}
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                    style={{ backgroundColor: "#22c55e", color: "#ffffff" }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs" style={{ color: "#6b7280" }}>{t.location}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} size={14} fill="#f59e0b" style={{ color: "#f59e0b" }} />
                  ))}
                </div>

                <p className="text-sm flex-1" style={{ color: "#9ca3af" }}>{t.text}</p>

                <div
                  className="flex items-center gap-2 mt-4 pt-4 text-xs font-medium"
                  style={{ borderTop: "1px solid #1f2937", color: "#22c55e" }}
                >
                  <CheckCircle size={13} />
                  {t.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "#080808" }} className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Perguntas Frequentes
          </h2>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ backgroundColor: "#080808" }} className="py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Está pronto para{" "}
            <span style={{ color: "#22c55e" }}>destravar</span>{" "}
            sua vida financeira?
          </h2>
          <p className="text-base mb-8" style={{ color: "#9ca3af" }}>
            Cada dia que passa é mais juros acumulando, mais dívida crescendo, mais sonhos engavetados. Dê o primeiro passo agora.
          </p>

          <CountdownTimer {...countdown2} />

          <div className="mt-8">
            <CTAButton className="text-sm md:text-base px-8 py-4 w-full max-w-md" />
            <p className="text-xs mt-3" style={{ color: "#6b7280" }}>
              <Clock size={12} className="inline mr-1" />
              7 dias de garantia incondicional • Acesso imediato após o pagamento
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: "#050505", borderTop: "1px solid #1f2937" }} className="py-8 px-4 text-center">
        <p className="text-sm mb-2" style={{ color: "#6b7280" }}>
          © 2025 José Gonçalves — Destravando suas Finanças. Todos os direitos reservados.
        </p>
        <p className="text-xs" style={{ color: "#4b5563" }}>
          Os resultados apresentados são individuais e podem variar de pessoa para pessoa. Os depoimentos refletem a experiência real de alunos que aplicaram o método.
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
        <Route path="/produtos" element={<Produtos />} />
      </Routes>
    </>
  );
}
