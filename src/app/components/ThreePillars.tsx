import { Users, LayoutGrid, Bot, ArrowRight } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

const pillars = [
  {
    badge: 'PROGRAMAS DE ACELERAÇÃO',
    badgeColor: '#dc2626',
    badgeBg: 'rgba(220,38,38,0.12)',
    badgeBorder: 'rgba(220,38,38,0.28)',
    icon: Users,
    iconColor: '#dc2626',
    iconBg: 'rgba(220,38,38,0.12)',
    name: "B'EXPERTS",
    tagline: 'Seu negócio de conhecimento, estruturado para escalar.',
    description:
      'Programas completos de consultoria e mentoria para transformar seu conhecimento especializado em um modelo de negócio recorrente e escalável. Da estratégia à implementação.',
    features: [
      { title: "Método B'Expert", desc: 'Roadmap estruturado de 4 meses' },
      { title: 'Comunidade Exclusiva', desc: 'Masterminds + Imersões presenciais' },
      { title: 'Acompanhamento Semanal', desc: 'Encontros táticos toda semana' },
    ],
    featureDotColor: '#dc2626',
    idealFor: [
      'Mentores e consultores de 10k a 80k/mês que querem escalar',
      'Empresas de educação buscando recorrência',
    ],
    ctaLabel: 'CONHECER OS PROGRAMAS',
    ctaBg: 'linear-gradient(135deg, #991b1b 0%, #dc2626 100%)',
    ctaShadow: '0 0 25px rgba(220,38,38,0.3)',
    smallText: 'Programas com investimento mensal · Níveis Starter a Scale',
    borderGlow: 'linear-gradient(90deg, transparent, #dc2626, transparent)',
  },
  {
    badge: 'INFRAESTRUTURA DIGITAL',
    badgeColor: '#4479CC',
    badgeBg: 'rgba(68,121,204,0.15)',
    badgeBorder: 'rgba(68,121,204,0.35)',
    icon: LayoutGrid,
    iconColor: '#4479CC',
    iconBg: 'rgba(68,121,204,0.15)',
    name: "B'TECH",
    tagline: 'A tecnologia que sustenta experts de alta performance.',
    description:
      'Plataformas, automações e infraestrutura digital completa para seu ecossistema de educação. Sua própria "Netflix de cursos", funis de vendas e integrações.',
    features: [
      { title: 'Experience Flix', desc: 'Plataforma de cursos 100% whitelabel' },
      { title: 'Funnel Pages', desc: 'Funis completos: copy + design + código' },
      { title: 'Integrações & APIs', desc: 'CRM, automações e fluxos conectados' },
    ],
    featureDotColor: '#4479CC',
    idealFor: [
      'Experts que precisam de infraestrutura profissional sem equipe tech',
      'Negócios que querem automatizar e escalar entregas',
    ],
    ctaLabel: 'EXPLORAR SOLUÇÕES TECH',
    ctaBg: 'linear-gradient(135deg, #1d4ed8 0%, #06b6d4 100%)',
    ctaShadow: '0 0 25px rgba(6,182,212,0.4)',
    smallText: 'Soluções modulares com planos por nível de operação',
    borderGlow: 'linear-gradient(90deg, transparent, #1d4ed8, #06b6d4, transparent)',
  },
  {
    badge: 'INTELIGÊNCIA ARTIFICIAL',
    badgeColor: '#8b5cf6',
    badgeBg: 'rgba(139,92,246,0.12)',
    badgeBorder: 'rgba(139,92,246,0.28)',
    icon: Bot,
    iconColor: '#8b5cf6',
    iconBg: 'rgba(139,92,246,0.12)',
    name: "B'AGENTS",
    tagline: 'Agentes de IA que trabalham por você 24/7.',
    description:
      'Agentes de IA personalizados que atendem, vendem e acompanham seus clientes sem parar. Do clone digital da sua expertise ao agente comercial completo.',
    features: [
      { title: 'Clone A.I', desc: 'Seu clone digital no WhatsApp' },
      { title: 'Mentor A.I', desc: 'Mentoria ativa com IA conversacional' },
      { title: 'Comercial A.I', desc: 'Vendas + leads + agendamentos automatizados' },
    ],
    featureDotColor: '#8b5cf6',
    idealFor: [
      'Experts que querem multiplicar presença sem multiplicar tempo',
      'Negócios buscando atendimento e vendas automatizados',
    ],
    ctaLabel: 'CONHECER OS AGENTES',
    ctaBg: 'linear-gradient(135deg, #7c3aed 0%, #c026d3 100%)',
    ctaShadow: '0 0 25px rgba(139,92,246,0.3)',
    smallText: 'Setup único + recorrência mensal · Produtos avulsos disponíveis',
    borderGlow: 'linear-gradient(90deg, transparent, #a855f7, #c026d3, transparent)',
  },
];

export function ThreePillars() {
  return (
    <section className="relative py-24 overflow-hidden" style={{ background: '#050505' }}>
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(220,38,38,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(220,38,38,0.06) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-20" direction="up">
          <div
            className="inline-block mb-4 px-4 py-1.5 rounded-full uppercase tracking-widest"
            style={{
              fontSize: '0.65rem',
              fontWeight: 700,
              color: '#ef4444',
              background: 'rgba(220,38,38,0.1)',
              border: '1px solid rgba(220,38,38,0.25)',
            }}
          >
            Nosso Ecossistema de Soluções
          </div>
          <h2
            className="text-white mb-6"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', fontWeight: 800, lineHeight: 1.15 }}
          >
            Três Pilares.
            <br />
            Uma <span style={{ color: '#ef4444' }}>Transformação</span> Completa.
          </h2>
          <p
            className="text-gray-400 max-w-2xl mx-auto"
            style={{ fontSize: '1rem', lineHeight: 1.8 }}
          >
            Cada unidade do Expert Hub foi desenhada para resolver uma dimensão crítica do seu
            negócio de conhecimento. Juntas, formam o ecossistema mais completo do mercado.
          </p>
        </AnimatedSection>

        {/* Three Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <AnimatedSection key={pillar.name} direction="up" delay={i * 150}>
                <div
                  className="relative flex flex-col h-full rounded-2xl"
                  style={{
                    background: 'rgba(12,12,12,0.95)',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  {/* Top border glow */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{ background: pillar.borderGlow }}
                  />

                  <div className="p-7 pb-0 flex flex-col flex-1">
                    {/* Badge row */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
                        style={{
                          background: pillar.badgeBg,
                          border: `1px solid ${pillar.badgeBorder}`,
                        }}
                      >
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ background: pillar.badgeColor }}
                        />
                        <span
                          style={{
                            fontSize: '0.6rem',
                            fontWeight: 700,
                            letterSpacing: '0.08em',
                            color: pillar.badgeColor,
                          }}
                        >
                          {pillar.badge}
                        </span>
                      </div>
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center"
                        style={{
                          background: pillar.iconBg,
                          border: `1px solid ${pillar.badgeBorder}`,
                        }}
                      >
                        <Icon size={18} color={pillar.iconColor} />
                      </div>
                    </div>

                    {/* Name */}
                    <h3
                      className="text-white mb-2"
                      style={{ fontSize: '1.6rem', fontWeight: 800, lineHeight: 1.2 }}
                    >
                      {pillar.name}
                    </h3>

                    {/* Tagline */}
                    <p
                      className="mb-4"
                      style={{
                        fontSize: '0.9rem',
                        fontStyle: 'italic',
                        color: pillar.badgeColor,
                        lineHeight: 1.5,
                      }}
                    >
                      {pillar.tagline}
                    </p>

                    {/* Description */}
                    <p
                      className="text-gray-400 mb-6"
                      style={{ fontSize: '0.85rem', lineHeight: 1.75 }}
                    >
                      {pillar.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-col gap-4 mb-6">
                      {pillar.features.map((f) => (
                        <div key={f.title} className="flex items-start gap-3">
                          <span
                            className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                            style={{ background: pillar.featureDotColor }}
                          />
                          <div>
                            <div
                              className="text-white"
                              style={{ fontSize: '0.88rem', fontWeight: 700 }}
                            >
                              {f.title}
                            </div>
                            <div
                              className="text-gray-500"
                              style={{ fontSize: '0.78rem', lineHeight: 1.5 }}
                            >
                              {f.desc}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Para quem é ideal */}
                    <div
                      className="rounded-xl p-4 mb-6 flex-1 flex flex-col justify-end"
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.06)',
                      }}
                    >
                      <div
                        className="text-gray-500 uppercase tracking-widest mb-3"
                        style={{ fontSize: '0.6rem', fontWeight: 700 }}
                      >
                        Para quem é ideal
                      </div>
                      <div className="flex flex-col gap-2">
                        {pillar.idealFor.map((item) => (
                          <div key={item} className="flex items-start gap-2">
                            <span
                              className="text-gray-500 shrink-0"
                              style={{ fontSize: '0.75rem' }}
                            >
                              •
                            </span>
                            <span
                              className="text-gray-400"
                              style={{ fontSize: '0.8rem', lineHeight: 1.5 }}
                            >
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA area */}
                  <div className="p-7 pt-0 mt-auto">
                    <button
                      onClick={() =>
                        document
                          .querySelector('#final-cta')
                          ?.scrollIntoView({ behavior: 'smooth' })
                      }
                      className="w-full py-3.5 rounded-xl text-white flex items-center justify-center gap-2 transition-all duration-200 hover:scale-105 cursor-pointer"
                      style={{
                        background: pillar.ctaBg,
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        letterSpacing: '0.06em',
                        boxShadow: pillar.ctaShadow,
                        border: 'none',
                      }}
                    >
                      {pillar.ctaLabel}
                      <ArrowRight size={15} />
                    </button>
                    <p
                      className="text-center text-gray-600 mt-3"
                      style={{ fontSize: '0.68rem', lineHeight: 1.5 }}
                    >
                      {pillar.smallText}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}