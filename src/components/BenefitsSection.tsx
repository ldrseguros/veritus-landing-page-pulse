import { Clock, Target, FileCheck, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export const BenefitsSection = () => {
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setAnimatedScore(prev => {
          if (prev >= 87) {
            clearInterval(interval);
            return 87;
          }
          return prev + 1;
        });
      }, 20);
      
      return () => clearInterval(interval);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const benefits = [
    {
      icon: Clock,
      title: "80% menos tempo",
      subtitle: "de análise contratual",
      description: "De semanas para minutos na identificação de riscos críticos"
    },
    {
      icon: Target,
      title: "Score objetivo",
      subtitle: "escala 0 a 100",
      description: "Metodologia proprietária para avaliar risco contratual"
    },
    {
      icon: FileCheck,
      title: "3 relatórios prontos",
      subtitle: "técnico, comparativo e sugestões",
      description: "Documentação completa para tomada de decisão"
    },
    {
      icon: TrendingUp,
      title: "ROI comprovado",
      subtitle: "resultados mensuráveis",
      description: "Redução de custos e otimização de processos jurídicos"
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Benefícios <span className="text-gradient">Mensuráveis</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Resultados reais que transformam a eficiência da análise contratual
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Benefits Cards */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="card-premium p-6 group hover:shadow-hero transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-cta rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-primary mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-accent font-medium mb-2">
                      {benefit.subtitle}
                    </p>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Score Display */}
          <div className="animate-scale-in" style={{ animationDelay: '0.5s' }}>
            <div className="card-premium p-8 text-center bg-gradient-subtle">
              <h3 className="text-2xl font-semibold text-primary mb-8">
                Score de Eficiência VERITUS
              </h3>
              
              {/* Radial Chart */}
              <div className="relative w-48 h-48 mx-auto mb-8">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="35"
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="none"
                    className="text-muted"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="35"
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray={`${animatedScore * 2.2} 220`}
                    className="text-accent transition-all duration-1000"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold text-primary">{animatedScore}</span>
                  <span className="text-sm text-muted-foreground">Eficiência</span>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="p-3 bg-white/50 rounded-lg">
                  <div className="text-2xl font-bold text-accent">5min</div>
                  <div className="text-muted-foreground">Análise média</div>
                </div>
                <div className="p-3 bg-white/50 rounded-lg">
                  <div className="text-2xl font-bold text-accent">99%</div>
                  <div className="text-muted-foreground">Precisão</div>
                </div>
              </div>
            </div>

            {/* Client Testimonial */}
            <div className="card-premium p-6 mt-6 animate-fade-up" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-cta rounded-full flex items-center justify-center text-accent-foreground font-bold text-lg">
                  R
                </div>
                <div>
                  <p className="text-muted-foreground italic mb-2">
                    "O VERITUS reduziu nosso tempo de análise de contratos em 85%. 
                    Agora conseguimos revisar 10x mais contratos com a mesma equipe."
                  </p>
                  <div>
                    <div className="font-semibold text-primary">Roberto Silva</div>
                    <div className="text-sm text-muted-foreground">Director Jurídico, TechCorp</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};