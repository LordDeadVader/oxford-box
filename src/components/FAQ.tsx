'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { makeWhatsAppUrl } from '@/data/mockData';

const faqs = [
  {
    question: 'Qual a espessura do vidro utilizado?',
    answer: 'Trabalhamos estritamente com vidro temperado de 8mm, que é o padrão exigido pela ABNT para garantir máxima segurança e resistência a impactos na área do banho.'
  },
  {
    question: 'Vocês fazem box sob medida?',
    answer: 'Sim! Todos os nossos boxes são fabricados 100% sob medida. Após o orçamento inicial, um técnico vai até sua residência tirar as medidas exatas a laser para garantir um encaixe perfeito.'
  },
  {
    question: 'Quanto tempo demora a instalação?',
    answer: 'A instalação em si leva cerca de 2 a 3 horas. O prazo total, desde a medição até a entrega instalada, costuma ser de 3 a 5 dias úteis, dependendo da disponibilidade.'
  },
  {
    question: 'Quais as cores de perfis disponíveis?',
    answer: 'Oferecemos acabamentos em Preto Fosco, Branco, Cromado, Dourado Champagne e Bronze. Todos com pintura eletrostática ou anodização de alta durabilidade, resistentes à umidade do banheiro.'
  },
  {
    question: 'Vocês dão garantia no box?',
    answer: 'Com certeza. Oferecemos 5 anos de garantia contra defeitos de fabricação nas ferragens e perfis, além de 1 ano de garantia na vedação e instalação.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Side: Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative h-[600px] rounded-2xl overflow-hidden shadow-lg hidden lg:block"
        >
          <img
            src="/box-5.png"
            alt="Banheiro Elegante com Box"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <h3 className="text-2xl font-bold mb-2">Ainda tem dúvidas?</h3>
            <p className="mb-4 text-white/80">Fale diretamente com um de nossos especialistas pelo WhatsApp.</p>
            <a
              href={makeWhatsAppUrl('Olá! Gostaria de tirar algumas dúvidas sobre o Box de Vidro.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-bold hover:bg-[#1DA851] transition-colors"
            >
              Falar no WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Right Side: Accordion */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#C5A880] text-sm font-bold uppercase tracking-widest">Tire suas dúvidas</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-8 leading-tight">
            Perguntas Frequentes sobre Box de Banheiro
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden bg-gray-50">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-bold text-gray-900 pr-8">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-[#C5A880] transform transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="p-5 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
                          <p className="mt-4">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
