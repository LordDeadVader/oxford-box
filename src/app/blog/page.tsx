import type { Metadata } from 'next';
import Link from 'next/link';
import { makeWhatsAppUrl } from '@/data/mockData';

export const metadata: Metadata = {
  title: 'Blog | Dicas sobre Box de Banheiro e Vidraçaria — Oxford Box Curitiba',
  description: 'Blog da Oxford Box com dicas e guias completos sobre box de banheiro, vidro temperado, vidraçaria e reformas em Curitiba. Conteúdo especializado para você escolher melhor.',
  alternates: { canonical: 'https://www.oxfordbox.com.br/blog' },
};

const artigos = [
  {
    slug: 'box-banheiro-8mm-vs-6mm',
    titulo: 'Box de Banheiro 8mm ou 6mm: Qual Escolher em Curitiba?',
    resumo: 'Entenda a diferença entre os vidros temperados de 6mm e 8mm para box de banheiro, qual é mais seguro e qual a ABNT exige para instalações em Curitiba.',
    data: '2026-07-15',
    categoria: 'Box de Banheiro',
    imagem: '/box1.jpg',
  },
  {
    slug: 'tipos-de-box-banheiro-curitiba',
    titulo: 'Tipos de Box de Banheiro: Guia Completo para Curitiba',
    resumo: 'Box frontal, de canto, com roldanas aparentes ou com porta de abrir? Conheça cada modelo e descubra qual é o ideal para o seu banheiro em Curitiba.',
    data: '2026-07-10',
    categoria: 'Box de Banheiro',
    imagem: '/box2.jpg',
  },
  {
    slug: 'como-limpar-box-vidro-temperado',
    titulo: 'Como Limpar Box de Vidro Temperado Sem Manchar',
    resumo: 'Aprenda as melhores técnicas e produtos para manter o seu box de banheiro sempre transparente e sem aquelas manchas de calcário que aparecem em Curitiba.',
    data: '2026-07-05',
    categoria: 'Dicas de Cuidado',
    imagem: '/box3.jpg',
  },
  {
    slug: 'orcamento-box-banheiro-curitiba',
    titulo: 'Quanto Custa um Box de Banheiro em Curitiba? Guia de Preços 2026',
    resumo: 'Entenda tudo sobre os preços de box de banheiro em Curitiba: quais fatores influenciam o valor, o que está incluso no orçamento e como comparar propostas.',
    data: '2026-06-28',
    categoria: 'Preços e Orçamentos',
    imagem: '/box4.jpg',
  },
  {
    slug: 'vidro-temperado-seguranca-banheiro',
    titulo: 'Por Que o Vidro Temperado é Obrigatório no Box de Banheiro?',
    resumo: 'Descubra o que diz a norma ABNT NBR 7199 sobre vidros em banheiros, por que o vidro temperado é exigido e quais os riscos de usar vidro comum no box.',
    data: '2026-06-20',
    categoria: 'Segurança',
    imagem: '/box5.jpg',
  },
  {
    slug: 'box-elegance-roldanas-aparentes',
    titulo: 'Box Elegance com Roldanas Aparentes: Vale a Pena?',
    resumo: 'Conheça o box de banheiro Elegance com roldanas aparentes em inox 304, o modelo mais sofisticado do mercado. Veja fotos, vantagens e preços em Curitiba.',
    data: '2026-06-12',
    categoria: 'Box de Banheiro',
    imagem: '/box1.jpg',
  },
];

export default function BlogPage() {
  return (
    <main className="bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img src="/logo.png" alt="Oxford Box" className="h-12 w-auto object-contain" />
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-gray-600 hover:text-gray-900 text-sm font-medium">← Voltar ao site</Link>
            <a
              href={makeWhatsAppUrl('Olá! Vim pelo blog da Oxford Box e gostaria de um orçamento.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white text-sm font-bold"
            >
              Orçamento Grátis
            </a>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-gray-50 py-16 px-6 border-b border-gray-200">
        <div className="max-w-5xl mx-auto">
          <span className="text-[#C5A880] text-sm font-bold uppercase tracking-widest">Oxford Box Curitiba</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">Blog sobre Box de Banheiro e Vidraçaria</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Dicas, guias e informações sobre box de banheiro, vidro temperado e vidraçaria em Curitiba. 
            Conteúdo especializado para você tomar a melhor decisão para a sua reforma.
          </p>
        </div>
      </section>

      {/* Grid de Artigos */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artigos.map((artigo) => (
              <Link
                key={artigo.slug}
                href={`/blog/${artigo.slug}`}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-[#C5A880]/40 transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={artigo.imagem}
                    alt={artigo.titulo}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#C5A880]/10 text-[#C5A880] text-xs font-bold uppercase tracking-wide mb-3">
                    {artigo.categoria}
                  </span>
                  <h2 className="text-lg font-bold text-gray-900 leading-snug mb-2 group-hover:text-[#C5A880] transition-colors">
                    {artigo.titulo}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {artigo.resumo}
                  </p>
                  <div className="flex items-center justify-between">
                    <time className="text-xs text-gray-400">{new Date(artigo.data).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}</time>
                    <span className="text-[#C5A880] text-sm font-bold">Ler mais →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gray-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Quer um orçamento de Box de Banheiro em Curitiba?</h2>
          <p className="text-white/70 mb-8">Fale com nossos especialistas. Medição e orçamento gratuitos, sem compromisso.</p>
          <a
            href={makeWhatsAppUrl('Olá! Vim pelo blog da Oxford Box e gostaria de um orçamento de box de banheiro em Curitiba.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#25D366] text-white text-xl font-bold hover:bg-[#1DA851] transition-colors"
          >
            Solicitar Orçamento Grátis
          </a>
        </div>
      </section>
    </main>
  );
}
