import { useState } from 'react';
import { ShoppingCart, Package, Apple, Milk, Coffee, Droplet } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CatalogProps {
  onOpenQuoteModal: () => void;
}

export function Catalog({ onOpenQuoteModal }: CatalogProps) {
  const categories = [
    {
      id: 'abarrotes',
      name: 'Abarrotes',
      icon: Package,
      color: 'from-[#E67842] to-[#D2691E]',
    },
    {
      id: 'frutas',
      name: 'Frutas y Verduras',
      icon: Apple,
      color: 'from-[#1B7A8C] to-[#147587]',
    },
    {
      id: 'lacteos',
      name: 'Lácteos y Congelados',
      icon: Milk,
      color: 'from-[#4DA6B8] to-[#1B7A8C]',
    },
    {
      id: 'bebidas',
      name: 'Bebidas y Snacks',
      icon: Coffee,
      color: 'from-[#FFB347] to-[#E67842]',
    },
    {
      id: 'limpieza',
      name: 'Limpieza y Hogar',
      icon: Droplet,
      color: 'from-[#5BB5C6] to-[#1B7A8C]',
    },
  ];

  const products = {
    abarrotes: [
      {
        name: 'Arroz',
        description: 'de 1/2 kilo y de 1 kilo',
        image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaWNlJTIwZ3JhaW5zJTIwcGFja2FnZXxlbnwxfHx8fDE3NjMwNTMxNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      },
      {
        name: 'Aceite de cocina',
        description: 'Vegetal, Maravilla y Oliva',
        image: 'https://images.unsplash.com/photo-1757801333069-f7b3cabaec4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwb2lsJTIwYm90dGxlfGVufDF8fHx8MTc2Mjk2ODYyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      },
      {
        name: 'Pastas',
        description: 'Tallarines, corbatitas, espirales, etc',
        image: 'https://images.unsplash.com/photo-1751182471056-ecd29a41f339?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGRyeSUyMGZvb2R8ZW58MXx8fHwxNzYzMDUzMTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      },
      {
        name: 'Conservas',
        description: 'Atún, jurel, duraznos,piña,etc',
        image: 'https://images.unsplash.com/photo-1683295549596-00f7547bf6a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5uZWQlMjBmb29kJTIwdHVuYXxlbnwxfHx8fDE3NjMwNTMxNjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      },
    ],
    frutas: [
      {
        name: 'Frutas',
        description: 'Manzanas, naranjas, plátanos y más',
        image: 'https://images.unsplash.com/photo-1758184449358-ac6f5dcd8e04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGZydWl0cyUyMGRpc3BsYXl8ZW58MXx8fHwxNzYzMDUzMTY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      },
      {
        name: 'Verduras ',
        description: 'Tomates, lechugas, zanahorias frescas',
        image: 'https://images.unsplash.com/photo-1641919105784-f0838a756e58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b21hdG9lcyUyMGxldHR1Y2UlMjBmcmVzaHxlbnwxfHx8fDE3NjMwNTMxNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      },
      {
        name: 'Especias',
        description: 'Variedad de verduras del mercado',
        image: 'https://images.unsplash.com/photo-1549248581-cf105cd081f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBwcm9kdWNlJTIwbWFya2V0fGVufDF8fHx8MTc2Mjk3MjMzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      },
      {
        name: '',
        description: 'Papas, camotes, yucas de calidad',
        image: 'https://images.unsplash.com/photo-1669154777196-aca4d45b581a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3RhdG9lcyUyMHZlZ2V0YWJsZXMlMjBtYXJrZXR8ZW58MXx8fHwxNzYzMDUzMTY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      },
    ],
    lacteos: [
      {
        name: 'Leche',
        description: 'Leche entera, descremada y deslactosada',
        image: 'https://images.unsplash.com/photo-1561385019-9efb424f3d31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWxrJTIwYm90dGxlcyUyMGRhaXJ5fGVufDF8fHx8MTc2Mjk3MjMzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      },
      {
        name: 'Quesos Variados',
        description: 'Queso Mantecoso,Gauda laminado , parmesano, queso crema',
        image: 'https://images.unsplash.com/photo-1695606452862-eee123cec588?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVlc2UlMjB2YXJpZXRpZXMlMjBkaXNwbGF5fGVufDF8fHx8MTc2MzA1MzE3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      },
      {
        name: 'Yogurt',
        description: 'Yogurt natural, batido con sabor y con frutas',
        image: 'https://images.unsplash.com/photo-1760273464017-4bb7dfa42d91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2d1cnQlMjBjdXBzJTIwaGVhbHRoeXxlbnwxfHx8fDE3NjMwNTMxNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      },
      {
        name: 'Helados',
        description: 'Helados Savory y Fruna',
        image: 'https://images.unsplash.com/photo-1603362548634-f26e6ce7237a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2UlMjBjcmVhbSUyMGZyb3plbnxlbnwxfHx8fDE3NjMwNTMxNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      },
    ],
    bebidas: [
      {
        name: 'Bebidas Gaseosas',
        description: 'Refrescos de todas las marcas',
        image: 'https://images.unsplash.com/photo-1568657624422-1b8713e79461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2RhJTIwYm90dGxlcyUyMGRyaW5rc3xlbnwxfHx8fDE3NjMwNTMxNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      },
      {
        name: 'Agua Mineral',
        description: 'formato de 500cc, 2L y bidón de 6L',
        image: 'https://images.unsplash.com/photo-1641999160901-a36bf550fd96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3R0bGVkJTIwd2F0ZXIlMjBmcmVzaHxlbnwxfHx8fDE3NjMwNTMxNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      },
      {
        name: 'Snacks Salados',
        description: 'Papas fritas, Doritos, Ramitas y más (Marcopolo y Evercrips',
        image: 'https://images.unsplash.com/photo-1688217170693-e821c6e18d72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlwcyUyMHNuYWNrcyUyMGNvbG9yZnVsfGVufDF8fHx8MTc2MzA1MzE3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      },
      {
        name: 'Galletas y Dulces',
        description: 'Gran variedad de galletas y golosinas',
        image: 'https://images.unsplash.com/photo-1607291144860-8c0f759ac2b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raWVzJTIwYmlzY3VpdHMlMjBzd2VldHxlbnwxfHx8fDE3NjMwNTMxNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      },
    ],
    limpieza: [
      {
        name: 'Detergentes',
        description: 'Para ropa y loza, diversas marcas',
        image: 'https://images.unsplash.com/photo-1707143598173-944230c2de24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMHNwcmF5JTIwYm90dGxlc3xlbnwxfHx8fDE3NjMwNTMxNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      },
      {
        name: 'Desinfectantes',
        description: 'Para todo tipo de superficies',
        image: 'https://images.unsplash.com/photo-1722842253242-1a40ba701095?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXNpbmZlY3RhbnQlMjBjbGVhbmVyJTIwcHJvZHVjdHN8ZW58MXx8fHwxNzYzMDUzMTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      },
      {
        name: 'Papel Higiénico',
        description: 'Suave y resistente, individuales o en pack',
        image: 'https://images.unsplash.com/photo-1674656801311-2442717f7968?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2lsZXQlMjBwYXBlciUyMHJvbGxzfGVufDF8fHx8MTc2Mjk2MjI1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      },
      {
        name: 'Artículos de Aseo',
        description: 'Escobas, trapeadores, esponjas',
        image: 'https://images.unsplash.com/photo-1759846866217-e627e4478f82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbmluZyUyMHN1cHBsaWVzJTIwaG9tZXxlbnwxfHx8fDE3NjMwNTMxNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      },
    ],
  };

  const [activeCategory, setActiveCategory] = useState('abarrotes');

  return (
    <section id="catalog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-[#1B7A8C] mb-4">
            Nuestro Catálogo
          </h2>
          <div className="w-24 h-1 bg-[#E67842] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ¡Tenemos todo lo que necesitas para tu hogar!
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="hidden sm:inline">{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products[activeCategory as keyof typeof products].map(
            (product, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="relative overflow-hidden aspect-square">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-[#1B7A8C] mb-2">{product.name}</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    {product.description}
                  </p>
                  <div className="inline-block px-3 py-1 bg-[#E8F5F7] text-[#1B7A8C] rounded-full text-sm">
                    {
                      categories.find((c) => c.id === activeCategory)
                        ?.name
                    }
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-[#1B7A8C] to-[#E67842] rounded-2xl p-8 md:p-12 text-white">
          <ShoppingCart className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl mb-4">
            ¿Necesitas una cotización?
          </h3>
          <p className="mb-6 text-white/90">
            Contáctanos para consultar precios y descuentos al por mayor.
          </p>
          <Button
            size="lg"
            onClick={onOpenQuoteModal}
            className="bg-white text-[#1B7A8C] hover:bg-gray-100"
          >
            Solicitar Cotización
          </Button>
        </div>
      </div>
    </section>
  );
}