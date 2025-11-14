import { useState } from 'react';
import { Phone, Mail, MessageCircle, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner@2.0.3';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulación de envío
    toast.success('¡Mensaje enviado! Te contactaremos pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  const openWhatsApp = () => {
    // Número de ejemplo - debería ser reemplazado con el real
    window.open('https://wa.me/51987654321?text=Hola, quisiera más información', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-[#E8F5F7]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-[#1B7A8C] mb-4">
            Contáctanos
          </h2>
          <div className="w-24 h-1 bg-[#E67842] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ¿Tienes alguna pregunta o quieres una cotización? 
            Escríbenos y te responderemos a la brevedad.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-[#1B7A8C] to-[#E67842] p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-[#1B7A8C] mb-2">Correo Electrónico</h3>
                  <a
                    href="mailto:market.lapalaya@gmail.com"
                    className="text-gray-700 hover:text-[#E67842] transition-colors"
                  >
                    market.lapalaya@gmail.com
                  </a>
                  <p className="text-gray-500 text-sm mt-1">
                    Respondemos en menos de 24 horas
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-[#25D366] to-[#128C7E] p-3 rounded-lg">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#1B7A8C] mb-2">WhatsApp</h3>
                  <p className="text-gray-700 mb-3">
                    ¡Chatea con nosotros directamente!
                  </p>
                  <Button
                    onClick={openWhatsApp}
                    className="bg-[#25D366] hover:bg-[#20BA5A] text-white gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Abrir WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl text-[#1B7A8C] mb-6">Envíanos un mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Nombre completo
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Tu nombre"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Correo electrónico
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="tu@email.com"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Escribe tu mensaje aquí..."
                  rows={5}
                  className="w-full"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-[#1B7A8C] to-[#E67842] hover:opacity-90 text-white gap-2"
              >
                <Send className="w-5 h-5" />
                Enviar Mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}