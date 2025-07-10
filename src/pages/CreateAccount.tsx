import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Shield, User, Building2 } from 'lucide-react';

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    profile: '',
    companyName: '',
    cnpj: '',
    sector: '',
    companySize: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular criação de conta
    console.log('Account creation data:', formData);
    window.location.href = '/login';
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-8 w-8 text-primary mr-2" />
            <span className="text-2xl font-heading font-bold text-primary">VERITUS</span>
          </div>
          <h1 className="text-3xl font-heading font-bold text-foreground mb-2">
            Criar Conta
          </h1>
          <p className="text-muted-foreground">
            Comece sua jornada na análise inteligente de documentos
          </p>
        </div>

        {/* Create Account Form */}
        <div className="bg-card rounded-lg shadow-lg p-6 border">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <div className="flex items-center mb-4">
                <User className="h-5 w-5 text-accent mr-2" />
                <h3 className="text-lg font-semibold text-accent">Informações Pessoais</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Nome Completo</Label>
                  <Input
                    id="fullName"
                    placeholder="Seu nome completo"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="password">Senha</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Mínimo 6 caracteres"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    required
                    minLength={6}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="profile">Perfil</Label>
                  <Select onValueChange={(value) => handleInputChange('profile', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione seu perfil" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="analista">Analista</SelectItem>
                      <SelectItem value="usuario">Usuário</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Company Information */}
            <div className="space-y-4">
              <div className="flex items-center mb-4">
                <Building2 className="h-5 w-5 text-accent mr-2" />
                <h3 className="text-lg font-semibold text-accent">
                  Informações da Empresa <span className="text-sm text-red-500">(Obrigatório)</span>
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="companyName">Nome da Empresa *</Label>
                  <Input
                    id="companyName"
                    placeholder="Nome da sua empresa"
                    value={formData.companyName}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="cnpj">CNPJ *</Label>
                  <Input
                    id="cnpj"
                    placeholder="00.000.000/0000-00"
                    value={formData.cnpj}
                    onChange={(e) => handleInputChange('cnpj', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="sector">Setor *</Label>
                  <Input
                    id="sector"
                    placeholder="Ex: Tecnologia, Saúde"
                    value={formData.sector}
                    onChange={(e) => handleInputChange('sector', e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="companySize">Porte da Empresa *</Label>
                  <Select onValueChange={(value) => handleInputChange('companySize', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o porte" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="micro">Microempresa</SelectItem>
                      <SelectItem value="pequena">Pequena</SelectItem>
                      <SelectItem value="media">Média</SelectItem>
                      <SelectItem value="grande">Grande</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full btn-accent">
              Criar Conta
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Já tem uma conta?{' '}
              <Link 
                to="/login" 
                className="text-accent hover:text-accent/80 font-medium"
              >
                Fazer login
              </Link>
            </p>
          </div>
        </div>

        <div className="text-center mt-6">
          <Link 
            to="/" 
            className="text-sm text-muted-foreground hover:text-primary"
          >
            ← Voltar para página inicial
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;