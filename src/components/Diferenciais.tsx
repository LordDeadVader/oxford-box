'use client';
import { motion } from 'framer-motion';
import { Cog, Shield, Gem, Ruler } from 'lucide-react';
import { diferenciais } from '@/data/mockData';

const iconMap = { Cog, Shield, Gem, Ruler };

export default function Diferenciais() {
  return (
    <section className="py-24 px-6 bg-[#0B0C10]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[#C5A880] text-sm font-semibold uppercase tracking-widest">Por que a Oxford?</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Excelência em Cada Detalhe
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">Cada projeto entregue com precisão milimétrica e materiais de classe mundial.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {diferenciais.map((item, i) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -8 }}
                className="relative group p-7 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden cursor-default transition-all duration-300 hover:border-[#C5A880]/30 hover:shadow-[0_8px_40px_rgba(197,168,128,0.1)]"
              >
                {/* Glass sheen */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
                  <div className="absolute -inset-full translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
                </div>

                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C5A880]/20 to-[#D4AF37]/10 flex items-center justify-center mb-5"
                >
                  <Icon className="w-6 h-6 text-[#C5A880]" />
                </motion.div>

                <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
