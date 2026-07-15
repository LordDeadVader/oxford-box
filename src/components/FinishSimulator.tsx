'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { finishes } from '@/data/mockData';

export default function FinishSimulator() {
  const [selected, setSelected] = useState(finishes[0]);

  return (
    <section id="espelhos" className="py-24 px-6 bg-[#12141A]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#C5A880] text-sm font-semibold uppercase tracking-widest">Personalize</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">Simulador de Acabamentos</h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">Escolha o acabamento das ferragens e visualize como ficará no seu projeto.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Selector */}
          <div className="flex flex-col gap-6">
            <p className="text-white/60 text-sm uppercase tracking-widest">Selecione o acabamento:</p>
            <div className="flex gap-4 flex-wrap">
              {finishes.map((finish) => (
                <button
                  key={finish.id}
                  onClick={() => setSelected(finish)}
                  className={`flex flex-col items-center gap-2 transition-all duration-300`}
                  aria-label={finish.label}
                >
                  <div
                    className={`w-14 h-14 rounded-full border-4 transition-all duration-300 shadow-lg ${
                      selected.id === finish.id
                        ? 'border-[#C5A880] scale-110 shadow-[0_0_20px_rgba(197,168,128,0.5)]'
                        : 'border-white/10 hover:border-white/30'
                    }`}
                    style={{ backgroundColor: finish.color }}
                  />
                  <span className={`text-xs font-medium ${ selected.id === finish.id ? 'text-[#C5A880]' : 'text-white/50'}`}>
                    {finish.label}
                  </span>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="mt-4 p-6 rounded-2xl border border-white/10 bg-white/5"
              >
                <h3 className="text-white font-semibold text-xl mb-2" style={{ color: selected.accentColor }}>
                  {selected.label}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">{selected.description}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Visual Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, rotateY: 15 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: -15 }}
              transition={{ duration: 0.5 }}
              style={{ perspective: 1000 }}
              className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 flex items-center justify-center"
            >
              <div
                className="absolute inset-0 transition-all duration-700"
                style={{ backgroundColor: selected.color + '22' }}
              />
              <div
                className="w-32 h-64 rounded-xl shadow-2xl border-4 relative"
                style={{ borderColor: selected.color, backgroundColor: selected.color + '44' }}
              >
                {/* Simulated box frame */}
                <div className="absolute inset-2 rounded-lg border-2 border-white/20" style={{ borderColor: selected.color }} />
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-2 h-8 rounded-full" style={{ backgroundColor: selected.color }} />
              </div>
              <div className="absolute bottom-6 left-0 right-0 text-center">
                <span className="text-white/60 text-sm font-medium">Acabamento: </span>
                <span className="font-semibold" style={{ color: selected.accentColor }}>{selected.label}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
