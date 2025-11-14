import { MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import heroImage from 'figma:asset/827fd49453ec05c3cd9c8aeb1501a46b23b4ec2c.png';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export function Hero({ onOpenQuoteModal }: HeroProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="pt-20">
      <div className="relative h-[600px] lg:h-[700px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Playa de Chile"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B7A8C]/85 via-[#1B7A8C]/60 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white -mt-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-bold drop-shadow-2xl">
              Todo para tu hogar o vacaciones,{' '}
              <span className="text-[#FFA57B]">a pasos de la playa</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white font-semibold drop-shadow-lg">
              Abierto todos los días, pan, frutas, abarrotes y todo lo que tu hogar necesita. Variedad de productos y precios justos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="bg-white/10 hover:bg-white/20 text-white border-white/50 backdrop-blur-sm gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Contáctanos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}