import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import SchemaMarkup from '@/components/SchemaMarkup';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

const SITE_URL = 'https://www.oxfordbox.com.br';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: 'Oxford Box | Box de Banheiro Premium em Curitiba — Vidro Temperado 8mm',
    template: '%s | Oxford Box Curitiba',
  },
  description:
    'Especialistas em box de banheiro premium em Curitiba. Vidro temperado 8mm, roldanas em inox 304, instalação em até 3 dias. A partir de R$380/m². Solicite seu orçamento grátis pelo WhatsApp.',
  keywords: [
    'box de banheiro curitiba',
    'box vidro temperado curitiba',
    'box banheiro 8mm curitiba',
    'vidraçaria curitiba',
    'box de vidro curitiba',
    'box de canto curitiba',
    'box elegance inox curitiba',
    'box de banheiro preço curitiba',
    'orçamento box banheiro curitiba',
    'instalação box banheiro curitiba',
    'box frontal curitiba',
    'box de abrir curitiba',
    'oxford box curitiba',
    'box premium curitiba',
    'box banheiro sob medida',
  ],
  authors: [{ name: 'Oxford Box', url: SITE_URL }],
  creator: 'Oxford Box',
  publisher: 'Oxford Box',
  category: 'Home Improvement',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_URL,
    siteName: 'Oxford Box',
    title: 'Oxford Box | Box de Banheiro Premium em Curitiba',
    description:
      'Transforme seu banheiro com vidro temperado 8mm e roldanas em inox. Instalação profissional em até 3 dias. A partir de R$380/m². Solicite orçamento grátis.',
    images: [
      {
        url: `${SITE_URL}/box-1.png`,
        width: 1200,
        height: 630,
        alt: 'Oxford Box — Box de Banheiro Premium em Curitiba',
      },
      {
        url: `${SITE_URL}/logo.png`,
        width: 512,
        height: 512,
        alt: 'Logo Oxford Box',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oxford Box | Box de Banheiro Premium em Curitiba',
    description:
      'Vidro temperado 8mm, roldanas em inox e instalação profissional. A partir de R$380/m². Solicite orçamento grátis.',
    images: [`${SITE_URL}/box-1.png`],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <SchemaMarkup />
      </head>
      <body className="bg-[#0B0C10] text-white antialiased font-sans">{children}</body>
    </html>
  );
}
