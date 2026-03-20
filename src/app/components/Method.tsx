import { Target, Zap, Settings, Brain } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

const stages = [
  {
    stage: 'ETAPA 01',
    title: 'MODELO DE NEGÓCIO IDEAL',
    icon: Target,
    description:
      'Em apenas 1 mês, desenvolvemos todos os pilares do seu negócio de conhecimento, o melhor modelo de negócio do mundo, que permite que você viva da sua paixão, transforme vidas através do seu conhecimento, tenha a liberdade para trabalhar de onde, como e quanto você quiser e ainda atinja margens de lucro de até 90%. Você recebe o seu Mapa B’Expert.',
    tags: [
      'JORNADA DO EXPERT',
      'DIAGNÓSTICO EXPERT & MODELO DE NEGÓCIO IDEAL',
      'POSICIONAMENTO ÚNICO',
      'MÉTODO GUIA',
      'OFERTA UNIVERSAL',
      'EXPERT PLANNING',
    ],
    side: 'right',
  },
  {
    stage: 'ETAPA 02',
    title: 'Motor de Crescimento',
    icon: Zap,
    description:
      'Após faturar com sua rede de relacionamentos atual, vamos desenvolver um verdadeiro sistema de marketing e vendas para você crescer com consistência.',
    tags: [
      'FUNIL DE CAIXA RÁPIDO',
      'ESTRATÉGIAS DE VENDAS',
      'FUNIS COMERCIAIS',
      'ECOSSISTEMA DE CONTEÚDOS',
      'FUNIL HIGH TICKET',
      'FUNIL PERPÉTUO',
      'FUNIL LANÇAMENTO',
      'FUNIL LOW TICKET',
      'FUNIL EVENTO PRESENCIAL',
    ],
    side: 'left',
  },
  {
    stage: 'ETAPA 03',
    title: 'PRODUTOS E ENTREGAS ESCALÁVEIS',
    icon: Settings,
    description:
      'Agora, chegou a hora de transformar sua entrega 1:1 em um modelo recorrente e escalável. Para isso, vamos sistematizar sua método e diversificar sua entrega nos 5 pilares do novo modelo de mentor[IA] da nova era do mercado digital.',
    tags: [
      'ONBOARDING & EXPERIÊNCIA DO CLIENTE',
      'PRODUTOS QUE TRANSFORMAM',
      'SUCESSO DO CLIENTE',
      'NOVO MODELO DE MENTOR[IA]',
      'PILAR 01: EDUCAÇÃO',
      'PILAR 02: ORIENTAÇÃO',
      'PILAR 03: ACOMPANHAMENTO',
      'PILAR 04: COMUNIDADE',
      'PILAR 05: TECNOLOGIA',
      'ENTREGAS ESCALÁVEIS COM IA',
    ],
    side: 'right',
  },
  {
    stage: 'ETAPA 04',
    title: 'Gestão de Resultados (OKRS & KPIS)',
    icon: Brain,
    description:
      'Primeiro, você chega em R$ 10k a R$ 20k/mês com mentorias de alto valor. Depois, você acelera de R$ 20k pra R$ 40k/mês com programas recorrentes e escaláveis. E então cria um crescimento consistente de 4 a 6 novos clientes ideais por mês, adicionando R$ 4k a R$ 12k de receita recorrente mensal. Até bater R$ 80k a R$ 100k/mês e. Nessa fase, vamos te acompanhar seus projetos estratégicos (OKRs) semanalmente e seus resultados e indicadores chaves (KPIs) semanalmente, para você construir seu Negócio de Conhecimento Milionário em 1 a 3 anos.',
    tags: [
      'GENTE E GESTÃO',
      'GESTÃO DE PROJETOS',
      'EFICIÊNCIA FINANCEIRA',
      'SEGURANÇA JURÍDICA',
      'TECNOLOGIA & AUTOMAÇÃO',
      'VIDA DE EXPERT',
    ],
    side: 'left',
  },
];

export function Method() {
  return (
    <section className="relative py-24 overflow-hidden" style={{ background: '#000' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
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
            Método B'Expert
          </div>
          <h2 className="text-white mb-4" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)', fontWeight: 800 }}>
            A jornada para Transformar{' '}
            <span style={{ color: '#ef4444' }}>seu Negócio de Conhecimento</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto" style={{ fontSize: '1rem', lineHeight: 1.75 }}>
            O método sistematizado para transformar seu conhecimento em um negócio de mentoria ou de consultoria recorrente, previsível e escalável.
          </p>
        </AnimatedSection>

        {/* Video Placeholder */}
        <AnimatedSection className="mb-20 max-w-3xl mx-auto" direction="up">
          <div
            className="relative rounded-2xl overflow-hidden aspect-video"
            style={{
              background: '#111',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
            }}
          >
            <iframe
              src="https://drive.google.com/file/d/1vFXsaIV3G04tnIt4iAODJ80rLuXO7KEh/preview"
              className="absolute inset-0 w-full h-full border-none"
              allow="autoplay"
              allowFullScreen
              title="A jornada para Transformar seu Negócio de Conhecimento"
            />
          </div>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Center vertical line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block"
            style={{ background: 'linear-gradient(180deg, transparent, rgba(220,38,38,0.5) 20%, rgba(220,38,38,0.5) 80%, transparent)' }}
          />

          <div className="flex flex-col gap-12 md:gap-16">
            {stages.map((item, i) => {
              const Icon = item.icon;
              const isRight = item.side === 'right';

              return (
                <AnimatedSection
                  key={item.stage}
                  direction={isRight ? 'left' : 'right'}
                  delay={i * 150}
                >
                  <div className={`flex items-start gap-0 md:gap-8 ${isRight ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}>
                    {/* Card */}
                    <div className="w-full md:w-[calc(50%-2rem)]">
                      <div
                        className="p-6 sm:p-8 rounded-2xl group hover:scale-[1.02] transition-transform duration-300"
                        style={{
                          background: 'rgba(12,12,12,0.95)',
                          border: '1px solid rgba(220,38,38,0.2)',
                          boxShadow: '0 0 40px rgba(220,38,38,0.04)',
                        }}
                      >
                        {/* Month badge */}
                        <div
                          className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-lg"
                          style={{
                            background: 'rgba(220,38,38,0.12)',
                            border: '1px solid rgba(220,38,38,0.25)',
                          }}
                        >
                          <div
                            className="w-1.5 h-1.5 rounded-full bg-red-500"
                            style={{ boxShadow: '0 0 6px rgba(220,38,38,0.8)' }}
                          />
                          <span className="text-red-400 uppercase tracking-widest" style={{ fontSize: '0.65rem', fontWeight: 700 }}>
                            {item.stage}
                          </span>
                        </div>

                        {/* Icon + Title */}
                        <div className="flex items-center gap-3 mb-4">
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                            style={{ background: 'rgba(220,38,38,0.1)', border: '1px solid rgba(220,38,38,0.2)' }}
                          >
                            <Icon size={20} color="#ef4444" />
                          </div>
                          <h3 className="text-white uppercase" style={{ fontSize: '1rem', fontWeight: 800 }}>
                            {item.title}
                          </h3>
                        </div>

                        <p className="text-gray-400 mb-6" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                          {item.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 rounded-full text-gray-400 uppercase"
                              style={{
                                fontSize: '0.6rem',
                                fontWeight: 700,
                                background: 'rgba(255,255,255,0.04)',
                                border: '1px solid rgba(255,255,255,0.08)',
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="hidden md:flex w-16 items-center justify-center shrink-0 relative pt-12">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center z-10"
                        style={{
                          background: 'linear-gradient(135deg, #dc2626, #ef4444)',
                          boxShadow: '0 0 20px rgba(220,38,38,0.6)',
                          border: '3px solid #000',
                        }}
                      >
                        <span className="text-white" style={{ fontSize: '0.75rem', fontWeight: 800 }}>
                          {i + 1}
                        </span>
                      </div>
                    </div>

                    {/* Spacer */}
                    <div className="hidden md:block w-[calc(50%-2rem)]" />
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
