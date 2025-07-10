import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Camera, Save } from 'lucide-react';
import AppLayout from '@/components/AppLayout';

const Settings = () => {
  const [accountInfo, setAccountInfo] = useState({
    fullName: 'Guilherme Lima Albuquerque',
    email: 'guilimalb@gmail.com',
    profile: 'Admin',
    companyName: 'Empresa Exemplo',
    cnpj: '00.000.000/0000-00',
    sector: 'Tecnologia',
    companySize: 'Média'
  });

  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: ''
  });

  const handleAccountUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar atualização de conta
    console.log('Account update:', accountInfo);
  };

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar mudança de senha
    console.log('Password change:', passwords);
  };

  return (
    <AppLayout>
      <div className="p-6 space-y-6 max-w-4xl">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <Avatar className="w-20 h-20">
              <AvatarImage src="" alt="Profile" />
              <AvatarFallback className="bg-accent/20 text-accent text-2xl">G</AvatarFallback>
            </Avatar>
            <button className="absolute bottom-0 right-0 bg-accent text-white p-2 rounded-full hover:bg-accent/90 transition-colors">
              <Camera className="h-4 w-4" />
            </button>
          </div>
          <div>
            <h1 className="text-3xl font-heading font-bold">Foto de Perfil</h1>
          </div>
        </div>

        {/* Account Information */}
        <Card>
          <CardHeader>
            <CardTitle>Informações da Conta</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAccountUpdate} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Nome Completo</Label>
                  <Input
                    id="fullName"
                    value={accountInfo.fullName}
                    onChange={(e) => setAccountInfo({...accountInfo, fullName: e.target.value})}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="profile">Perfil</Label>
                  <Select 
                    value={accountInfo.profile} 
                    onValueChange={(value) => setAccountInfo({...accountInfo, profile: value})}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Admin">Admin</SelectItem>
                      <SelectItem value="Analista">Analista</SelectItem>
                      <SelectItem value="Usuario">Usuário</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={accountInfo.email}
                    onChange={(e) => setAccountInfo({...accountInfo, email: e.target.value})}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="companyName">Nome da Empresa</Label>
                  <Input
                    id="companyName"
                    value={accountInfo.companyName}
                    onChange={(e) => setAccountInfo({...accountInfo, companyName: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cnpj">CNPJ</Label>
                  <Input
                    id="cnpj"
                    value={accountInfo.cnpj}
                    onChange={(e) => setAccountInfo({...accountInfo, cnpj: e.target.value})}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="sector">Setor</Label>
                  <Input
                    id="sector"
                    value={accountInfo.sector}
                    onChange={(e) => setAccountInfo({...accountInfo, sector: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="companySize">Porte da Empresa</Label>
                <Select 
                  value={accountInfo.companySize} 
                  onValueChange={(value) => setAccountInfo({...accountInfo, companySize: value})}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Micro">Microempresa</SelectItem>
                    <SelectItem value="Pequena">Pequena</SelectItem>
                    <SelectItem value="Média">Média</SelectItem>
                    <SelectItem value="Grande">Grande</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="btn-accent">
                <Save className="h-4 w-4 mr-2" />
                Salvar Alterações
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Segurança da Conta</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlePasswordChange} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Senha atual</Label>
                <Input
                  id="currentPassword"
                  type="password"
                  value={passwords.current}
                  onChange={(e) => setPasswords({...passwords, current: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="newPassword">Nova senha</Label>
                  <Input
                    id="newPassword"
                    type="password"
                    value={passwords.new}
                    onChange={(e) => setPasswords({...passwords, new: e.target.value})}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirmar nova senha</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={passwords.confirm}
                    onChange={(e) => setPasswords({...passwords, confirm: e.target.value})}
                  />
                </div>
              </div>

              <Button type="submit" className="btn-accent">
                Alterar Senha
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Settings;