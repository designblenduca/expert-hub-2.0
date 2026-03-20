import { useState } from 'react';
import { AnimatedSection } from './AnimatedSection';
import { BarChart2, Users, Shield, LayoutDashboard, Globe, Cpu, Zap, Compass } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import compassImg from 'figma:asset/02dea31a34cf8178fb1c7522e43503e416ac31df.png';

interface Pilar {
  id: number;
  label: string;
  letter: string;
  sublabel: string;
  icon: React.ElementType;
  phases: string[];
  description: string;
  question: string;
  isCenter?: boolean;
}

const pilars: Pilar[] = [
  {
    id: 6,
    label: 'TECNOLOGIA',
    letter: 'T',
    sublabel: 'Tech & Inteligência Artificial',
    icon: Cpu,
    question: 'Como a tecnologia trabalha por mim e pelo meu cliente?',
    description:
      'Na Blenduca, oferecemos serviços de automações, agentes de IA e infraestrutura tecnológica para escalar sem aumentar equipe. Tecnologia como alavanca, não como barreira.',
    phases: [
      'Experience Flix',
      'Funnel Pages',
      'Genius AI',
    ],
  },
  {
    id: 1,
    label: 'ESTRATÉGIA',
    letter: 'E',
    sublabel: 'Consultoria & Orientação Individual',
    icon: BarChart2,
    question: 'Como penso o negócio junto com o meu cliente?',
    description:
      'Nas nossas soluções, você tem acesso regular a consultorias estratégicas 1-1 para resolver gargalos, ajustar rotas e acelerar resultados. É como ter um consultor sênior dedicado ao seu negócio, te pegando pela mão e te direcionando no ritmo ideal para o seu momento e nível atual.',
    phases: [
      'Encontros de Revisão',
      'Planejamentos Estratégicos',
      'Consultorias Individuais',
      'Plano de Ação Detalhado',
    ],
  },
  {
    id: 5,
    label: 'RESULTADOS',
    letter: 'R',
    sublabel: 'Métricas, Rotina & Acompanhamento',
    icon: Globe,
    question: 'Como garanto que o cliente não se perca no caminho?',
    description:
      'O que não se mede, não se gerencia. Implementamos dashboards, rituais de gestão e acompanhamento de métricas para garantir impacto mensurável.',
    phases: [
      'Check-In Mensal',
      'Dashboard de KPIs',
      'OKRs Trimestrais',
      'Acompanhamento via WhatsApp',
    ],
  },
  {
    id: 0,
    label: 'IMPLEMENTAÇÃO',
    letter: '',
    sublabel: 'Diagnóstico & Mapa B’Expert',
    icon: Compass,
    question: 'Por onde começamos?',
    description:
      'Nas nossas soluções, nosso foco da implementação é mergulhar a fundo no seu negócio para que em 1 mês você saia com clareza total sobre QUEM você é como expert, PARA QUEM você serve, COMO você entrega valor e QUANTO você cobra. Acabam as dúvidas sobre o melhor modelo de negócio.',
    phases: [
      '1 Encontro de Onboarding Individual',
      '2 Encontros Estratégicos Individuais',
      'Entrega do Mapa B’Expert',
    ],
    isCenter: true,
  },
  {
    id: 2,
    label: 'CONEXÕES',
    letter: 'X',
    sublabel: 'Comunidade & Networking Estratégico',
    icon: Users,
    question: 'Que conexões meu cliente ganha ao estar comigo?',
    description:
      'Nas nossas soluções, você irá pertencer à uma comunidade de experts de alto nível. Nossos programas abrem portas para clubes de negócios exclusivos, como o B’Minds Club, parcerias estratégicas e oportunidades únicas.',
    phases: [
      'Comunidade B\'Experts',
      'Imersões Presenciais',
      'Palestras com Founders',
      'Acesso ao B\'Minds Club',
    ],
  },
  {
    id: 4,
    label: 'EDUCAÇÃO',
    letter: 'E',
    sublabel: 'Conteúdo & Formação Contínua',
    icon: LayoutDashboard,
    question: 'O que meu cliente precisa aprender para depender menos de mim?',
    description:
      'Como B’Expert, você terá acesso ilimitado a trilhas gravadas, frameworks, templates e treinamentos exclusivos para dominar as ferramentas da nova era. Conteúdo atualizado constantemente.',
    phases: [
      'Trilhas Gravadas B\'Academy',
      'Acessos Técnicos para Time',
      'Kit Participante',
    ],
  },
  {
    id: 3,
    label: 'PERFORMANCE',
    letter: 'P',
    sublabel: 'Mentoria & Acompanhamento de Alto Nível',
    icon: Shield,
    question: 'O que faço com ou para o cliente para garantir o resultado?',
    description:
      'Nas nossas soluções, oferecemos um acompanhamento próximo e individualizado para destravar gargalos e manter sua execução no ritmo certo. Mentorias com foco em resultados mensuráveis.',
    phases: [
      'Encontros Táticos Semanais',
      'Plantão Tira-Dúvidas',
      'B\'Mentor (IA)',
      'Grupo Exclusivo',
      'Central de Ferramentas',
    ],
  },
];

// Layout: 2-3-2 Honeycomb to achieve clockwise E-X-P-E-R-T order around center
// (0,0): T (Tech - #6)
// (0,1): E (Estratégia - #1)
// (1,0): R (Resultados - #5)
// (1,1): CENTER (Implementação - #0)
// (1,2): X (Conexões - #2)
// (2,0): E (Educação - #4)
// (2,1): P (Performance - #3)

const hexLayout = [
  [pilars[0], pilars[1]],         // Row 1: T, E
  [pilars[2], pilars[3], pilars[4]], // Row 2: R, CENTER, X
  [pilars[5], pilars[6]],         // Row 3: E, P
];

interface HexagonProps {
  pilar: Pilar;
  isActive: boolean;
  onClick: () => void;
}

function Hexagon({ pilar, isActive, onClick }: HexagonProps) {
  const Icon = pilar.icon;
  const isCenter = pilar.isCenter;

  return (
    <button
      onClick={onClick}
      className="relative group focus:outline-none"
      style={{
        width: '130px',
        height: '150px',
        flexShrink: 0,
        // Hexagon clip path
        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
        marginBottom: '-35px', // Negative margin for vertical stacking
        marginRight: '8px',
        background: 'transparent',
        transition: 'all 0.3s ease'
      }}
    >
      {/* Active/Center Glow Background */}
      <div 
        className="absolute inset-0 transition-all duration-300"
        style={{
          background: isActive 
            ? 'linear-gradient(135deg, #dc2626, #991b1b)' 
            : isCenter 
              ? 'rgba(20,20,20,0.95)' 
              : 'rgba(20,20,20,0.95)',
          zIndex: 1
        }}
      />
      
      {/* Border overlay */}
      <div 
        className="absolute inset-0 transition-all duration-300"
        style={{
          boxShadow: isActive 
            ? 'inset 0 0 20px rgba(0,0,0,0.2)' 
            : 'inset 0 0 0 1px rgba(255,255,255,0.1)',
          zIndex: 2
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-2">
        {isCenter ? (
           <div className="w-16 h-16 flex items-center justify-center">
              <ImageWithFallback 
                 src={compassImg} 
                 alt="Bússola" 
                 className={`w-full h-full object-contain transition-transform duration-500 ${isActive ? 'scale-110' : 'scale-100 opacity-80'}`}
              />
           </div>
        ) : (
            <>
                 {/* Large Letter */}
                <div
                    className="text-center font-black leading-none transition-colors duration-300 mb-1"
                    style={{
                        fontSize: '2.5rem',
                        color: isActive ? 'rgba(255,255,255,0.9)' : 'rgba(220,38,38,0.5)',
                        textShadow: isActive ? '0 0 20px rgba(255,255,255,0.3)' : 'none'
                    }}
                >
                    {pilar.letter}
                </div>
                
                {/* Label */}
                <div
                className="text-center leading-tight transition-colors duration-300 uppercase"
                style={{
                    fontSize: '0.55rem',
                    fontWeight: 700,
                    color: isActive ? '#fff' : '#9ca3af',
                    letterSpacing: '0.05em',
                    maxWidth: '100%'
                }}
                >
                {pilar.label}
                </div>
            </>
        )}
      </div>
    </button>
  );
}

export function HexagonPillars() {
  const [activeId, setActiveId] = useState<number>(0); // Default to center (Implementação - 0)
  const activePilar = pilars.find((p) => p.id === activeId) || pilars.find(p => p.isCenter)!;

  return (
    <section id="conteudos" className="relative py-24 overflow-hidden" style={{ background: '#050505' }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(220,38,38,0.05) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <AnimatedSection className="text-center mb-12" direction="up">
          <div
            className="inline-block mb-3 px-3 py-1 rounded-full text-red-500 uppercase tracking-widest"
            style={{
              fontSize: '0.65rem',
              fontWeight: 700,
              background: 'rgba(220,38,38,0.1)',
              border: '1px solid rgba(220,38,38,0.25)',
            }}
          >
            O Ecossistema
          </div>
          <h2 className="text-white mb-4" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)', fontWeight: 800 }}>
            O Modelo{' '}
            <span style={{ color: '#ef4444' }}>EXPERT</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto" style={{ fontSize: '0.95rem', lineHeight: 1.75 }}>
            7 pilares fundamentais em um ecossistema integrado. Clique em cada pilar para explorar.
          </p>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={100}>
          <div className="flex flex-col xl:flex-row items-center xl:items-start gap-12 xl:gap-20">
            
            {/* Hexagon Grid — Desktop */}
            <div className="hidden xl:flex flex-col items-center flex-shrink-0 pt-8">
              {hexLayout.map((row, rowIdx) => (
                <div
                  key={rowIdx}
                  className="flex justify-center"
                >
                  {row.map((pilar) => (
                    <Hexagon
                      key={pilar.id}
                      pilar={pilar}
                      isActive={activeId === pilar.id}
                      onClick={() => setActiveId(pilar.id)}
                    />
                  ))}
                </div>
              ))}
            </div>

            {/* Mobile / Tablet Selector */}
            <div className="xl:hidden w-full">
              <div className="flex flex-wrap gap-2 justify-center mb-8">
                {pilars.filter(p => p.isCenter).concat(pilars.filter(p => !p.isCenter)).map((p) => {
                  const Icon = p.icon;
                  const isAct = activeId === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setActiveId(p.id)}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-200 whitespace-nowrap"
                      style={{
                        background: isAct ? 'linear-gradient(135deg, #dc2626, #7f1d1d)' : 'rgba(15,15,15,0.95)',
                        border: isAct ? '1px solid rgba(220,38,38,0.7)' : '1px solid rgba(255,255,255,0.08)',
                        boxShadow: isAct ? '0 0 14px rgba(220,38,38,0.4)' : 'none',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          color: isAct ? '#fff' : '#9ca3af',
                          letterSpacing: '0.06em',
                        }}
                      >
                        {p.isCenter ? 'IMPLEMENTAÇÃO' : p.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Content Panel */}
            <div className="flex-1 w-full max-w-lg">
              <div
                key={activePilar.id} // Key change triggers animation
                className="p-8 sm:p-10 rounded-3xl relative overflow-hidden min-h-[500px]"
                style={{
                  background: 'rgba(10,10,10,0.6)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(20px)',
                  animation: 'fadePanelIn 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
                }}
              >
                {/* Glow effect in panel */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 blur-[80px] pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold tracking-widest">
                       {activePilar.isCenter ? 'ONBOARDING' : `PILAR ${String(activePilar.id).padStart(2, '0')}`}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-2">
                    {activePilar.label}
                  </h3>
                  <p className="text-red-400 font-medium mb-6 text-sm tracking-wide">
                    {activePilar.sublabel}
                  </p>

                  <div className="mb-6 p-4 rounded-xl bg-white/5 border-l-2 border-red-500">
                    <p className="text-gray-300 italic text-sm">
                        "{activePilar.question}"
                    </p>
                  </div>

                  <p className="text-gray-400 mb-8 leading-relaxed text-sm">
                    {activePilar.description}
                  </p>

                  <div>
                    <div className="text-xs font-bold text-gray-600 uppercase tracking-widest mb-4">
                      O que inclui
                    </div>
                    <div className="space-y-3">
                      {activePilar.phases.map((phase, i) => (
                        <div
                          key={phase}
                          className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 transition-colors hover:bg-white/10"
                        >
                          <div className="w-6 h-6 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center text-xs font-bold border border-red-500/30 shrink-0">
                            {i + 1}
                          </div>
                          <span className="text-gray-300 text-sm font-medium">
                            {phase}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <style>{`
        @keyframes fadePanelIn {
          from { opacity: 0; transform: translateY(10px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </section>
  );
}
