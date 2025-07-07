import { TrendingUp, Target, Zap, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const InvestorsSection = () => {
  const investmentHighlights = [
    {
      icon: TrendingUp,
      title: "TAM Endereçável",
      value: "R$ 47,2B",
      description: "Mercado de seguros e legaltech em crescimento acelerado"
    },
    {
      icon: Target,
      title: "Projeções Y5",
      value: "R$ 45M",
      description: "Receita recorrente com margem EBITDA de 35%"
    },
    {
      icon: Zap,
      title: "Escalabilidade",
      value: "LTV/CAC 12:1",
      description: "Modelo de negócio altamente escalável e defensível"
    },
    {
      icon: Globe,
      title: "Expansão",
      value: "LATAM 2026",
      description: "Mercados internacionais com oportunidades similares"
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6 text-shadow-lg">
            Para <span className="text-accent">Investidores</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto text-shadow">
            Estamos abertos a parcerias e aportes estratégicos para acelerar nosso crescimento
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Investment Highlights */}
          <div className="space-y-6 animate-fade-up">
            {investmentHighlights.map((highlight, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                    <highlight.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-white">{highlight.title}</h3>
                      <span className="text-2xl font-bold text-accent">{highlight.value}</span>
                    </div>
                    <p className="text-white/80 text-sm">{highlight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Investment Proposition */}
          <div className="animate-scale-in" style={{ animationDelay: '0.5s' }}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-heading font-bold text-white mb-6 text-shadow">
                Oportunidade de Investimento
              </h3>
              
              <div className="space-y-6">
                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-accent mb-1">Série A</div>
                    <div className="text-white/80 text-sm">Rodada atual</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-accent mb-1">R$ 5M</div>
                    <div className="text-white/80 text-sm">Objetivo da rodada</div>
                  </div>
                </div>

                {/* Use of Funds */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Uso dos Recursos</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-white/90">
                      <span>Desenvolvimento de produto</span>
                      <span className="text-accent">40%</span>
                    </div>
                    <div className="flex justify-between text-white/90">
                      <span>Expansão comercial</span>
                      <span className="text-accent">35%</span>
                    </div>
                    <div className="flex justify-between text-white/90">
                      <span>Contratações key-hires</span>
                      <span className="text-accent">20%</span>
                    </div>
                    <div className="flex justify-between text-white/90">
                      <span>Marketing e growth</span>
                      <span className="text-accent">5%</span>
                    </div>
                  </div>
                </div>

                {/* Competitive Advantages */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Vantagens Competitivas</h4>
                  <ul className="space-y-2 text-sm text-white/90">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span>Propriedade intelectual em algoritmos de análise</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span>Base de dados proprietária de contratos</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span>Network effect com crescimento de usuários</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span>Switching costs elevados para clientes</span>
                    </li>
                  </ul>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3 pt-4">
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3">
                    Solicitar Data Room
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm font-semibold py-3"
                  >
                    Conectar-se com o Fundador
                  </Button>
                </div>

                {/* Contact Info */}
                <div className="text-center pt-4 border-t border-white/20">
                  <p className="text-white/80 text-sm">
                    Para informações sobre investimento:
                  </p>
                  <p className="text-accent font-medium">
                    investors@veritus.com.br
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team & Advisors */}
        <div className="mt-20 text-center animate-fade-up" style={{ animationDelay: '0.8s' }}>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-heading font-bold text-white mb-6">
              Time & Advisors de Primeira Linha
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-cta rounded-full flex items-center justify-center mx-auto mb-4 text-accent-foreground font-bold text-2xl">
                  RA
                </div>
                <h4 className="text-white font-semibold">Rafael Almeida</h4>
                <p className="text-white/80 text-sm">CEO & Co-founder</p>
                <p className="text-white/60 text-xs mt-1">Ex-McKinsey, Stanford MBA</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-cta rounded-full flex items-center justify-center mx-auto mb-4 text-accent-foreground font-bold text-2xl">
                  MS
                </div>
                <h4 className="text-white font-semibold">Marina Silva</h4>
                <p className="text-white/80 text-sm">CTO & Co-founder</p>
                <p className="text-white/60 text-xs mt-1">Ex-Google, MIT PhD</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-cta rounded-full flex items-center justify-center mx-auto mb-4 text-accent-foreground font-bold text-2xl">
                  PC
                </div>
                <h4 className="text-white font-semibold">Paulo Carvalho</h4>
                <p className="text-white/80 text-sm">Chief Legal Officer</p>
                <p className="text-white/60 text-xs mt-1">Ex-Machado Meyer, USP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};