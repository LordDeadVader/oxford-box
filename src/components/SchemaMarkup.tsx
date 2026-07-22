export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://oxford-box.vercel.app/#business",
        "name": "Oxford Box",
        "description": "Especialistas em box de banheiro premium com vidro temperado 8mm, roldanas em inox e instalação profissional. Atendemos Curitiba e região metropolitana.",
        "url": "https://oxford-box.vercel.app",
        "telephone": "+55-41-99382240",
        "priceRange": "R$ 380 - R$ 2000",
        "image": "https://oxford-box.vercel.app/logo.png",
        "logo": "https://oxford-box.vercel.app/logo.png",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Curitiba",
          "addressRegion": "PR",
          "addressCountry": "BR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -25.4284,
          "longitude": -49.2733
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "18:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "08:00",
            "closes": "12:00"
          }
        ],
        "sameAs": [
          "https://wa.me/554199382240"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Catálogo de Box de Banheiro",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Box Frontal",
                "description": "Box de banheiro frontal com vidro temperado 8mm e perfis de alumínio sob medida."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Box de Canto",
                "description": "Box de banheiro de canto em L, com duas portas deslizantes e vedação perfeita."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Box Elegance Inox",
                "description": "Box com roldanas aparentes em aço inox 304, sem trilho inferior, de alto padrão."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Box com Porta de Abrir",
                "description": "Box pivotante com dobradiças de alta resistência, ideal para espaços menores."
              }
            }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://oxford-box.vercel.app/#website",
        "url": "https://oxford-box.vercel.app",
        "name": "Oxford Box",
        "description": "Box de banheiro premium em Curitiba. Vidro temperado 8mm, roldanas em inox e instalação profissional.",
        "publisher": {
          "@id": "https://oxford-box.vercel.app/#business"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://oxford-box.vercel.app/?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Qual a espessura do vidro utilizado?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Trabalhamos estritamente com vidro temperado de 8mm, que é o padrão exigido pela ABNT para garantir máxima segurança e resistência a impactos na área do banho."
            }
          },
          {
            "@type": "Question",
            "name": "Vocês fazem box sob medida?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim! Todos os nossos boxes são fabricados 100% sob medida. Após o orçamento inicial, um técnico vai até sua residência tirar as medidas exatas a laser para garantir um encaixe perfeito."
            }
          },
          {
            "@type": "Question",
            "name": "Quanto tempo demora a instalação?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A instalação em si leva cerca de 2 a 3 horas. O prazo total, desde a medição até a entrega instalada, costuma ser de 3 a 5 dias úteis."
            }
          },
          {
            "@type": "Question",
            "name": "Quais as cores de perfis disponíveis?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oferecemos acabamentos em Preto Fosco, Branco, Cromado, Dourado Champagne e Bronze. Todos com pintura eletrostática ou anodização de alta durabilidade."
            }
          },
          {
            "@type": "Question",
            "name": "Vocês dão garantia no box?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Com certeza. Oferecemos 5 anos de garantia contra defeitos de fabricação nas ferragens e perfis, além de 1 ano de garantia na vedação e instalação."
            }
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
