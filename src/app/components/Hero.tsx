import image_f66342379a63292042f4ef5f17e69b1abc3d5492 from 'figma:asset/f66342379a63292042f4ef5f17e69b1abc3d5492.png'
import { useEffect, useRef, useState } from 'react';
import { ChevronDown, TrendingUp, Sparkles, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logoHero from 'figma:asset/2ececb1b787d1be22274c6383f757030a471d510.png';
import { VideoPlayer } from './VideoPlayer';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  baseX: number;
  baseY: number;
}

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

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      const particleCount = Math.min(120, Math.floor((width * height) / 9000));
      particles = [];

      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.1,
          baseX: x,
          baseY: y,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const maxDistance = 250;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          p.x -= forceDirectionX * force * 1.5;
          p.y -= forceDirectionY * force * 1.5;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 38, 38, ${p.opacity})`;
        ctx.fill();
      });

      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const opacity = 1 - distance / 120;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(220, 38, 38, ${opacity * 0.4})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    init();
    draw();

    const handleResize = () => init();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  const scrollToNext = () => {
    const el = document.querySelector('#pilares');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    {
      prefix: '+',
      target: '200',
      suffix: '',
      label: 'Negócios Impactados',
      sublabel: 'Especialistas transformados',
      icon: TrendingUp
    },
    {
      prefix: '+R$',
      target: '40',
      suffix: 'M',
      label: 'Em Resultados',
      sublabel: 'Receita adicional gerada',
      icon: Sparkles
    },
    {
      prefix: '+',
      target: '60000',
      suffix: '',
      label: 'Vidas Transformadas',
      sublabel: 'Pessoas impactadas',
      icon: Users
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black pt-20"
      onMouseMove={handleMouseMove}
    >
      {/* 1. Animated Gradient Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #1a0505 0%, #000000 100%)',
          zIndex: 0
        }}
      />

      {/* 2. Moving Grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20" style={{ zIndex: 1 }}>
        <div className="perspective-grid absolute inset-0 w-full h-full" />
      </div>

      {/* 3. Canvas Neural Network */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 2 }}
      />

      {/* 4. Glowing Red Orbs */}
      <div
        className="absolute rounded-full pointer-events-none blur-3xl animate-pulse-slow"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(220,38,38,0.1) 0%, transparent 70%)',
          top: '20%',
          left: '20%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none blur-3xl animate-pulse-slower"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(220,38,38,0.08) 0%, transparent 70%)',
          bottom: '10%',
          right: '10%',
          zIndex: 1
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto flex flex-col items-center flex-grow justify-center">

        {/* LOGO */}
        <div className="mb-8 animate-fade-in-down" style={{ width: 'clamp(200px, 40vw, 350px)' }}>
          <ImageWithFallback
            src={image_f66342379a63292042f4ef5f17e69b1abc3d5492}
            alt="Blenduca Logo"
            className="w-full h-auto drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]"
          />
        </div>

        {/* Headline */}
        <h1
          className="text-white mb-6"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            animation: 'fadein 0.8s ease 0.4s both',
            textShadow: '0 0 40px rgba(0,0,0,0.5)'
          }}
        >
          Onde a{' '}
          <span
            className="relative inline-block"
          >
            <span
              className="absolute inset-0 blur-lg opacity-50 bg-red-600 mix-blend-screen"
              style={{ transform: 'scale(1.2)' }}
            />
            <span
              className="relative"
              style={{
                background: 'linear-gradient(135deg, #fff 0%, #ef4444 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Inovação
            </span>
          </span>{' '}
          <span
            className="relative inline-block"
          >
            <span
              className="absolute inset-0 blur-lg opacity-50 bg-red-600 mix-blend-screen"
              style={{ transform: 'scale(1.2)' }}
            />
            <span
              className="relative"
              style={{
                background: 'linear-gradient(135deg, #fff 0%, #ef4444 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Acelera
            </span>
          </span>{' '}
          o Conhecimento
        </h1>

        <p
          className="text-gray-300 mx-auto mb-10 max-w-2xl font-light"
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            lineHeight: 1.6,
            animation: 'fadein 0.8s ease 0.6s both',
            textShadow: '0 2px 10px rgba(0,0,0,0.8)'
          }}
        >
          Unimos tecnologia de ponta, mentoria de alto nível e estratégia comprovada para transformar
          sua expertise em um negócio escalável — sem depender do modelo 1:1 que limita seu crescimento.
        </p>

        {/* Video Player */}
        <div className="w-full max-w-3xl mx-auto mb-10 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(220,38,38,0.2)] border border-white/10" style={{ animation: 'fadein 0.8s ease 0.7s both' }}>
          <VideoPlayer
            src="/Vídeo Blenduca Atualizado.mp4"
            title="Blenduca Video"
          />
        </div>

        <div style={{ animation: 'fadein 0.8s ease 0.8s both' }}>
          <button
            onClick={() => document.querySelector('#final-cta')?.scrollIntoView({ behavior: 'smooth' })}
            className="cta-shimmer group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(220,38,38,0.6)]"
            style={{
              background: 'linear-gradient(135deg, #b91c1c 0%, #dc2626 100%)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <span className="relative font-bold tracking-wide z-10">Receber meu plano personalizado</span>
            <span className="relative group-hover:translate-x-1 transition-transform z-10">→</span>
          </button>
        </div>

        {/* Stats row - Styled like BigNumbers */}
        <div
          ref={statsRef}
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 mt-16 pt-12 pb-12 border-t border-white/5 w-full max-w-5xl"
          style={{ animation: 'fadein 0.8s ease 1s both', background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.4), transparent)' }}
        >
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="text-center group flex flex-col items-center min-w-[200px]">
                <div
                  className="mb-2"
                  style={{
                    fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                    fontWeight: 900,
                    lineHeight: 1,
                    background: 'linear-gradient(135deg, #fff 40%, #ef4444 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  <Counter
                    prefix={s.prefix}
                    target={s.target}
                    suffix={s.suffix}
                    isVisible={statsVisible}
                  />
                </div>
                <div className="text-red-500 uppercase tracking-widest font-bold mb-1" style={{ fontSize: '0.7rem' }}>
                  {s.label}
                </div>
                <div className="text-gray-500 text-xs max-w-[150px]">
                  {s.sublabel}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/30 hover:text-red-500 transition-colors duration-300 z-20"
        style={{ animation: 'bounce 2s infinite' }}
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>

      <style>{`
        @keyframes fadein {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
        @keyframes pulse-slower {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.2); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s infinite ease-in-out;
        }
        .animate-pulse-slower {
            animation: pulse-slower 12s infinite ease-in-out;
        }
        .perspective-grid {
            background-image: 
                linear-gradient(to right, rgba(220, 38, 38, 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(220, 38, 38, 0.1) 1px, transparent 1px);
            background-size: 50px 50px;
            transform: perspective(500px) rotateX(60deg);
            transform-origin: center top;
            animation: grid-move 20s linear infinite;
        }
        @keyframes grid-move {
            0% { background-position: 0 0; }
            100% { background-position: 0 50px; }
        }
        .animate-fade-in-down {
            animation: fadeInDown 1s ease-out forwards;
        }
        @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .cta-shimmer {
            position: relative;
            overflow: hidden;
        }
        .cta-shimmer::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(
                90deg,
                transparent,
                rgba(255, 255, 255, 0.2),
                transparent
            );
            transition: left 0.5s;
            animation: shimmer 3s infinite;
        }
        @keyframes shimmer {
            0% { left: -100%; }
            20% { left: 100%; }
            100% { left: 100%; }
        }
      `}</style>
    </section>
  );
}
