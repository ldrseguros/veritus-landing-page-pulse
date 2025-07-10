import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Eye, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import AppLayout from '@/components/AppLayout';

const Analyses = () => {
  // Dados mock para demonstração
  const analyses = [
    {
      id: 1,
      name: 'Contrato X',
      date: '03/07/2025',
      status: 'Concluída',
      type: 'Contrato'
    },
    {
      id: 2,
      name: 'Apólice Y',
      date: '01/07/2025',
      status: 'Em análise',
      type: 'Apólice'
    }
  ];

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
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-heading font-bold">Análises Realizadas</h1>
          <Link to="/nova-analise">
            <Button className="btn-accent">
              <Plus className="h-5 w-5 mr-2" />
              Nova Análise
            </Button>
          </Link>
        </div>

        {/* Analyses List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {analyses.map((analysis) => (
            <Card key={analysis.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-accent" />
                    {analysis.name}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Data:</span>
                    <span>{analysis.date}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Status:</span>
                    <Badge 
                      variant="secondary" 
                      className={getStatusColor(analysis.status)}
                    >
                      {analysis.status}
                    </Badge>
                  </div>

                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full mt-4 border-accent text-accent hover:bg-accent hover:text-white"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    Visualizar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State - quando não há análises */}
        {analyses.length === 0 && (
          <Card>
            <CardContent className="text-center py-12">
              <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Nenhuma análise encontrada</h3>
              <p className="text-muted-foreground mb-6">
                Comece criando sua primeira análise de documentos
              </p>
              <Button className="btn-accent">
                <Plus className="h-5 w-5 mr-2" />
                Fazer primeira análise
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </AppLayout>
  );
};

export default Analyses;