import type { Metadata } from 'next';
import Link from 'next/link';
import { makeWhatsAppUrl } from '@/data/mockData';

export const metadata: Metadata = {
  title: 'Vidraçaria em Curitiba | Box de Vidro e Espelhos — Oxford Box',
  description: 'Vidraçaria em Curitiba especializada em box de banheiro, espelhos decorativos, divisórias de vidro e guarda-corpos. Vidro temperado 8mm, instalação profissional. Orçamento grátis!',
  keywords: [
    'vidraçaria curitiba',
    'vidraçaria box curitiba',
    'vidraçaria box banheiro curitiba',
    'box de vidro curitiba',
    'espelhos decorativos curitiba',
    'divisória de vidro curitiba',
    'guarda corpo vidro curitiba',
    'vidro temperado curitiba',
    'vidraçaria arquitetônica curitiba',
    'box vidro temperado 8mm curitiba',
  ],
  alternates: { canonical: 'https://www.oxfordbox.com.br/vidracaria-curitiba' },
  openGraph: {
    title: 'Vidraçaria em Curitiba | Oxford Box',
    description: 'Vidraçaria especializada em Curitiba. Box de banheiro, espelhos, divisórias e guarda-corpos em vidro temperado 8mm.',
    url: 'https://www.oxfordbox.com.br/vidracaria-curitiba',
    type: 'website',
    locale: 'pt_BR',
    images: [{ url: '/box2.jpg', width: 1200, height: 630, alt: 'Vidraçaria em Curitiba - Oxford Box' }],
  },
};

const servicos = [
  {
    icone: '🚿',
    nome: 'Box de Banheiro',
    descricao: 'Boxes frontal, de canto, Elegance e com porta de abrir. Todos em vidro temperado 8mm, sob medida para o seu banheiro em Curitiba.',
    link: '/box-de-banheiro-curitiba',
  },
  {
    icone: '🪞',
    nome: 'Espelhos Decorativos',
    descricao: 'Espelhos com bisotê, iluminação LED embutida e formatos personalizados para banheiros, salas e corredores em Curitiba.',
    link: '/',
  },
  {
    icone: '🏠',
    nome: 'Divisórias de Vidro',
    descricao: 'Divisórias em vidro temperado para separar ambientes com elegância. Ideais para escritórios, salas e banheiros em Curitiba.',
    link: '/',
  },
  {
    icone: '🛡️',
    nome: 'Guarda-corpos',
    descricao: 'Guarda-corpos em vidro temperado e inox para escadas, varandas e mezaninos. Segurança e design para residências em Curitiba.',
    link: '/',
  },
];

export default function VidracariaCuritibaPage() {
  return (
    <main className="bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img src="/logo.png" alt="Oxford Box - Vidraçaria em Curitiba" className="h-12 w-auto object-contain" />
          </Link>
          <a
            href={makeWhatsAppUrl('Olá! Gostaria de um orçamento. Vim pela página de vidraçaria em Curitiba.')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white text-sm font-bold"
          >
            Orçar pelo WhatsApp
          </a>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="bg-gray-50 px-6 py-3 text-sm text-gray-500">
        <div className="max-w-5xl mx-auto">
          <Link href="/" className="hover:text-gray-800">Início</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800 font-medium">Vidraçaria em Curitiba</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Vidraçaria em <span className="text-[#C5A880]">Curitiba</span> com Alto Padrão
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              A Oxford Box é a vidraçaria especializada em Curitiba para box de banheiro, 
              espelhos decorativos, divisórias e guarda-corpos em vidro temperado. 
              Atendemos toda a Região Metropolitana com instalação profissional e garantia de 5 anos.
            </p>
            <a
              href={makeWhatsAppUrl('Olá! Gostaria de um orçamento para vidraçaria em Curitiba. Vim pelo site da Oxford Box.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#25D366] text-white text-lg font-bold hover:bg-[#1DA851] transition-colors"
            >
              Solicitar Orçamento Grátis
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img src="/box2.jpg" alt="Vidraçaria em Curitiba - Oxford Box" className="w-full h-80 object-cover" />
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Serviços de Vidraçaria em Curitiba
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-3xl">
            Como vidraçaria em Curitiba, a Oxford Box oferece uma linha completa de soluções 
            em vidro temperado para residências e empresas.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicos.map((s) => (
              <div key={s.nome} className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-[#C5A880]/40 transition-all">
                <div className="text-4xl mb-4">{s.icone}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{s.nome}</h3>
                <p className="text-gray-600 leading-relaxed mb-5">{s.descricao}</p>
                <a
                  href={makeWhatsAppUrl(`Olá! Gostaria de um orçamento para ${s.nome} em Curitiba.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#25D366] font-bold text-sm hover:underline"
                >
                  Solicitar orçamento →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Texto rico em keywords para SEO */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            A melhor vidraçaria para Box de Banheiro em Curitiba
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
            <div>
              <p>
                Quando o assunto é <strong>vidraçaria de box banheiro em Curitiba</strong>, 
                a Oxford Box se destaca pela qualidade dos materiais utilizados e pela excelência 
                na instalação. Utilizamos exclusivamente vidro temperado 8mm, que é 5x mais 
                resistente que o vidro comum e segue os padrões da <strong>ABNT NBR 7199</strong>.
              </p>
              <p className="mt-4">
                Nossa <strong>vidraçaria em Curitiba</strong> atende todos os bairros da cidade 
                e da Região Metropolitana: Batel, Bigorrilho, Água Verde, Xaxim, Portão, 
                Capão da Imbuia, Cajuru, CIC, Boqueirao, Sítio Cercado, e muito mais.
              </p>
            </div>
            <div>
              <p>
                O <strong>box de vidro temperado em Curitiba</strong> da Oxford Box vem com 
                todos os acessórios inclusos: perfis de alumínio anodizado, roldanas com rolamento 
                duplo de nylon, vedação em silicone neutro e trinco de segurança magnético.
              </p>
              <p className="mt-4">
                Para solicitar seu <strong>orçamento de vidraçaria em Curitiba</strong>, 
                basta entrar em contato pelo WhatsApp. Respondemos em minutos e 
                agendamos a visita técnica sem custo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6 bg-gray-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Fale com nossa vidraçaria em Curitiba</h2>
          <p className="text-white/70 text-lg mb-8">
            Orçamento gratuito, sem compromisso. Respondemos em menos de 5 minutos.
          </p>
          <a
            href={makeWhatsAppUrl('Olá! Gostaria de um orçamento da vidraçaria. Vim pelo site da Oxford Box em Curitiba.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#25D366] text-white text-xl font-bold hover:bg-[#1DA851] transition-colors"
          >
            <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Falar com Especialista
          </a>
        </div>
      </section>
    </main>
  );
}
