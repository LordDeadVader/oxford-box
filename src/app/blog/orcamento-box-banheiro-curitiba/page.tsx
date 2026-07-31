import type { Metadata } from 'next';
import Link from 'next/link';
import BlogNavbar from '@/components/BlogNavbar';
import Footer from '@/components/Footer';
import { makeWhatsAppUrl } from '@/data/mockData';

export const metadata: Metadata = {
  title: 'Quanto Custa um Box de Banheiro em Curitiba? Guia de Preços 2026 | Oxford Box',
  description:
    'Descubra quanto custa um box de banheiro em Curitiba em 2026. Tabela de preços atualizada a partir de R$380/m², fatores que influenciam o valor, modelos (frontal, canto, elegance, abrir) e como solicitar orçamento grátis.',
  keywords: [
    'orçamento box banheiro curitiba',
    'preço box banheiro curitiba',
    'quanto custa box banheiro curitiba',
    'valor box banheiro curitiba',
    'box banheiro barato curitiba',
    'vidraçaria curitiba orçamento',
    'box de vidro temperado curitiba preço',
    'oxford box curitiba',
  ],
  alternates: {
    canonical: 'https://www.oxfordbox.com.br/blog/orcamento-box-banheiro-curitiba',
  },
  openGraph: {
    title: 'Quanto Custa um Box de Banheiro em Curitiba? Guia de Preços 2026',
    description:
      'Guia completo de preços para box de banheiro em Curitiba. Confira a tabela por m², modelos de correr, canto, elegance e abrir, e agende sua medição grátis.',
    url: 'https://www.oxfordbox.com.br/blog/orcamento-box-banheiro-curitiba',
    siteName: 'Oxford Box',
    locale: 'pt_BR',
    type: 'article',
    images: [
      {
        url: 'https://www.oxfordbox.com.br/box4.jpg',
        width: 1200,
        height: 630,
        alt: 'Orçamento Box de Banheiro em Curitiba Oxford Box 2026',
      },
    ],
  },
};

export default function BlogOrcamentoBoxBanheiroCuritibaPage() {
  const whatsappUrl = makeWhatsAppUrl(
    'Olá! Li o guia de preços no blog e gostaria de solicitar um orçamento sem compromisso para meu box de banheiro em Curitiba.'
  );

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#C5A880]/30 selection:text-black">
      {/* Header & Navigation */}
      <BlogNavbar />

      {/* Main Container */}
      <main className="pb-16">
        {/* Article Top Header & Breadcrumb */}
        <section className="bg-gradient-to-b from-[#0B0C10] via-[#12141A] to-white pt-10 pb-16 text-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb navigation */}
            <nav className="flex items-center gap-2 text-xs sm:text-sm text-white/60 mb-6 font-medium">
              <Link href="/" className="hover:text-[#C5A880] transition-colors">
                Início
              </Link>
              <span>/</span>
              <Link href="/" className="hover:text-[#C5A880] transition-colors">
                Blog
              </Link>
              <span>/</span>
              <span className="text-[#C5A880] truncate max-w-[200px] sm:max-w-none">
                Quanto Custa um Box de Banheiro em Curitiba? Guia de Preços 2026
              </span>
            </nav>

            {/* Category Badge & Metadata */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-[#C5A880]/20 text-[#C5A880] border border-[#C5A880]/40 text-xs font-semibold px-3.5 py-1 rounded-full uppercase tracking-wider">
                Guia de Preços &amp; Orçamento
              </span>
              <span className="text-xs text-white/50">·</span>
              <span className="text-xs text-white/60">Atualizado em 30 de Julho de 2026</span>
              <span className="text-xs text-white/50">·</span>
              <span className="text-xs text-white/60">8 min de leitura</span>
            </div>

            {/* H1 Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Quanto Custa um Box de Banheiro em Curitiba? Guia de Preços 2026
            </h1>

            {/* Subtitle / Lead Paragraph */}
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed font-light mb-8">
              Planejando a reforma ou construção do seu banheiro na capital paranaense? Descubra o{' '}
              <strong className="text-[#C5A880] font-semibold">orçamento de box de banheiro em Curitiba</strong>, com valores atualizados por metro quadrado, tabela por modelo e dicas valiosas para economizar com segurança.
            </p>

            {/* Author Information */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/10">
              <div className="w-11 h-11 rounded-full bg-[#C5A880] text-black font-bold flex items-center justify-center text-sm shadow-md">
                OB
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Consultoria Técnica Oxford Box</p>
                <p className="text-xs text-white/60">Especialistas em Vidraçaria &amp; Box de Vidro em Curitiba e Região</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="-mt-10 mb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-900">
            <img
              src="/box4.jpg"
              alt="Orçamento de Box de Banheiro em Curitiba com vidros temperados 8mm e roldanas de inox"
              className="w-full h-[320px] sm:h-[450px] object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="bg-gray-900 text-gray-400 text-xs px-4 py-2.5 italic border-t border-gray-800 flex justify-between items-center">
              <span>Box de Banheiro Temperado 8mm instalado em Curitiba — Oxford Box</span>
              <span className="text-[#C5A880] not-italic font-medium">Foto: Oxford Box</span>
            </div>
          </div>
        </section>

        {/* Article Body Content */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-lg text-gray-700 leading-relaxed space-y-8">
            {/* Section 1: Introduction & Average Price */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight border-b-2 border-[#C5A880]/30 pb-3 mb-6">
                1. Introdução: Qual é o Preço Médio do Box de Banheiro em Curitiba?
              </h2>
              <p className="text-lg leading-relaxed text-gray-800 font-medium">
                Se você está pesquisando por <strong className="text-gray-900 font-semibold">orçamento box banheiro curitiba</strong>, saber qual o valor justo a se pagar é a primeira dúvida que surge na hora de projetar o banheiro. Em 2026, o preço médio do metro quadrado do box de vidro temperado 8mm em Curitiba e Região Metropolitana varia entre <strong className="text-[#C5A880] font-bold">R$ 380/m² e R$ 750/m²</strong>, dependendo diretamente do modelo escolhido, das dimensões do vão, da cor do vidro e do acabamento das ferragens.
              </p>
              <p className="mt-4">
                Na <strong className="text-gray-900 font-semibold">Oxford Box</strong>, trabalhamos com valores competitivos a partir de <strong className="text-[#C5A880] font-bold">R$ 380/m²</strong> para modelos padrão de vidro temperado 8mm incolor com ferragens em alumínio anodizado. Para modelos arquitetônicos da linha premium, como a <strong className="text-gray-900">Linha Elegance com roldanas aparentes em aço inox 304</strong> ou o modelo teto ao chão, os valores são calculados sob medida para garantir um acabamento personalizado de alto padrão.
              </p>
            </div>

            {/* Quick Summary Highlights Box */}
            <div className="my-8 p-6 bg-amber-50/70 border-l-4 border-[#C5A880] rounded-r-xl shadow-sm">
              <h4 className="text-base font-bold text-gray-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#C5A880]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Destaques do Orçamento Oxford Box:
              </h4>
              <ul className="space-y-2 text-sm text-gray-800 font-medium">
                <li className="flex items-start gap-2">
                  <span className="text-[#C5A880] font-bold">✓</span>
                  <span><strong>Preço Base:</strong> A partir de R$ 380/m² com vidro temperado 8mm certificado ABNT NBR 7199.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C5A880] font-bold">✓</span>
                  <span><strong>Visita Técnica Gratuita:</strong> Medição precisa a laser em qualquer bairro de Curitiba e Região Metropolitana.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C5A880] font-bold">✓</span>
                  <span><strong>Agilidade Extrema:</strong> Fabricação e instalação realizada em até 3 dias úteis com 5 anos de garantia real.</span>
                </li>
              </ul>
            </div>

            {/* Section 2: Factors influencing price */}
            <div className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight border-b-2 border-[#C5A880]/30 pb-3 mb-6">
                2. Fatores que Influenciam no Valor do Box de Banheiro
              </h2>
              <p>
                Ao cotar o <strong className="text-gray-900">valor box banheiro curitiba</strong>, é essencial entender que diversos elementos técnicos influenciam a composição final do orçamento. Os principais fatores são:
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                a) Dimensões e Tamanho do Vão
              </h3>
              <p>
                O cálculo básico inicia pela área em metros quadrados (largura × altura). Banheiros padrão possuem altura tradicional de 1,90m. Caso opte por um box até o teto (que pode chegar a 2,60m ou mais), haverá maior metragem de vidro e necessidade de vidros com maior espessura (10mm), o que ajusta o valor total do projeto.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                b) Modelo de Abertura do Box
              </h3>
              <p>
                O formato do seu box define a quantidade de perfis e dobradiças necessárias:
              </p>
              <ul className="list-disc pl-6 space-y-2 my-3 text-gray-700">
                <li><strong>Box Frontal (Reta):</strong> O modelo mais tradicional e econômico, com 1 folha fixa e 1 folha de correr.</li>
                <li><strong>Box de Canto (Em L):</strong> Exige 4 folhas de vidro (2 fixas e 2 móveis) e perfis angulares de junção.</li>
                <li><strong>Box de Abrir / Pivotante:</strong> Ideal para banheiros pequenos, exigindo dobradiças especiais de alta retenção.</li>
                <li><strong>Box Elegance:</strong> Modelo de alto padrão com roldanas aparente de rolar suave em aço inox 304.</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                c) Tipo e Tonalidade do Vidro
              </h3>
              <p>
                O vidro incolor temperado 8mm é a escolha mais acessível e popular. Se você desejar vidros com tonalidades especiais como <strong>Fumê (Grafite), Bronze, Extra-Clear (vidro ultra translúcido sem o tom esverdeado) ou Vidros Acidados / Jateados</strong> para privacidade, o valor por metro quadrado possui um acréscimo médio de 20% a 40%.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                d) Material e Acabamento das Ferragens
              </h3>
              <p>
                As ferragens garantem a sustentação e a estética do ambiente. Na Oxford Box, oferecemos desde perfis de alumínio reforçado até o cobiçado tratamento em PVD de altíssima resistência:
              </p>
              <ul className="list-disc pl-6 space-y-2 my-3 text-gray-700">
                <li><strong>Preto Fosco (Black Matte):</strong> Tendência absoluta na arquitetura contemporânea.</li>
                <li><strong>Dourado Champagne:</strong> Requinte com tom quente que destaca metais de luxo.</li>
                <li><strong>Bronze Escovado:</strong> Sofisticação discreta e marcante.</li>
                <li><strong>Cromo Polido / Inox 304:</strong> Durabilidade eterna contra corrosão e umidade constante.</li>
              </ul>
            </div>

            {/* Section 3: Price Table */}
            <div className="pt-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight border-b-2 border-[#C5A880]/30 pb-3 mb-6">
                3. Tabela de Preços por Tipo de Box em Curitiba (Estimativa 2026)
              </h2>
              <p className="mb-6">
                Para ajudar no seu planejamento financeiro, preparamos uma estimativa detalhada com a variação de <strong className="text-gray-900">preço box banheiro curitiba</strong> para vidros temperados 8mm de primeira linha:
              </p>

              <div className="overflow-x-auto my-6 rounded-xl border border-gray-200 shadow-sm">
                <table className="w-full text-left text-sm text-gray-700">
                  <thead className="bg-[#12141A] text-white uppercase text-xs tracking-wider">
                    <tr>
                      <th className="px-6 py-4 font-semibold">Modelo de Box</th>
                      <th className="px-6 py-4 font-semibold text-gray-400">Especificações Técnicas</th>
                      <th className="px-6 py-4 font-semibold text-[#C5A880]">Preço Médio / m²</th>
                      <th className="px-6 py-4 font-semibold text-white">Vantagem Principal</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-900">Box Frontal Reta</td>
                      <td className="px-6 py-4 text-gray-600">Vidro 8mm Incolor + Perfis Alumínio</td>
                      <td className="px-6 py-4 font-bold text-emerald-700 bg-emerald-50/40">A partir de R$ 380 / m²</td>
                      <td className="px-6 py-4 text-gray-600">Melhor custo-benefício para vãos retos</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-900">Box de Canto em L</td>
                      <td className="px-6 py-4 text-gray-600">4 folhas (2 fixas + 2 de correr) 8mm</td>
                      <td className="px-6 py-4 font-bold text-emerald-700 bg-emerald-50/40">A partir de R$ 420 / m²</td>
                      <td className="px-6 py-4 text-gray-600">Otimização perfeita para cantos de banheiro</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-900">Box de Abrir (Pivotante)</td>
                      <td className="px-6 py-4 text-gray-600">Porta com dobradiças em metal pesado 8mm</td>
                      <td className="px-6 py-4 font-bold text-emerald-700 bg-emerald-50/40">A partir de R$ 410 / m²</td>
                      <td className="px-6 py-4 text-gray-600">Ideal para vãos estreitos e pequenos</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-900">Box Elegance Premium</td>
                      <td className="px-6 py-4 text-gray-600">Roldanas aparentes em Inox 304 maciço</td>
                      <td className="px-6 py-4 font-bold text-emerald-700 bg-emerald-50/40">A partir de R$ 590 / m²</td>
                      <td className="px-6 py-4 text-gray-600">Deslizar ultra silencioso e estética de luxo</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-900">Box Teto ao Chão</td>
                      <td className="px-6 py-4 text-gray-600">Vidro 10mm inteiriço sem perfil superior</td>
                      <td className="px-6 py-4 font-bold text-emerald-700 bg-emerald-50/40">A partir de R$ 680 / m²</td>
                      <td className="px-6 py-4 text-gray-600">Isolamento térmico total e efeito sauna</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 italic">
                *Nota: Os preços acima são estimativas de referência e podem oscilar segundo as medidas exatas e acabamentos escolhidos no momento da medição presencial em Curitiba.
              </p>
            </div>

            {/* Section 4: What is included in Oxford Box Quote */}
            <div className="pt-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight border-b-2 border-[#C5A880]/30 pb-3 mb-6">
                4. O Que Está Incluso no Orçamento da Oxford Box?
              </h2>
              <p>
                Muitas empresas atraem clientes com um anúncio de <strong className="text-gray-900">box banheiro barato curitiba</strong> e depois cobram taxas extras por frete, instalação, vedação ou kits de ferragens. Na <strong className="text-[#C5A880] font-semibold">Oxford Box</strong>, pregamos transparência total. Nosso orçamento é 100% completo e sem surpresas.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h4 className="font-bold text-gray-900 text-base mb-2 flex items-center gap-2">
                    <span className="text-[#C5A880] font-bold">✓</span> Vidro Temperado 8mm Certificado
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Vidro temperado com chancela ABNT NBR 7199, bordas lapidadas e tratamento de polimento térmico.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h4 className="font-bold text-gray-900 text-base mb-2 flex items-center gap-2">
                    <span className="text-[#C5A880] font-bold">✓</span> Kit Completo de Ferragens
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Perfis estruturais, roldanas duplas com rolamento blindado, puxador e guias de silicone macio.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h4 className="font-bold text-gray-900 text-base mb-2 flex items-center gap-2">
                    <span className="text-[#C5A880] font-bold">✓</span> Vedação Antifungo em Silicone Neutro
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Aplicação profissional de silicone de cura neutra de altíssima durabilidade, prevenindo vazamentos e limo.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h4 className="font-bold text-gray-900 text-base mb-2 flex items-center gap-2">
                    <span className="text-[#C5A880] font-bold">✓</span> Medição a Laser e Instalação
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Visita prévia técnica em seu imóvel em Curitiba e mão de obra de instalação especializada inclusa.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5: Budget Process */}
            <div className="pt-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight border-b-2 border-[#C5A880]/30 pb-3 mb-6">
                5. Como Funciona o Processo de Orçamento na Oxford Box
              </h2>
              <p>
                Facilitamos cada etapa da sua jornada de compra para que você receba um atendimento rápido, preciso e sem complicações em Curitiba:
              </p>

              <div className="space-y-6 my-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#12141A] text-[#C5A880] font-bold flex items-center justify-center text-base shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Contato Inicial &amp; Pré-Orçamento</h4>
                    <p className="text-sm text-gray-600">
                      Você nos envia as medidas aproximadas do seu vão (ou fotos do banheiro) pelo WhatsApp. Em poucos minutos, emitimos uma estimativa prévia detalhada.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#12141A] text-[#C5A880] font-bold flex items-center justify-center text-base shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Visita Técnica Gratuita em Curitiba</h4>
                    <p className="text-sm text-gray-600">
                      Um projetista técnico vai até sua residência com trena a laser e amostras de ferragens e vidros para tirar as medidas exatas e avaliar os pontos de esquadro da parede.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#12141A] text-[#C5A880] font-bold flex items-center justify-center text-base shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Produção com Têmpera de Alta Precisão</h4>
                    <p className="text-sm text-gray-600">
                      Após o aceite, o vidro vai para a linha de corte computadorizado e tratamento térmico a 650°C, garantindo imunidade a choques térmicos no inverno curitibano.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#12141A] text-[#C5A880] font-bold flex items-center justify-center text-base shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Instalação em 3 Dias Úteis e Garantia de 5 Anos</h4>
                    <p className="text-sm text-gray-600">
                      Nossa equipe realiza a montagem limpa e rápida em apenas 3 dias úteis a partir do pedido, entregando seu certificado de garantia estendida de 5 anos.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 6: Why cheap options become expensive */}
            <div className="pt-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight border-b-2 border-[#C5A880]/30 pb-3 mb-6">
                6. Por Que o Box "Mais Barato" Pode Sair Caro no Longo Prazo?
              </h2>
              <p>
                Na busca por <strong className="text-gray-900">box banheiro barato curitiba</strong>, é comum encontrar ofertas tentadoras na internet com valores muito abaixo do mercado. No entanto, é preciso ter cautela com economias ilusórias:
              </p>
              <ul className="list-disc pl-6 space-y-3 my-4 text-gray-700">
                <li>
                  <strong>Vidros de 6mm flexíveis:</strong> Kits populares de 6mm não oferecem a rigidez necessária. Ao longo do tempo, flexionam, travam no trilho e apresentam alto risco de colapso mecânico.
                </li>
                <li>
                  <strong>Roldanas plásticas de baixa densidade:</strong> Ferragens genéricas secam e descarrilam em pouco tempo sob a umidade do chuveiro, raspando os trilhos de alumínio.
                </li>
                <li>
                  <strong>Silicone comum de cura ácida:</strong> Vedações baratas mofam rapidamente, criando manchas pretas de bolor que não saem na limpeza convencional e provocam infiltrações no piso do banheiro.
                </li>
                <li>
                  <strong>Ausência de visita técnica:</strong> Medições amadoras resultam em folgas excessivas entre o vidro e o revestimento, permitindo que a água do banho vaze para a área seca do banheiro.
                </li>
              </ul>
              <p className="mt-4">
                Investir em um box com vidro temperado 8mm e ferragens em aço inox 304 garante que você não precisará despender recursos com trocas precoces ou reparos em azulejos e armários afetados pela umidade.
              </p>
            </div>

            {/* Section 7: How to request quote online */}
            <div className="pt-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight border-b-2 border-[#C5A880]/30 pb-3 mb-6">
                7. Como Solicitar Seu Orçamento Online sem Complicação
              </h2>
              <p>
                Quer saber o valor exato do seu box sem precisar sair de casa? Siga o passo a passo simplificado para receber uma cotação agilizada pelo WhatsApp da Oxford Box:
              </p>
              <ol className="list-decimal pl-6 space-y-2 my-4 text-gray-700">
                <li>Medir a largura aproximada de parede a parede onde o box será instalado.</li>
                <li>Tirar uma foto do banheiro (mostrando a posição da bacia sanitária e da bancada).</li>
                <li>Escolhar a cor de vidro preferida (Incolor, Fumê ou Bronze) e o acabamento das ferragens (Preto, Dourado, Cromo).</li>
                <li>Enviar as informações para nosso WhatsApp <strong className="text-[#C5A880]">+55 (41) 9938-2240</strong>.</li>
              </ol>
            </div>

            {/* Section 8: Conclusion & Call to Action */}
            <div className="pt-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight border-b-2 border-[#C5A880]/30 pb-3 mb-6">
                Conclusão: Solicite Seu Orçamento de Box na Oxford Box Curitiba
              </h2>
              <p>
                Calcular o <strong className="text-gray-900">quanto custa box banheiro curitiba</strong> vai muito além do valor do vidro: envolve garantir a proteção da sua família com vidros de segurança homologados, ferragens que não enferrujam e um atendimento pós-venda eficiente com 5 anos de garantia.
              </p>
              <p className="mt-4">
                Com valores a partir de <strong>R$ 380/m²</strong>, a Oxford Box oferece a melhor combinação de alto padrão arquitetônico e orçamento acessível para Curitiba e Região Metropolitana. Fale com um especialista agora mesmo e agende sua medição presencial sem custos!
              </p>
            </div>
          </div>
        </section>

        {/* High Impact WhatsApp Call To Action Box */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-14">
          <div className="bg-gradient-to-r from-[#0B0C10] via-[#1A1C23] to-[#0B0C10] rounded-3xl p-8 sm:p-12 text-center text-white border border-[#C5A880]/30 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-[#C5A880]/10 blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <span className="inline-block bg-[#C5A880]/20 text-[#C5A880] border border-[#C5A880]/30 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
                Medição Técnica Grátis em Curitiba
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                Pronto para Receber o Orçamento do Seu Box de Banheiro?
              </h3>
              <p className="text-white/70 max-w-xl mx-auto text-base sm:text-lg mb-8 leading-relaxed">
                Garanta o preço promocional a partir de R$ 380/m², vidros temperados 8mm, 5 anos de garantia e instalação em apenas 3 dias úteis!
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
                  Mais Conteúdos Úteis
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mt-1">
                  Artigos Relacionados
                </h3>
              </div>
              <Link
                href="/"
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
                    alt="Box de Banheiro 8mm vs 6mm em Curitiba"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold text-[#C5A880] uppercase tracking-wider">
                      Guia de Compra
                    </span>
                    <h4 className="text-lg font-bold text-gray-900 mt-2 mb-3 group-hover:text-[#C5A880] transition-colors">
                      Box de Banheiro 8mm ou 6mm: Qual Escolher em Curitiba?
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                      Comparativo técnico detalhado sobre espessuras de vidro temperado, segurança ABNT e resistência a choque térmico.
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
                    src="/box2.jpg"
                    alt="Box de Banheiro Teto ao Chão em Curitiba"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold text-[#C5A880] uppercase tracking-wider">
                      Design &amp; Tendências
                    </span>
                    <h4 className="text-lg font-bold text-gray-900 mt-2 mb-3 group-hover:text-[#C5A880] transition-colors">
                      Box Teto ao Chão: Sofisticação e Isolamento Térmico Total
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                      Descubra como o vidro inteiriço do piso ao teto melhora o conforto térmico no inverno e valoriza imóveis em Curitiba.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs text-gray-400">5 min de leitura</span>
                    <Link
                      href="/blog/box-teto-ao-chao-curitiba"
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
                    src="/box3.jpg"
                    alt="Como Limpar e Conservar Seu Box de Vidro Temperado"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold text-[#C5A880] uppercase tracking-wider">
                      Manutenção &amp; Dicas
                    </span>
                    <h4 className="text-lg font-bold text-gray-900 mt-2 mb-3 group-hover:text-[#C5A880] transition-colors">
                      Como Limpar e Conservar Seu Box de Vidro Temperado
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                      Segredos de limpeza para remover manchas d&apos;água e preservar o brilho e a roldana do seu box por muitos anos.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs text-gray-400">4 min de leitura</span>
                    <Link
                      href="/blog/como-limpar-box-vidro-temperado"
                      className="text-xs font-bold text-[#C5A880] group-hover:underline"
                    >
                      Ler artigo &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Page Footer */}
      <Footer />
    </div>
  );
}
