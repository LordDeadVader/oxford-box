import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Oxford Box | Box de Banheiro Premium em Curitiba',
  description:
    'Especialistas em box de banheiro de alto padrão, vidraçaria arquitetônica e espelhos em Curitiba e Região. Roldanas em inox, vidros temperados e ferragens exclusivas.',
  keywords: 'box banheiro curitiba, vidraçaria curitiba, box de vidro, espelhos led, guarda corpo vidro, box premium',
  openGraph: {
    title: 'Oxford Box | Box de Banheiro Premium em Curitiba',
    description: 'Transforme seu banheiro com box de alto padrão. Roldanas em inox, vidros temperados e ferragens exclusivas.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#0B0C10] text-white antialiased">{children}</body>
    </html>
  );
}
