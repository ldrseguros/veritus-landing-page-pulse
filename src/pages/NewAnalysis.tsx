import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Upload, MessageCircle, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import AppLayout from '@/components/AppLayout';

const NewAnalysis = () => {
  const navigate = useNavigate();
  const [documentType, setDocumentType] = useState<string>('');
  const [files, setFiles] = useState<File[]>([]);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const newFiles = Array.from(e.dataTransfer.files);
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (files.length > 0 && documentType) {
      // Simular criação de nova análise
      console.log('Análise criada:', { documentType, files });
      navigate('/analises');
    }
  };


  return (
    <AppLayout>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="flex items-center gap-4 p-6 border-b">
          <Link to="/dashboard">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Análise 0004
            </Button>
          </Link>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center p-8 space-y-8 max-w-2xl mx-auto">
          {/* Chat Icon */}
          <div className="w-16 h-16 bg-muted/30 rounded-full flex items-center justify-center">
            <MessageCircle className="h-8 w-8 text-muted-foreground" />
          </div>

          {/* Title */}
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold text-foreground">Pronto para Análise</h1>
            <p className="text-muted-foreground">
              Envie seus documentos abaixo para iniciar uma análise jurídica completa.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full space-y-6">
            {/* Document Type Selection */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-center">Selecione o Tipo de Documento</h2>
              <p className="text-sm text-muted-foreground text-center">
                Escolha a categoria que melhor descreve seu documento
              </p>
              
              <Select value={documentType} onValueChange={setDocumentType}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Contrato" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="contrato">Contrato</SelectItem>
                  <SelectItem value="apolice">Apólice</SelectItem>
                  <SelectItem value="condicoes-gerais">Condições Gerais</SelectItem>
                  <SelectItem value="outros">Outros</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* File Upload Area */}
            <div 
              className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
                dragActive ? 'border-primary bg-primary/5' : 'border-muted-foreground/25'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Upload className="h-6 w-6 text-primary" />
                </div>
                
                <div className="space-y-2">
                  <p className="text-base font-medium">
                    Arraste documentos ou clique para selecionar
                  </p>
                  <p className="text-sm text-muted-foreground">
                    PDF, DOC, DOCX até 100MB (múltiplos arquivos)
                  </p>
                </div>

                <input
                  type="file"
                  multiple
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileSelect}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload">
                  <Button type="button" variant="outline" className="mt-4">
                    Selecionar Arquivos
                  </Button>
                </label>
              </div>
            </div>

            {/* Selected Files */}
            {files.length > 0 && (
              <div className="space-y-2">
                <h3 className="font-medium">Arquivos selecionados:</h3>
                <div className="space-y-1">
                  {files.map((file, index) => (
                    <div key={index} className="flex items-center justify-between bg-muted/50 p-2 rounded">
                      <span className="text-sm">{file.name}</span>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => setFiles(files.filter((_, i) => i !== index))}
                      >
                        ×
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <Button 
                type="submit" 
                className="btn-accent px-8 py-3"
                disabled={files.length === 0 || !documentType}
              >
                Iniciar Análise
              </Button>
            </div>
          </form>
        </div>
      </div>
    </AppLayout>
  );
};

export default NewAnalysis;