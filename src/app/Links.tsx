import React from 'react';
import { Instagram, Linkedin, Youtube, Facebook } from 'lucide-react';

export default function Links() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-rose-500/30">
      <div className="w-full relative">
        {/* Hero Section - Full Width */}
        <div className="relative w-full">
          <img
            src="/images/links/hero (3).png"
            alt="Experts em Negócios de Conhecimento"
            className="w-full h-auto object-cover"
          />

          <div className="absolute bottom-[10%] sm:bottom-[15%] left-[8%] sm:left-[10%] z-20">
            <a
              href="/"
              className="px-4 py-2 sm:px-8 sm:py-4 bg-[#e51d3b] hover:bg-[#d01833] transition-all rounded-xl font-bold text-[10px] sm:text-sm tracking-widest shadow-[0_0_20px_rgba(225,29,59,0.8)] hover:shadow-[0_0_30px_rgba(225,29,59,1)] uppercase text-white inline-block whitespace-nowrap"
            >
              Clique aqui e saiba mais
            </a>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 py-12 flex flex-col items-center">

          {/* Links / Banners Section */}
          <div className="w-full flex flex-col gap-8 mb-20">
            <a href="/" className="w-full transform transition-all hover:scale-[1.02] focus:scale-[1.02] outline-none rounded-[16px] overflow-hidden shadow-2xl hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]">
              <img src="/images/links/Link 5.png" alt="A Nova Era do Mercado Digital" className="w-full h-auto object-cover block" />
            </a>

            <a href="https://planoexpert.blenduca.com.br/" className="w-full transform transition-all hover:scale-[1.02] focus:scale-[1.02] outline-none rounded-[16px] overflow-hidden shadow-2xl hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]">
              <img src="/images/links/Link 6.png" alt="Próximo Passo" className="w-full h-auto object-cover block" />
            </a>

            <a href="https://medium.com/@ricardo_werlang" className="w-full transform transition-all hover:scale-[1.02] focus:scale-[1.02] outline-none rounded-[16px] overflow-hidden shadow-2xl hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]">
              <img src="/images/links/Link 7.png" alt="Expert News" className="w-full h-auto object-cover block" />
            </a>
          </div>

          {/* Footer Section */}
          <div className="w-full flex flex-col items-center pb-12 space-y-8">
            <a
              href="https://api.whatsapp.com/send/?phone=5549991548024&text&type=phone_number&app_absent=0"
              className="w-full max-w-sm text-center px-8 py-4 bg-[#e51d3b] hover:bg-[#d01833] transition-all rounded-xl font-bold text-sm tracking-widest shadow-[0_0_20px_rgba(225,29,59,0.8)] hover:shadow-[0_0_30px_rgba(225,29,59,1)] uppercase text-white"
            >
              Falar com especialista
            </a>

            <p className="text-gray-400 font-medium text-sm">#OMelhorDeCadaExpert</p>

            {/* Social Icons */}
            <div className="flex gap-4 items-center">
              <a href="https://www.instagram.com/blenduca/" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 transition-colors cursor-pointer text-zinc-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <Instagram size={18} />
              </a>
              <a href="https://www.linkedin.com/company/blenduca?originalSubdomain=br" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 transition-colors cursor-pointer text-zinc-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <Linkedin size={18} />
              </a>
              <a href="https://www.youtube.com/@blenduca" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 transition-colors cursor-pointer text-zinc-400 hover:text-white">
                <span className="sr-only">YouTube</span>
                <Youtube size={18} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100092262690419" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 transition-colors cursor-pointer text-zinc-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <Facebook size={18} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
