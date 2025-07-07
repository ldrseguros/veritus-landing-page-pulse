import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

export const HeroSection = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen hero-bg flex items-center justify-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/5"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-primary/10 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-6 lg:px-8 py-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-up">
            <h1 className="text-5xl lg:text-7xl font-heading font-bold text-white mb-6 text-shadow-lg">
              Análises contratuais em{' '}
              <span className="text-accent">minutos</span>, não em semanas.
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl text-shadow">
              Reduza riscos, otimize decisões e proteja seu legado com inteligência artificial.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button 
                onClick={() => scrollToSection('demo')}
                className="btn-accent px-8 py-4 text-lg font-semibold"
              >
                Ver Demonstração
              </Button>
              <Button 
                variant="outline"
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 px-8 py-4 text-lg font-semibold backdrop-blur-sm"
              >
                Pitch Deck
              </Button>
            </div>

            {/* Video Button */}
            <div className="flex justify-center lg:justify-start">
              <button 
                onClick={() => setShowVideoModal(true)}
                className="group flex items-center space-x-3 text-white/90 hover:text-white transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 backdrop-blur-sm">
                  <Play className="w-6 h-6 ml-1" fill="currentColor" />
                </div>
                <span className="text-lg font-medium">Assista ao vídeo institucional (60s)</span>
              </button>
            </div>
          </div>

          {/* Dashboard Mockup */}
          <div className="animate-scale-in lg:animate-fade-up" style={{animationDelay: '0.5s'}}>
            <div className="card-premium p-8 bg-white/95 backdrop-blur-sm">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-primary">Análise Contratual</h3>
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                </div>

                {/* Score Display */}
                <div className="text-center">
                  <div className="relative w-32 h-32 mx-auto">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        className="text-muted"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${72 * 2.51} 251.2`}
                        className="text-accent transition-all duration-1000"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl font-bold text-primary">72</span>
                    </div>
                  </div>
                  <p className="text-lg font-semibold text-primary mt-2">Score de Risco</p>
                </div>

                {/* Critical Points */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Cláusulas Críticas Identificadas:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="text-sm">Limitação de responsabilidade excessiva</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm">Prazo de carência não especificado</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm">Cobertura geografica limitada</span>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <Button className="w-full btn-primary">
                  Baixar Relatório Completo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={() => setShowVideoModal(false)}>
          <div className="bg-white rounded-xl p-8 max-w-4xl w-full mx-4">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Play className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-lg text-muted-foreground">Vídeo institucional VERITUS</p>
                <p className="text-sm text-muted-foreground">Narrativa de 60s sobre a solução</p>
              </div>
            </div>
            <Button 
              onClick={() => setShowVideoModal(false)}
              className="mt-4 w-full"
              variant="outline"
            >
              Fechar
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};