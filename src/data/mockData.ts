export const WHATSAPP_NUMBER = '554199382240';
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const makeWhatsAppUrl = (message: string) =>
  `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;

export const heroImages = [
  '/box1.jpg',
  '/box2.jpg',
  '/box3.jpg'
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

export const products: Product[] = [
  {
    id: 1,
    category: 'Box Frontal',
    name: 'Box Frontal (F1)',
    tag: 'Mais Vendido',
    description: 'O modelo clássico para vãos retos. Composto por uma porta fixa e uma deslizante, otimizando o espaço do seu banheiro.',
    image: '/box1.jpg',
    details: ['Vidro temperado 8mm', 'Perfis de alumínio estrutural', 'Roldanas de nylon com rolamento', 'Trinco de segurança magnético'],
  },
  {
    id: 2,
    category: 'Box de Canto',
    name: 'Box de Canto (F2)',
    tag: 'Ideal para L',
    description: 'Solução perfeita para cantos. Abertura em 90 graus com duas portas de correr, garantindo o máximo de passagem.',
    image: '/box2.jpg',
    details: ['Formato em L', 'Duas portas deslizantes', 'Transpasse perfeito sem vazamentos', 'Acabamentos em diversas cores'],
  },
  {
    id: 3,
    category: 'Roldanas Aparentes (Elegance)',
    name: 'Box Elegance Inox',
    tag: 'Alto Padrão',
    description: 'O suprassumo do design. Roldanas blindadas em aço inox 304 correndo sobre tubo superior. Sem perfil embaixo.',
    image: '/box3.jpg',
    details: ['Sistema Elegance Inox 304', 'Sem trilho inferior', 'Roldanas blindadas aparentes', 'Vidro 8mm Extra-Clear opcional'],
  },
  {
    id: 4,
    category: 'Box de Abrir',
    name: 'Box com Porta de Abrir',
    tag: 'Minimalista',
    description: 'Para vãos menores ou necessidades de acessibilidade. Porta pivotante com dobradiças de latão maciço.',
    image: '/box4.jpg',
    details: ['Dobradiças de Alta Resistência', 'Fechamento suave', 'Puxador tipo H em Inox', 'Vedação total com silicone neutro'],
  },
];

export const categories: ProductCategory[] = [
  'Todos',
  'Box Frontal',
  'Box de Canto',
  'Roldanas Aparentes (Elegance)',
  'Box de Abrir',
];

export const galleryImages = [
  { id: 1, src: '/box1.jpg', alt: 'Box instalado' },
  { id: 2, src: '/box2.jpg', alt: 'Box de banheiro alto padrão' },
  { id: 3, src: '/box3.jpg', alt: 'Roldanas aparentes' },
  { id: 4, src: '/box4.jpg', alt: 'Box vidro 8mm' },
  { id: 5, src: '/box5.jpg', alt: 'Box design' },
];
