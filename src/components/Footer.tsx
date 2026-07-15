import { makeWhatsAppUrl } from '@/data/mockData';

export default function Footer() {
  return (
    <footer id="contato" className="bg-[#12141A] border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <img src="/logo.png" alt="Oxford Box" className="h-10 md:h-12 w-auto object-contain" />
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Especialistas em box de banheiro de alto padrão, vidraçaria arquitetônica e espelhos em Curitiba e Região.
            </p>
            <a
              href={makeWhatsAppUrl('Olá! Gostaria de mais informações sobre a Oxford Box.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-[#C5A880] to-[#D4AF37] text-black font-semibold text-sm hover:shadow-[0_0_25px_rgba(197,168,128,0.4)] transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              +55 41 9938-2240
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Produtos</h4>
            <ul className="space-y-3">
              {['Box Elegance', 'Box Teto ao Chão', 'Espelhos & LED', 'Guarda-corpos', 'Divisórias'].map((item) => (
                <li key={item}>
                  <a href="#catalogo" className="text-white/50 hover:text-[#C5A880] text-sm transition-colors duration-200">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Atendimento</h4>
            <ul className="space-y-3 text-white/50 text-sm">
              <li>📍 Curitiba e Região Metropolitana</li>
              <li>📞 (41) 9938-2240</li>
              <li>⏰ Seg–Sex: 8h às 18h</li>
              <li>⏰ Sáb: 8h às 12h</li>
            </ul>
            <div className="mt-6 flex gap-3">
              {['✅ Garantia 5 anos', '✅ Instalação Inclusa'].map((selo) => (
                <span key={selo} className="text-xs text-[#C5A880]/80 bg-[#C5A880]/10 border border-[#C5A880]/20 px-3 py-1 rounded-full">{selo}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © 2025 Oxford Box. Todos os direitos reservados.
          </p>
          <p className="text-white/20 text-xs">
            Vidraçaria arquitetônica de alto padrão · Curitiba, PR
          </p>
        </div>
      </div>
    </footer>
  );
}
