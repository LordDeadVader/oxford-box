'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products, categories, ProductCategory, Product } from '@/data/mockData';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

export default function CatalogGrid() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('Todos');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filtered = activeCategory === 'Todos'
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <section id="catalogo" className="py-24 px-6 bg-[#0B0C10]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[#C5A880] text-sm font-semibold uppercase tracking-widest">Nossos Produtos</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">Catálogo Completo</h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">Cada peça projetada para transformar espaços em obras de arte arquitetônica.</p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#C5A880] to-[#D4AF37] text-black shadow-[0_0_20px_rgba(197,168,128,0.3)]'
                  : 'border border-white/10 text-white/60 hover:text-white hover:border-white/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenModal={setSelectedProduct}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </section>
  );
}
