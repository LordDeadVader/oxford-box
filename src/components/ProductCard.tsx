'use client';
import { motion } from 'framer-motion';
import { Product, makeWhatsAppUrl } from '@/data/mockData';

interface Props {
  product: Product;
  onOpenModal: (product: Product) => void;
}

export default function ProductCard({ product, onOpenModal }: Props) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="group relative flex flex-col rounded-xl bg-white border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 h-full cursor-pointer"
      onClick={() => onOpenModal(product)}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '1/1' }}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
      </div>

      {/* Info */}
      <div className="flex flex-col flex-grow p-5 bg-white">
        <h3 className="text-xl font-display font-bold text-gray-900 mb-4 text-center">{product.name}</h3>
        
        <button
          onClick={(e) => {
            e.stopPropagation();
            window.open(
              makeWhatsAppUrl(`Olá! Gostaria de orçar o modelo ${product.name} da Oxford Box. Vim pelo catálogo do site.`),
              '_blank'
            );
          }}
          className="w-full mt-auto flex items-center justify-center gap-2 py-3 rounded-sm bg-black text-white hover:bg-gray-800 transition-colors duration-300 font-bold uppercase tracking-widest text-xs"
        >
          Solicitar Orçamento
        </button>
      </div>
    </motion.div>
  );
}
