import { Upload, Brain, FileText, CheckCircle } from 'lucide-react';

export const HowItWorksSection = () => {
  const steps = [
    {
      icon: Upload,
      title: "Envie os documentos",
      description: "Upload dos arquivos PDF: contrato, apólice e condições gerais",
      step: "01"
    },
    {
      icon: Brain,
      title: "A IA analisa e compara",
      description: "Nossa inteligência artificial processa e identifica pontos críticos",
      step: "02"
    },
    {
      icon: FileText,
      title: "Geramos os relatórios técnicos",
      description: "3 relatórios automáticos: comparativo, técnico e sugestões",
      step: "03"
    },
    {
      icon: CheckCircle,
      title: "Você decide com base em dados",
      description: "Score objetivo e recomendações para tomada de decisão",
      step: "04"
    }
  ];

  return (
    <section id="como-funciona" className="py-20 section-bg">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Como Funciona
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Processo simples e automatizado para análises contratuais precisas
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Step Card */}
                <div className="card-premium p-8 text-center relative z-10 group hover:scale-105 transition-transform duration-300">
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-cta rounded-full flex items-center justify-center text-accent-foreground font-bold text-lg shadow-glow">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-300">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-primary mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>

                {/* Connection line for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-8 mb-8">
                    <div className="w-0.5 h-8 bg-border"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-up" style={{ animationDelay: '0.8s' }}>
          <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-card">
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            <span className="text-lg font-medium text-primary">
              Análise completa em menos de 5 minutos
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};