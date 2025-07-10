import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Shield, FileText, CheckCircle, Download, Plus, History, TrendingUp } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import AppLayout from '@/components/AppLayout';

const AnalysisDetail = () => {
  const { id } = useParams();

  // Mock data - in real app this would come from API
  const analysisData = {
    id: id || '0001',
    name: `Análise ${id || '0001'}`,
    status: 'Concluída',
    date: '03/07/2025',
    type: 'Contrato',
    metrics: {
      pdfs: 3,
      completion: 100,
      quality: 'A+'
    },
    reports: [
      { name: 'Análise Técnica das Condições Gerais', completed: true },
      { name: 'Sugestões de Ajustes Contratuais', completed: true },
      { name: 'Análise Técnica Comparativa', completed: true }
    ]
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Concluída':
        return 'bg-green-100 text-green-800 hover:bg-green-100';
      case 'Em análise':
        return 'bg-orange-100 text-orange-800 hover:bg-orange-100';
      default:
        return 'bg-gray-100 text-gray-800 hover:bg-gray-100';
    }
  };

  return (
    <AppLayout>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center gap-4">
            <Link to="/analises">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <h1 className="text-2xl font-heading font-bold">{analysisData.name}</h1>
          </div>
          <Badge 
            variant="secondary" 
            className={getStatusColor(analysisData.status)}
          >
            <CheckCircle className="h-4 w-4 mr-1" />
            {analysisData.status}
          </Badge>
        </div>

        {/* Main Content */}
        <div className="p-6 space-y-8 max-w-4xl mx-auto">
          {/* Success Section */}
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
              <Shield className="h-10 w-10 text-accent" />
            </div>
            
            <div className="space-y-4">
              <h2 className="text-3xl font-heading font-bold text-foreground">
                🎉 Análise Jurídica Concluída
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Sua análise técnica foi finalizada com sucesso. Os relatórios especializados estão 
                prontos para download e implementação.
              </p>
            </div>

            {/* Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <Card className="bg-accent/5 border-accent/20">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-6 w-6 text-accent" />
                  </div>
                  <div className="text-3xl font-bold text-accent mb-2">
                    {analysisData.metrics.pdfs}
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">
                    PDFs Técnicos
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {analysisData.metrics.completion}%
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">
                    Análise Completa
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-orange-50 border-orange-200">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-6 w-6 text-orange-600" />
                  </div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    {analysisData.metrics.quality}
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">
                    Qualidade Técnica
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Reports Section */}
          <Card>
            <CardHeader className="text-center pb-6">
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <FileText className="h-6 w-6 text-accent" />
                Relatórios Técnicos Disponíveis
              </CardTitle>
              <p className="text-muted-foreground">
                Acesse os PDFs detalhados com análise jurídica especializada, sugestões 
                de melhorias e comparações técnicas.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Reports List */}
              <div className="space-y-4">
                {analysisData.reports.map((report, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="font-medium text-foreground">{report.name}</span>
                  </div>
                ))}
              </div>

              {/* Main Action Button */}
              <Button className="w-full btn-accent py-4 text-lg font-semibold">
                <Download className="h-5 w-5 mr-2" />
                📄 Acessar Todos os PDFs
              </Button>

              {/* Secondary Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Link to="/nova-analise" className="flex-1">
                  <Button variant="outline" className="w-full">
                    <Plus className="h-4 w-4 mr-2" />
                    Nova Análise
                  </Button>
                </Link>
                <Button variant="outline" className="flex-1">
                  <History className="h-4 w-4 mr-2" />
                  Ver Histórico da Análise
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
};

export default AnalysisDetail;