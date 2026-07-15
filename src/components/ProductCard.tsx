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
      className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md cursor-pointer hover:border-[#C5A880]/30 hover:shadow-[0_8px_32px_rgba(197,168,128,0.15)] transition-all duration-300"
      onClick={() => onOpenModal(product)}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '4/5' }}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#C5A880]/90 text-black text-xs font-bold">
          {product.tag}
        </span>
      </div>

      {/* Info */}
      <div className="p-6">
        <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-[#C5A880] transition-colors">{product.name}</h3>
        <p className="text-white/60 text-sm leading-relaxed mb-5">{product.description}</p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            window.open(
              makeWhatsAppUrl(`Olá! Gostaria de orçar o modelo ${product.name} da Oxford Box.`),
              '_blank'
            );
          }}
          className="w-full py-2.5 rounded-xl border border-[#C5A880]/40 text-[#C5A880] text-sm font-semibold hover:bg-[#C5A880]/10 transition-all duration-200"
        >
          Orçar Este Modelo
        </button>
      </div>
    </motion.div>
  );
}
