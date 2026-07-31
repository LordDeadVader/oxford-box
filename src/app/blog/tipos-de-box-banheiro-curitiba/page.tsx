import type { Metadata } from 'next';
import Link from 'next/link';
import BlogNavbar from '@/components/BlogNavbar';
import Footer from '@/components/Footer';
import { makeWhatsAppUrl } from '@/data/mockData';

export const metadata: Metadata = {
  title: 'Tipos de Box de Banheiro em Curitiba: Guia Completo e Modelos | Oxford Box',
  description:
    'Guia completo sobre tipos de box de banheiro em Curitiba. Compare Box Frontal (F1), Box de Canto (F2), Box Elegance e Porta de Abrir. Preços a partir de R$ 380/m² e instalação em 3 dias úteis.',
  keywords: [
    'tipos de box de banheiro curitiba',
    'box frontal curitiba',
    'box de canto curitiba',
    'box elegance curitiba',
    'box de abrir curitiba',
    'modelos box banheiro',
    'vidraçaria curitiba',
    'box de vidro temperado curitiba',
  ],
  alternates: {
    canonical: 'https://www.oxfordbox.com.br/blog/tipos-de-box-banheiro-curitiba',
  },
  openGraph: {
    title: 'Tipos de Box de Banheiro em Curitiba: Guia Completo e Modelos',
    description:
      'Descubra qual o modelo ideal para seu banheiro em Curitiba. Comparativo completo de Box Frontal, Box de Canto, Box Elegance e Porta de Abrir.',
    url: 'https://www.oxfordbox.com.br/blog/tipos-de-box-banheiro-curitiba',
    siteName: 'Oxford Box',
    locale: 'pt_BR',
    type: 'article',
    images: [
      {
        url: 'https://www.oxfordbox.com.br/box2.jpg',
        width: 1200,
        height: 630,
        alt: 'Tipos de Box de Banheiro em Curitiba - Oxford Box',
      },
    ],
  },
};

export default function TiposDeBoxBanheiroCuritibaPage() {
  const whatsappUrl = makeWhatsAppUrl(
    'Olá! Li o guia de tipos de box de banheiro no blog da Oxford Box e gostaria de solicitar um orçamento para Curitiba.'
  );

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#C5A880]/30 selection:text-black">
      {/* Header & Navigation */}
      <BlogNavbar />

      {/* Main Content */}
      <main className="pb-16">
        {/* Top Hero / Header Section */}
        <section className="bg-gradient-to-b from-[#0B0C10] via-[#12141A] to-white pt-10 pb-16 text-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs sm:text-sm text-white/60 mb-6 font-medium">
              <Link href="/" className="hover:text-[#C5A880] transition-colors">
                Início
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-[#C5A880] transition-colors">
                Blog
              </Link>
              <span>/</span>
              <span className="text-[#C5A880] truncate max-w-[200px] sm:max-w-none">
                Tipos de Box de Banheiro: Guia Completo para Curitiba
              </span>
            </nav>

            {/* Category Badge & Metadata */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-[#C5A880]/20 text-[#C5A880] border border-[#C5A880]/40 text-xs font-semibold px-3.5 py-1 rounded-full uppercase tracking-wider">
                Guia de Compra &amp; Modelos
              </span>
              <span className="text-xs text-white/50">·</span>
              <span className="text-xs text-white/60">Atualizado em 30 de Julho de 2026</span>
              <span className="text-xs text-white/50">·</span>
              <span className="text-xs text-white/60">7 min de leitura</span>
            </div>

            {/* Main H1 Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Tipos de Box de Banheiro: Guia Completo para Curitiba
            </h1>

            {/* Excerpt */}
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed font-light mb-8">
              Conheça todos os <strong className="text-[#C5A880] font-semibold">modelos de box de banheiro</strong> disponíveis para residências e apartamentos em Curitiba. Descubra como alinhar aproveitamento de espaço, segurança e acabamento refinado para o seu projeto.
            </p>

            {/* Author info */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/10">
              <div className="w-11 h-11 rounded-full bg-[#C5A880] text-black font-bold flex items-center justify-center text-sm shadow-md">
                OB
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Engenharia Oxford Box</p>
                <p className="text-xs text-white/60">Especialistas em Vidraçaria Arquitetônica em Curitiba, PR</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="-mt-10 mb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-900">
            <img
              src="/box2.jpg"
              alt="Tipos de box de banheiro em Curitiba - Vidro temperado 8mm com roldanas de alto padrão"
              className="w-full h-[320px] sm:h-[450px] object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="bg-gray-900 text-gray-400 text-xs px-4 py-2.5 italic border-t border-gray-800 flex justify-between items-center">
              <span>Box Elegance em vidro temperado extra-clear instalado pela Oxford Box em Curitiba</span>
              <span className="text-[#C5A880] not-italic font-medium">Foto: Oxford Box</span>
            </div>
          </div>
        </section>

        {/* Article Body Content */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-lg text-gray-700 leading-relaxed space-y-8">
            {/* Introduction */}
            <div>
              <p className="text-lg leading-relaxed text-gray-800 font-medium">
                Ao planejar a reforma ou construção do seu banheiro em Curitiba e Região Metropolitana, a escolha do <strong className="text-gray-900 font-semibold">tipo de box de banheiro</strong> ideal vai muito além da simples proteção contra respingos. O box é uma peça arquitetônica fundamental que define a iluminação natural, a sensação de amplitude e a praticidade na higienização diária.
              </p>
              <p className="mt-4">
                Em virtude do clima curitibano — marcado por temperaturas mais frias no inverno e variações bruscas de umidade —, o box em vidro temperado cumpre o papel crucial de reter o vapor aquecido do chuveiro e manter a área seca protegida. Seja para um apartamento aconchegante no Centro, Água Verde ou Portão, ou para uma residência de alto padrão no Batel, Ecoville ou Cabral, acertar no modelo garante segurança e valorização imobiliária.
              </p>
              <p className="mt-4">
                Neste guia definitivo preparado pela <strong className="text-[#C5A880] font-semibold">Oxford Box</strong>, detalhamos as características técnicas dos principais <strong className="text-gray-900">tipos de box de banheiro em Curitiba</strong>, com valores a partir de <strong>R$ 380/m²</strong>, prazos de instalação em até 3 dias úteis e garantia contratual de 5 anos.
              </p>
            </div>

            {/* Callout box */}
            <div className="my-8 p-6 bg-amber-50/70 border-l-4 border-[#C5A880] rounded-r-xl shadow-sm">
              <h4 className="text-base font-bold text-gray-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#C5A880]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Resumo dos Modelos Principais:
              </h4>
              <ul className="space-y-2 text-sm text-gray-800 font-medium">
                <li className="flex items-start gap-2">
                  <span className="text-[#C5A880] font-bold">✓</span>
                  <span><strong>Box Frontal (F1):</strong> O modelo clássico de correr reto, perfeito para vãos entre duas paredes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C5A880] font-bold">✓</span>
                  <span><strong>Box de Canto (F2):</strong> Formato em L a 90°, ideal para otimizar cantos de banheiros compactos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C5A880] font-bold">✓</span>
                  <span><strong>Box Elegance:</strong> Roldanas aparentes em aço inox 304 com acabamento de luxo e rolar ultrassilencioso.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C5A880] font-bold">✓</span>
                  <span><strong>Box de Abrir:</strong> Porta de giro com dobradiças, recomendada para acessibilidade e vãos estreitos.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Box Frontal (F1) */}
            <div className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight border-b-2 border-[#C5A880]/30 pb-3 mb-6">
                1. Box Frontal (F1 / De Correr Reto): O Clássico e Funcional
              </h2>
              <p>
                O <strong className="text-gray-900">box frontal em Curitiba</strong> (conhecido tecnicamente como modelo F1 ou F2 reto) é a escolha mais difundida na vidraçaria moderna. Ele é instalado em vãos retos onde a área de banho fica contida entre duas paredes paralelas.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                Como Funciona e Estrutura Técnica
              </h3>
              <p>
                O sistema é composto por um painel de vidro fixo e uma porta móvel deslizante que corre sobre um trilho superior com roldanas de alta precisão. Em vãos mais amplos (acima de 1,50m de largura), pode-se adotar o formato com dois fixos nas extremidades e duas portas móveis centrais que se abrem para os lados.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                Para Qual Tipo de Banheiro Serve?
              </h3>
              <p>
                É perfeito para banheiros retangulares ou no formato corredor, muito comuns em apartamentos em Curitiba. Como o movimento da porta ocorre dentro do próprio eixo do vão, não exige nenhum espaço livre do lado de fora.
              </p>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 my-6">
                <h4 className="font-bold text-gray-900 text-base mb-3 text-[#C5A880]">
                  Vantagens do Box Frontal:
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-gray-700">
                  <li><strong>Aproveitamento total da área externa:</strong> Permite aproximar gabinetes, vasos sanitários e toalheiros sem interferir na abertura.</li>
                  <li><strong>Custo-benefício imbatível:</strong> Preço inicial acessível (a partir de R$ 380/m²) com excelente índice de durabilidade.</li>
                  <li><strong>Fácil higienização:</strong> Vidro temperado 8mm com tratamento anticalcário facilita a remoção de marcas de água.</li>
                </ul>
              </div>
            </div>

            {/* Section 2: Box de Canto (F2) */}
            <div className="pt-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight border-b-2 border-[#C5A880]/30 pb-3 mb-6">
                2. Box de Canto (F2 / Formato L): Otimização em 90°
              </h2>
              <p>
                Quando a área do chuveiro ocupa a quina do banheiro e conta com apenas duas paredes de alvenaria, o <strong className="text-gray-900">box de canto em Curitiba</strong> (modelo em L ou angulado 90 graus) é a engenharia perfeita para delimitar o espaço de banho.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                Mecanismo e Vedação
              </h3>
              <p>
                O box de canto conta com dois painéis fixos presos às alvenarias e duas portas deslizantes que correm em direção ao vértice do canto. O encontro das portas é vedado hermeticamente com perfis em silicone magnético antirespingo.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                Quando Escolher o Box de Canto?
              </h3>
              <p>
                É extremamente indicado para banheiros sociais, suítes compactas ou lavabos com chuveiro em bairros como Cristo Rei, Portão e Champagnat. A abertura pela quina cria um acesso diagonal confortável sem congestionar a circulação central do cômodo.
              </p>
            </div>

            {/* Section 3: Box Elegance */}
            <div className="pt-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight border-b-2 border-[#C5A880]/30 pb-3 mb-6">
                3. Box Elegance com Roldanas Aparentes: Luxo e Alta Performance
              </h2>
              <p>
                Para projetos de arquitetura de interiores que exigem acabamento refinado e presença marcante, o <strong className="text-gray-900">box elegance curitiba</strong> é a solução de topo de linha em vidraçaria.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                O que é e Quais são Seus Diferenciais?
              </h3>
              <p>
                Em vez de ocultar o mecanismo de correr em perfis convencionais de alumínio, o Box Elegance valoriza os metais criando uma peça de design. Ele possui um trilho tubular superior maciço e roldanas aparentes confeccionadas em <strong>aço inoxidável 304</strong> com rolamentos blindados duplos.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                Acabamentos Exclusivos PVD
              </h3>
              <p>
                Na Oxford Box, o modelo Elegance pode ser customizado com revestimentos metálicos PVD de altíssima durabilidade e resistência contra névoa salina e umidade:
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4 text-gray-700">
                <li><strong>Preto Fosco (Black Matte):</strong> Visual industrial contemporâneo e sofisticado.</li>
                <li><strong>Dourado Champagne &amp; Rosé Gold:</strong> O ápice do requinte para suítes master.</li>
                <li><strong>Cromo Polido &amp; Bronze Escovado:</strong> Atemporalidade e brilho intenso.</li>
              </ul>
              <p className="mt-2">
                As roldanas aparentes deslizam sem qualquer ruído ou atrito, garantindo um toque suave e garantia estendida de 5 anos.
              </p>
            </div>

            {/* Section 4: Box com Porta de Abrir */}
            <div className="pt-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight border-b-2 border-[#C5A880]/30 pb-3 mb-6">
                4. Box com Porta de Abrir (Dobradiças): Solução em Acessibilidade
              </h2>
              <p>
                O <strong className="text-gray-900">box de abrir em Curitiba</strong> (ou box de giro) elimina a necessidade de trilhos superiores e inferiores de correr, utilizando dobradiças de latão maciço ou inox fixadas na parece ou no próprio vidro.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                Quando Usar e Indicação Técnica
              </h3>
              <p>
                É a opção ideal para banheiros com vãos estreitos (menos de 90 cm de largura), onde a colocação de uma porta de correr deixaria uma passagem útil muito reduzida.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                Ideal para Acessibilidade (PCD e Idosos)
              </h3>
              <p>
                A porta de abrir oferece um <strong>vão livre de abertura de até 100%</strong>. Sem o trilho inferior no piso, cria-se uma passagem totalmente plana e sem obstáculos, sendo a única escolha recomendada por normas de acessibilidade para cadeirantes, idosos e pessoas com mobilidade reduzida.
              </p>
            </div>

            {/* Section 5: Comparative Table */}
            <div className="pt-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight border-b-2 border-[#C5A880]/30 pb-3 mb-6">
                5. Tabela Comparativa dos Modelos de Box
              </h2>
              <p className="mb-6">
                Compare lado a lado as especificações dos <strong className="text-gray-900">modelos de box de banheiro</strong> para facilitar a sua decisão:
              </p>

              <div className="overflow-x-auto my-6 rounded-xl border border-gray-200 shadow-sm">
                <table className="w-full text-left text-sm text-gray-700">
                  <thead className="bg-[#12141A] text-white uppercase text-xs tracking-wider">
                    <tr>
                      <th className="px-5 py-4 font-semibold">Modelo</th>
                      <th className="px-5 py-4 font-semibold">Ambiente Indicado</th>
                      <th className="px-5 py-4 font-semibold">Sistema de Abertura</th>
                      <th className="px-5 py-4 font-semibold text-[#C5A880]">Acabamento de Ferragens</th>
                      <th className="px-5 py-4 font-semibold">Faixa de Preço</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-5 py-4 font-bold text-gray-900">Box Frontal (F1)</td>
                      <td className="px-5 py-4 text-gray-600">Vãos retos entre 2 paredes</td>
                      <td className="px-5 py-4 text-gray-600">Porta de Correr Trilho</td>
                      <td className="px-5 py-4 text-gray-600">Alumínio Anodizado</td>
                      <td className="px-5 py-4 font-semibold text-[#C5A880]">A partir de R$ 380/m²</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-5 py-4 font-bold text-gray-900">Box de Canto (F2)</td>
                      <td className="px-5 py-4 text-gray-600">Chuveiro no canto 90°</td>
                      <td className="px-5 py-4 text-gray-600">2 Portas de Correr Canto</td>
                      <td className="px-5 py-4 text-gray-600">Alumínio Reforçado</td>
                      <td className="px-5 py-4 font-semibold text-[#C5A880]">Econômico / Médio</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-5 py-4 font-bold text-gray-900">Box Elegance</td>
                      <td className="px-5 py-4 text-gray-600">Projetos de Alto Padrão</td>
                      <td className="px-5 py-4 text-gray-600">Roldanas Aparentes Inox</td>
                      <td className="px-5 py-4 text-gray-600">Inox 304 PVD (Preto, Gold, Cromo)</td>
                      <td className="px-5 py-4 font-semibold text-[#C5A880]">Linha Premium</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-5 py-4 font-bold text-gray-900">Porta de Abrir</td>
                      <td className="px-5 py-4 text-gray-600">Vãos estreitos e Acessibilidade</td>
                      <td className="px-5 py-4 text-gray-600">Giro com Dobradiças</td>
                      <td className="px-5 py-4 text-gray-600">Dobradiças Latão / Inox 304</td>
                      <td className="px-5 py-4 font-semibold text-[#C5A880]">Sob Medida</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 6: How to Choose */}
            <div className="pt-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight border-b-2 border-[#C5A880]/30 pb-3 mb-6">
                6. Como Escolher o Melhor Box para Seu Banheiro em Curitiba
              </h2>
              <p>
                Para garantir uma compra sem erros, siga os 4 passos recomendados pelos engenheiros da Oxford Box:
              </p>

              <ol className="space-y-4 my-6 text-gray-800">
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-200">
                  <span className="w-7 h-7 rounded-full bg-[#C5A880] text-black font-bold flex items-center justify-center shrink-0 text-sm">1</span>
                  <div>
                    <strong className="text-gray-900 block font-bold mb-1">Medição Presencial a Laser:</strong>
                    <span>Meça a largura exata do vão. A equipe da Oxford Box realiza a medição técnica em domicílio em Curitiba e Região sem qualquer taxa adicional.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-200">
                  <span className="w-7 h-7 rounded-full bg-[#C5A880] text-black font-bold flex items-center justify-center shrink-0 text-sm">2</span>
                  <div>
                    <strong className="text-gray-900 block font-bold mb-1">Escolha da Espessura do Vidro (8mm ou 10mm):</strong>
                    <span>Exija sempre vidro temperado de 8mm ou 10mm certificado pela ABNT NBR 7199 para suportar choque térmico e impacto sem vibrações.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-200">
                  <span className="w-7 h-7 rounded-full bg-[#C5A880] text-black font-bold flex items-center justify-center shrink-0 text-sm">3</span>
                  <div>
                    <strong className="text-gray-900 block font-bold mb-1">Harmonização da Cor das Ferragens:</strong>
                    <span>Combine a tonalidade dos metais (Preto Fosco, Dourado Champagne, Cromo Polido) com os misturadores e torneiras do seu lavatório.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-200">
                  <span className="w-7 h-7 rounded-full bg-[#C5A880] text-black font-bold flex items-center justify-center shrink-0 text-sm">4</span>
                  <div>
                    <strong className="text-gray-900 block font-bold mb-1">Prazo de Instalação e Garantia:</strong>
                    <span>Escolha uma vidraçaria com estoque próprio que garanta instalação em <strong>3 dias úteis</strong> e suporte pós-venda com 5 anos de garantia contratual.</span>
                  </div>
                </li>
              </ol>
            </div>

            {/* Conclusion */}
            <div className="pt-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight border-b-2 border-[#C5A880]/30 pb-3 mb-6">
                Conclusão: Solicite Seu Orçamento com a Oxford Box
              </h2>
              <p>
                Qualquer que seja o seu modelo escolhido — Box Frontal, Box de Canto, Box Elegance ou Porta de Abrir —, a <strong className="text-[#C5A880] font-semibold">Oxford Box</strong> possui a estrutura técnica e os melhores profissionais para transformar seu banheiro em um ambiente seguro e luxuoso.
              </p>
              <p className="mt-4">
                Entre em contato com nossa equipe comercial pelo WhatsApp e receba seu orçamento personalizado sob medida para Curitiba em poucos minutos!
              </p>
            </div>
          </div>
        </section>

        {/* High Impact WhatsApp CTA Banner */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-14">
          <div className="bg-gradient-to-r from-[#0B0C10] via-[#1A1C23] to-[#0B0C10] rounded-3xl p-8 sm:p-12 text-center text-white border border-[#C5A880]/30 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-[#C5A880]/10 blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <span className="inline-block bg-[#C5A880]/20 text-[#C5A880] border border-[#C5A880]/30 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
                Atendimento Rápido em Curitiba e Região
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                Pronto para Escolher o Box Perfeito para Seu Banheiro?
              </h3>
              <p className="text-white/70 max-w-xl mx-auto text-base sm:text-lg mb-8 leading-relaxed">
                Orçamentos a partir de <strong>R$ 380/m²</strong> com medição presencial grátis em Curitiba, vidros temperados 8mm, roldanas em inox 304 e 5 anos de garantia!
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#C5A880] to-[#D4AF37] text-black font-bold text-base hover:shadow-[0_0_30px_rgba(197,168,128,0.5)] transition-all duration-300 transform hover:scale-105"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chamar no WhatsApp Agora
                </a>
                <span className="text-white/50 text-xs sm:text-sm">
                  📞 WhatsApp: +55 (41) 9938-2240
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles Section */}
        <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#C5A880]">
                  Conteúdo Recomendado
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mt-1">
                  Artigos Relacionados
                </h3>
              </div>
              <Link
                href="/blog"
                className="text-sm font-semibold text-[#C5A880] hover:text-[#a88d67] transition-colors flex items-center gap-1"
              >
                Ver todos os artigos &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Related Card 1 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow group flex flex-col">
                <div className="h-48 overflow-hidden bg-gray-900">
                  <img
                    src="/box1.jpg"
                    alt="Box 8mm vs 6mm em Curitiba"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold text-[#C5A880] uppercase tracking-wider">
                      Guia Técnico
                    </span>
                    <h4 className="text-lg font-bold text-gray-900 mt-2 mb-3 group-hover:text-[#C5A880] transition-colors">
                      Box de Banheiro 8mm ou 6mm: Qual Escolher em Curitiba?
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                      Comparativo técnico entre vidros temperados de 8mm e 6mm, normas ABNT NBR 7199 e resistência térmica.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs text-gray-400">6 min de leitura</span>
                    <Link
                      href="/blog/box-banheiro-8mm-vs-6mm"
                      className="text-xs font-bold text-[#C5A880] group-hover:underline"
                    >
                      Ler artigo &rarr;
                    </Link>
                  </div>
                </div>
              </div>

              {/* Related Card 2 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow group flex flex-col">
                <div className="h-48 overflow-hidden bg-gray-900">
                  <img
                    src="/box3.jpg"
                    alt="Como limpar box de vidro temperado"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold text-[#C5A880] uppercase tracking-wider">
                      Manutenção &amp; Dicas
                    </span>
                    <h4 className="text-lg font-bold text-gray-900 mt-2 mb-3 group-hover:text-[#C5A880] transition-colors">
                      Como Limpar Box de Vidro Temperado sem Manchar
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                      Métodos infalíveis para eliminar sujeiras, sabão impregnado e manchas de calcário do seu box em Curitiba.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs text-gray-400">5 min de leitura</span>
                    <Link
                      href="/blog/como-limpar-box-vidro-temperado"
                      className="text-xs font-bold text-[#C5A880] group-hover:underline"
                    >
                      Ler artigo &rarr;
                    </Link>
                  </div>
                </div>
              </div>

              {/* Related Card 3 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow group flex flex-col">
                <div className="h-48 overflow-hidden bg-gray-900">
                  <img
                    src="/box4.jpg"
                    alt="Vidraçaria em Curitiba"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold text-[#C5A880] uppercase tracking-wider">
                      Vidraçaria Curitiba
                    </span>
                    <h4 className="text-lg font-bold text-gray-900 mt-2 mb-3 group-hover:text-[#C5A880] transition-colors">
                      Vidraçaria em Curitiba: Soluções em Box e Espelhos
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                      Conheça a linha completa de espelhos LED, guarda-corpos e box de vidro temperado com instalação garantida.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs text-gray-400">4 min de leitura</span>
                    <Link
                      href="/vidracaria-curitiba"
                      className="text-xs font-bold text-[#C5A880] group-hover:underline"
                    >
                      Ver detalhes &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
