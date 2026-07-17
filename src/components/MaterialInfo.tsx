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
            src="https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=600&q=80"
            alt="Detalhe do vidro"
            className="rounded-2xl w-full h-64 object-cover"
          />
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            src="https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=600&q=80"
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
              href={makeWhatsAppUrl('Olá! Quero saber mais sobre os materiais e qualidade do box.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#25D366] text-white text-lg font-bold tracking-wide hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-105"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Falar com Especialista
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
