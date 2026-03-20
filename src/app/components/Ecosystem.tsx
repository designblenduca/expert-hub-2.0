import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Target,
  Network,
  TrendingUp,
  BookOpen,
  BarChart3,
  Cpu,
  Zap,
  ChevronRight,
} from "lucide-react";

const pillars = [
  {
    id: 1,
    number: "01",
    name: "ESTRATÉGIA",
    icon: Target,
    position: "top-left",
    subtitle: "Consultoria & Orientação Individual",
    description:
      "O alicerce do modelo EXPERT começa com uma visão profunda do seu negócio. Definimos as bases estruturais para que cada passo subsequente seja guiado por inteligência estratégica e precisão de mercado.",
    phases: ["Diagnóstico 360°", "Posicionamento Premium", "Método Proprietário", "Plano de Ação"],
  },
  {
    id: 2,
    number: "02",
    name: "CONEXÕES",
    icon: Network,
    position: "top-right",
    subtitle: "Comunidade & Networking Estratégico",
    description:
      "Faça parte de um ecossistema de experts de alto nível. Nosso programa abre portas para masterminds exclusivos, parcerias estratégicas e oportunidades que só existem dentro do Expert Hub.",
    phases: ["Masterminds Privados", "Rede de Parceiros", "Eventos Exclusivos", "Co-criação de Projetos"],
  },
  {
    id: 3,
    number: "03",
    name: "PERFORMANCE",
    icon: TrendingUp,
    position: "top",
    subtitle: "Mentoria & Acompanhamento de Alto Nível",
    description:
      "Acompanhamento próximo e individualizado para destravar gargalos e manter sua execução no ritmo certo. Mentorias individuais e em grupo com foco em resultados mensuráveis.",
    phases: ["Sessões 1:1 Mensais", "Grupo de Accountability", "Sprints de Execução", "Review de Performance"],
  },
  {
    id: 4,
    number: "04",
    name: "EDUCAÇÃO",
    icon: BookOpen,
    position: "bottom-left",
    subtitle: "Conteúdo & Formação Contínua",
    description:
      "Acesso ilimitado a frameworks, templates e treinamentos exclusivos para dominar as ferramentas da nova era. Conteúdo atualizado constantemente com as melhores práticas do mercado.",
    phases: ["B'Academy (Cursos)", "Frameworks Exclusivos", "Workshops Semanais", "Biblioteca de Templates"],
  },
  {
    id: 5,
    number: "05",
    name: "RESULTADOS",
    icon: BarChart3,
    position: "bottom-right",
    subtitle: "Métricas, Rotina & Acompanhamento",
    description:
      "O que não se mede, não se gerencia. Implementamos dashboards, rituais de gestão e acompanhamento de métricas para garantir que cada ação gere impacto mensurável no seu negócio.",
    phases: ["Dashboard de KPIs", "Rituais de Gestão", "OKRs Trimestrais", "Relatórios de Impacto"],
  },
  {
    id: 6,
    number: "06",
    name: "TECNOLOGIA",
    icon: Cpu,
    position: "bottom",
    subtitle: "Tech & Inteligência Artificial",
    description:
      "Implementação de automações, agentes de IA e infraestrutura tecnológica para escalar sem aumentar equipe. Tecnologia como alavanca, não como barreira.",
    phases: ["Auditoria Tech Stack", "Automação de Fluxos", "Agentes de IA", "Integrações & APIs"],
  },
  {
    id: 7,
    number: "CORE",
    name: "IMPLEMENTAÇÃO",
    icon: Zap,
    position: "center",
    subtitle: "O Motor do Ecossistema",
    isCenter: true,
    description:
      "A Implementação é o coração que bombeia vida para cada pilar. Não basta ter estratégia, conexões e tecnologia — é a execução estruturada e contínua que converte conhecimento em resultados reais e sustentáveis. Aqui, transformamos planos em ação.",
    phases: ["Execução Orientada", "Ciclos de Melhoria", "Integração Contínua", "Impacto Mensurável"],
  },
];

// Hexagon positions for 500x510 container, hex size 140x160
const hexPositions: Record<string, { left: number; top: number }> = {
  "top":         { left: 180, top: 10 },
  "top-right":   { left: 327, top: 95 },
  "bottom-right":{ left: 327, top: 265 },
  "bottom":      { left: 180, top: 350 },
  "bottom-left": { left: 33,  top: 265 },
  "top-left":    { left: 33,  top: 95  },
  "center":      { left: 180, top: 180 },
};

function Hexagon({
  pillar,
  isActive,
  onClick,
}: {
  pillar: typeof pillars[0];
  isActive: boolean;
  onClick: () => void;
}) {
  const Icon = pillar.icon;
  const pos = hexPositions[pillar.position];
  return (
    <motion.div
      style={{ position: "absolute", left: pos.left, top: pos.top, width: 140, height: 160 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="cursor-pointer"
    >
      <div
        className="hex-clip w-full h-full flex flex-col items-center justify-center gap-1 transition-all duration-400 border-0"
        style={{
          background: isActive
            ? pillar.isCenter
              ? "linear-gradient(135deg, #dc2626, #991b1b)"
              : "linear-gradient(135deg, #dc2626 0%, #7f1d1d 100%)"
            : pillar.isCenter
            ? "linear-gradient(135deg, #7f1d1d 0%, #450a0a 100%)"
            : "rgba(255,255,255,0.04)",
          boxShadow: isActive
            ? "0 0 30px rgba(220,38,38,0.5), inset 0 0 20px rgba(220,38,38,0.1)"
            : "inset 0 0 0 1.5px rgba(255,255,255,0.07)",
          transition: "all 0.35s ease",
        }}
      >
        <span
          style={{
            fontSize: "9px",
            fontWeight: 800,
            letterSpacing: "0.12em",
            color: isActive ? "#fca5a5" : "#dc2626",
          }}
        >
          {pillar.isCenter ? "CORE" : pillar.number}
        </span>
        <Icon
          size={pillar.isCenter ? 24 : 20}
          style={{ color: isActive ? "#fff" : "#9ca3af" }}
        />
        <span
          style={{
            fontSize: pillar.isCenter ? "9px" : "8px",
            fontWeight: 800,
            letterSpacing: "0.08em",
            color: isActive ? "#fff" : "#9ca3af",
            textAlign: "center",
            lineHeight: 1.2,
            padding: "0 10px",
          }}
        >
          {pillar.name}
        </span>
      </div>
    </motion.div>
  );
}

export function Ecosystem() {
  const [activePillar, setActivePillar] = useState(pillars[6]); // default to center

  return (
    <section id="quem-somos" className="relative bg-[#080808] py-24 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-900 opacity-5 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-red-600" />
            <span className="text-red-500" style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em' }}>
              O ECOSSISTEMA
            </span>
            <div className="h-px w-8 bg-red-600" />
          </div>
          <h2
            className="text-white mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, lineHeight: 1.2 }}
          >
            O Modelo <span style={{ color: "#ef4444" }}>EXPERT</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto" style={{ fontSize: '15px', lineHeight: 1.7 }}>
            7 pilares fundamentais em um ecossistema integrado. O core de{" "}
            <span className="text-white" style={{ fontWeight: 600 }}>
              Implementação
            </span>{" "}
            conecta e alimenta cada dimensão do seu negócio.
          </p>
        </motion.div>

        {/* Main layout */}
        <div className="flex flex-col xl:flex-row items-start gap-12 justify-center">
          {/* Hexagon Grid - Desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="relative shrink-0 hidden md:block"
            style={{ width: 500, height: 510 }}
          >
            {pillars.map((p) => (
              <Hexagon
                key={p.id}
                pillar={p}
                isActive={activePillar.id === p.id}
                onClick={() => setActivePillar(p)}
              />
            ))}
          </motion.div>

          {/* Detail Panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex-1 xl:max-w-md w-full xl:pt-20"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
              >
                {/* Pilar header */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="px-3 py-1 rounded-full border"
                    style={{
                      background: "rgba(220,38,38,0.1)",
                      borderColor: "rgba(220,38,38,0.3)",
                    }}
                  >
                    <span className="text-red-500" style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.12em' }}>
                      PILAR {activePillar.number}
                    </span>
                  </div>
                </div>

                <h3
                  className="text-white mb-2"
                  style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: 800 }}
                >
                  {activePillar.name}
                </h3>
                <p className="text-red-400 mb-4" style={{ fontSize: '14px', fontWeight: 600 }}>
                  {activePillar.subtitle}
                </p>
                <p className="text-gray-400 mb-8" style={{ fontSize: '14px', lineHeight: 1.8 }}>
                  {activePillar.description}
                </p>

                <div className="space-y-3">
                  {activePillar.phases.map((phase, i) => (
                    <motion.div
                      key={phase}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07 }}
                      className="flex items-center gap-3 glass-card rounded-xl px-4 py-3 border border-red-900/20"
                    >
                      <div
                        className="w-6 h-6 rounded-lg bg-red-600/15 border border-red-600/30 flex items-center justify-center shrink-0"
                      >
                        <span className="text-red-500" style={{ fontSize: '10px', fontWeight: 800 }}>
                          0{i + 1}
                        </span>
                      </div>
                      <span className="text-gray-300" style={{ fontSize: '13px', fontWeight: 600 }}>
                        {phase}
                      </span>
                      <ChevronRight size={14} className="text-red-600/50 ml-auto" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Mobile: List of pillars */}
        <div className="md:hidden mt-8 space-y-3">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <motion.button
                key={p.id}
                onClick={() => setActivePillar(p)}
                className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl border text-left transition-all duration-300 ${
                  activePillar.id === p.id
                    ? "border-red-600/50 bg-red-600/10"
                    : "border-white/5 bg-white/3"
                }`}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: activePillar.id === p.id ? "rgba(220,38,38,0.2)" : "rgba(255,255,255,0.04)",
                  }}
                >
                  <Icon size={18} className={activePillar.id === p.id ? "text-red-500" : "text-gray-500"} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-gray-500" style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em' }}>
                    PILAR {p.number}
                  </div>
                  <div
                    className={activePillar.id === p.id ? "text-white" : "text-gray-400"}
                    style={{ fontSize: '14px', fontWeight: 700 }}
                  >
                    {p.name}
                  </div>
                </div>
                <ChevronRight size={14} className={activePillar.id === p.id ? "text-red-500" : "text-gray-600"} />
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
