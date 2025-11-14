import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Location } from './components/Location';
import { Catalog } from './components/Catalog';
import { Contact } from './components/Contact';
import { Jobs } from './components/Jobs';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
        <About />
        <Location />
        <Catalog onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
        <Contact />
        <Jobs />
      </main>
      <Footer />
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
      <Toaster position="top-right" />
    </div>
  );
}