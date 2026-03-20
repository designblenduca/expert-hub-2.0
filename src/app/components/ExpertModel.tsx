import { motion } from "motion/react";
import { ArrowRight, BarChart3, Users, Zap, Brain, TrendingUp, Shield } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const highlights = [
  { icon: BarChart3, text: "Métricas em tempo real" },
  { icon: Users, text: "Gestão de comunidade" },
  { icon: Zap, text: "Automações integradas" },
  { icon: Brain, text: "IA personalizada" },
  { icon: TrendingUp, text: "Funil de crescimento" },
  { icon: Shield, text: "Segurança e compliance" },
];

export function ExpertModel() {
  return (
    <section className="relative bg-[#050505] py-24 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/20 to-transparent" />
        <div className="absolute bottom-1/2 left-0 w-80 h-80 bg-red-900 opacity-5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-red-600" />
              <span className="text-red-500" style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em' }}>
                MODELO EXPERT
              </span>
            </div>

            <h2
              className="text-white mb-4"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, lineHeight: 1.1 }}
            >
              Tudo que Você Precisa.{" "}
              <span style={{ color: "#ef4444" }}>Um Único Ecossistema.</span>
            </h2>

            <p className="text-gray-400 mb-8" style={{ fontSize: '15px', lineHeight: 1.8 }}>
              Nossa plataforma centraliza o ecossistema de gestão do seu negócio de conhecimento,
              unindo metodologia ágil, dados em tempo real e os 7 pilares fundamentais para
              escalabilidade.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-10">
              {highlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <motion.div
                    key={h.text}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="flex items-center gap-3 glass-card rounded-xl px-4 py-3 border border-white/5"
                  >
                    <Icon size={16} className="text-red-500 shrink-0" />
                    <span className="text-gray-400" style={{ fontSize: '13px', fontWeight: 600 }}>
                      {h.text}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="cta-shimmer flex items-center gap-2 px-7 py-4 rounded-xl text-white whitespace-nowrap shadow-2xl"
              style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '0.06em' }}
            >
              <span className="cta-shimmer-text">Agendar Demonstração</span>
              <ArrowRight size={16} className="text-white" />
            </motion.button>
          </motion.div>

          {/* Right: Laptop */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative flex items-center justify-center"
          >
            {/* Glow behind laptop */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-72 h-72 bg-red-600/15 rounded-full blur-[80px]" />
            </div>

            {/* Laptop image wrapper */}
            <div className="relative float-laptop w-full max-w-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1632893037506-aac33bf18107?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBmbG9hdGluZyUyMGRhcmslMjBtb2Rlcm4lMjBtb2NrdXB8ZW58MXx8fHwxNzcxNTI5NDMxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Expert Hub Platform Dashboard"
                className="w-full h-auto rounded-2xl"
                style={{ filter: "drop-shadow(0 0 40px rgba(220,38,38,0.2))" }}
              />

              {/* Floating stat cards */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 glass-card rounded-xl px-4 py-3 border border-red-600/30 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <TrendingUp size={14} className="text-red-500" />
                  <div>
                    <div className="text-white" style={{ fontSize: '16px', fontWeight: 800, color: '#ef4444' }}>+247%</div>
                    <div className="text-gray-500" style={{ fontSize: '10px', fontWeight: 600 }}>Crescimento médio</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -right-4 glass-card rounded-xl px-4 py-3 border border-red-600/30 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <Zap size={14} className="text-red-500" />
                  <div>
                    <div className="text-white" style={{ fontSize: '16px', fontWeight: 800 }}>7 Pilares</div>
                    <div className="text-gray-500" style={{ fontSize: '10px', fontWeight: 600 }}>Integrados na plataforma</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
