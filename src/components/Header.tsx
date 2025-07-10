import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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
            <img 
              src="/lovable-uploads/3257a8c8-4a48-4188-938d-9e2e04c79bc7.png" 
              alt="VERITUS" 
              className="h-10"
            />
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

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button 
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-white px-6 py-2.5 font-semibold"
              >
                Entrar
              </Button>
            </Link>
            <Button 
              onClick={() => scrollToSection('contato')}
              className="btn-accent px-6 py-2.5 font-semibold"
            >
              Agendar Demo
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};