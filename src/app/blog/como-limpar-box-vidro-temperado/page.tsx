import type { Metadata } from 'next';
import Link from 'next/link';
import { makeWhatsAppUrl } from '@/data/mockData';
import {
  Calendar,
  Clock,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Sparkles,
  Droplets,
  ShieldCheck,
  ChevronRight,
  MessageCircle,
  Wrench,
  ThumbsUp,
  ShieldAlert,
  Info,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Como Limpar Box de Vidro Temperado Sem Manchar | Oxford Box Curitiba',
  description:
    'Guia definitivo de como limpar box de vidro temperado sem manchar ou riscar em Curitiba. Aprenda a remover calcário, gordura e manter seu box impecável.',
  keywords: [
    'como limpar box de vidro temperado',
    'limpar box banheiro curitiba',
    'remover calcário box vidro',
    'produto limpar box banheiro',
    'manchas box vidro',
    'manutenção box banheiro',
    'oxford box curitiba',
  ].join(', '),
  alternates: {
    canonical: 'https://www.oxfordbox.com.br/blog/como-limpar-box-vidro-temperado',
  },
  openGraph: {
    title: 'Como Limpar Box de Vidro Temperado Sem Manchar | Oxford Box Curitiba',
    description:
      'Aprenda o passo a passo completo para remover manchas de calcário do box de vidro temperado no banheiro em Curitiba. Dicas de produtos e manutenção.',
    url: 'https://www.oxfordbox.com.br/blog/como-limpar-box-vidro-temperado',
    siteName: 'Oxford Box',
    locale: 'pt_BR',
    type: 'article',
    images: [
      {
        url: 'https://www.oxfordbox.com.br/box3.jpg',
        width: 1200,
        height: 630,
        alt: 'Box de vidro temperado limpo e transparente em banheiro moderno em Curitiba',
      },
    ],
  },
};

export default function ArticlePage() {
  const whatsappUrl = makeWhatsAppUrl(
    'Olá! Li o artigo sobre como limpar box de vidro temperado e gostaria de solicitar um orçamento para o meu banheiro em Curitiba.'
  );

  return (
    <div className="min-h-screen bg-[#0B0C10] text-white selection:bg-[#C5A880] selection:text-black">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 bg-[#0B0C10]/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1 group">
            <span className="text-white font-bold text-xl sm:text-2xl tracking-widest uppercase group-hover:text-[#C5A880] transition-colors">
              OXFORD
            </span>
            <span className="text-[#C5A880] font-bold text-xl sm:text-2xl tracking-widest">
              .
            </span>
            <span className="text-white/70 font-light text-xl sm:text-2xl tracking-widest uppercase">
              BOX
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-white/70 hover:text-white text-sm font-medium transition-colors"
            >
              Início
            </Link>
            <Link
              href="/#catalogo"
              className="text-white/70 hover:text-white text-sm font-medium transition-colors"
            >
              Catálogo
            </Link>
            <Link
              href="/#espelhos"
              className="text-white/70 hover:text-white text-sm font-medium transition-colors"
            >
              Espelhos
            </Link>
            <Link
              href="/#galeria"
              className="text-white/70 hover:text-white text-sm font-medium transition-colors"
            >
              Galeria
            </Link>
          </nav>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#C5A880] to-[#D4AF37] text-black text-sm font-semibold hover:shadow-[0_0_25px_rgba(197,168,128,0.4)] transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 fill-black" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs sm:text-sm text-white/50 mb-8 overflow-x-auto whitespace-nowrap py-1"
        >
          <Link href="/" className="hover:text-[#C5A880] transition-colors">
            Início
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/30 flex-shrink-0" />
          <span className="hover:text-[#C5A880] transition-colors cursor-default">
            Blog
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-white/30 flex-shrink-0" />
          <span className="text-[#C5A880] truncate font-medium">
            Como Limpar Box de Vidro Temperado Sem Manchar
          </span>
        </nav>

        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-[#C5A880] mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Voltar para a página inicial
        </Link>

        {/* Article Header */}
        <header className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A880]/10 border border-[#C5A880]/30 text-[#C5A880] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Manutenção & Guia Prático
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Como Limpar Box de Vidro Temperado Sem Manchar: Guia Definitivo
          </h1>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-white/60 border-y border-white/10 py-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#C5A880]/20 border border-[#C5A880]/40 flex items-center justify-center text-[#C5A880] font-bold text-xs">
                OB
              </div>
              <span className="text-white/90 font-medium">
                Especialistas Oxford Box Curitiba
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#C5A880]" />
              <span>15 de Julho, 2026</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#C5A880]" />
              <span>7 min de leitura</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative rounded-2xl overflow-hidden mb-12 border border-white/10 group shadow-2xl">
          <img
            src="/box3.jpg"
            alt="Box de vidro temperado transparente e brilhante limpo perfeitamente"
            className="w-full h-[320px] sm:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6">
            <p className="text-xs sm:text-sm text-white/80 italic bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 inline-block">
              Manter o box de vidro temperado transparente exige os produtos e a técnica corretos.
            </p>
          </div>
        </div>

        {/* Article Body Content */}
        <article className="prose prose-invert max-w-none space-y-8 text-white/80 text-base sm:text-lg leading-relaxed">
          {/* Section 1: Intro */}
          <section className="space-y-4">
            <p className="text-xl text-white/90 font-light leading-relaxed">
              Você já investiu em um banheiro elegante, mas com o passar do tempo percebeu que o vidro do box começou a ficar com aquela aparência esbranquiçada, opaca e cheia de marquinhas de gotas d’água? Se a sua resposta foi sim, saiba que você não está sozinho. Aprender <strong className="text-white font-semibold">como limpar box de vidro temperado</strong> sem manchar ou riscar é um dos maiores desafios domésticos na região de Curitiba.
            </p>
            <p>
              Muitas pessoas tentam remover essas manchas persistentes utilizando produtos agressivos ou esponjas inadequadas, o que acaba danificando o vidro temperado de forma irreversível. Neste guia completo elaborado pelos especialistas da <strong className="text-[#C5A880]">Oxford Box</strong>, explicamos a causa real dessas manchas, os produtos proibidos e recomendados, e um passo a passo infalível para devolver a transparência e o brilho original ao seu box.
            </p>
          </section>

          {/* Section 2: Por que mancha */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Droplets className="w-7 h-7 text-[#C5A880]" />
              Por Que o Box de Vidro Mancha? (O Efeito da Água de Curitiba)
            </h2>
            <p>
              Por mais lisa que pareça, a superfície do vidro possui microporos invisíveis a olho nu. Durante o banho quente, ocorrem três fatores simultâneos que provocam o surgimento das manchas:
            </p>
            <ul className="space-y-3 font-normal">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C5A880] flex-shrink-0 mt-1" />
                <span>
                  <strong className="text-white">Presença de calcário e minerais:</strong> A água encanada fornecida em Curitiba e Região Metropolitana carrega sais minerais solúveis, como cálcio e magnésio. Quando a água evapora sobre o vidro, os minerais cristalizam e se fixam nos poros.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C5A880] flex-shrink-0 mt-1" />
                <span>
                  <strong className="text-white">Gordura corporal e resíduos de sabão:</strong> Óleos naturais da pele, condicionadores e sabonetes criam uma película gordurosa no vidro que reage com os minerais da água, formando a chamada crusta calcária.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C5A880] flex-shrink-0 mt-1" />
                <span>
                  <strong className="text-white">Evaporação acelerada pelo vapor:</strong> O vapor do banho esquenta o vidro e evapora rapidamente, selando a sujeira mineral na superfície se não for removida logo em seguida.
                </span>
              </li>
            </ul>
          </section>

          {/* Section 3: Produtos NÃO recomendados */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <XCircle className="w-7 h-7 text-red-400" />
              Produtos que NÃO Devem Ser Usados no Box de Vidro
            </h2>
            <p>
              Antes de aplicar qualquer fórmula, é fundamental saber o que passar longe do seu vidro temperado. Certos materiais causam danos mecânicos e químicos permanentes:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-5 space-y-2">
                <div className="flex items-center gap-2 text-red-400 font-bold">
                  <ShieldAlert className="w-5 h-5" />
                  Esponja de Aço / Bombril
                </div>
                <p className="text-sm text-white/70">
                  Risca o vidro temperado de forma irreversível e solta micropartículas de metal que oxidam no trilho, gerando ferrugem nos perfis.
                </p>
              </div>

              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-5 space-y-2">
                <div className="flex items-center gap-2 text-red-400 font-bold">
                  <ShieldAlert className="w-5 h-5" />
                  Cloro Puro / Água Sanitária Concentrada
                </div>
                <p className="text-sm text-white/70">
                  Resseca a vedação de silicone neutro, fragiliza as guias e corrói o acabamento das ferragens de alumínio ou latão de baixa qualidade.
                </p>
              </div>

              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-5 space-y-2">
                <div className="flex items-center gap-2 text-red-400 font-bold">
                  <ShieldAlert className="w-5 h-5" />
                  Saponáceos em Pó e Lixas
                </div>
                <p className="text-sm text-white/70">
                  Contêm grânulos abrasivos de quartzo que desgastam a têmpera do vidro e criam riscos microscópicos que acumulam ainda mais sujeira.
                </p>
              </div>

              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-5 space-y-2">
                <div className="flex items-center gap-2 text-red-400 font-bold">
                  <ShieldAlert className="w-5 h-5" />
                  Ácidos Desentupidores / Clorídrico
                </div>
                <p className="text-sm text-white/70">
                  Altamente corrosivos, podem manchar os vidros definitivamente por ataque químico à sílica e comprometer as roldanas de inox.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Produtos Recomendados */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Sparkles className="w-7 h-7 text-[#C5A880]" />
              Produtos Recomendados para Limpar Box de Vidro
            </h2>
            <p>
              Para <strong className="text-white">limpar box de banheiro em Curitiba</strong> sem risco de manchas, utilize apenas substâncias com pH adequado e materiais de limpeza macios:
            </p>

            <div className="space-y-4">
              <div className="bg-white/5 border border-[#C5A880]/20 rounded-xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#C5A880]/20 flex items-center justify-center text-[#C5A880] font-bold flex-shrink-0 mt-1">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Vinagre Branco de Álcool (Ácido Acético 4%-5%)</h3>
                  <p className="text-sm text-white/70 mt-1">
                    É o maior aliado na remoção do calcário. O ácido acético reage quimicamente com os sais de cálcio e magnésio, dissolvendo as crostas sem agredir o vidro nem o meio ambiente.
                  </p>
                </div>
              </div>

              <div className="bg-white/5 border border-[#C5A880]/20 rounded-xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#C5A880]/20 flex items-center justify-center text-[#C5A880] font-bold flex-shrink-0 mt-1">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Detergente Neutro Amarelo ou Transparente</h3>
                  <p className="text-sm text-white/70 mt-1">
                    Essencial para remover a película de óleo corporal e resíduos de gordura de sabonete acumulados sobre a superfície de vidro temperado.
                  </p>
                </div>
              </div>

              <div className="bg-white/5 border border-[#C5A880]/20 rounded-xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#C5A880]/20 flex items-center justify-center text-[#C5A880] font-bold flex-shrink-0 mt-1">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Limão e Bicarbonato de Sódio (Para Manchas Antigas)</h3>
                  <p className="text-sm text-white/70 mt-1">
                    A mistura de bicarbonato com suco de limão forma uma pasta efervescente suave que ajuda a desprender cracas endurecidas em cantos e junções.
                  </p>
                </div>
              </div>

              <div className="bg-white/5 border border-[#C5A880]/20 rounded-xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#C5A880]/20 flex items-center justify-center text-[#C5A880] font-bold flex-shrink-0 mt-1">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Repelente de Água / Cristalizador de Vidros</h3>
                  <p className="text-sm text-white/70 mt-1">
                    Produtos automotivos ou residenciais de cristalização criam uma camada hidrofóbica que faz a água escorrer em gotículas sem aderir ao vidro.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Passo a Passo */}
          <section className="bg-gradient-to-br from-[#12141A] to-[#0B0C10] border border-[#C5A880]/30 rounded-2xl p-6 sm:p-8 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Wrench className="w-7 h-7 text-[#C5A880]" />
              Passo a Passo Definitivo para Limpar o Box Sem Riscar
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="w-8 h-8 rounded-full bg-[#C5A880] text-black font-bold flex items-center justify-center flex-shrink-0">
                  1
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white">Molhe o vidro com água morna</h3>
                  <p className="text-sm text-white/70 mt-1">
                    Utilize o próprio chuveirinho para aquecer e molhar o vidro. A temperatura ajuda a amolecer a camada superficial de gordura.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="w-8 h-8 rounded-full bg-[#C5A880] text-black font-bold flex items-center justify-center flex-shrink-0">
                  2
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white">Prepare a solução mágica de vinagre e detergente</h3>
                  <p className="text-sm text-white/70 mt-1">
                    Em um borrifador, misture <strong className="text-white">200ml de vinagre branco de álcool</strong>, <strong className="text-white">1 colher de sopa de detergente neutro</strong> e <strong className="text-white">100ml de água morna</strong>. Borrifar generosamente em toda a extensão do vidro.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="w-8 h-8 rounded-full bg-[#C5A880] text-black font-bold flex items-center justify-center flex-shrink-0">
                  3
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white">Deixe agir por 10 a 15 minutos</h3>
                  <p className="text-sm text-white/70 mt-1">
                    Este é o grande segredo! Permita que o ácido acético quebre os depósitos de calcário sem esfregar precipitadamente.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="w-8 h-8 rounded-full bg-[#C5A880] text-black font-bold flex items-center justify-center flex-shrink-0">
                  4
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white">Esfregue com o lado amarelo (macio) da esponja</h3>
                  <p className="text-sm text-white/70 mt-1">
                    Faça movimentos circulares usando apenas o lado macio da esponja ou um pano de microfibra. Nunca utilize o lado verde abrasivo.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="w-8 h-8 rounded-full bg-[#C5A880] text-black font-bold flex items-center justify-center flex-shrink-0">
                  5
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white">Enxágue com água em abundância</h3>
                  <p className="text-sm text-white/70 mt-1">
                    Remova todo o produto com água limpa para garantir que nenhum resíduo de sabão permaneça no vidro.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="w-8 h-8 rounded-full bg-[#C5A880] text-black font-bold flex items-center justify-center flex-shrink-0">
                  6
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white">Puxe com rodo de borracha e seque com pano de microfibra</h3>
                  <p className="text-sm text-white/70 mt-1">
                    Passe o rodo de borracha de cima para baixo. Em seguida, finalize passando um pano de microfibra seco para não deixar nenhuma marca d'água secar sobre o vidro.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Dicas do dia a dia */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <ThumbsUp className="w-7 h-7 text-[#C5A880]" />
              Dicas para Evitar Manchas de Calcário no Dia a Dia
            </h2>
            <p>
              Tão importante quanto saber como remover as <strong className="text-white">manchas do box de vidro</strong> é evitar que elas voltem a se formar. Adote estas pequenas rotinas diárias:
            </p>

            <ul className="space-y-3 font-normal">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C5A880] flex-shrink-0 mt-1" />
                <span>
                  <strong className="text-white">A regra dos 30 segundos:</strong> Mantenha um pequeno rodo de silicone dentro do box. Ao terminar o banho, passe o rodo no vidro rápido para remover as gotículas acumuladas antes que evaporem.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C5A880] flex-shrink-0 mt-1" />
                <span>
                  <strong className="text-white">Ventilação constante:</strong> Mantenha a porta do banheiro ou a janela abertas por pelo menos 20 minutos após o banho para dispersar o vapor d'água rapidamente.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C5A880] flex-shrink-0 mt-1" />
                <span>
                  <strong className="text-white">Aplicação de cristalizador de vidros:</strong> Aplique uma camada de repelente de água a cada 30 ou 60 dias. O líquido cria uma película invisível que faz a água deslizar.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C5A880] flex-shrink-0 mt-1" />
                <span>
                  <strong className="text-white">Vidro com tratamento anticalcário de fábrica:</strong> Ao instalar ou reformar seu box com a <strong className="text-[#C5A880]">Oxford Box</strong>, opte por vidros temperados com tecnologia anticalcário selada em fábrica, reduzindo a aderência de sujeira em até 90%.
                </span>
              </li>
            </ul>
          </section>

          {/* Section 7: Roldanas e Perfis */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <ShieldCheck className="w-7 h-7 text-[#C5A880]" />
              Como Manter as Roldanas e Perfis de Alumínio
            </h2>
            <p>
              A <strong className="text-white">manutenção do box de banheiro</strong> vai além do vidro. Os perfis e o sistema de roldanas exigem atenções específicas para garantir um deslizamento suave e silencioso por muitos anos:
            </p>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-[#C5A880]">1. Não direcione jatos de água pesados nos trilhos</h3>
                <p className="text-sm text-white/70">
                  Evite jogar água com mangueira ou chuveirinho diretamente nas roldanas superiores e nos perfis de vedação. Limpe os trilhos inferiores utilizando apenas um pano úmido ou pincel de cerdas macias.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-[#C5A880]">2. Lubrificação correta</h3>
                <p className="text-sm text-white/70">
                  Uma vez a cada 6 meses, aplique uma leve borrifada de spray de silicone neutro no trilho superior. Nunca utilize graxa pesada ou óleo automotivo, pois estes acumulam poeira e travam as roldanas.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-[#C5A880]">3. Roldanas Aparentes em Aço Inox 304 (Diferencial Oxford Box)</h3>
                <p className="text-sm text-white/70">
                  Os boxes da linha Oxford Box contam com ferragens exclusivas em alumínio extrudado e roldanas aparentes em <strong className="text-white">aço inoxidável AISI 304</strong> com duplo rolamento blindado. Esse material de alta nobreza não enferruja mesmo em ambientes litorâneos ou com alta umidade constante.
                </p>
              </div>
            </div>
          </section>

          {/* Section 8: Com que frequência limpar */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
              <Calendar className="w-7 h-7 text-[#C5A880]" />
              Com Que Frequência Fazer a Limpeza do Box?
            </h2>
            <p>
              Manter uma rotina organizada evita o acúmulo excessivo de sujeira pesada. Recomendamos a seguinte periodicidade:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-left text-sm border-collapse rounded-xl overflow-hidden border border-white/10">
                <thead>
                  <tr className="bg-[#C5A880]/20 text-white font-bold">
                    <th className="p-4 border-b border-white/10">Frequência</th>
                    <th className="p-4 border-b border-white/10">Ação Recomendada</th>
                    <th className="p-4 border-b border-white/10">Tempo Estimado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-white/80">
                  <tr className="bg-white/5 hover:bg-white/10 transition-colors">
                    <td className="p-4 font-bold text-[#C5A880]">Diária</td>
                    <td className="p-4">Remover excesso de água no vidro com rodo de borracha após o banho.</td>
                    <td className="p-4">30 segundos</td>
                  </tr>
                  <tr className="bg-white/5 hover:bg-white/10 transition-colors">
                    <td className="p-4 font-bold text-[#C5A880]">Semanal</td>
                    <td className="p-4">Limpeza com solução de vinagre branco e detergente neutro + enxágue e secagem.</td>
                    <td className="p-4">10 minutos</td>
                  </tr>
                  <tr className="bg-white/5 hover:bg-white/10 transition-colors">
                    <td className="p-4 font-bold text-[#C5A880]">Mensal</td>
                    <td className="p-4">Limpeza minuciosa de cantos, roldanas e perfis + aplicação de cristalizador impermeabilizante.</td>
                    <td className="p-4">20 minutos</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 9: Conclusão */}
          <section className="border-t border-white/10 pt-8 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Conclusão: Seu Banheiro Sempre Impecável com Vidros Oxford Box
            </h2>
            <p>
              Seguindo estas orientações simples de <strong className="text-white">como limpar box de vidro temperado</strong>, você manterá a transparência, a higiene e a beleza visual do seu banheiro sem esforço e sem riscar o vidro.
            </p>
            <p>
              Se o seu box antigo já está com manchas definitivas, travamentos constantes ou vazamentos nos perfis, talvez seja o momento de renovar seu banheiro com um projeto moderno. A <strong className="text-[#C5A880]">Oxford Box</strong> é especialista em boxes de banheiro de alto padrão em Curitiba e Região Metropolitana, oferecendo vidro temperado de 8mm e 10mm, roldanas aparentes em aço inox 304, garantia de 5 anos e instalação técnica milimétrica em até 3 dias úteis.
            </p>
          </section>
        </article>

        {/* Related Articles Section */}
        <section className="mt-16 pt-12 border-t border-white/10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
            Artigos Relacionados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#C5A880]/40 transition-all duration-300 group flex flex-col justify-between">
              <div className="relative h-44 overflow-hidden">
                <img
                  src="/box1.jpg"
                  alt="Box Elegance Gold instalado"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-[#C5A880] text-xs font-semibold px-2.5 py-1 rounded-full border border-white/10">
                  Design & Tendência
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#C5A880] transition-colors mb-2">
                    Box Teto ao Chão: Vale a Pena no Banheiro Moderno?
                  </h3>
                  <p className="text-xs text-white/60 line-clamp-3">
                    Conheça os prós e contras do box de vidro inteiriço do piso ao teto e entenda como ele isola o vapor.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
                  <span>5 min de leitura</span>
                  <ChevronRight className="w-4 h-4 text-[#C5A880] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#C5A880]/40 transition-all duration-300 group flex flex-col justify-between">
              <div className="relative h-44 overflow-hidden">
                <img
                  src="/box2.jpg"
                  alt="Roldanas aparentes em inox"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-[#C5A880] text-xs font-semibold px-2.5 py-1 rounded-full border border-white/10">
                  Engenharia & Qualidade
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#C5A880] transition-colors mb-2">
                    Por Que Escolher Roldanas Aparentes em Inox 304?
                  </h3>
                  <p className="text-xs text-white/60 line-clamp-3">
                    Descubra por que o aço inox 304 garante deslize silencioso, zero ferrugem e durabilidade para a vida toda.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
                  <span>4 min de leitura</span>
                  <ChevronRight className="w-4 h-4 text-[#C5A880] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#C5A880]/40 transition-all duration-300 group flex flex-col justify-between">
              <div className="relative h-44 overflow-hidden">
                <img
                  src="/box4.jpg"
                  alt="Box Elegance em banheiro sofisticado"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-[#C5A880] text-xs font-semibold px-2.5 py-1 rounded-full border border-white/10">
                  Guia de Compra
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#C5A880] transition-colors mb-2">
                    Qual a Diferença Entre Vidro 8mm e 10mm no Box?
                  </h3>
                  <p className="text-xs text-white/60 line-clamp-3">
                    Entenda qual a espessura de vidro temperado indicada para o seu projeto de acordo com as normas ABNT NBR 7199.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
                  <span>6 min de leitura</span>
                  <ChevronRight className="w-4 h-4 text-[#C5A880] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="mt-16 bg-gradient-to-r from-[#12141A] via-[#1A1D26] to-[#12141A] border border-[#C5A880]/40 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-[0_10px_50px_rgba(197,168,128,0.15)]">
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#C5A880]/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-[#D4AF37]/10 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="inline-block text-[#C5A880] font-semibold text-xs uppercase tracking-widest bg-[#C5A880]/10 px-4 py-1.5 rounded-full border border-[#C5A880]/30">
              Oxford Box Curitiba & Região
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Transforme Seu Banheiro com Quem Entende de Vidros Premium
            </h2>

            <p className="text-white/70 text-base sm:text-lg">
              Faça um orçamento sob medida para o seu box de banheiro. Vidro temperado 8mm/10mm com anticalcário, roldanas em aço inox 304, garantia de 5 anos e instalação expressa em até 3 dias úteis.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#C5A880] to-[#D4AF37] text-black font-bold text-base hover:shadow-[0_0_30px_rgba(197,168,128,0.5)] transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 fill-black" />
                <span>Solicitar Orçamento no WhatsApp</span>
              </a>
            </div>

            <p className="text-xs text-white/40 pt-2">
              Atendimento rápido • Preços a partir de R$ 380/m² • Curitiba e Região Metropolitana
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#08090C] py-8 text-center text-xs text-white/40">
        <div className="max-w-7xl mx-auto px-4">
          <p>© 2026 Oxford Box. Todos os direitos reservados. Especialistas em Box de Banheiro e Vidraçaria em Curitiba - PR.</p>
        </div>
      </footer>
    </div>
  );
}
