'use client';
import { motion } from 'framer-motion';
import { Cog, Shield, Gem, Ruler } from 'lucide-react';
import { diferenciais } from '@/data/mockData';

const iconMap = { Cog, Shield, Gem, Ruler };

export default function Diferenciais() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[#C5A880] text-sm font-bold uppercase tracking-widest">Por que a Oxford?</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Excelência em Cada Detalhe
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">Cada projeto entregue com precisão milimétrica e materiais de classe mundial.</p>
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
                className="relative group p-7 rounded-2xl bg-[#111827] overflow-hidden cursor-default transition-all duration-300 hover:shadow-xl"
              >
                {/* Glossy sheen */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
                  <div className="absolute -inset-full translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700 w-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12" />
                </div>

                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C5A880]/20 to-[#D4AF37]/10 flex items-center justify-center mb-5"
                >
                  <Icon className="w-6 h-6 text-[#C5A880]" />
                </motion.div>

                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
