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
              makeWhatsAppUrl(`Olá! Gostaria de orçar o modelo ${product.name} da Oxford Box. Vim pelo catálogo do site.`),
              '_blank'
            );
          }}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300 font-bold tracking-wide mt-2"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Orçar pelo WhatsApp
        </button>
      </div>
    </motion.div>
  );
}
