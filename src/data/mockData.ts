export const WHATSAPP_NUMBER = '5541993822240';
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const makeWhatsAppUrl = (message: string) =>
  `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;

export const diferenciais = [
  {
    id: 1,
    icon: 'Cog',
    title: 'Roldanas Aparentes em Inox',
    description: 'Mecanismo de deslizamento suave com zero ruído. Roldanas de alta precisão em aço inoxidável 304 com rolamento duplo.',
  },
  {
    id: 2,
    icon: 'Shield',
    title: 'Vidros Temperados e Laminados',
    description: 'Máxima segurança e conformidade com a ABNT NBR 7199. Vidros extra-clear com tratamento anticalcário de fábrica.',
  },
  {
    id: 3,
    icon: 'Gem',
    title: 'Ferragens Exclusivas',
    description: 'Acabamentos em Preto Fosco, Dourado Champagne, Rosé Gold e Cromo Polido. Latão maciço com PVD de longa duração.',
  },
  {
    id: 4,
    icon: 'Ruler',
    title: 'Instalação Milimétrica',
    description: 'Equipe especializada com nivelamento a laser e vedação perfeita em silicone neutro. Garantia de 5 anos.',
  },
];

export type ProductCategory =
  | 'Todos'
  | 'Box Elegance'
  | 'Box Teto ao Chão'
  | 'Espelhos & LED'
  | 'Guarda-corpos & Divisórias';

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
    category: 'Box Elegance',
    name: 'Box Elegance Gold 8mm',
    tag: 'Linha Premium',
    description: 'Vidro temperado extra-clear 8mm, ferragens em latão com acabamento dourado champagne.',
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=80',
    details: ['Vidro 8mm temperado extra-clear', 'Roldanas aparentes em inox 304', 'Acabamento Dourado Champagne', 'Puxador tubular em latão', 'Anticalcário de fábrica'],
  },
  {
    id: 2,
    category: 'Box Elegance',
    name: 'Box Elegance Black Matte',
    tag: 'Linha Premium',
    description: 'Perfis e ferragens em preto fosco texturizado. Vidro fumê grafite 10mm de alta resistência.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80',
    details: ['Vidro 10mm temperado fumê', 'Acabamento Preto Fosco PVD', 'Roldanas duplas anti-ruído', 'Perfis de alumínio extrudado', 'Vedação em silicone neutro'],
  },
  {
    id: 3,
    category: 'Box Teto ao Chão',
    name: 'Floor-to-Ceiling Crystal',
    tag: 'Linha Arquitetônica',
    description: 'Box do piso ao teto em vidro inteiriço. Máxima amplitude visual, sem perfil superior.',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80',
    details: ['Vidro 10mm ou 12mm temperado', 'Sem perfil superior (frameless)', 'Fixação estrutural em inox', 'Altura personalizada até 3m', 'Dobradiças de alta resistência'],
  },
  {
    id: 4,
    category: 'Box Teto ao Chão',
    name: 'Infinity Walk-In',
    tag: 'Linha Arquitetônica',
    description: 'Painel fixo sem trilhos. Design minimalista e abertura walk-in para banheiros modernos.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80',
    details: ['Vidro fixo 12mm laminado', 'Perfil U em inox escovado', 'Sem trilho no piso', 'Instalação em 4h', 'Personalização total'],
  },
  {
    id: 5,
    category: 'Espelhos & LED',
    name: 'Espelho LED Orgânico',
    tag: 'Linha Iluminação',
    description: 'Espelho com retroiluminação LED 6500K, formato orgânico e toque touch para acionamento.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80',
    details: ['LED 6500K embutido', 'Touch sensor ON/OFF', 'Anti-embaçante (antifogging)', 'Formato orgânico sob medida', 'Bivolt automático'],
  },
  {
    id: 6,
    category: 'Espelhos & LED',
    name: 'Espelho Bisotê Clássico',
    tag: 'Linha Classic',
    description: 'Espelho com borda bisotada de 25mm em ângulo polido. Elegância clássica e atemporal.',
    image: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1000&q=80',
    details: ['Bisotê 25mm polido', 'Vidro prata 4mm', 'Suporte oculto em inox', 'Tamanhos padronizados ou sob medida', 'Instalação inclusa'],
  },
  {
    id: 7,
    category: 'Guarda-corpos & Divisórias',
    name: 'Guarda-corpo Sacada Premium',
    tag: 'Linha Arquitetônica',
    description: 'Guarda-corpo em vidro laminado 10+10mm com perfis em alumínio anodizado ou aço inox.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    details: ['Vidro laminado 10+10mm', 'Perfis em inox AISI 304', 'Conforme NBR 14718', 'Cálculo estrutural incluso', 'ART de instalação'],
  },
  {
    id: 8,
    category: 'Guarda-corpos & Divisórias',
    name: 'Divisória de Ambiente',
    tag: 'Linha Corporativa',
    description: 'Painéis divisórios em vidro temperado para ambientes residenciais e corporativos.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80',
    details: ['Vidro 8mm ou 10mm temperado', 'Perfil alumínio ou inox', 'Com ou sem passagem de porta', 'Medidas sob encomenda', 'Entrega em 15 dias'],
  },
];

export const categories: ProductCategory[] = [
  'Todos',
  'Box Elegance',
  'Box Teto ao Chão',
  'Espelhos & LED',
  'Guarda-corpos & Divisórias',
];

export const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80', alt: 'Box Elegance Gold instalado' },
  { id: 2, src: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=600&q=80', alt: 'Box teto ao chão minimalista' },
  { id: 3, src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=700&q=80', alt: 'Espelho LED orgânico' },
  { id: 4, src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80', alt: 'Guarda-corpo sacada premium' },
  { id: 5, src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80', alt: 'Divisória de vidro' },
  { id: 6, src: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=700&q=80', alt: 'Detalhes ferragens inox' },
  { id: 7, src: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80', alt: 'Roldanas aparentes premium' },
  { id: 8, src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80', alt: 'Banheiro de alto padrão' },
];

export const finishes = [
  { id: 'black', label: 'Preto Fosco', color: '#1a1a1a', description: 'PVD Preto Fosco. Ultra moderno e sofisticado. Resistente a riscos e manchas.', accentColor: '#333' },
  { id: 'chrome', label: 'Cromado', color: '#C0C0C0', description: 'Cromo Polido. Clássico e intemporal. Alto brilho que valoriza qualquer ambiente.', accentColor: '#ddd' },
  { id: 'gold', label: 'Dourado Champagne', color: '#C5A880', description: 'Dourado Champagne PVD. Elegância máxima com tom quente e aconchegante.', accentColor: '#D4AF37' },
  { id: 'bronze', label: 'Bronze Escovado', color: '#8B6914', description: 'Bronze Escovado. Textura única e exclusiva. Ideal para projetos autorais.', accentColor: '#A0792A' },
];
