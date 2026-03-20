import { useEffect, useRef, useState } from 'react';
import { AnimatedSection } from './AnimatedSection';
import { TrendingUp, Users, Sparkles } from 'lucide-react';

interface CounterProps {
  target: string;
  prefix?: string;
  suffix?: string;
  duration?: number;
  isVisible: boolean;
}

function Counter({ target, prefix = '', suffix = '', duration = 2000, isVisible }: CounterProps) {
  const [display, setDisplay] = useState('0');
  const hasRunRef = useRef(false);

  useEffect(() => {
    if (!isVisible || hasRunRef.current) return;
    hasRunRef.current = true;

    const numeric = parseFloat(target.replace(/[^0-9.]/g, ''));
    const isDecimal = target.includes('.');
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = numeric * eased;

      if (isDecimal) {
        setDisplay(current.toFixed(1));
      } else if (numeric >= 1000) {
        setDisplay(Math.floor(current).toLocaleString('pt-BR'));
      } else {
        setDisplay(Math.floor(current).toString());
      }

      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isVisible, target, duration]);

  return (
    <span>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

const numbers = [
  {
    prefix: '+',
    target: '200',
    suffix: '',
    label: 'NEGÓCIOS IMPACTADOS',
    sublabel: 'Especialistas transformados em máquinas de resultado',
    icon: TrendingUp,
    color: '#ef4444',
  },
  {
    prefix: '+R$',
    target: '40',
    suffix: 'M',
    label: 'GERADOS EM RESULTADOS',
    sublabel: 'Em receita adicional gerada pelos nossos alunos',
    icon: Sparkles,
    color: '#f87171',
  },
  {
    prefix: '+',
    target: '60000',
    suffix: '',
    label: 'VIDAS TRANSFORMADAS',
    sublabel: 'Pessoas impactadas pelo ecossistema Blenduca',
    icon: Users,
    color: '#ef4444',
  },
];

export function BigNumbers() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #000 0%, #0a0a0a 50%, #000 100%)' }}
    >
      {/* Decorative lines */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(220,38,38,0.5), transparent)' }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(220,38,38,0.5), transparent)' }}
      />

      {/* Red glow center */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '600px',
          height: '300px',
          background: 'radial-gradient(ellipse, rgba(220,38,38,0.08) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <AnimatedSection className="text-center mb-16" direction="up">
          <div
            className="inline-block mb-3 px-3 py-1 rounded-full text-red-500 uppercase tracking-widest"
            style={{
              fontSize: '0.65rem',
              fontWeight: 700,
              background: 'rgba(220,38,38,0.1)',
              border: '1px solid rgba(220,38,38,0.25)',
            }}
          >
            Resultados Comprovados
          </div>
          <h2 className="text-white" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)', fontWeight: 800 }}>
            Números que{' '}
            <span style={{ color: '#ef4444' }}>Comprovam</span> o Método
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {numbers.map((item, i) => {
            const Icon = item.icon;
            return (
              <AnimatedSection key={item.label} direction="up" delay={i * 150}>
                <div
                  className="relative text-center p-8 rounded-2xl group hover:scale-105 transition-transform duration-300"
                  style={{
                    background: 'rgba(15,15,15,0.8)',
                    border: '1px solid rgba(220,38,38,0.15)',
                    boxShadow: '0 0 40px rgba(220,38,38,0.04)',
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-5"
                    style={{ background: 'rgba(220,38,38,0.1)', border: '1px solid rgba(220,38,38,0.25)' }}
                  >
                    <Icon size={22} color={item.color} />
                  </div>

                  {/* Number */}
                  <div
                    className="mb-2"
                    style={{
                      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                      fontWeight: 900,
                      lineHeight: 1,
                      background: 'linear-gradient(135deg, #fff 40%, #ef4444 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    <Counter
                      prefix={item.prefix}
                      target={item.target}
                      suffix={item.suffix}
                      isVisible={isVisible}
                    />
                  </div>

                  {/* Label */}
                  <div
                    className="text-red-500 uppercase tracking-widest mb-2"
                    style={{ fontSize: '0.65rem', fontWeight: 700 }}
                  >
                    {item.label}
                  </div>

                  {/* Sublabel */}
                  <div className="text-gray-600" style={{ fontSize: '0.8rem', lineHeight: 1.5 }}>
                    {item.sublabel}
                  </div>

                  {/* Bottom glow */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'linear-gradient(90deg, transparent, #ef4444, transparent)' }}
                  />
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
