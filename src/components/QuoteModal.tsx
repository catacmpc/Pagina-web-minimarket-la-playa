import { useState } from 'react';
import { X, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { toast } from 'sonner@2.0.3';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    products: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('¡Cotización solicitada! Te contactaremos pronto.');
    setFormData({ name: '', phone: '', email: '', products: '' });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl text-[#1B7A8C]">
            Solicitar Cotización
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label htmlFor="quote-name" className="block text-gray-700 mb-2">
              Nombre completo *
            </label>
            <Input
              id="quote-name"
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
            <label htmlFor="quote-phone" className="block text-gray-700 mb-2">
              Teléfono *
            </label>
            <Input
              id="quote-phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              placeholder="+51 987 654 321"
              className="w-full"
            />
          </div>

          <div>
            <label htmlFor="quote-email" className="block text-gray-700 mb-2">
              Correo electrónico
            </label>
            <Input
              id="quote-email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="tu@email.com (opcional)"
              className="w-full"
            />
          </div>

          <div>
            <label htmlFor="quote-products" className="block text-gray-700 mb-2">
              Productos que te interesan *
            </label>
            <Textarea
              id="quote-products"
              required
              value={formData.products}
              onChange={(e) =>
                setFormData({ ...formData, products: e.target.value })
              }
              placeholder="Ejemplo: 2kg arroz, 1L aceite, frutas variadas..."
              rows={4}
              className="w-full"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-[#1B7A8C] to-[#E67842] hover:opacity-90 text-white gap-2"
            >
              <Send className="w-4 h-4" />
              Enviar
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}