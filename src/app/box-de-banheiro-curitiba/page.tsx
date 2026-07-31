import type { Metadata } from 'next';
import Link from 'next/link';
import { makeWhatsAppUrl } from '@/data/mockData';

export const metadata: Metadata = {
  title: 'Box de Banheiro em Curitiba | Vidro Temperado 8mm — Oxford Box',
  description: 'Box de banheiro em Curitiba sob medida com vidro temperado Blindex 8mm. Roldanas em inox, instalação em 3 dias úteis e garantia de 5 anos. A partir de R$380/m². Orçamento grátis!',
  keywords: [
    'box de banheiro curitiba',
    'box banheiro curitiba',
    'box de vidro curitiba',
    'box temperado curitiba',
    'box de banheiro sob medida curitiba',
    'box de banheiro preço curitiba',
    'vidraçaria box banheiro curitiba',
    'box frontal curitiba',
    'box de canto curitiba',
    'instalação box banheiro curitiba',
  ],
  alternates: { canonical: 'https://www.oxfordbox.com.br/box-de-banheiro-curitiba' },
  openGraph: {
    title: 'Box de Banheiro em Curitiba | Oxford Box',
    description: 'Box de banheiro sob medida em Curitiba. Vidro temperado 8mm, roldanas em inox e 5 anos de garantia. A partir de R$380/m².',
    url: 'https://www.oxfordbox.com.br/box-de-banheiro-curitiba',
    type: 'website',
    locale: 'pt_BR',
    images: [{ url: '/box1.jpg', width: 1200, height: 630, alt: 'Box de Banheiro em Curitiba - Oxford Box' }],
  },
};

const tipos = [
  {
    nome: 'Box Frontal (F1)',
    descricao: 'O modelo mais utilizado em Curitiba. Composto por uma parte fixa e uma porta deslizante, o box frontal se adapta perfeitamente a box de banheiro retos e de tamanho padrão. Fácil de limpar e com vedação superior.',
    caracteristicas: ['Vidro temperado 8mm', 'Perfis de alumínio anodizado', 'Roldanas de nylon com rolamento duplo', 'Vedação em silicone neutro'],
  },
  {
    nome: 'Box de Canto (F2)',
    descricao: 'Solução ideal para box de banheiro em formato L em Curitiba. Duas portas deslizantes que se movem com suavidade absoluta. Máximo aproveitamento do espaço sem abrir mão do estilo.',
    caracteristicas: ['Formato em L', 'Duas portas deslizantes independentes', 'Transpasse perfeito sem vazamento', 'Acabamento em diversas cores'],
  },
  {
    nome: 'Box Elegance (Roldanas Aparentes)',
    descricao: 'A linha premium da Oxford Box em Curitiba. As roldanas blindadas em aço inox 304 ficam aparentes no tubo superior, sem nenhum trilho no piso. Design moderno e instalação de altíssimo padrão.',
    caracteristicas: ['Roldanas aparentes inox 304', 'Sem trilho inferior no piso', 'Vidro 8mm extra-clear opcional', 'Disponível em preto fosco, dourado e cromado'],
  },
  {
    nome: 'Box com Porta de Abrir',
    descricao: 'Para box de banheiro menores ou banheiros adaptados. A porta pivotante com dobradiças de latão maciço oferece uma abertura livre e elegante, sem necessidade de trilhos.',
    caracteristicas: ['Dobradiças de alta resistência em latão', 'Fechamento suave com mola integrada', 'Puxador tipo H em inox', 'Vedação total com silicone neutro'],
  },
];

const cidadesAtendidas = [
  'Curitiba', 'São José dos Pinhais', 'Colombo', 'Araucária',
  'Campo Largo', 'Pinhais', 'Fazenda Rio Grande', 'Almirante Tamandaré',
  'Piraquara', 'Quatro Barras',
];

export default function BoxDeBanheiroCuritibaPage() {
  return (
    <main className="bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img src="/logo.png" alt="Oxford Box" className="h-12 w-auto object-contain" />
          </Link>
          <a
            href={makeWhatsAppUrl('Olá! Gostaria de um orçamento para Box de Banheiro em Curitiba.')}
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
          <span className="text-gray-800 font-medium">Box de Banheiro em Curitiba</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Box de Banheiro em <span className="text-[#C5A880]">Curitiba</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl leading-relaxed mb-8">
            Especialistas em box de banheiro sob medida em Curitiba e Região Metropolitana. 
            Vidro temperado 8mm, roldanas em inox, instalação profissional em até 3 dias úteis 
            e garantia de 5 anos. <strong className="text-white">A partir de R$380/m².</strong>
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={makeWhatsAppUrl('Olá! Gostaria de um orçamento para Box de Banheiro em Curitiba. Vim pela página de box.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-[#25D366] text-white text-lg font-bold hover:bg-[#1DA851] transition-colors"
            >
              Solicitar Orçamento Grátis
            </a>
            <Link href="/" className="flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/30 text-white text-lg font-bold hover:bg-white/10 transition-colors">
              Ver Catálogo Completo
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-[#C5A880] py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-center">
          {[
            { num: '+500', label: 'Box instalados em Curitiba' },
            { num: '5 anos', label: 'de garantia no serviço' },
            { num: '3 dias', label: 'para instalar após medição' },
            { num: '8mm', label: 'vidro temperado Blindex' },
          ].map((item) => (
            <div key={item.label} className="text-black">
              <div className="text-3xl font-extrabold">{item.num}</div>
              <div className="text-sm font-medium mt-1 opacity-80">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Tipos de Box */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tipos de Box de Banheiro em Curitiba
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-3xl">
            A Oxford Box oferece todos os modelos de box de banheiro para Curitiba e Região Metropolitana. 
            Todos 100% sob medida, com vidro temperado 8mm e acabamento premium.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tipos.map((tipo) => (
              <div key={tipo.nome} className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{tipo.nome}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{tipo.descricao}</p>
                <ul className="space-y-2">
                  {tipo.caracteristicas.map((c) => (
                    <li key={c} className="flex items-center gap-2 text-sm text-gray-700">
                      <svg className="w-5 h-5 text-[#25D366] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {c}
                    </li>
                  ))}
                </ul>
                <a
                  href={makeWhatsAppUrl(`Olá! Gostaria de um orçamento para o ${tipo.nome} em Curitiba.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300 font-bold"
                >
                  Orçar este modelo
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que a Oxford Box */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Por que escolher a Oxford Box para seu banheiro em Curitiba?
            </h2>
            <div className="space-y-5">
              {[
                { t: 'Medição Gratuita a Laser', d: 'Enviamos um técnico até sua residência em Curitiba para medir o vão com precisão milimétrica, sem custo adicional.' },
                { t: 'Vidro Temperado 8mm Certificado', d: 'Trabalhamos exclusivamente com vidros Blindex de 8mm, 5x mais resistentes que o vidro comum e exigidos pela ABNT NBR 7199.' },
                { t: 'Instalação em até 3 Dias Úteis', d: 'Nossa equipe instala seu box de forma rápida, limpa e organizada. Sem entulho, sem sujeira, sem dor de cabeça.' },
                { t: 'Garantia de 5 Anos', d: 'Confiamos tanto em nosso trabalho que oferecemos 5 anos de garantia contra defeitos de fabricação e instalação.' },
              ].map((item) => (
                <div key={item.t} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#C5A880] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{item.t}</h3>
                    <p className="text-gray-600 text-sm mt-1">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src="/box3.jpg" alt="Box de banheiro instalado em Curitiba pela Oxford Box" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Cidades Atendidas */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Atendemos toda a Região Metropolitana de Curitiba
          </h2>
          <p className="text-gray-600 mb-8">Instalamos box de banheiro em todas essas cidades:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {cidadesAtendidas.map((cidade) => (
              <span key={cidade} className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium text-sm">
                📍 {cidade}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6 bg-gray-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para transformar seu banheiro em Curitiba?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Solicite agora um orçamento gratuito pelo WhatsApp. Nosso especialista responde em menos de 5 minutos durante o horário comercial.
          </p>
          <a
            href={makeWhatsAppUrl('Olá! Gostaria de um orçamento para Box de Banheiro em Curitiba. Vim pelo site da Oxford Box.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#25D366] text-white text-xl font-bold hover:bg-[#1DA851] transition-colors"
          >
            <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Solicitar Orçamento Grátis
          </a>
          <p className="text-white/40 text-sm mt-4">Segunda a Sexta: 8h às 18h · Sábado: 8h às 12h</p>
        </div>
      </section>
    </main>
  );
}
