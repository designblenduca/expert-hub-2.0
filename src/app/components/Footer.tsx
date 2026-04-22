import { ImageWithFallback } from './figma/ImageWithFallback';
import { Instagram, Linkedin, Youtube, Facebook } from 'lucide-react';
import logoFooter from 'figma:asset/96fab4e9869800e1b151558ebf804df126bcca68.png';

export function Footer() {
  return (
    <footer
      className="relative py-16 border-t"
      style={{ background: '#000', borderColor: 'rgba(255,255,255,0.05)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 md:gap-8">

          {/* Brand & Info */}
          <div className="flex flex-col items-start max-w-sm">
            <div className="w-[120px] h-auto mb-6">
              <img
                src={`${import.meta.env.BASE_URL}images/blenduca-logo.svg`}
                alt="Blenduca Logo"
                className="w-full h-auto object-contain"
              />
            </div>

            <p className="text-gray-400 mb-8 leading-relaxed text-sm">
              Transformando expertise em negócios escaláveis na era da Inteligência Artificial.
            </p>

            <div className="flex gap-4">
              {[
                { Icon: Instagram, url: 'https://www.instagram.com/blenduca/' },
                { Icon: Linkedin, url: '#' },
                { Icon: Youtube, url: 'https://www.youtube.com/@blenduca' },
                { Icon: Facebook, url: 'https://www.facebook.com/profile.php?id=100092262690419' }
              ].map(({ Icon, url }, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-[#C22235]/20 text-gray-400 hover:text-[#C22235] transition-all duration-300 border border-white/10 hover:border-[#C22235]/30"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4 text-sm text-gray-400">
            <h4 className="text-white font-bold tracking-widest text-xs mb-2">Contato</h4>
            <a href="mailto:relacionamento@blenduca.com.br" className="hover:text-[#C22235] transition-colors">
              relacionamento@blenduca.com.br
            </a>
            <a
              href="https://wa.me/5549991548024"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C22235] transition-colors"
            >
              +55 49 99154-8024
            </a>
            <span>Chapecó - SC - Brasil</span>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold tracking-widest text-xs mb-2">Menu</h4>
            {['Expert Hub', 'Cases', 'Soluções', 'Conteúdos', 'Quem Somos'].map((link) => (
              <a
                key={link}
                href="#"
                className="text-gray-500 hover:text-white transition-colors duration-200 text-sm"
              >
                {link}
              </a>
            ))}
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-600 text-xs"
          style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
        >
          <div>
            © 2026 Blenduca · Todos os direitos reservados
          </div>
          <div>
            Negócios de conhecimento · Tecnologia · Inteligência artificial
          </div>
        </div>
      </div>
    </footer>
  );
}
