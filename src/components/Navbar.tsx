'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { makeWhatsAppUrl } from '@/data/mockData';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Catálogo', href: '#catalogo' },
  { label: 'Espelhos', href: '#espelhos' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Contato', href: '#contato' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled ? 'w-[92%] max-w-4xl' : 'w-[96%] max-w-5xl'
        }`}
      >
        <div
          className={`flex items-center justify-between px-6 py-3 rounded-full border border-white/10 transition-all duration-500 ${
            scrolled
              ? 'bg-black/70 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.6)]'
              : 'bg-black/30 backdrop-blur-xl'
          }`}
        >
          {/* Logo */}
          <a href="#inicio" onClick={(e) => handleScroll(e, '#inicio')} className="flex items-center gap-1">
            <span className="text-white font-bold text-xl tracking-widest uppercase">OXFORD</span>
            <span className="text-[#C5A880] font-bold text-xl tracking-widest">.</span>
            <span className="text-white/70 font-light text-xl tracking-widest uppercase">BOX</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-white/70 hover:text-white text-sm font-medium transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C5A880] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <a
              href={makeWhatsAppUrl('Olá! Gostaria de solicitar um orçamento.')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-[#C5A880] to-[#D4AF37] text-black text-sm font-semibold hover:shadow-[0_0_20px_rgba(197,168,128,0.5)] transition-all duration-300 hover:scale-105"
            >
              Pedir Orçamento
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${ menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <div className={`w-6 h-0.5 bg-white my-1.5 transition-all duration-300 ${ menuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${ menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-20 left-4 right-4 z-40 bg-black/90 backdrop-blur-xl rounded-2xl border border-white/10 p-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-white/80 hover:text-[#C5A880] text-lg font-medium transition-colors py-2 border-b border-white/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href={makeWhatsAppUrl('Olá! Gostaria de solicitar um orçamento.')}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#C5A880] to-[#D4AF37] text-black text-center font-semibold"
          >
            Pedir Orçamento
          </a>
        </motion.div>
      )}
    </>
  );
}
