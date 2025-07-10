import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-md shadow-card border-b border-border/50' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/3257a8c8-4a48-4188-938d-9e2e04c79bc7.png" 
                alt="VERITUS" 
                className="h-8 sm:h-10 lg:h-12"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('como-funciona')}
                className="text-foreground hover:text-accent transition-colors duration-200 font-medium"
              >
                Como Funciona
              </button>
              <button 
                onClick={() => scrollToSection('beneficios')}
                className="text-foreground hover:text-accent transition-colors duration-200 font-medium"
              >
                Benefícios
              </button>
              <button 
                onClick={() => scrollToSection('seguranca')}
                className="text-foreground hover:text-accent transition-colors duration-200 font-medium"
              >
                Segurança
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-foreground hover:text-accent transition-colors duration-200 font-medium"
              >
                Contato
              </button>
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden sm:flex items-center space-x-3 lg:space-x-4">
              <Link to="/login">
                <Button 
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-4 lg:px-6 py-2 lg:py-2.5 font-semibold text-sm lg:text-base"
                >
                  Entrar
                </Button>
              </Link>
              <Link to="/criar-conta">
                <Button 
                  className="btn-accent px-4 lg:px-6 py-2 lg:py-2.5 font-semibold text-sm lg:text-base"
                >
                  Criar Conta
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-accent transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div 
            className="fixed inset-0 bg-background/80 backdrop-blur-sm" 
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed top-16 left-0 right-0 bg-background border-b border-border shadow-lg">
            <div className="container mx-auto px-4 py-6">
              {/* Mobile Navigation */}
              <nav className="space-y-4 mb-6">
                <button 
                  onClick={() => scrollToSection('como-funciona')}
                  className="block w-full text-left text-foreground hover:text-accent transition-colors duration-200 font-medium py-2"
                >
                  Como Funciona
                </button>
                <button 
                  onClick={() => scrollToSection('beneficios')}
                  className="block w-full text-left text-foreground hover:text-accent transition-colors duration-200 font-medium py-2"
                >
                  Benefícios
                </button>
                <button 
                  onClick={() => scrollToSection('seguranca')}
                  className="block w-full text-left text-foreground hover:text-accent transition-colors duration-200 font-medium py-2"
                >
                  Segurança
                </button>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="block w-full text-left text-foreground hover:text-accent transition-colors duration-200 font-medium py-2"
                >
                  Contato
                </button>
              </nav>

              {/* Mobile CTA Buttons */}
              <div className="space-y-3 sm:hidden">
                <Link to="/login" className="block">
                  <Button 
                    variant="outline"
                    className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Entrar
                  </Button>
                </Link>
                <Link to="/criar-conta" className="block">
                  <Button 
                    className="w-full btn-accent font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Criar Conta
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};