import { useState } from 'react';
import { Briefcase, Upload, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner@2.0.3';

export function Jobs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulación de envío
    toast.success('¡Postulación enviada! Revisaremos tu información.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="jobs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-[#1B7A8C] mb-4">
            Trabaja con Nosotros
          </h2>
          <div className="w-24 h-1 bg-[#E67842] mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Info Section */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-[#1B7A8C] to-[#E67842] p-8 rounded-2xl text-white">
                <Briefcase className="w-12 h-12 mb-4" />
                <h3 className="text-2xl mb-4">¡Únete a nuestro equipo!</h3>
                <p className="mb-4">
                  En Minimarket La Playa valoramos el compromiso.
              
                </p>
                <p>
                  Si te apasiona el servicio al cliente y quieres ser parte de
                  una familia, ¡queremos conocerte!
                </p>
              </div>

              <div className="bg-[#E8F5F7] rounded-xl p-6">
                <h4 className="text-[#1B7A8C] mb-4">
                  ¿Qué buscamos?
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#E67842] mt-1">✓</span>
                    <span>Actitud positiva</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E67842] mt-1">✓</span>
                    <span>Excelente trato con los clientes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E67842] mt-1">✓</span>
                    <span>Responsabilidad y puntualidad</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E67842] mt-1">✓</span>
                    <span>Personas proactivas</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#FFF9E6] border border-[#FFD700] rounded-xl p-6">
                <h4 className="text-[#D2691E] mb-2">
                  Beneficios
                </h4>
                <p className="text-gray-700 text-sm">
                  Ofrecemos un ambiente de trabajo familiar y amigable.
                </p>
              </div>
            </div>

            {/* Application Form */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl text-[#1B7A8C] mb-6">Postula aquí</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="job-name" className="block text-gray-700 mb-2">
                    Nombre completo *
                  </label>
                  <Input
                    id="job-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Tu nombre completo"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="job-email" className="block text-gray-700 mb-2">
                    Correo electrónico *
                  </label>
                  <Input
                    id="job-email"
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
                  <label htmlFor="job-phone" className="block text-gray-700 mb-2">
                    Teléfono *
                  </label>
                  <Input
                    id="job-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+56 987 654 321"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="job-message" className="block text-gray-700 mb-2">
                    Cuéntanos sobre ti
                  </label>
                  <Textarea
                    id="job-message"
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Experiencia laboral, habilidades, disponibilidad..."
                    rows={4}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Adjuntar CV (opcional)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#E67842] transition-colors cursor-pointer">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600 text-sm">
                      Haz clic para subir tu CV (PDF, DOC, DOCX)
                    </p>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      id="cv-upload"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-[#1B7A8C] to-[#E67842] hover:opacity-90 text-white gap-2"
                >
                  <Send className="w-5 h-5" />
                  Enviar Postulación
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}