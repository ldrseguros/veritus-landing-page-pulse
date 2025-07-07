import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-card' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-cta rounded-lg flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-xl">V</span>
            </div>
            <span className="text-2xl font-heading font-bold text-primary">
              VERITUS
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('como-funciona')}
              className="text-foreground hover:text-accent transition-colors duration-200"
            >
              Como Funciona
            </button>
            <button 
              onClick={() => scrollToSection('beneficios')}
              className="text-foreground hover:text-accent transition-colors duration-200"
            >
              Benefícios
            </button>
            <button 
              onClick={() => scrollToSection('seguranca')}
              className="text-foreground hover:text-accent transition-colors duration-200"
            >
              Segurança
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-foreground hover:text-accent transition-colors duration-200"
            >
              Contato
            </button>
          </nav>

          {/* CTA Button */}
          <Button 
            onClick={() => scrollToSection('contato')}
            className="btn-accent px-6 py-2.5 font-semibold"
          >
            Agendar Demo
          </Button>
        </div>
      </div>
    </header>
  );
};