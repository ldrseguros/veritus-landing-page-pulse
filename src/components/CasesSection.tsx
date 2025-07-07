import { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, TrendingDown, Shield } from 'lucide-react';

export const CasesSection = () => {
  const [currentCase, setCurrentCase] = useState(0);

  const cases = [
    {
      company: "Contabilidade Alfa",
      industry: "Contabilidade",
      challenge: "Análise manual de 200+ contratos/mês consumia 80h da equipe jurídica",
      solution: "Implementação do VERITUS para automação completa do processo",
      results: {
        timeReduction: "75%",
        risksIdentified: "23",
        costSaving: "R$ 45K/mês"
      },
      testimonial: "O VERITUS transformou nossa operação. Conseguimos identificar riscos que passavam despercebidos na análise manual.",
      avatar: "CA"
    },
    {
      company: "Escritório Jurídico XYZ",
      industry: "Advocacia Empresarial",
      challenge: "Dificuldade em padronizar análises e garantir qualidade consistente",
      solution: "VERITUS como ferramenta de apoio para advogados sêniores",
      results: {
        timeReduction: "60%",
        risksIdentified: "45",
        costSaving: "R$ 78K/mês"
      },
      testimonial: "A precisão e consistência do VERITUS elevou significativamente a qualidade dos nossos serviços.",
      avatar: "XYZ"
    }
  ];

  const nextCase = () => {
    setCurrentCase((prev) => (prev + 1) % cases.length);
  };

  const prevCase = () => {
    setCurrentCase((prev) => (prev - 1 + cases.length) % cases.length);
  };

  const currentCaseData = cases[currentCase];

  return (
    <section id="cases" className="py-20 section-bg">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Cases de <span className="text-gradient">Sucesso</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Resultados reais de empresas que transformaram seus processos com VERITUS
          </p>
        </div>

        {/* Case Study Carousel */}
        <div className="max-w-6xl mx-auto">
          <div className="card-premium p-8 lg:p-12 animate-scale-in">
            {/* Navigation */}
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-cta rounded-full flex items-center justify-center text-accent-foreground font-bold text-xl">
                  {currentCaseData.avatar}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-primary">{currentCaseData.company}</h3>
                  <p className="text-muted-foreground">{currentCaseData.industry}</p>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button 
                  onClick={prevCase}
                  className="w-10 h-10 bg-muted hover:bg-accent hover:text-accent-foreground rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextCase}
                  className="w-10 h-10 bg-muted hover:bg-accent hover:text-accent-foreground rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Case Details */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-3">Desafio</h4>
                  <p className="text-muted-foreground">{currentCaseData.challenge}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-3">Solução</h4>
                  <p className="text-muted-foreground">{currentCaseData.solution}</p>
                </div>

                {/* Testimonial */}
                <div className="bg-gradient-subtle p-6 rounded-xl border-l-4 border-accent">
                  <p className="text-primary italic mb-3">"{currentCaseData.testimonial}"</p>
                  <div className="text-sm text-muted-foreground">
                    — Diretor Jurídico, {currentCaseData.company}
                  </div>
                </div>
              </div>

              {/* Results Metrics */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-primary mb-6">Resultados Obtidos</h4>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-white/50 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">{currentCaseData.results.timeReduction}</div>
                      <div className="text-sm text-muted-foreground">Redução no tempo de análise</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-white/50 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">{currentCaseData.results.risksIdentified}</div>
                      <div className="text-sm text-muted-foreground">Riscos críticos identificados</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-white/50 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      <TrendingDown className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">{currentCaseData.results.costSaving}</div>
                      <div className="text-sm text-muted-foreground">Economia mensal</div>
                    </div>
                  </div>
                </div>

                {/* Before/After Comparison */}
                <div className="mt-8 p-6 bg-gradient-subtle rounded-xl">
                  <h5 className="font-semibold text-primary mb-4">Antes vs Depois</h5>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-muted-foreground mb-2">Antes</div>
                      <div className="space-y-1">
                        <div>• Análise manual</div>
                        <div>• 80h/mês equipe jurídica</div>
                        <div>• Riscos não identificados</div>
                      </div>
                    </div>
                    <div>
                      <div className="text-accent font-medium mb-2">Depois</div>
                      <div className="space-y-1">
                        <div>• Análise automatizada</div>
                        <div>• 20h/mês equipe jurídica</div>
                        <div>• 100% riscos mapeados</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Navigation Dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {cases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCase(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentCase ? 'bg-accent' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};