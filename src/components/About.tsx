import { Heart, Users, Award, Clock } from 'lucide-react';
import storeImage from 'figma:asset/ec506d64f41720b7fd045c90cf2e8b1541f90e2a.png';
import snacksImage from 'figma:asset/51d0b7310c33a7321ac176d0813a6459d73c52e0.png';
import wineImage from 'figma:asset/6f1ab2d160b0dc3018087249473bc0e200ba058c.png';

export function About() {
  const values = [
    {
      icon: Heart,
      title: 'Cercanía',
      description: 'En el corazón de Playa Maule',
    },
    {
      icon: Users,
      title: 'Atención cercana',
      description: 'Te atendemos con amabilidad',
    },
    {
      icon: Award,
      title: 'Variedad de productos',
      description: 'De lo más tradicional a los sin lactosa y sin azúcar',
    },
    {
      icon: Clock,
      title: 'Disponibilidad',
      description: 'Abierto los 365 días del año, incluso feriados!',
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#E8F5F7]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-[#1B7A8C] mb-4">
            Quiénes Somos
          </h2>
          <div className="w-24 h-1 bg-[#E67842] mx-auto"></div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div>
            <h3 className="text-2xl text-[#1B7A8C] mb-6">
              Tu Minimarket de Confianza
            </h3>
            <p className="text-gray-700 mb-4">
              Desde hace más de 20 años, Minimarket La Playa ha sido un lugar donde vecinos y turistas encuentran todo lo que necesitan para su día a día. Abrimos los 365 días del año.
            </p>
            <p className="text-gray-700 mb-4">
              Somos un negocio familiar, y cada persona que forma parte de nuestro equipo se esfuerza por brindar un trato cercano y amigable. Conocemos a nuestros clientes, escuchamos sus recomendaciones y nos gusta verlos volver con una sonrisa.
            </p>
            <p className="text-gray-700">
              ¿Se te olvidó el cepillo de dientes?¿Te faltó un ingrediente mientras cocinabas? No te preocupes, nosotros ya pensamos en todo, somos tú solución frente a la playa y el terminal.
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src={storeImage}
              alt="Minimarket La Playa"
              className="w-full h-64 object-cover rounded-xl shadow-lg col-span-2"
            />
            <img
              src={snacksImage}
              alt="Variedad de snacks"
              className="w-full h-48 object-cover rounded-xl shadow-lg"
            />
            <img
              src={wineImage}
              alt="Productos especiales"
              className="w-full h-48 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="bg-gradient-to-br from-[#1B7A8C] to-[#E67842] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-[#1B7A8C] mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}