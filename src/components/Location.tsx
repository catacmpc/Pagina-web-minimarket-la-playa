import { MapPin, Clock, Navigation } from 'lucide-react';
import { Button } from './ui/button';

export function Location() {
  const openGoogleMaps = () => {
    // Coordenadas de ejemplo - deberían ser reemplazadas con las reales
    window.open(
      'https://www.google.com/maps/search/?api=1&query=-38.8095223,-73.3986824',
      '_blank'
    );
  };

  return (
    <section id="location" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-[#1B7A8C] mb-4">
            Visítanos
          </h2>
          <div className="w-24 h-1 bg-[#E67842] mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#E8F5F7] to-[#C8E6F5] rounded-2xl overflow-hidden shadow-lg aspect-video lg:aspect-square flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.XXXXXXX!2d-73.3986824!3d-38.8095223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961554eb93aeadb5%3A0x49cc627d9ba80c1e!2sMinimarket%20La%20Playa!5e0!3m2!1ses!2scl!4vXXXXX"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Minimarket La Playa"
              ></iframe>
            </div>
          </div>

          {/* Location Info */}
          <div className="space-y-6">
            {/* Address */}
            <div className="bg-[#E8F5F7] rounded-xl p-6">
              <div className="flex gap-4">
                <div className="bg-gradient-to-br from-[#1B7A8C] to-[#E67842] p-3 rounded-lg h-fit">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-[#1B7A8C] mb-2">Dirección</h3>
                  <p className="text-gray-700 mb-2">
                    Las dunas, Playa Maule
                  </p>
                  <p className="text-gray-600 text-sm">
                    <strong>Referencia:</strong> Frente
                    al Terminal de buses en Playa Maule de Puerto Saavedra
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-[#E8F5F7] rounded-xl p-6">
              <div className="flex gap-4">
                <div className="bg-gradient-to-br from-[#1B7A8C] to-[#E67842] p-3 rounded-lg h-fit">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-[#1B7A8C] mb-3">Horarios de Atención</h3>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between">
                      <span>Lunes a Domingo:</span>
                      <span>9:30 AM - 9:30 PM</span>
                    </div>
    
                    <div className="flex justify-between">
                      <span>Feriados:</span>
                      <span>10:00 AM - 9:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Directions Button */}
            <Button
              size="lg"
              onClick={openGoogleMaps}
              className="w-full bg-gradient-to-r from-[#1B7A8C] to-[#E67842] hover:opacity-90 text-white gap-2"
            >
              <Navigation className="w-5 h-5" />
              Cómo Llegar
            </Button>

            {/* Additional Info */}
            <div className="bg-[#FFF9E6] border border-[#FFD700] rounded-xl p-6">
              <p className="text-[#D2691E] text-sm">
                <strong>💡 Tip:</strong> Contamos con estacionamiento gratuito
                y aceptamos todos los medios de pago.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}