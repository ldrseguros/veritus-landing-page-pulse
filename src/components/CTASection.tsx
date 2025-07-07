import { Button } from '@/components/ui/button';

export const CTASection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-accent/5 rounded-full blur-xl animate-float" style={{animationDelay: '3s'}}></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          {/* Main CTA Message */}
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-8 text-accent">
            "VERITUS resolve uma dor invisível, com precisão visível."
          </h2>
          
          <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-12 leading-relaxed">
            Enquanto empresas gastam <span className="text-accent font-semibold">semanas analisando contratos manualmente</span>, 
            perdendo oportunidades e assumindo riscos desnecessários, o VERITUS entrega 
            <span className="text-accent font-semibold"> análises precisas em minutos</span>.
          </p>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => scrollToSection('contato')}
              className="btn-accent px-8 py-4 text-lg font-semibold shadow-glow"
            >
              Quero uma Demonstração
            </Button>
            <span className="text-primary-foreground/70 text-sm">
              ⚡ Análise em tempo real • 📋 3 relatórios automáticos • 🔒 100% seguro
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};