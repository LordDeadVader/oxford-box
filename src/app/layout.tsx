import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

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
    <html lang="pt-BR" className={`${inter.variable} ${outfit.variable}`}>
      <body className="bg-[#0B0C10] text-white antialiased font-sans">{children}</body>
    </html>
  );
}
