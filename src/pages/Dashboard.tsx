import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, FileText, Activity, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import AppLayout from '@/components/AppLayout';

const Dashboard = () => {
  return (
    <AppLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-heading font-bold">Ações Rápidas</h1>
          <Link to="/nova-analise">
            <Button className="btn-accent">
              <Plus className="h-5 w-5 mr-2" />
              Nova Análise
            </Button>
          </Link>
        </div>

        <p className="text-muted-foreground">
          Acesse rapidamente as principais funcionalidades
        </p>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/nova-analise">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plus className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Realizar uma Nova Análise</h3>
              </CardContent>
            </Card>
          </Link>

          <Link to="/analises">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Ver Análises</h3>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                <FileText className="h-4 w-4 inline mr-2" />
                Total de Documentos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-accent">0</div>
              <p className="text-sm text-muted-foreground">Documentos carregados</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                <TrendingUp className="h-4 w-4 inline mr-2" />
                Total de Análises Realizadas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-accent">0</div>
              <p className="text-sm text-muted-foreground">Análises feitas</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                <Activity className="h-4 w-4 inline mr-2" />
                Atividade Recente
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Nenhuma atividade recente</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Documents & Analyses */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Documentos Recentes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center py-8">
                Nenhum documento recente
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Análises Recentes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center py-8">
                Nenhuma análise recente
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
};

export default Dashboard;