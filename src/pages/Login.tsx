import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, Shield } from 'lucide-react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular login - em produção conectar com backend
    if (email && password) {
      window.location.href = '/dashboard';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-8 w-8 text-primary mr-2" />
            <span className="text-2xl font-heading font-bold text-primary">VERITUS</span>
          </div>
          <h1 className="text-3xl font-heading font-bold text-foreground mb-2">
            Entrar na Plataforma
          </h1>
          <p className="text-muted-foreground">
            Acesse sua conta para continuar a análise de documentos
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-card rounded-lg shadow-lg p-6 border">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            <Button type="submit" className="w-full btn-accent">
              Entrar
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Não tem uma conta?{' '}
              <Link 
                to="/criar-conta" 
                className="text-accent hover:text-accent/80 font-medium"
              >
                Criar conta
              </Link>
            </p>
          </div>

          {/* Demo Account */}
          <div className="mt-6 p-4 bg-muted rounded-lg">
            <h3 className="font-medium text-sm mb-2">Conta de Demonstração:</h3>
            <p className="text-xs text-muted-foreground mb-1">
              <strong>Email:</strong> admin@veritus.com
            </p>
            <p className="text-xs text-muted-foreground">
              <strong>Senha:</strong> admin123
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

export default Login;