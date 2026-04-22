import { useState } from 'react';
import { AnimatedSection } from './AnimatedSection';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const testimonials = [
  {
    id: 1,
    name: 'Samia Cruañes Dias',
    role: 'Consultoria e Treinamentos em Vendas',
    company: '',
    thumb: `${import.meta.env.BASE_URL}images/samia.png`,
    quote: 'Meu negócio já existia e eu já tinha bons resultados, mas eu sabia que poderia ir além. Quando conheci a Blenduca, encontrei o método que me ajudou a organizar, estruturar e potencializar tudo o que eu já fazia.\n\nHoje entrego muito mais valor aos meus clientes e me sinto preparada para inovar constantemente.\n\nA Blenduca não ensina só metodologia, ela nos coloca na vanguarda, especialmente quando o assunto é inovação e inteligência artificial. Para quem atua com consultoria e mentoria, isso faz toda a diferença.',
  },
  {
    id: 2,
    name: 'Ricardo Lazarotto',
    role: 'Fisioterapeuta Intervencionista em Dor',
    company: '',
    thumb: `${import.meta.env.BASE_URL}images/ricardo.png`,
    quote: 'Como profissional da saúde, sempre estive focado nos atendimentos, mas percebi que poderia ir além: compartilhar o que sei para ajudar muito mais pessoas.\n\nAtravés da mentoria com Ricardo e Silviane, aprendi a estruturar a venda do meu conhecimento na internet e potencializar meus resultados. Hoje, não só atendo pacientes, eu ensino, compartilho e amplio meu impacto.',
  },
  {
    id: 3,
    name: 'Sabina Deweik',
    role: 'Futurista, Caçadora de Tendências e Coach Ontológica',
    company: '',
    thumb: `${import.meta.env.BASE_URL}images/sabina.png`,
    quote: 'Após 25 anos com inovação e pesquisa, a Blenduca me trouxe um insight transformador: eu precisava sair da execução de tarefas burocráticas.\n\nAssumi o papel estratégico do meu próprio negócio, deleguei o operacional e hoje foco na criação e na construção de um modelo escalável.\n\nMeu conhecimento alcança o mundo sem depender da venda da minha hora. Essa mudança de chave foi libertadora.',
  },
  {
    id: 4,
    name: 'Nicéia Fronza',
    role: 'Pontua Consultoria',
    company: '',
    thumb: `${import.meta.env.BASE_URL}images/niceia.png`,
    quote: 'Após cinco anos de empresa, eu sabia que precisava evoluir. O mercado mudou, as tecnologias avançaram e eu sentia que era hora de reposicionar meu negócio.\n\nA Blenduca trouxe, antes de tudo, uma mudança de mentalidade. Foi a virada de chave que me tirou do automático e me fez olhar para o meu negócio com novos olhos.\n\nA partir desse movimento, reformulei estratégias, incorporei novas tecnologias e comecei a construir um novo horizonte de crescimento.',
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section id="cases" className="relative py-24 overflow-hidden" style={{ background: '#000' }}>
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(194,34,53,0.4), transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-14" direction="up">
          <div
            className="inline-block mb-3 px-3 py-1 rounded-full text-[#C22235] tracking-widest"
            style={{
              fontSize: '0.65rem',
              fontWeight: 700,
              background: 'rgba(194,34,53,0.1)',
              border: '1px solid rgba(194,34,53,0.25)',
            }}
          >
            Histórias de sucesso
          </div>
          <h2 className="text-white mb-4" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)', fontWeight: 800 }}>
            Transformações{' '}
            <span style={{ color: '#C22235' }}>reais</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-balance" style={{ fontSize: '0.95rem', lineHeight: 1.75 }}>
            Veja como líderes do setor estão escalando suas operações e faturamento com o ecossistema Expert Hub.
          </p>
        </AnimatedSection>

        {/* Carousel Container */}
        <AnimatedSection direction="up" delay={100}>
          <div className="relative bg-[#0a0a0a] rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
            <div className="grid lg:grid-cols-2 min-h-[400px]">

              {/* Left: Image Placeholder */}
              <div className="relative bg-black aspect-[3/4] sm:aspect-[3/4] lg:aspect-auto lg:h-[600px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={t.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <ImageWithFallback
                      src={t.thumb}
                      alt={t.name}
                      className="w-full h-full object-cover object-center opacity-80 transition-opacity duration-500"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right: Quote & Info */}
              <div className="relative p-8 md:p-12 flex flex-col justify-center lg:h-[600px]">
                <div className="mb-6 flex-1 flex flex-col">
                  <Quote className="text-[#C22235] opacity-50 mb-4 transform scale-x-[-1] shrink-0" size={40} />
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={t.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4 }}
                      className="text-gray-200 font-medium leading-relaxed italic overflow-y-auto flex-1"
                    >
                      {t.quote.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="mb-4 text-base md:text-lg">"{paragraph}"</p>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="mt-auto border-t border-white/10 pt-6 flex items-center justify-between">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={t.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      <div className="text-white font-bold text-lg">{t.name}</div>
                      <div className="text-[#C22235] text-sm font-medium">{t.role}</div>
                      {t.company && <div className="text-gray-500 text-xs mt-0.5">{t.company}</div>}
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation Controls */}
                  <div className="flex gap-2 shrink-0">
                    <button
                      onClick={prev}
                      className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-colors border border-white/10"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={next}
                      className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-colors border border-white/10"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${current === i ? 'w-8 bg-[#C22235]' : 'bg-gray-700 hover:bg-gray-500'}`}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
