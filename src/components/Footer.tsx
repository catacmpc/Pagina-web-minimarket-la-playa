import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import logo from 'figma:asset/c19df4142403141ec48e1cf04d2afbf276233072.png';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1B7A8C] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <img src={logo} alt="Minimarket La Playa" className="h-16 w-auto mb-4" />
            <p className="text-white/80 text-sm">
              Tu minimarket de barrio con la mejor selección de productos.
              ¡Todo lo que necesitas, más cerca de ti!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection('inicio')}
                  className="text-white/80 hover:text-[#FFA57B] transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-white/80 hover:text-[#FFA57B] transition-colors"
                >
                  Quiénes Somos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('location')}
                  className="text-white/80 hover:text-[#FFA57B] transition-colors"
                >
                  Ubicación
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('catalog')}
                  className="text-white/80 hover:text-[#FFA57B] transition-colors"
                >
                  Catálogo
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-white/80 hover:text-[#FFA57B] transition-colors"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-[#FFA57B] flex-shrink-0" />
                <span className="text-white/80">
                  Avenida Miramar & Las Dunas, Puerto Saavedra, Chile
                </span>
              </li>
              
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 text-[#FFA57B] flex-shrink-0" />
                <a
                  href="mailto:contacto@minimarketlaplaya.com"
                  className="text-white/80 hover:text-[#FFA57B] transition-colors"
                >
                  market.laplaya@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours & Social */}
          <div>
            <h4 className="mb-4">Horarios</h4>
            <ul className="space-y-2 text-sm text-white/80 mb-6">
              <li className="flex justify-between">
                <span>Lun - Dom:</span>
                <span>9:30AM - 9:30PM</span>
              </li>
              <li className="flex justify-between">
                <span>Feriados:</span>
                <span>10:00AM - 9:00PM</span>
              </li>
            </ul>
            <h4 className="mb-3">Síguenos</h4>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-white/60">
          <p>
            © {new Date().getFullYear()} Minimarket La Playa. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}