import { NavLink, useLocation } from 'react-router-dom';
import { LayoutDashboard, FileText, Settings, Plus, LogOut } from 'lucide-react';

const AppSidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Análises', path: '/analises', icon: FileText },
    { name: 'Configurações', path: '/configuracoes', icon: Settings }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w-64 bg-card border-r border-border h-full flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center mb-4">
          <img 
            src="/lovable-uploads/d3ebc4e9-a69a-48c5-adcb-85c46b816e10.png" 
            alt="VERITUS" 
            className="h-10 mr-3"
          />
          <span className="text-xl font-heading font-bold text-primary">VERITUS</span>
        </div>
        
        {/* User Info */}
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
            <span className="text-accent font-bold">G</span>
          </div>
          <div className="ml-3">
            <p className="font-medium text-sm">Guilherme Lima Albuquerque</p>
            <p className="text-xs text-muted-foreground">guilimalb@gmail.com</p>
            <span className="bg-accent/20 text-accent text-xs px-2 py-1 rounded-full">ADMIN</span>
          </div>
        </div>

        {/* New Analysis Button */}
        <NavLink to="/nova-analise">
          <button className="w-full bg-accent hover:bg-accent/90 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
            <Plus className="h-5 w-5" />
            Fazer uma nova análise
          </button>
        </NavLink>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive(item.path)
                    ? 'bg-accent/10 text-accent border border-accent/20'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-border">
        <NavLink
          to="/login"
          className="flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
        >
          <LogOut className="h-5 w-5" />
          Sair
        </NavLink>
      </div>
    </div>
  );
};

export default AppSidebar;