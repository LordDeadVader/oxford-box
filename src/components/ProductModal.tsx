'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="relative z-10 w-full max-w-4xl bg-[#0B0C10] rounded-lg overflow-hidden flex flex-col md:flex-row shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-full md:w-2/3 relative" style={{ minHeight: '50vh' }}>
              <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover" />
            </div>

            <div className="w-full md:w-1/3 p-8 flex flex-col justify-center items-center text-center bg-white">
              <h2 className="text-gray-900 text-3xl font-display font-bold mb-6">{product.name}</h2>
              <p className="text-gray-600 text-sm mb-8">
                Gostou deste modelo? Converse com nossos especialistas e solicite um orçamento sob medida para o seu projeto.
              </p>

              <a
                href={makeWhatsAppUrl(`Olá! Tenho interesse no modelo ${product.name}. Pode me enviar um orçamento?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-sm bg-black text-white font-bold uppercase tracking-widest text-xs hover:bg-gray-800 transition-colors duration-300"
              >
                Solicitar Orçamento
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
