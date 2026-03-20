import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logoNavbar from 'figma:asset/2ececb1b787d1be22274c6383f757030a471d510.png';

const navLinks = [
  { label: 'Expert Hub', href: '#top' },
  { label: 'Cases', href: '#cases' },
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Conteúdos', href: '#conteudos' },
  { label: 'Quem Somos', href: '#quem-somos' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    if (href === '#top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? 'rgba(5, 5, 5, 0.85)'
          : 'rgba(5, 5, 5, 0.55)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderBottom: '1px solid rgba(220, 38, 38, 0.18)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-[140px] shrink-0">
               <ImageWithFallback 
                  src={logoNavbar} 
                  alt="Blenduca Logo" 
                  className="w-full h-auto object-contain"
               />
            </div>
            {/* Removed "Expert Hub" text here */}
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-gray-300 hover:text-white transition-colors duration-200 whitespace-nowrap"
                style={{ fontSize: '0.875rem', fontWeight: 500 }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo('#login')}
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg text-white whitespace-nowrap transition-all duration-200 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #dc2626, #ef4444)',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                boxShadow: '0 0 16px rgba(220,38,38,0.4)',
              }}
            >
              Login B'Academy
            </button>
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-300"
        style={{ maxHeight: mobileOpen ? '400px' : '0', opacity: mobileOpen ? 1 : 0 }}
      >
        <div
          className="px-4 pb-4 pt-2 flex flex-col gap-1"
          style={{ background: 'rgba(5,5,5,0.95)', borderTop: '1px solid rgba(220,38,38,0.15)' }}
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all whitespace-nowrap"
              style={{ fontSize: '0.9rem' }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('#login')}
            className="mt-2 px-4 py-3 rounded-lg text-white text-center whitespace-nowrap"
            style={{
              background: 'linear-gradient(135deg, #dc2626, #ef4444)',
              fontSize: '0.875rem',
              fontWeight: 600,
              boxShadow: '0 0 16px rgba(220,38,38,0.4)',
            }}
          >
            Login B'Academy
          </button>
        </div>
      </div>
    </nav>
  );
}
