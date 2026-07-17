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
    <section id="catalogo" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[#C5A880] text-sm font-bold uppercase tracking-widest">Nossos Modelos</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">Solicite seu Orçamento</h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">Escolha o modelo ideal para o seu banheiro e converse com um especialista pelo WhatsApp agora mesmo.</p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#C5A880] text-white shadow-md'
                  : 'text-gray-600 hover:text-[#C5A880] hover:bg-gray-50 border border-gray-200'
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
