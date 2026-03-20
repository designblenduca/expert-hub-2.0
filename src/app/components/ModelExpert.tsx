import image_436d32beafe8c1768f705b1ca45c247c0bc9a69b from 'figma:asset/436d32beafe8c1768f705b1ca45c247c0bc9a69b.png'
import { AnimatedSection } from './AnimatedSection';
import { ImageWithFallback } from './figma/ImageWithFallback';
import laptopImg from 'figma:asset/ea8b39238f70d056245b0993cd5c9ae7b4304455.png';

export function ModelExpert() {
  return (
    <section
      id="solucoes"
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #000 0%, #080808 100%)' }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(220,38,38,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(220,38,38,0.07) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Left: text */}
          <div className="flex-1 lg:max-w-xl">
            <AnimatedSection direction="left">
              <div
                className="inline-block mb-3 px-3 py-1 rounded-full text-red-500 uppercase tracking-widest"
                style={{
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  background: 'rgba(220,38,38,0.1)',
                  border: '1px solid rgba(220,38,38,0.25)',
                }}
              >
                Modelo Expert
              </div>
              <h2
                className="text-white mb-6 uppercase"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: 800, lineHeight: 1.15 }}
              >
                Tudo que Você Precisa{' '}
                <span style={{ color: '#ef4444' }}>Em Uma Única Solução</span>
              </h2>
              <p className="text-gray-400 mb-8" style={{ fontSize: '1rem', lineHeight: 1.8 }}>
                Nosso hub de soluções centraliza tudo o que o expert precisa para transformar seu negócio digital tradicional em um modelo de negócio escalável, recorrente e altamente lucrativo.
                <br /><br />
                Você terá acesso à um time completo acelerando seus resultados: um estrategista digital, um time de dezenas de assistentes de IA e de soluções completas de IA prontas para executar as atividades diárias da operação e crescimento do seu negócio, um analista do nosso time de sucesso de cliente acompanhando cada passo e um time de tecnologia desenvolvendo sua plataforma, seus funis de vendas e suas soluções de IA.
              </p>

              <button
                onClick={() => document.querySelector('#final-cta')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(220,38,38,0.4)]"
                style={{
                  background: 'linear-gradient(135deg, #b91c1c 0%, #dc2626 100%)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  cursor: 'pointer',
                }}
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative font-bold tracking-wide">Agendar Demonstração</span>
                <span className="relative group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </AnimatedSection>
          </div>

          {/* Right: Content with Image and Text */}
          <div className="flex-1 flex items-center justify-center">
            <AnimatedSection direction="right" delay={200}>
              <div className="relative">
                {/* Glow behind */}
                <div
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse at 50% 60%, rgba(220,38,38,0.25) 0%, transparent 70%)',
                    filter: 'blur(30px)',
                    transform: 'scale(1.3)',
                  }}
                />

                {/* Floating Container */}
                <div className="float-laptop relative z-10">
                   <ImageWithFallback
                    src={image_436d32beafe8c1768f705b1ca45c247c0bc9a69b}
                    alt="Expert Hub Dashboard"
                    className="relative z-10 w-full h-auto max-w-lg"
                  />
                  
                  {/* Overlay Card - Positioned relative to this container */}
                  <div 
                    className="absolute -bottom-10 -right-4 md:-right-8 max-w-[280px] p-5 rounded-2xl backdrop-blur-xl z-20"
                    style={{
                        background: 'rgba(20, 20, 20, 0.85)',
                        border: '1px solid rgba(220, 38, 38, 0.3)',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.6)'
                    }}
                  >
                     <div className="flex items-start gap-3">
                        <div className="text-3xl font-black text-red-500 leading-none">+40</div>
                        <div className="text-white text-xs font-bold leading-tight uppercase pt-1">
                            Soluções de IA
                        </div>
                     </div>
                     <p className="mt-2 text-gray-400 text-[0.7rem] leading-relaxed">
                        Para você implementar no seu negócio de forma simples e imediata.
                     </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
        }
        .float-laptop {
            animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
