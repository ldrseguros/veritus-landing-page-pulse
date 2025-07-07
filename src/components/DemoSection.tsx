import { useState } from 'react';
import { Upload, FileText, Download, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const DemoSection = () => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    simulateProcessing();
  };

  const handleFileSelect = () => {
    simulateProcessing();
  };

  const simulateProcessing = () => {
    setIsProcessing(true);
    setShowResults(false);
    
    setTimeout(() => {
      setIsProcessing(false);
      setShowResults(true);
    }, 3000);
  };

  const resetDemo = () => {
    setShowResults(false);
    setIsProcessing(false);
  };

  return (
    <section id="demo" className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Demo <span className="text-gradient">Ao Vivo</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Teste o VERITUS agora mesmo. Envie um contrato e veja a análise em tempo real.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {!showResults ? (
            <div className="card-premium p-8 animate-scale-in">
              {!isProcessing ? (
                <>
                  {/* Upload Area */}
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`border-2 border-dashed rounded-xl p-12 text-center transition-all duration-300 ${
                      isDragOver
                        ? 'border-accent bg-accent/5 scale-105'
                        : 'border-border hover:border-accent/50'
                    }`}
                  >
                    <Upload className="w-16 h-16 text-muted-foreground mx-auto mb-6" />
                    <h3 className="text-2xl font-semibold text-primary mb-4">
                      Envie um contrato exemplo
                    </h3>
                    <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                      Arraste e solte seu arquivo PDF aqui ou clique para selecionar. 
                      Veja o relatório completo em 5 segundos.
                    </p>
                    
                    <Button onClick={handleFileSelect} className="btn-accent px-8 py-3">
                      Selecionar Arquivo PDF
                    </Button>
                    
                    <div className="flex items-center justify-center space-x-4 mt-6 text-sm text-muted-foreground">
                      <span>📄 PDF</span>
                      <span>•</span>
                      <span>📊 Análise instantânea</span>
                      <span>•</span>
                      <span>🔒 100% seguro</span>
                    </div>
                  </div>

                  {/* Demo Examples */}
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button
                      onClick={simulateProcessing}
                      className="p-4 bg-gradient-subtle rounded-lg hover:shadow-card transition-all duration-200 text-left"
                    >
                      <FileText className="w-8 h-8 text-accent mb-2" />
                      <div className="font-medium text-primary">Contrato de Seguro</div>
                      <div className="text-sm text-muted-foreground">Exemplo de apólice empresarial</div>
                    </button>
                    
                    <button
                      onClick={simulateProcessing}
                      className="p-4 bg-gradient-subtle rounded-lg hover:shadow-card transition-all duration-200 text-left"
                    >
                      <FileText className="w-8 h-8 text-accent mb-2" />
                      <div className="font-medium text-primary">Contrato de Prestação</div>
                      <div className="text-sm text-muted-foreground">Serviços profissionais</div>
                    </button>
                    
                    <button
                      onClick={simulateProcessing}
                      className="p-4 bg-gradient-subtle rounded-lg hover:shadow-card transition-all duration-200 text-left"
                    >
                      <FileText className="w-8 h-8 text-accent mb-2" />
                      <div className="font-medium text-primary">Acordo Comercial</div>
                      <div className="text-sm text-muted-foreground">Parceria estratégica</div>
                    </button>
                  </div>
                </>
              ) : (
                /* Processing State */
                <div className="text-center py-12">
                  <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">
                    Analisando contrato...
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Nossa IA está processando o documento e identificando pontos críticos
                  </p>
                  
                  {/* Progress Steps */}
                  <div className="max-w-md mx-auto space-y-3">
                    <div className="flex items-center space-x-3 text-sm">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-primary">Documento carregado</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-primary">Texto extraído e normalizado</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <div className="w-5 h-5 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-primary">Análise de cláusulas em andamento...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Results Display */
            <div className="card-premium p-8 animate-scale-in">
              <div className="text-center mb-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-primary mb-2">
                  Análise Concluída!
                </h3>
                <p className="text-muted-foreground">
                  Relatório completo gerado em 3,2 segundos
                </p>
              </div>

              {/* Results Summary */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-gradient-subtle rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-2">72</div>
                  <div className="text-muted-foreground">Score de Risco</div>
                  <div className="text-sm text-accent mt-1">Risco moderado</div>
                </div>
                
                <div className="text-center p-6 bg-gradient-subtle rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-2">3</div>
                  <div className="text-muted-foreground">Cláusulas Críticas</div>
                  <div className="text-sm text-red-500 mt-1">Revisão necessária</div>
                </div>
                
                <div className="text-center p-6 bg-gradient-subtle rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-2">8</div>
                  <div className="text-muted-foreground">Sugestões</div>
                  <div className="text-sm text-accent mt-1">Melhorias identificadas</div>
                </div>
              </div>

              {/* Critical Issues */}
              <div className="space-y-3 mb-8">
                <h4 className="font-semibold text-primary">Pontos Críticos Identificados:</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-sm">Cláusula de limitação de responsabilidade excessivamente restritiva</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm">Prazo de carência não especificado para sinistros</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm">Cobertura geográfica limitada sem justificativa clara</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-accent flex-1">
                  <Download className="w-4 h-4 mr-2" />
                  Baixar Relatório Completo (PDF)
                </Button>
                <Button variant="outline" onClick={resetDemo} className="flex-1">
                  Testar Outro Contrato
                </Button>
              </div>

              <div className="mt-6 p-4 bg-gradient-subtle rounded-lg text-center">
                <p className="text-sm text-muted-foreground">
                  💡 Esta é uma demonstração. O relatório real incluiria análise detalhada, 
                  comparações com melhores práticas e sugestões específicas de melhorias.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};