'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';
import { Product, makeWhatsAppUrl } from '@/data/mockData';

interface Props {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: Props) {
  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="relative z-10 w-full max-w-3xl bg-[#12141A] border border-white/10 rounded-3xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12141A] via-transparent md:bg-gradient-to-r md:from-transparent md:to-[#12141A]" />
              </div>

              <div className="p-8 flex flex-col justify-center">
                <span className="text-[#C5A880] text-xs font-bold uppercase tracking-widest mb-2">{product.tag}</span>
                <h2 className="text-white text-2xl font-bold mb-3">{product.name}</h2>
                <p className="text-white/60 text-sm mb-6 leading-relaxed">{product.description}</p>

                <ul className="space-y-2 mb-8">
                  {product.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/70 text-sm">
                      <CheckCircle className="w-4 h-4 text-[#C5A880] flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>

                <a
                  href={makeWhatsAppUrl(`Olá! Tenho interesse no modelo ${product.name}. Pode me enviar um orçamento?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#C5A880] to-[#D4AF37] text-black font-semibold text-center hover:shadow-[0_0_30px_rgba(197,168,128,0.4)] transition-all duration-300"
                >
                  Solicitar Orçamento
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
