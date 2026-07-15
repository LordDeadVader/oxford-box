'use client';
import { motion } from 'framer-motion';
import { makeWhatsAppUrl } from '@/data/mockData';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* Background with Ken Burns */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center animate-ken-burns"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0B0C10]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          {/* Pill Tag */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white/80 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-[#C5A880] animate-pulse" />
              A Engenharia do Vidro em Sua Forma Mais Elegante
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight"
          >
            Transforme seu Banheiro em{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A880] to-[#D4AF37]">
              uma Experiência
            </span>{' '}
            de Spa
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-white/60 text-lg md:text-xl leading-relaxed"
          >
            Box de banheiro com acabamento premium, roldanas em inox de alta precisão e vidros
            temperados com garantia de 5 anos. Curitiba e Região.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mt-4">
            <button
              onClick={() => handleScroll('#catalogo')}
              className="shimmer-btn relative overflow-hidden px-8 py-4 rounded-full bg-gradient-to-r from-[#C5A880] to-[#D4AF37] text-black font-semibold text-lg hover:shadow-[0_0_40px_rgba(197,168,128,0.6)] transition-all duration-300 hover:scale-105"
            >
              Explorar Catálogo
            </button>
            <a
              href={makeWhatsAppUrl('Olá! Gostaria de solicitar um projeto sob medida com a Oxford Box.')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white font-semibold text-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300"
            >
              Projeto Sob Medida
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs uppercase tracking-widest">Role para baixo</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
