import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload, FileText, CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import AppLayout from '@/components/AppLayout';

const NewAnalysis = () => {
  const [files, setFiles] = useState<{
    contract: File | null;
    policy: File | null;
    conditions: File | null;
  }>({
    contract: null,
    policy: null,
    conditions: null
  });

  const handleFileUpload = (type: 'contract' | 'policy' | 'conditions', file: File) => {
    setFiles(prev => ({ ...prev, [type]: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular envio para análise
    console.log('Files for analysis:', files);
    // Redirecionar para análises
    window.location.href = '/analises';
  };

  const FileUploadCard = ({ 
    type, 
    title, 
    description, 
    file 
  }: {
    type: 'contract' | 'policy' | 'conditions';
    title: string;
    description: string;
    file: File | null;
  }) => (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="text-center">
          <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
            {file ? (
              <CheckCircle className="h-8 w-8 text-green-600" />
            ) : (
              <Upload className="h-8 w-8 text-accent" />
            )}
          </div>
          
          <h3 className="font-semibold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
          
          {file ? (
            <div className="space-y-2">
              <p className="text-sm font-medium text-green-600">
                ✓ {file.name}
              </p>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => handleFileUpload(type, file)}
              >
                Alterar arquivo
              </Button>
            </div>
          ) : (
            <Label htmlFor={`file-${type}`} className="cursor-pointer">
              <Button variant="outline" asChild>
                <span>Selecionar arquivo</span>
              </Button>
              <Input
                id={`file-${type}`}
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleFileUpload(type, file);
                }}
              />
            </Label>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <AppLayout>
      <div className="p-6 space-y-6 max-w-4xl">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Link to="/dashboard">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar
            </Button>
          </Link>
          <h1 className="text-3xl font-heading font-bold">Nova Análise</h1>
        </div>

        <p className="text-muted-foreground mb-8">
          Faça upload dos documentos para análise automatizada. O sistema irá processar e comparar os conteúdos.
        </p>

        {/* Upload Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* File Upload Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FileUploadCard
              type="contract"
              title="Contrato"
              description="Documento principal do contrato"
              file={files.contract}
            />
            
            <FileUploadCard
              type="policy"
              title="Apólice"
              description="Apólice de seguro relacionada"
              file={files.policy}
            />
            
            <FileUploadCard
              type="conditions"
              title="Condições"
              description="Condições gerais e específicas"
              file={files.conditions}
            />
          </div>

          {/* Analysis Process Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-accent" />
                Processo de Análise
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                <div className="space-y-2">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-accent font-bold">1</span>
                  </div>
                  <p className="text-sm">Upload dos documentos</p>
                </div>
                
                <div className="space-y-2">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-accent font-bold">2</span>
                  </div>
                  <p className="text-sm">IA processa e compara</p>
                </div>
                
                <div className="space-y-2">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-accent font-bold">3</span>
                  </div>
                  <p className="text-sm">Geração de 3 relatórios</p>
                </div>
                
                <div className="space-y-2">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-accent font-bold">4</span>
                  </div>
                  <p className="text-sm">Decisão orientada</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex justify-center">
            <Button 
              type="submit" 
              className="btn-accent px-8 py-3 text-lg"
              disabled={!files.contract && !files.policy && !files.conditions}
            >
              Iniciar Análise
            </Button>
          </div>
        </form>
      </div>
    </AppLayout>
  );
};

export default NewAnalysis;