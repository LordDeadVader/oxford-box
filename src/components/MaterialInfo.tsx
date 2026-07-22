'use client';
import { motion } from 'framer-motion';
import { makeWhatsAppUrl } from '@/data/mockData';

export default function MaterialInfo() {
  return (
    <section className="py-24 bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Image Mosaic */}
        <div className="grid grid-cols-2 gap-4">
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            src="/box-1.png"
            alt="Detalhe do vidro"
            className="rounded-2xl w-full h-64 object-cover"
          />
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            src="/box-2.png"
            alt="Roldanas"
            className="rounded-2xl w-full h-64 object-cover mt-8"
          />
        </div>

        {/* Right Side: Text & Features */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#C5A880] text-sm font-bold uppercase tracking-widest">Segurança Total</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-3 leading-tight">
            Vidro Temperado e Alumínio em Seu Banheiro
          </h2>
          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            O box de banheiro deixou de ser apenas um acessório e se tornou uma peça fundamental na decoração e segurança do seu lar. Trabalhamos apenas com materiais de primeiríssima linha.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              'Vidro Temperado 8mm (5x mais resistente que o vidro comum)',
              'Perfis de Alumínio que não enferrujam',
              'Roldanas com rolamento blindado e deslizamento suave',
              'Vedação total em silicone neutro anti-fungo',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#25D366] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 font-medium">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <a
              href={makeWhatsAppUrl('Olá! Quero saber mais sobre os materiais e solicitar um orçamento.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-sm bg-black text-white text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors duration-300 shadow-lg"
            >
              Solicitar Orçamento
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
