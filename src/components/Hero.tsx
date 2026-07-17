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
            <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[#C5A880]/30 bg-black/40 backdrop-blur-md text-white/90 text-sm font-semibold tracking-wide shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              Instalação Limpa em 3 Dias Úteis
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight drop-shadow-2xl"
          >
            A Excelência do{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A880] to-[#D4AF37]">
              Box 8mm
            </span>{' '}
            para o Seu Banheiro
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="max-w-3xl text-white/90 text-lg md:text-2xl leading-relaxed drop-shadow-lg font-medium mt-4"
          >
            Vidro temperado Blindex de extrema segurança, perfis cortados sob medida e vedação absoluta. Proteja sua família com qualidade incomparável.
          </motion.p>

          {/* WhatsApp CTA */}
          <motion.div variants={itemVariants} className="mt-8 flex justify-center">
            <a
              href={makeWhatsAppUrl('Olá! Gostaria de um orçamento para Box de Banheiro. Vim pelo site.')}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-12 py-5 rounded-full bg-[#25D366] text-white text-xl font-bold tracking-wide hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-105 shimmer-btn relative overflow-hidden"
            >
              <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Solicitar Orçamento
            </a>
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
