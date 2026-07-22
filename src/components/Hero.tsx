'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { makeWhatsAppUrl, heroImages } from '@/data/mockData';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="inicio"
      className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0 bg-black">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${heroImages[currentIndex]}')` }}
          />
        </AnimatePresence>
        
        {/* Overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#0B0C10] z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center mt-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          {/* Pill Tag */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-black/30 backdrop-blur-md text-white/90 text-xs uppercase tracking-widest font-semibold shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Instalação Limpa em 3 Dias
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight tracking-tight drop-shadow-2xl"
          >
            A Excelência do{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              Box 8mm
            </span>
            <br className="hidden md:block" /> para o Seu Banheiro
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-white/80 text-base md:text-xl leading-relaxed drop-shadow-lg font-medium mt-2"
          >
            Vidro temperado de extrema segurança, acabamento premium e vedação absoluta. Qualidade incomparável para o seu ambiente.
          </motion.p>

          {/* WhatsApp CTA */}
          <motion.div variants={itemVariants} className="mt-10 flex flex-col items-center justify-center gap-6">
            
            <a
              href={makeWhatsAppUrl('Olá! Gostaria de um orçamento para Box de Banheiro. Vim pelo site.')}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-10 py-4 bg-white text-black text-sm md:text-base font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors duration-300"
            >
              Solicitar Orçamento
            </a>

            <div className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-[#C5A880]/10 backdrop-blur-md border border-[#C5A880]/40 text-white font-medium text-sm md:text-base tracking-wide shadow-[0_0_30px_rgba(197,168,128,0.2)]">
              <span className="bg-[#C5A880] text-black text-[10px] md:text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full animate-pulse">
                Promoção
              </span>
              <span>
                A partir de <span className="font-bold text-white text-lg">R$ 380,00</span> m²
              </span>
            </div>

          </motion.div>
        </motion.div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {heroImages.map((_, idx) => (
          <div
            key={idx}
            className={`transition-all duration-500 rounded-full ${
              idx === currentIndex ? 'w-10 h-2 bg-[#C5A880]' : 'w-2 h-2 bg-white/30'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
