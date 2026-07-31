'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { makeWhatsAppUrl } from '@/data/mockData';

export default function BlogNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#0B0C10]/95 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5 group">
          <span className="text-white font-extrabold text-2xl tracking-widest uppercase group-hover:text-[#C5A880] transition-colors">
            OXFORD
          </span>
          <span className="text-[#C5A880] font-black text-2xl">.</span>
          <span className="text-white/70 font-light text-2xl tracking-widest uppercase">
            BOX
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-white/80 hover:text-[#C5A880] text-sm font-medium transition-colors"
          >
            Início
          </Link>
          <Link
            href="/#catalogo"
            className="text-white/80 hover:text-[#C5A880] text-sm font-medium transition-colors"
          >
            Catálogo
          </Link>
          <Link
            href="/#diferenciais"
            className="text-white/80 hover:text-[#C5A880] text-sm font-medium transition-colors"
          >
            Diferenciais
          </Link>
          <Link
            href="/blog"
            className="text-white/80 hover:text-[#C5A880] text-sm font-medium transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/#contato"
            className="text-white/80 hover:text-[#C5A880] text-sm font-medium transition-colors"
          >
            Contato
          </Link>
        </nav>

        {/* WhatsApp CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={makeWhatsAppUrl(
              'Olá! Li o artigo no blog sobre Box 8mm vs 6mm e gostaria de solicitar um orçamento para Curitiba.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#C5A880] to-[#D4AF37] text-black font-semibold text-sm hover:shadow-[0_0_20px_rgba(197,168,128,0.5)] transition-all duration-300 transform hover:scale-105"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>Orçamento WhatsApp</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-white p-2 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            {menuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.293 5.293a1 1 0 011.414 1.414L13.414 12l6.293 6.293a1 1 0 01-1.414 1.414L12 13.414l-6.293 6.293a1 1 0 01-1.414-1.414L10.586 12 4.293 5.707a1 1 0 011.414-1.414L12 10.586l6.293-6.293z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#12141A] border-b border-white/10 px-4 pt-2 pb-6 space-y-3">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="block text-white/80 hover:text-[#C5A880] py-2 text-base font-medium border-b border-white/5"
          >
            Início
          </Link>
          <Link
            href="/#catalogo"
            onClick={() => setMenuOpen(false)}
            className="block text-white/80 hover:text-[#C5A880] py-2 text-base font-medium border-b border-white/5"
          >
            Catálogo
          </Link>
          <Link
            href="/#diferenciais"
            onClick={() => setMenuOpen(false)}
            className="block text-white/80 hover:text-[#C5A880] py-2 text-base font-medium border-b border-white/5"
          >
            Diferenciais
          </Link>
          <Link
            href="/blog"
            onClick={() => setMenuOpen(false)}
            className="block text-white/80 hover:text-[#C5A880] py-2 text-base font-medium border-b border-white/5"
          >
            Blog
          </Link>
          <Link
            href="/#contato"
            onClick={() => setMenuOpen(false)}
            className="block text-white/80 hover:text-[#C5A880] py-2 text-base font-medium"
          >
            Contato
          </Link>
          <div className="pt-2">
            <a
              href={makeWhatsAppUrl(
                'Olá! Li o artigo no blog sobre Box 8mm vs 6mm e gostaria de solicitar um orçamento para Curitiba.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex justify-center items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#C5A880] to-[#D4AF37] text-black font-semibold text-base"
            >
              Pedir Orçamento via WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
