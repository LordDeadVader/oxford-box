import type { Metadata } from 'next';
import Link from 'next/link';
import BlogNavbar from '@/components/BlogNavbar';
import Footer from '@/components/Footer';
import { makeWhatsAppUrl } from '@/data/mockData';

export const metadata: Metadata = {
  title: 'Box de Banheiro 8mm ou 6mm: Qual Escolher em Curitiba? | Oxford Box',
  description:
    'Guia completo para escolher entre vidro temperado 8mm e 6mm para box de banheiro em Curitiba. Entenda a norma ABNT NBR 7199, segurança, resistência ao choque térmico e durabilidade.',
  keywords: [
    'box banheiro 8mm curitiba',
    'vidro temperado 8mm curitiba',
    'box vidro 6mm curitiba',
    'espessura vidro box banheiro',
    'norma ABNT box banheiro',
    'oxford box curitiba',
    'box de vidro curitiba',
  ],
  alternates: {
    canonical: 'https://www.oxfordbox.com.br/blog/box-banheiro-8mm-vs-6mm',
  },
  openGraph: {
    title: 'Box de Banheiro 8mm ou 6mm: Qual Escolher em Curitiba?',
    description:
      'Descubra qual a melhor espessura de vidro temperado para o seu box em Curitiba. Comparativo entre 6mm e 8mm, normas ABNT e dicas de segurança.',
    url: 'https://www.oxfordbox.com.br/blog/box-banheiro-8mm-vs-6mm',
    siteName: 'Oxford Box',
    locale: 'pt_BR',
    type: 'article',
    images: [
      {
        url: 'https://www.oxfordbox.com.br/box1.jpg',
        width: 1200,
        height: 630,
        alt: 'Box de Banheiro 8mm Temperado Oxford Box Curitiba',
      },
    ],
  },
};

export default function BlogBox8mmVs6mmPage() {
  const whatsappUrl = makeWhatsAppUrl(
    'Olá! Li o artigo sobre Box 8mm vs 6mm e gostaria de solicitar um orçamento para meu banheiro em Curitiba.'
  );

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#C5A880]/30 selection:text-black">
      {/* Header & Navigation */}
      <BlogNavbar />

      {/* Main Container */}
      <main className="pb-16">
        {/* Top Breadcrumb & Article Header */}
        <section className="bg-gradient-to-b from-[#0B0C10] via-[#12141A] to-white pt-10 pb-16 text-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumbs */}
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
                Box de Banheiro 8mm ou 6mm: Qual Escolher em Curitiba?
              </span>
            </nav>

            {/* Category Badge & Date */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block bg-[#C5A880]/20 text-[#C5A880] border border-[#C5A880]/40 text-xs font-semibold px-3.5 py-1 rounded-full uppercase tracking-wider">
                Guia de Compra &amp; Segurança
              </span>
              <span className="text-xs text-white/50">·</span>
              <span className="text-xs text-white/60">Atualizado em 30 de Julho de 2026</span>
              <span className="text-xs text-white/50">·</span>
              <span className="text-xs text-white/60">6 min de leitura</span>
            </div>

            {/* H1 Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Box de Banheiro 8mm ou 6mm: Qual Escolher em Curitiba?
            </h1>

            {/* Subtitle / Excerpt */}
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed font-light mb-8">
              Na hora de reformar ou construir o banheiro dos sonhos em Curitiba, a escolha da{' '}
              <strong className="text-[#C5A880] font-semibold">espessura do vidro do box</strong> é uma das decisões mais decisivas para garantir segurança, rigidez e um acabamento elegante de alto padrão.
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
              src="/box1.jpg"
              alt="Box de Banheiro 8mm vidro temperado com roldanas de inox em Curitiba"
              className="w-full h-[320px] sm:h-[450px] object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="bg-gray-900 text-gray-400 text-xs px-4 py-2.5 italic border-t border-gray-800 flex justify-between items-center">
              <span>Box Elegance 8mm temperado Oxford Box — Projeto residencial em Curitiba, PR</span>
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
                Se você está pesquisando por <strong className="text-gray-900 font-semibold">box banheiro 8mm curitiba</strong> ou considerando opções de 6mm, provavelmente já reparou na variação de valores e promessas de mercado. A espessura do vidro é o elemento central que define se o seu box será firme, durável e seguro contra acidentes ou se apresentará vibrações indesejadas com o tempo.
              </p>
              <p className="mt-4">
                Em uma cidade com amplitudes térmicas tão severas quanto Curitiba, onde as manhãs geladas dão lugar a banhos bem quentes com vapor intenso, a estabilidade física do vidro de segurança torna-se um fator indispensável. Neste artigo técnico e prático, vamos analisar em detalhes as diferenças entre os vidros de 6mm e 8mm, o que exige a norma brasileira ABNT e por que o <strong className="text-[#C5A880] font-semibold">vidro temperado 8mm em Curitiba</strong> é a escolha recomendada pelos maiores projetistas.
              </p>
            </div>

            {/* Quick Summary Callout Box */}
            <div className="my-8 p-6 bg-amber-50/70 border-l-4 border-[#C5A880] rounded-r-xl shadow-sm">
              <h4 className="text-base font-bold text-gray-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#C5A880]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Resumo Rápido para a Sua Escolha:
              </h4>
              <ul className="space-y-2 text-sm text-gray-800 font-medium">
                <li className="flex items-start gap-2">
                  <span className="text-[#C5A880] font-bold">✓</span>
                  <span><strong>Vidro 6mm:</strong> Indicado apenas para painéis muito pequenos ou orçamentos extremamente limitados. Apresenta maior flexibilidade estrutural.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C5A880] font-bold">✓</span>
                  <span><strong>Vidro 8mm:</strong> O padrão oficial de conforto, segurança e durabilidade. Suporta roldanas aparentes em inox 304 e possui resistência mecânica superior.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Differences between 6mm and 8mm */}
            <div className="pt-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight border-b-2 border-[#C5A880]/30 pb-3 mb-6">
                1. Diferença Entre Vidro 6mm e 8mm para Box de Banheiro
              </h2>
              <p>
                A diferença entre 6mm e 8mm pode parecer pequena em termos milimétricos (apenas 2 milímetros de diferença), porém na física dos vidros de segurança essa variação representa um ganho de <strong>mais de 40% em rigidez estrutural e momento de inércia</strong>.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                Vidro de 6mm: Leveza com Limitações Estruturais
              </h3>
              <p>
                O <strong className="text-gray-900">box vidro 6mm curitiba</strong> é por vezes utilizado em kits padronizados de baixo custo comercializados em grandes home centers. Devido ao menor peso por metro quadrado, a peça de 6mm exige ferragens mais simples. Contudo, essa menor espessura traz desvantagens significativas:
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4 text-gray-700">
                <li><strong>Flexão e curvatura:</strong> Ao empurrar ou deslizar a porta de 6mm, o painel tende a "chacoalhar" e apresentar vibração auditiva e mecânica.</li>
                <li><strong>Sensibilidade nos trilhos:</strong> Qualquer desalinhamento nos trilhos de alumínio causa atrito severo, desgastando precocemente as roldanas plásticas.</li>
                <li><strong>Sensação de fragilidade:</strong> O toque no vidro transmite uma percepção de peça fina, distante dos padrões de acabamento residencial moderno.</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">
                Vidro de 8mm: O Padrão Ouro em Projetos Residenciais
              </h3>
              <p>
                Por outro lado, a <strong className="text-gray-900">espessura vidro box banheiro</strong> de 8mm é o divisor de águas na arquitetura moderna. Ele oferece a massa exata para deslizar suavemente sobre trilhos e suportar a instalação de sistemas de roldanas aparentes em aço inox 304.
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4 text-gray-700">
                <li><strong>Rigidez inabalável:</strong> Não deforma nem flexiona sob a força normal de abertura e fechamento diário.</li>
                <li><strong>Deslizamento silencioso:</strong> A estabilidade de massa do vidro de 8mm proporciona um movimento fluido e sem ruídos rangentes.</li>
                <li><strong>Acabamento Premium:</strong> Bordas lapidadas de 8mm possuem presença estética impecável, valorizando o imóvel em Curitiba.</li>
              </ul>
            </div>

            {/* Section 2: ABNT Standards */}
            <div className="pt-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight border-b-2 border-[#C5A880]/30 pb-3 mb-6">
                2. O Que Diz a Norma ABNT NBR 7199 e NBR 14207?
              </h2>
              <p>
                A segurança em vidraçaria residencial no Brasil é regulamentada por normas rigorosas da Associação Brasileira de Normas Técnicas (ABNT). Quando falamos sobre a <strong className="text-gray-900">norma ABNT box banheiro</strong>, duas diretrizes principais devem ser observadas:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h4 className="font-bold text-gray-900 text-lg mb-2 text-[#C5A880]">ABNT NBR 7199</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Especifica os requisitos para projeto, execução e aplicações de vidros na construção civil. Exige que áreas sujeitas a impacto humano direto utilizem obrigatoriamente <strong>Vidros de Segurança</strong> (temperados ou laminados).
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h4 className="font-bold text-gray-900 text-lg mb-2 text-[#C5A880]">ABNT NBR 14207</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Trata especificamente da fabricação e instalação de box de banheiro. Define dimensões máximas, folga de segurança para trilhos e estabelece a espessura mínima de 8mm para vãos padrão de correr.
                  </p>
                </div>
              </div>

              <p>
                De acordo com as especificações da NBR 14207, para portas de correr de altura padrão (1,90m a 2,00m) e larguras superiores a 50cm, a utilização do vidro de 8mm temperado é a garantia de conformidade técnica. O vidro 6mm exige reforço estrutural em caixilhos fechados em todos os quatro lados para atingir os mesmos índices de estanqueidade e resistência.
              </p>
            </div>

            {/* Section 3: Safety & Impact Resistance */}
            <div className="pt-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight border-b-2 border-[#C5A880]/30 pb-3 mb-6">
                3. Segurança, Resistência a Impactos e o Clima de Curitiba
              </h2>
              <p>
                A cidade de Curitiba é famosa por seu clima oscilante e temperaturas rigorosas no inverno. Essa particularidade geográfica afeta diretamente os materiais dentro do banheiro.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                Choque Térmico no Inverno Curitibano
              </h3>
              <p>
                Quando a temperatura ambiente em Curitiba cai para 5°C ou 10°C e o chuveiro é ligado na água fervendo a 40°C, cria-se um <strong>gradiente térmico severo</strong> entre a face interna e externa do painel de vidro.
              </p>
              <p className="mt-3">
                O <strong className="text-gray-900">vidro temperado 8mm em Curitiba</strong> passa por um processo de têmpera térmica onde é aquecido a 650°C e resfriado rapidamente. Esse tratamento confere ao vidro de 8mm capacidade de suportar variações térmicas de até 200°C sem estresse molecular, prevenindo rachaduras espontâneas.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">
                Resistência a Impactos Físicos e Proteção Familiar
              </h3>
              <p>
                No uso cotidiano com crianças, idosos ou pets, escorregões ou impactos acidentais com saboneteiras, frascos pesados ou apoios de mão podem ocorrer. O vidro 8mm temperado é até <strong>5 vezes mais resistente a impactos mecânicos</strong> do que o vidro comum da mesma espessura e suporta muito mais energia de impacto do que a chapa fina de 6mm.
              </p>
              <p className="mt-3">
                Caso ocorra uma quebra sob força extrema, o vidro temperado de 8mm se fragmenta em pequenos pedaços arredondados e pouco cortantes, minimizando dramaticamente riscos de ferimentos graves.
              </p>
            </div>

            {/* Section 4: Why Oxford Box uses 8mm only */}
            <div className="pt-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight border-b-2 border-[#C5A880]/30 pb-3 mb-6">
                4. Por Que a Oxford Box Trabalha Apenas com Vidro 8mm e 10mm em Curitiba?
              </h2>
              <p>
                Na <strong className="text-gray-900">Oxford Box</strong>, nosso compromisso é oferecer soluções definitivas de alta vidraçaria que aliam elegância, segurança intransigente e durabilidade. Por esse motivo, abolimos o vidro de 6mm de nossa linha de boxes de banheiro.
              </p>

              <div className="bg-[#12141A] text-white p-8 rounded-2xl my-8 border border-white/10 shadow-xl">
                <h3 className="text-xl font-bold text-[#C5A880] mb-4">
                  Nossos Pilares de Qualidade em Curitiba:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#C5A880]"></span>
                      Roldanas Aparentes em Inox 304
                    </h4>
                    <p className="text-xs text-gray-400">
                      Nossas roldanas e trilhos maciços necessitam da estabilidade e peso correto do vidro 8mm para um rolar perfeito.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#C5A880]"></span>
                      Garantia Real de 5 Anos
                    </h4>
                    <p className="text-xs text-gray-400">
                      Oferecemos garantia estendida de 5 anos em estrutura e vedações por sabermos que o vidro 8mm não desalinha.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#C5A880]"></span>
                      Instalação em 3 Dias Úteis
                    </h4>
                    <p className="text-xs text-gray-400">
                      Medição milimétrica a laser e equipe própria especializada em Curitiba e Região Metropolitana.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#C5A880]"></span>
                      Tratamento Anticalcário
                    </h4>
                    <p className="text-xs text-gray-400">
                      Superfície repelente de água que facilita a limpeza e evita manchas de cloro da água curitibana.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5: Comparison Table */}
            <div className="pt-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight border-b-2 border-[#C5A880]/30 pb-3 mb-6">
                5. Tabela Comparativa: Box 6mm vs Box 8mm
              </h2>
              <p className="mb-6">
                Confira a síntese comparativa elaborada por nossos engenheiros para tirar todas as dúvidas antes da sua compra:
              </p>

              <div className="overflow-x-auto my-6 rounded-xl border border-gray-200 shadow-sm">
                <table className="w-full text-left text-sm text-gray-700">
                  <thead className="bg-[#12141A] text-white uppercase text-xs tracking-wider">
                    <tr>
                      <th className="px-6 py-4 font-semibold">Atributo / Característica</th>
                      <th className="px-6 py-4 font-semibold text-gray-400">Vidro 6mm Temperado</th>
                      <th className="px-6 py-4 font-semibold text-[#C5A880]">Vidro 8mm Temperado (Oxford)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-900">Rigidez Estrutural</td>
                      <td className="px-6 py-4 text-gray-600">Média (Apresenta flexão ao empurrar)</td>
                      <td className="px-6 py-4 font-semibold text-emerald-700 bg-emerald-50/50">Alta (Total estabilidade firme)</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-900">Resistência a Choque Térmico</td>
                      <td className="px-6 py-4 text-gray-600">Adequada para uso comum</td>
                      <td className="px-6 py-4 font-semibold text-emerald-700 bg-emerald-50/50">Excelente (Ideal para o inverno de Curitiba)</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-900">Compatibilidade com Inox 304</td>
                      <td className="px-6 py-4 text-gray-600">Não suporta roldanas pesadas</td>
                      <td className="px-6 py-4 font-semibold text-emerald-700 bg-emerald-50/50">100% Compatível com Linha Elegance</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-900">Conformidade ABNT NBR 14207</td>
                      <td className="px-6 py-4 text-gray-600">Requer caixilho total</td>
                      <td className="px-6 py-4 font-semibold text-emerald-700 bg-emerald-50/50">Conforme para vãos de correr padrão</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-900">Isolamento Acústico e Peso</td>
                      <td className="px-6 py-4 text-gray-600">Leve (~15 kg/m²)</td>
                      <td className="px-6 py-4 font-semibold text-emerald-700 bg-emerald-50/50">Robusto (~20 kg/m² - Deslizamento suave)</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-900">Garantia Recomendada</td>
                      <td className="px-6 py-4 text-gray-600">1 ano padrão de mercado</td>
                      <td className="px-6 py-4 font-semibold text-emerald-700 bg-emerald-50/50">5 anos estendidos Oxford Box</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 6: Recommendation for Curitiba */}
            <div className="pt-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight border-b-2 border-[#C5A880]/30 pb-3 mb-6">
                6. Qual É o Mais Recomendado para a Sua Casa em Curitiba?
              </h2>
              <p>
                Considerando o investimento a longo prazo na sua residência ou apartamento em Curitiba, a economia inicial de escolher um box de 6mm desfaz-se rapidamente frente às manutenções frequentes, folgas nos trilhos e falta de firmeza no uso diário.
              </p>
              <p className="mt-4">
                O <strong className="text-[#C5A880]">box de vidro 8mm temperado</strong> é indiscutivelmente o melhor custo-benefício. Ele transforma a experiência do banho diário, valoriza a estética do seu ambiente com ferragens sofisticadas em Dourado Champagne, Preto Fosco ou Cromo Polido e oferece paz de espírito para toda a família.
              </p>
              <p className="mt-4">
                <em>Dica extra:</em> Para projetos de <strong className="text-gray-900">box de teto ao chão</strong> com altura superior a 2,40m, recomendamos a utilização de vidros temperados de 10mm ou laminados-temperados.
              </p>
            </div>

            {/* Conclusion & Next steps */}
            <div className="pt-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight border-b-2 border-[#C5A880]/30 pb-3 mb-6">
                Conclusão: Solicite Seu Projeto Sob Medida na Oxford Box
              </h2>
              <p>
                Agora que você já conhece todas as vantagens do vidro temperado 8mm, não corra riscos com materiais inferiores no seu banheiro. A Oxford Box atende toda Curitiba e Região Metropolitana com atendimento personalizado em domicílio, medição precisa e os melhores preços da região, a partir de <strong>R$380/m²</strong>.
              </p>
              <p className="mt-4">
                Fale agora com nossos consultores especialistas pelo WhatsApp, tire suas dúvidas e receba um orçamento sob medida em menos de 15 minutos!
              </p>
            </div>
          </div>
        </section>

        {/* Inline High Impact WhatsApp Call To Action Box */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-14">
          <div className="bg-gradient-to-r from-[#0B0C10] via-[#1A1C23] to-[#0B0C10] rounded-3xl p-8 sm:p-12 text-center text-white border border-[#C5A880]/30 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-[#C5A880]/10 blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <span className="inline-block bg-[#C5A880]/20 text-[#C5A880] border border-[#C5A880]/30 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
                Atendimento Rápido em Curitiba e Região
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                Quer instalar o Box 8mm Ideal no Seu Banheiro?
              </h3>
              <p className="text-white/70 max-w-xl mx-auto text-base sm:text-lg mb-8 leading-relaxed">
                Garanta vidros temperados 8mm de alta resistência, roldanas em aço inox 304, 5 anos de garantia e instalação profissional em apenas 3 dias úteis!
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
                  Solicitar Orçamento Grátis
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
                    src="/box2.jpg"
                    alt="Box de Banheiro Teto ao Chão Curitiba"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold text-[#C5A880] uppercase tracking-wider">
                      Tendências &amp; Design
                    </span>
                    <h4 className="text-lg font-bold text-gray-900 mt-2 mb-3 group-hover:text-[#C5A880] transition-colors">
                      Box de Banheiro Teto ao Chão: Vantagens e Tendências em Curitiba
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                      Conheça o estilo arquitetônico que transforma banheiros modernos com amplitude visual, conforto térmico total e sofisticação.
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

              {/* Related Card 2 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow group flex flex-col">
                <div className="h-48 overflow-hidden bg-gray-900">
                  <img
                    src="/box3.jpg"
                    alt="Limpeza e Conservação de Box de Vidro Temperado"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold text-[#C5A880] uppercase tracking-wider">
                      Manutenção &amp; Cuidados
                    </span>
                    <h4 className="text-lg font-bold text-gray-900 mt-2 mb-3 group-hover:text-[#C5A880] transition-colors">
                      Guia Definitivo: Como Limpar e Conservar Seu Box de Vidro
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                      Dicas infalíveis para remover manchas de água dura, resíduos de sabão e manter o vidro temperado sempre reluzente.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs text-gray-400">4 min de leitura</span>
                    <Link
                      href="/blog/limpeza-conservacao-box-vidro"
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
                    alt="Ferragens em Aço Inox 304 vs Alumínio"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold text-[#C5A880] uppercase tracking-wider">
                      Ferragens &amp; Acabamentos
                    </span>
                    <h4 className="text-lg font-bold text-gray-900 mt-2 mb-3 group-hover:text-[#C5A880] transition-colors">
                      Ferragens em Aço Inox 304 vs Alumínio: Qual Vale Mais a Pena?
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                      Entenda o impacto da durabilidade das roldanas em aço inoxidável 304 frente aos perfis tradicionais de alumínio.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs text-gray-400">6 min de leitura</span>
                    <Link
                      href="/blog/ferragens-inox-vs-aluminio"
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
