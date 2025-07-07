import { DollarSign, TrendingUp, Users, Zap } from 'lucide-react';

export const MarketOpportunitySection = () => {
  const marketMetrics = [
    {
      icon: DollarSign,
      value: "R$ 47,2B",
      label: "TAM do mercado",
      description: "Seguros e legaltech no Brasil"
    },
    {
      icon: Users,
      value: "2.500+",
      label: "Contratos/mês",
      description: "Volume médio por empresa"
    },
    {
      icon: TrendingUp,
      value: "300%",
      label: "Redução de custos",
      description: "VERITUS vs análise manual"
    },
    {
      icon: Zap,
      value: "5x",
      label: "Velocidade",
      description: "Mais rápido que concorrentes"
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6 text-shadow-lg">
            Por que <span className="text-accent">agora</span>?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto text-shadow">
            O momento ideal para revolucionar a análise contratual
          </p>
        </div>

        {/* Market Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {marketMetrics.map((metric, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <metric.icon className="w-6 h-6 text-accent" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
              <div className="text-accent font-semibold mb-1">{metric.label}</div>
              <div className="text-white/70 text-sm">{metric.description}</div>
            </div>
          ))}
        </div>

        {/* Value Proposition */}
        <div className="text-center animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-white mb-4 text-shadow">
              "VERITUS resolve uma dor invisível, com precisão visível."
            </h3>
            <p className="text-white/90 text-lg leading-relaxed text-shadow">
              Enquanto empresas gastam semanas analisando contratos manualmente, 
              perdendo oportunidades e assumindo riscos desnecessários, 
              o VERITUS entrega análises precisas em minutos.
            </p>
          </div>
        </div>

        {/* Growth Projection */}
        <div className="mt-16 grid lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <h4 className="text-xl font-semibold text-white mb-4">Mercado Endereçável</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-white/80">SAM (Brasil)</span>
                <span className="text-accent font-semibold">R$ 4,7B</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/80">SOM (Foco inicial)</span>
                <span className="text-accent font-semibold">R$ 470M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/80">Target Y1</span>
                <span className="text-accent font-semibold">R$ 2,3M</span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-fade-up" style={{ animationDelay: '0.7s' }}>
            <h4 className="text-xl font-semibold text-white mb-4">Projeção 5 Anos</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-white/80">Receita Y5</span>
                <span className="text-accent font-semibold">R$ 45M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/80">Clientes</span>
                <span className="text-accent font-semibold">500+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/80">EBITDA Margin</span>
                <span className="text-accent font-semibold">35%</span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-fade-up" style={{ animationDelay: '0.8s' }}>
            <h4 className="text-xl font-semibold text-white mb-4">Escalabilidade</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-white/80">LTV/CAC</span>
                <span className="text-accent font-semibold">12:1</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/80">Churn Rate</span>
                <span className="text-accent font-semibold">&lt; 5%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/80">Gross Margin</span>
                <span className="text-accent font-semibold">85%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};