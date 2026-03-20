import { Linkedin, Instagram, Twitter } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { ImageWithFallback } from './figma/ImageWithFallback';
import silvianePhoto from 'figma:asset/781797d848ec1cf55e2f9ed803463b2d5b84762e.png';
import ricardoPhoto from 'figma:asset/f621ebd836fd10fcbf9b3b12cf10925dbd459c40.png';

const members = [
  {
    name: 'Silviane Lawall',
    role: 'Co-Founder & CEO',
    bio: 'Estrategista de negócios de conhecimento com mais de 15 anos de experiência transformando experts em marcas de autoridade. Lidera a visão e estratégia do Expert Hub.',
    tags: ['ESTRATÉGIA', 'LIDERANÇA', 'NEGÓCIOS'],
    photo: silvianePhoto,
    socials: {
      linkedin: 'https://www.linkedin.com/in/silvianelawall/',
      instagram: 'https://www.instagram.com/silviane.lawall/',
      twitter: '#',
    },
  },
  {
    name: 'Ricardo Werlang',
    role: 'Co-Founder & CTO',
    bio: 'Estrategista Digital, Mentor e Expert em Negócios de Conhecimento e IA. Engenheiro de Computação e Mestre em IA com mais de 15 anos transformando tecnologia em resultado real para negócios. Acelera especialistas e empreendedores com método, inovação e agentes inteligentes para escalar conhecimento e faturar mais.',
    tags: ['TECNOLOGIA', 'IA', 'INOVAÇÃO'],
    photo: ricardoPhoto,
    socials: {
      linkedin: 'https://www.linkedin.com/in/ricardowerlang/',
      instagram: 'https://www.instagram.com/ricardo_werlang/',
      twitter: 'https://x.com/ricardowerlang',
    },
  },
];

export function Team() {
  return (
    <section id="quem-somos" className="relative py-24 overflow-hidden" style={{ background: '#000' }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, rgba(220,38,38,0.05) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
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
            Liderança & Visão
          </div>
          <h2 className="text-white mb-4" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)', fontWeight: 800 }}>
            Quem está por trás do{' '}
            <span style={{ color: '#ef4444' }}>Expert Hub</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto" style={{ fontSize: '0.95rem', lineHeight: 1.75 }}>
            Uma combinação de visão estratégica e inovação tecnológica para criar o ecossistema
            definitivo de negócios de conhecimento.
          </p>
        </AnimatedSection>

        {/* Team cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {members.map((member, i) => (
            <AnimatedSection key={member.name} direction={i === 0 ? 'left' : 'right'} delay={i * 150} className="h-full">
              <div
                className="relative overflow-hidden rounded-2xl group h-full flex flex-col"
                style={{
                  background: 'rgba(10,10,10,0.95)',
                  border: '1px solid rgba(220,38,38,0.2)',
                }}
              >
                {/* Photo section */}
                <div className="relative h-72 overflow-hidden">
                  {/* Image is a direct child — not inside an overlay — so it's selectable */}
                  <ImageWithFallback
                    src={member.photo}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay as sibling, not parent */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.95) 100%)',
                    }}
                  />

                  {/* Role badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div>
                      <div className="text-white mb-0.5" style={{ fontSize: '1.1rem', fontWeight: 700 }}>
                        {member.name}
                      </div>
                      <div className="text-red-400" style={{ fontSize: '0.75rem', fontWeight: 600 }}>
                        {member.role}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info section */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-gray-500 mb-5" style={{ fontSize: '0.875rem', lineHeight: 1.75 }}>
                    {member.bio}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5 mt-auto">
                    {member.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-red-400 uppercase"
                        style={{
                          fontSize: '0.6rem',
                          fontWeight: 700,
                          letterSpacing: '0.1em',
                          background: 'rgba(220,38,38,0.08)',
                          border: '1px solid rgba(220,38,38,0.2)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Socials */}
                  <div className="flex gap-3">
                    <a
                      href={member.socials.linkedin}
                      className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={15} color="#9ca3af" />
                    </a>
                    <a
                      href={member.socials.instagram}
                      className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                      aria-label="Instagram"
                    >
                      <Instagram size={15} color="#9ca3af" />
                    </a>
                    <a
                      href={member.socials.twitter}
                      className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                      aria-label="Twitter"
                    >
                      <Twitter size={15} color="#9ca3af" />
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
