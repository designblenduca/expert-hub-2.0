import { AnimatedSection } from './AnimatedSection';
import { ArrowRight, Shield } from 'lucide-react';

export function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="relative py-28 overflow-hidden"
      style={{ background: '#000' }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none hero-grid opacity-40"
      />

      {/* Red orbs */}
      <div
        className="red-orb-1 absolute rounded-full pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(220,38,38,0.14) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
        }}
      />

      {/* Top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(220,38,38,0.5), transparent)' }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <AnimatedSection direction="up">
          <div
            className="inline-block mb-4 px-3 py-1 rounded-full text-red-500 uppercase tracking-widest"
            style={{
              fontSize: '0.65rem',
              fontWeight: 700,
              background: 'rgba(220,38,38,0.1)',
              border: '1px solid rgba(220,38,38,0.25)',
            }}
          >
            Próximo passo
          </div>

          <h2
            className="text-white mb-6"
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            Pronto para{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #dc2626, #f87171)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Escalar
            </span>{' '}
            Sua Expertise?
          </h2>

          <p className="text-gray-400 mb-10 max-w-xl mx-auto" style={{ fontSize: '1rem', lineHeight: 1.8 }}>
            Receba um plano personalizado para transicionar para o novo modelo de mentoria e conhecer
            as soluções ideais para o seu negócio.
          </p>

          <a
            href="https://planoexpert.blenduca.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-shimmer inline-flex items-center gap-3 px-10 py-5 rounded-2xl text-white whitespace-nowrap hover:scale-105 transition-transform duration-200 group"
            style={{
              fontSize: '1rem',
              fontWeight: 800,
              letterSpacing: '0.04em',
              border: 'none',
              cursor: 'pointer',
              textDecoration: 'none'
            }}
          >
            <span>RECEBER MEU PLANO PERSONALIZADO</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>

          <div className="flex items-center justify-center gap-2 mt-6 text-gray-600" style={{ fontSize: '0.8rem' }}>
            <Shield size={14} color="#6b7280" />
            <span>
              Sem compromisso. Nosso time analisa seu negócio e apresenta a melhor rota de crescimento.
            </span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
