export const WHATSAPP_NUMBER = '554199382240';
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const makeWhatsAppUrl = (message: string) =>
  `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;

export const heroImages = [
  '/box-1.jpeg',
  '/box-2.jpeg',
  '/box-3.jpeg',
  '/box-4.jpeg'
];

export const diferenciais = [
  {
    id: 1,
    icon: 'Shield',
    title: 'Vidro Temperado 8mm',
    description: 'Trabalhamos exclusivamente com vidros Blindex de 8mm, garantindo a máxima segurança e durabilidade para a sua família.',
  },
  {
    id: 2,
    icon: 'Cog',
    title: 'Perfis Sob Medida',
    description: 'Nossos perfis de alumínio e inox são cortados milimetricamente para o seu banheiro, garantindo vedação perfeita contra vazamentos.',
  },
  {
    id: 3,
    icon: 'Ruler',
    title: 'Instalação Ágil',
    description: 'Instalação rápida e limpa em até 3 dias úteis. Nossa equipe técnica é especialista e não deixa sujeira após o serviço.',
  },
  {
    id: 4,
    icon: 'Gem',
    title: 'Garantia de 5 Anos',
    description: 'Confiamos tanto em nossos materiais e instalação que oferecemos 5 anos de garantia contra defeitos de fábrica.',
  },
];

export type ProductCategory =
  | 'Todos'
  | 'Box Frontal'
  | 'Box de Canto'
  | 'Roldanas Aparentes (Elegance)'
  | 'Box de Abrir';

export interface Product {
  id: number;
  category: ProductCategory;
  name: string;
  tag: string;
  description: string;
  image: string;
  details: string[];
}

const getCategory = (index: number): ProductCategory => {
  const cats: ProductCategory[] = ['Box Frontal', 'Box de Canto', 'Roldanas Aparentes (Elegance)', 'Box de Abrir'];
  return cats[index % 4];
};

const getTitle = (index: number): string => {
  const titles = ['Box Elegance Ouro', 'Box Padrão Luxo', 'Box Inox Premium', 'Box Pivotante Glass', 'Box Minimalista', 'Box Frontal Clássico', 'Box Canto Inteligente'];
  return titles[index % titles.length] + ' ' + (index + 1);
};

export const products: Product[] = Array.from({ length: 14 }).map((_, i) => ({
  id: i + 1,
  category: getCategory(i),
  name: getTitle(i),
  tag: i % 3 === 0 ? 'Mais Vendido' : i % 4 === 0 ? 'Alto Padrão' : 'Premium',
  description: 'Design sofisticado com vidro de alta segurança, perfeito para valorizar e otimizar o espaço do seu banheiro.',
  image: `/box-${i + 1}.jpeg`,
  details: ['Vidro temperado 8mm', 'Acabamento de luxo', 'Vedação total'],
}));

export const categories: ProductCategory[] = [
  'Todos',
  'Box Frontal',
  'Box de Canto',
  'Roldanas Aparentes (Elegance)',
  'Box de Abrir',
];

export const galleryImages = Array.from({ length: 14 }).map((_, i) => ({
  id: i + 1,
  src: `/box-${i + 1}.jpeg`,
  alt: `Box instalado modelo ${i + 1}`,
}));
