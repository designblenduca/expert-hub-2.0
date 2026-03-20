import { X, Check } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

const traditional = [
  'Age como um "funcionário de luxo", refém da agenda',
  'Escala limitada pelo seu tempo (modelo 1:1)',
  'Processos manuais e retrabalho constante',
  'Margem de lucro estagnada ou em queda',
];

const expertHub = [
  'Escala exponencial com IA e automação',
  'Entrega inteligente e replicável do método',
  'Central de inteligência integrada',
  'Modelo de negócio recorrente e escalável',
];

export function Comparison() {
  return (
    <section className="relative py-24 overflow-hidden bg-black" style={{ background: '#050505' }}>
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(220,38,38,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(220,38,38,0.05) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-6" direction="up">
          <div
            className="inline-block mb-3 px-3 py-1 rounded-full text-red-500 uppercase tracking-widest"
            style={{
              fontSize: '0.65rem',
              fontWeight: 700,
              background: 'rgba(220,38,38,0.1)',
              border: '1px solid rgba(220,38,38,0.25)',
            }}
          >
            A Nova Era do Mercado Digital
          </div>
          <h2
            className="text-white mx-auto max-w-4xl"
            style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)', fontWeight: 800, lineHeight: 1.2 }}
          >
            Em 2026, mentorias e consultorias que ignorarem a{' '}
            <span style={{ color: '#ef4444' }}>IA</span> irão perder relevância.
          </h2>
        </AnimatedSection>

        <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto" direction="up" delay={100}>
          <p className="text-gray-500" style={{ fontSize: '1rem', lineHeight: 1.8 }}>
            Se você atua como Mentor, Consultor ou Palestrante saiba que o modelo "hora-homem" está colapsando. 
            A Inteligência Artificial não vai substituir o expert — mas o expert que usa IA vai substituir aquele que a ignora. 
            O <span className="text-red-400">Expert Hub</span> é o caminho para liderar essa transição, não ser engolido por ela.
          </p>
        </AnimatedSection>

        {/* Comparison cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Traditional */}
          <AnimatedSection direction="left" delay={100}>
            <div
              className="p-8 rounded-2xl h-full"
              style={{
                background: 'rgba(10,10,10,0.9)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <X size={18} color="#6b7280" />
                </div>
                <div>
                  <div className="text-gray-500 uppercase tracking-widest" style={{ fontSize: '0.6rem', fontWeight: 700 }}>
                    Antes
                  </div>
                  <div className="text-white" style={{ fontSize: '1.1rem', fontWeight: 700 }}>
                    Modelo Tradicional
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {traditional.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}
                  >
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: 'rgba(107,114,128,0.15)', border: '1px solid rgba(107,114,128,0.25)' }}
                    >
                      <X size={10} color="#6b7280" />
                    </div>
                    <span className="text-gray-500" style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Expert Hub */}
          <AnimatedSection direction="right" delay={200}>
            <div
              className="p-8 rounded-2xl h-full relative overflow-hidden"
              style={{
                background: 'rgba(12,5,5,0.95)',
                border: '1px solid rgba(220,38,38,0.3)',
                boxShadow: '0 0 50px rgba(220,38,38,0.08)',
              }}
            >
              {/* Top glow */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent, #ef4444, transparent)' }}
              />

              <div className="flex items-center gap-3 mb-8">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(220,38,38,0.15)', border: '1px solid rgba(220,38,38,0.3)' }}
                >
                  <Check size={18} color="#ef4444" />
                </div>
                <div>
                  <div className="text-red-500 uppercase tracking-widest" style={{ fontSize: '0.6rem', fontWeight: 700 }}>
                    Agora
                  </div>
                  <div className="text-white" style={{ fontSize: '1.1rem', fontWeight: 700 }}>
                    Modelo Expert
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {expertHub.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl"
                    style={{ background: 'rgba(220,38,38,0.05)', border: '1px solid rgba(220,38,38,0.12)' }}
                  >
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: 'rgba(220,38,38,0.2)', border: '1px solid rgba(220,38,38,0.4)' }}
                    >
                      <Check size={10} color="#ef4444" />
                    </div>
                    <span className="text-gray-300" style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* CTA */}
        <AnimatedSection className="text-center mt-12" direction="up" delay={100}>
          <button
            onClick={() => document.querySelector('#final-cta')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(220,38,38,0.4)]"
            style={{
              background: 'linear-gradient(135deg, #b91c1c 0%, #dc2626 100%)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative font-bold tracking-wide">QUERO MIGRAR MEU NEGÓCIO</span>
            <span className="relative group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
}
