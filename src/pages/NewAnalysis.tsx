import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Upload, MessageCircle, ArrowLeft, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import AppLayout from '@/components/AppLayout';

const NewAnalysis = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [documentType, setDocumentType] = useState<string>('');
  const [files, setFiles] = useState<File[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);

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
      handleFileValidation(newFiles);
    }
  };

  const handleFileValidation = (newFiles: File[]) => {
    const validFiles = newFiles.filter(file => {
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/jpeg', 'image/png'];
      const maxSize = 100 * 1024 * 1024; // 100MB
      
      if (!validTypes.includes(file.type) && !file.name.toLowerCase().match(/\.(pdf|doc|docx|jpg|jpeg|png)$/)) {
        toast({
          variant: "destructive",
          title: "Tipo de arquivo inválido",
          description: `${file.name} não é um tipo de arquivo suportado.`,
        });
        return false;
      }
      
      if (file.size > maxSize) {
        toast({
          variant: "destructive",
          title: "Arquivo muito grande",
          description: `${file.name} excede o limite de 100MB.`,
        });
        return false;
      }
      
      return true;
    });

    if (validFiles.length > 0) {
      setFiles(prev => [...prev, ...validFiles]);
      toast({
        title: "Arquivos adicionados",
        description: `${validFiles.length} arquivo(s) adicionado(s) com sucesso.`,
      });
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      handleFileValidation(newFiles);
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
    toast({
      title: "Arquivo removido",
      description: "Arquivo removido da lista.",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (files.length > 0 && documentType) {
      setUploading(true);
      
      // Simular upload e criação de nova análise
      try {
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simular delay de upload
        
        console.log('Análise criada:', { documentType, files });
        
        toast({
          title: "Análise iniciada com sucesso!",
          description: "Seus documentos estão sendo processados. Você será notificado quando a análise estiver pronta.",
        });
        
        navigate('/analises');
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Erro ao iniciar análise",
          description: "Tente novamente em alguns instantes.",
        });
      } finally {
        setUploading(false);
      }
    } else {
      toast({
        variant: "destructive",
        title: "Dados incompletos",
        description: "Selecione o tipo de documento e adicione pelo menos um arquivo.",
      });
    }
  };


  return (
    <AppLayout>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="flex items-center gap-4 p-6 border-b">
          <Link to="/dashboard">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4" />
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
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
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
                    PDF, DOC, DOCX, JPG, PNG até 100MB (múltiplos arquivos)
                  </p>
                </div>

                <input
                  type="file"
                  multiple
                  accept=".pdf,.doc,.docx,image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload">
                  <Button type="button" variant="outline" className="cursor-pointer">
                    <Upload className="h-4 w-4 mr-2" />
                    Selecionar Arquivos
                  </Button>
                </label>
              </div>
            </div>

            {/* Selected Files */}
            {files.length > 0 && (
              <div className="space-y-3">
                <h3 className="font-medium">Arquivos selecionados ({files.length}):</h3>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {files.map((file, index) => (
                    <div key={index} className="flex items-center justify-between bg-muted/50 p-3 rounded-lg">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{file.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {(file.size / (1024 * 1024)).toFixed(2)} MB
                        </p>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFile(index)}
                        className="ml-2 h-8 w-8 p-0 hover:bg-destructive/10 hover:text-destructive"
                      >
                        <X className="h-4 w-4" />
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
                disabled={files.length === 0 || !documentType || uploading}
              >
                {uploading ? (
                  <>
                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Processando...
                  </>
                ) : (
                  'Iniciar Análise'
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </AppLayout>
  );
};

export default NewAnalysis;