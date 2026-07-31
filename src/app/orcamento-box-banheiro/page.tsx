import type { Metadata } from 'next';
import Link from 'next/link';
import { makeWhatsAppUrl } from '@/data/mockData';

export const metadata: Metadata = {
  title: 'Orçamento Grátis de Box de Banheiro em Curitiba | Oxford Box',
  description:
    'Solicite seu orçamento grátis de box de banheiro em Curitiba e Região Metropolitana. Medição a laser sem custo, vidro temperado 8mm, 5 anos de garantia e instalação em até 3 dias úteis. Fale no WhatsApp!',
  keywords: [
    'orçamento box banheiro curitiba',
    'orçamento vidraçaria curitiba',
    'orçamento box de vidro curitiba',
    'solicitar orçamento box banheiro',
    'preço box de banheiro curitiba',
    'box de vidro temperado curitiba',
    'oxford box curitiba',
    'medicao gratis box curitiba',
  ],
  alternates: {
    canonical: 'https://www.oxfordbox.com.br/orcamento-box-banheiro',
  },
  openGraph: {
    title: 'Orçamento Grátis de Box de Banheiro em Curitiba | Oxford Box',
    description:
      'Receba seu orçamento sem compromisso para box de banheiro em Curitiba. Vidros 8mm de alta segurança, medição presencial grátis e instalação expressa em 3 dias.',
    url: 'https://www.oxfordbox.com.br/orcamento-box-banheiro',
    siteName: 'Oxford Box',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: 'https://www.oxfordbox.com.br/box1.jpg',
        width: 1200,
        height: 630,
        alt: 'Orçamento Grátis de Box de Banheiro em Curitiba - Oxford Box',
      },
    ],
  },
};

export default function OrcamentoBoxBanheiroPage() {
  const whatsappUrlHero = makeWhatsAppUrl(
    'Olá! Gostaria de solicitar um orçamento grátis para box de banheiro em Curitiba.'
  );

  const whatsappUrlSteps = makeWhatsAppUrl(
    'Olá! Quero agendar uma visita técnica gratuita para medição do meu box de banheiro em Curitiba.'
  );

  const whatsappUrlIncluso = makeWhatsAppUrl(
    'Olá! Gostaria de cotar um box de banheiro temperado 8mm com medição e instalação inclusas.'
  );

  const whatsappUrlFaq = makeWhatsAppUrl(
    'Olá! Tenho dúvidas sobre o orçamento de box de vidro e gostaria de falar com um atendente.'
  );

  const whatsappUrlBottom = makeWhatsAppUrl(
    'Olá! Quero solicitar meu orçamento com desconto e garantir a instalação em até 3 dias úteis.'
  );

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#C5A880]/30 selection:text-black">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 bg-[#0B0C10]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1.5 group">
            <span className="text-white font-extrabold text-2xl tracking-widest uppercase group-hover:text-[#C5A880] transition-colors">
              OXFORD
            </span>
            <span className="text-[#C5A880] font-black text-2xl">.</span>
            <span className="text-white/70 font-light text-2xl tracking-widest uppercase">
              BOX
            </span>
          </Link>

          {/* Right Navigation */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              href="/"
              className="text-white/80 hover:text-[#C5A880] text-sm font-medium transition-colors flex items-center gap-1.5"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span>Voltar ao site</span>
            </Link>

            <a
              href={whatsappUrlHero}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>Orçamento Rápido</span>
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-[#0B0C10] via-[#12141A] to-[#1A1D24] text-white pt-12 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#25D366]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-5xl mx-auto relative z-10 text-center">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 bg-[#C5A880]/15 border border-[#C5A880]/30 px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-[#C5A880] uppercase tracking-wider">
                Atendimento Imediato em Curitiba e Região
              </span>
            </div>

            {/* H1 Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Orçamento Grátis de Box de Banheiro em Curitiba
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light mb-8">
              Transforme seu banheiro com <strong className="text-[#C5A880] font-semibold">vidro temperado 8mm</strong> e roldanas de alta precisão. Solicite seu <strong className="text-white font-medium">orçamento de box de vidro em Curitiba</strong> sem compromisso: medição técnica a laser gratuita no seu imóvel e instalação profissional em apenas 3 dias úteis!
            </p>

            {/* Big WhatsApp Hero Button */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
              <a
                href={whatsappUrlHero}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-lg sm:text-xl shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Solicitar Orçamento Grátis no WhatsApp
              </a>
            </div>

            {/* Price mention */}
            <p className="text-[#C5A880] text-sm font-semibold uppercase tracking-wider mb-10">
              Box de Banheiro a partir de R$ 380/m² • Vidro Temperado 8mm • Parcelamento Facilitado
            </p>

            {/* Key Trust Signals Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto pt-6 border-t border-white/10">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm flex flex-col items-center">
                <span className="text-3xl font-extrabold text-[#C5A880] mb-1">+500</span>
                <span className="text-sm font-bold text-white uppercase tracking-wide">Boxes Instalados</span>
                <span className="text-xs text-white/60 mt-1">Clientes satisfeitos em Curitiba e RMC</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm flex flex-col items-center">
                <span className="text-3xl font-extrabold text-[#C5A880] mb-1">5 Anos</span>
                <span className="text-sm font-bold text-white uppercase tracking-wide">Garantia Total</span>
                <span className="text-xs text-white/60 mt-1">Garantia contratual real Oxford Box</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm flex flex-col items-center">
                <span className="text-3xl font-extrabold text-[#C5A880] mb-1">3 Dias</span>
                <span className="text-sm font-bold text-white uppercase tracking-wide">Instalação Rápida</span>
                <span className="text-xs text-white/60 mt-1">Prazo recorde de entrega e montagem</span>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Steps Section */}
        <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-extrabold text-[#C5A880] uppercase tracking-widest block mb-2">
                Simples, Rápido e Sem Complicação
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                Como Funciona o Processo de Orçamento em 4 Passos
              </h2>
              <p className="text-gray-600 mt-4 text-lg">
                Veja como é fácil <strong className="text-gray-900">solicitar orçamento de box de banheiro</strong> na Oxford Box sem sair de casa e com garantia de atendimento personalizado.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {/* Step 1 */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow relative flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#0B0C10] text-[#C5A880] font-black text-2xl flex items-center justify-center mb-6 shadow-md border border-[#C5A880]/30">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Contato pelo WhatsApp
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Você entra em contato pelo WhatsApp e nos envia a largura aproximada do seu vão ou fotos do banheiro.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 text-xs font-semibold text-[#C5A880]">
                  Atendimento em minutos
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow relative flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#0B0C10] text-[#C5A880] font-black text-2xl flex items-center justify-center mb-6 shadow-md border border-[#C5A880]/30">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Visita Técnica Gratuita
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Agendamos uma medição a laser gratuita no seu imóvel em Curitiba com um projetista técnico para aferição milimétrica.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 text-xs font-semibold text-[#C5A880]">
                  Sem custo nem compromisso
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow relative flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#0B0C10] text-[#C5A880] font-black text-2xl flex items-center justify-center mb-6 shadow-md border border-[#C5A880]/30">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Orçamento Detalhado
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Enviamos a proposta final e transparente em até 24h, com todas as opções de vidros, perfis e formas de pagamento.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 text-xs font-semibold text-[#C5A880]">
                  Envio em até 24 horas
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow relative flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#0B0C10] text-[#C5A880] font-black text-2xl flex items-center justify-center mb-6 shadow-md border border-[#C5A880]/30">
                    4
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Instalação em 3 Dias Úteis
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Fabricação com tempera certificada e instalação ágil por equipe própria especializada com 5 anos de garantia.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 text-xs font-semibold text-[#C5A880]">
                  Entrega expressa garantida
                </div>
              </div>
            </div>

            {/* Mid CTA */}
            <div className="mt-12 text-center">
              <a
                href={whatsappUrlSteps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Agendar Medição Gratuita no WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-20 bg-white px-4 sm:px-6 lg:px-8 border-b border-gray-200">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-extrabold text-[#C5A880] uppercase tracking-widest block mb-2">
                Transparência Total sem Taxas Ocultas
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                O que está incluso no seu Orçamento de Box de Banheiro
              </h2>
              <p className="text-gray-600 mt-4 text-lg">
                Ao contratar a <strong className="text-gray-900 font-semibold">Oxford Box vidraçaria Curitiba</strong>, você recebe um serviço turnkey completo com materiais homologados de alta qualidade.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Item 1 */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-[#C5A880]/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#C5A880]/20 text-[#C5A880] flex items-center justify-center text-2xl mb-6">
                  📐
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Medição Gratuita no Imóvel
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Visita prévia de técnico qualificado com medição a laser em qualquer bairro de Curitiba e cidades da região metropolitana.
                </p>
              </div>

              {/* Item 2 */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-[#C5A880]/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#C5A880]/20 text-[#C5A880] flex items-center justify-center text-2xl mb-6">
                  🛡️
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Vidro Temperado 8mm ABNT
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Vidros com chancela ABNT NBR 7199, bordas lapidadas e máxima resistência mecânica a choques térmicos e impactos.
                </p>
              </div>

              {/* Item 3 */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-[#C5A880]/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#C5A880]/20 text-[#C5A880] flex items-center justify-center text-2xl mb-6">
                  ⚙️
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Ferragens &amp; Roldanas Premium
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Kits completos de alumínio extrudado ou aço inox 304 com roldanas de rolamento duplo e acabamentos exclusivos (Preto Fosco, Dourado, Cromo).
                </p>
              </div>

              {/* Item 4 */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-[#C5A880]/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#C5A880]/20 text-[#C5A880] flex items-center justify-center text-2xl mb-6">
                  🛠️
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Instalação Profissional Inclusa
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Mão de obra própria qualificada, nivelamento técnico impecável e fixação segura sem sujeira excessiva.
                </p>
              </div>

              {/* Item 5 */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-[#C5A880]/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#C5A880]/20 text-[#C5A880] flex items-center justify-center text-2xl mb-6">
                  🧹
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Limpeza e Vedação Pós-Instalação
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Aplicação de silicone de cura neutra de altíssima durabilidade antifungo e higienização completa da área de trabalho.
                </p>
              </div>

              {/* Item 6 */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-[#C5A880]/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#C5A880]/20 text-[#C5A880] flex items-center justify-center text-2xl mb-6">
                  📜
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Garantia Estendida de 5 Anos
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Termo formal de garantia cobrindo funcionamento mecânico das roldanas, fixação de componentes e integridade da instalação.
                </p>
              </div>
            </div>

            {/* CTA Box inside Included section */}
            <div className="mt-14 bg-gradient-to-r from-[#0B0C10] to-[#1F232D] text-white p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-[#C5A880]/30">
              <div>
                <h4 className="text-2xl font-bold mb-2 text-white">
                  Quer saber o valor exato para o seu banheiro?
                </h4>
                <p className="text-white/70 text-sm max-w-xl">
                  Receba uma cotação rápida para o seu <strong className="text-[#C5A880]">orçamento box de vidro curitiba</strong> em menos de 10 minutos pelo WhatsApp.
                </p>
              </div>
              <a
                href={whatsappUrlIncluso}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Solicitar Cotação sem Compromisso
              </a>
            </div>
          </div>
        </section>

        {/* SEO Informational & Content Section */}
        <section className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
          <div className="max-w-4xl mx-auto prose prose-lg text-gray-700 leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Por que a Oxford Box é a melhor opção em Orçamento de Vidraçaria em Curitiba?
            </h2>
            <p className="text-gray-700">
              Ao procurar por <strong className="text-gray-900">orçamento vidraçaria curitiba</strong>, é essencial escolher uma empresa que alie qualidade dos materiais, precisão de acabamento e pontualidade na entrega. A Oxford Box é referência no segmento de box de vidro temperado e soluções sob medida para banheiros residenciais e corporativos na capital paranaense.
            </p>
            <p className="text-gray-700">
              Trabalhamos exclusivamente com vidros temperados de 8mm e 10mm em conformidade com as normas ABNT NBR 7199, garantindo a segurança de toda a sua família. Nossas ferragens e roldanas passam por rigoroso controle de qualidade, disponíveis em acabamentos modernos como Preto Fosco (Black Matte), Dourado Champagne, Bronze Escovado e Cromo Polido.
            </p>
            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
              Modelos de Box Disponíveis para Orçamento:
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Box Frontal (Fixo e Correr):</strong> Ideal para vãos retos com aproveitamento otimizado do espaço do banho.</li>
              <li><strong>Box de Canto (Em L):</strong> Solução inteligente para banheiros com chuveiro posicionado em ângulos.</li>
              <li><strong>Box Linha Elegance:</strong> Roldanas aparentes em aço inox 304 com deslizamento suave e silencioso.</li>
              <li><strong>Box Teto ao Chão:</strong> Fechamento do piso ao teto com vidro inteiriço, promovendo isolamento térmico e efeito sauna.</li>
              <li><strong>Box Pivotante (De Abrir):</strong> Perfeito para vãos compactos onde a porta de correr não é viável.</li>
            </ul>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white px-4 sm:px-6 lg:px-8 border-b border-gray-200">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-extrabold text-[#C5A880] uppercase tracking-widest block mb-2">
                Esclareça suas Dúvidas
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                Perguntas Frequentes sobre Orçamento de Box de Banheiro
              </h2>
              <p className="text-gray-600 mt-3 text-base">
                Respostas diretas para as dúvidas mais comuns sobre valores, prazos e garantia em Curitiba.
              </p>
            </div>

            <div className="space-y-6">
              {/* FAQ 1 */}
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                  <span className="text-[#C5A880] font-black text-xl">Q1.</span>
                  <span>Quanto custa um box de banheiro em Curitiba?</span>
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed pl-8">
                  O valor do box de vidro temperado 8mm em Curitiba inicia a partir de <strong className="text-gray-900">R$ 380 por metro quadrado</strong> para o modelo padrão incolor com perfis de alumínio. Modelos arquitetônicos, como a Linha Elegance em Inox 304 ou o box teto ao chão, variam conforme a metragem e o acabamento das ferragens escolhido.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                  <span className="text-[#C5A880] font-black text-xl">Q2.</span>
                  <span>A visita técnica para medição é realmente gratuita?</span>
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed pl-8">
                  Sim! Agendamos a visita de um projetista especializado com trena a laser em qualquer bairro de Curitiba e na Região Metropolitana sem nenhum custo ou obrigação de contratação. O técnico verifica os pontos de esquadro, encanamento e indica a melhor solução.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                  <span className="text-[#C5A880] font-black text-xl">Q3.</span>
                  <span>Quanto tempo leva entre a solicitação do orçamento e a instalação?</span>
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed pl-8">
                  O pré-orçamento pelo WhatsApp é imediato. Após a validação das medidas exatas na visita técnica, o prazo de fabricação do vidro temperado e instalação completa em seu imóvel é de até <strong className="text-gray-900">3 dias úteis</strong>.
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                  <span className="text-[#C5A880] font-black text-xl">Q4.</span>
                  <span>Quais são as formas de pagamento e garantias oferecidas?</span>
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed pl-8">
                  Aceitamos parcelamento facilitado no cartão de crédito em até 10x, pagamento via PIX com desconto à vista e faturamento para condomínios. Todos os nossos boxes contam com <strong className="text-gray-900">garantia estendida contratual de 5 anos</strong> cobrindo vidros, ferragens e instalação.
                </p>
              </div>
            </div>

            <div className="mt-10 text-center">
              <a
                href={whatsappUrlFaq}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#C5A880] font-bold text-base hover:underline"
              >
                <span>Tem outra pergunta? Fale diretamente com nossa equipe no WhatsApp &rarr;</span>
              </a>
            </div>
          </div>
        </section>

        {/* Service Area Section */}
        <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-extrabold text-[#C5A880] uppercase tracking-widest block mb-2">
                Atendimento Presencial Sem Custo de Deslocamento
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                Regiões Atendidas para Orçamento de Box em Curitiba e RMC
              </h2>
              <p className="text-gray-600 mt-3 text-base">
                Nossa equipe técnica atende com agilidade todos os bairros de Curitiba e os principais municípios da Região Metropolitana.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Neighborhoods Curitiba */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2 border-b border-gray-100 pb-3">
                  <span className="text-[#C5A880]">📍</span> Bairros de Curitiba (Atendimento 100% Gratuito)
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm text-gray-700 font-medium">
                  <span className="bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">Batel</span>
                  <span className="bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">Água Verde</span>
                  <span className="bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">Bigorrilho</span>
                  <span className="bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">Ecoville</span>
                  <span className="bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">Cabral</span>
                  <span className="bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">Juvevê</span>
                  <span className="bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">Sta. Felicidade</span>
                  <span className="bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">Centro</span>
                  <span className="bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">Portão</span>
                  <span className="bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">Cristo Rei</span>
                  <span className="bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">Mercês</span>
                  <span className="bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">Bacacheri</span>
                </div>
              </div>

              {/* RMC Cities */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2 border-b border-gray-100 pb-3">
                  <span className="text-[#C5A880]">🏙️</span> Região Metropolitana de Curitiba (RMC)
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm text-gray-700 font-medium">
                  <span className="bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">São José dos Pinhais</span>
                  <span className="bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">Pinhais</span>
                  <span className="bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">Colombo</span>
                  <span className="bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">Araucária</span>
                  <span className="bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">Campo Largo</span>
                  <span className="bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">Alm. Tamandaré</span>
                  <span className="bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">Piraquara</span>
                  <span className="bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">Fazenda Rio Grande</span>
                  <span className="bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">Campina Grande</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Bottom High-Converting WhatsApp Banner */}
        <section className="bg-gradient-to-r from-[#0B0C10] via-[#12141A] to-[#0B0C10] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-white">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block bg-[#C5A880]/20 text-[#C5A880] border border-[#C5A880]/40 text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider mb-6">
              Garantia de Melhor Custo-Benefício em Curitiba
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Pronto para Solicitar seu Orçamento de Box de Banheiro?
            </h2>

            <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
              Fale agora com nosso especialista no WhatsApp. Agende sua medição a laser gratuita e garanta vidros 8mm de alta segurança com 5 anos de garantia!
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href={whatsappUrlBottom}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-xl shadow-[0_10px_35px_rgba(37,211,102,0.5)] transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chamar no WhatsApp Agora
              </a>
            </div>

            <p className="text-[#C5A880] text-xs sm:text-sm font-medium mt-6">
              📞 Central de Atendimento: +55 (41) 9938-2240 • Curitiba / PR
            </p>
          </div>
        </section>
      </main>

      {/* Dark Footer */}
      <footer className="bg-[#0B0C10] text-white border-t border-white/10 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1 */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-1.5">
              <span className="text-white font-extrabold text-2xl tracking-widest uppercase">
                OXFORD
              </span>
              <span className="text-[#C5A880] font-black text-2xl">.</span>
              <span className="text-white/70 font-light text-2xl tracking-widest uppercase">
                BOX
              </span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed">
              Especialistas em box de banheiro temperado 8mm, linha Elegance e esquadrias de vidro de alto padrão em Curitiba e Região Metropolitana.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-[#C5A880] font-bold text-sm uppercase tracking-wider mb-4">
              Nossos Serviços
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <Link href="/#catalogo" className="hover:text-[#C5A880] transition-colors">
                  Box Elegance 8mm e 10mm
                </Link>
              </li>
              <li>
                <Link href="/#catalogo" className="hover:text-[#C5A880] transition-colors">
                  Box Teto ao Chão
                </Link>
              </li>
              <li>
                <Link href="/#catalogo" className="hover:text-[#C5A880] transition-colors">
                  Box Frontal e de Canto
                </Link>
              </li>
              <li>
                <Link href="/#catalogo" className="hover:text-[#C5A880] transition-colors">
                  Espelhos LED &amp; Bisotê
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-[#C5A880] font-bold text-sm uppercase tracking-wider mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <Link href="/" className="hover:text-[#C5A880] transition-colors">
                  Página Inicial
                </Link>
              </li>
              <li>
                <Link href="/blog/orcamento-box-banheiro-curitiba" className="hover:text-[#C5A880] transition-colors">
                  Guia de Preços 2026
                </Link>
              </li>
              <li>
                <Link href="/blog/box-banheiro-8mm-vs-6mm" className="hover:text-[#C5A880] transition-colors">
                  Vidro 8mm vs 6mm
                </Link>
              </li>
              <li>
                <Link href="/orcamento-box-banheiro" className="hover:text-[#C5A880] transition-colors">
                  Solicitar Orçamento
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="text-[#C5A880] font-bold text-sm uppercase tracking-wider mb-4">
              Contato Curitiba
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <span>📞 WhatsApp:</span>
                <a
                  href={whatsappUrlHero}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors font-medium text-white"
                >
                  +55 (41) 9938-2240
                </a>
              </li>
              <li>📍 Atendimento: Curitiba e RMC</li>
              <li>⏱️ Instalação: Em até 3 dias úteis</li>
              <li>🛡️ Garantia: 5 anos contratuais</li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 text-center text-xs text-white/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© 2026 Oxford Box. Todos os direitos reservados. Vidraçaria &amp; Box de Banheiro em Curitiba, PR.</p>
          <p>Qualidade, Segurança e Garantia de 5 Anos.</p>
        </div>
      </footer>
    </div>
  );
}
