import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">V</span>
              </div>
              <span className="text-3xl font-heading font-bold">VERITUS</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md leading-relaxed">
              Automatizamos a análise técnica de contratos e apólices com inteligência artificial, 
              entregando transparência que protege e precisão que decide.
            </p>
            <div className="flex items-center space-x-2 text-accent">
              <Mail className="w-4 h-4" />
              <span>fabricadeempresass@gmail.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#como-funciona" className="text-primary-foreground/80 hover:text-accent transition-colors duration-200">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#beneficios" className="text-primary-foreground/80 hover:text-accent transition-colors duration-200">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#seguranca" className="text-primary-foreground/80 hover:text-accent transition-colors duration-200">
                  Segurança
                </a>
              </li>
              <li>
                <a href="#contato" className="text-primary-foreground/80 hover:text-accent transition-colors duration-200">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors duration-200">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors duration-200">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors duration-200">
                  LGPD
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors duration-200">
                  Cookies
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/company/veritus" className="text-primary-foreground/80 hover:text-accent transition-colors duration-200">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-primary-foreground/20 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-accent" />
              <div>
                <div className="font-medium">E-mail</div>
                <div className="text-primary-foreground/80 text-sm">fabricadeempresass@gmail.com</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-accent" />
              <div>
                <div className="font-medium">Telefone</div>
                <div className="text-primary-foreground/80 text-sm">(62) 9 9692-0050</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-accent" />
              <div>
                <div className="font-medium">Contato</div>
                <div className="text-primary-foreground/80 text-sm">Gustavo Mariano</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/80 text-sm">
              © {currentYear} Veritus – Todos os direitos reservados
            </div>
            
            <div className="text-primary-foreground/60 text-sm">
              Desenvolvido com precisão para a excelência jurídica
            </div>
          </div>
        </div>

        {/* Slogan */}
        <div className="text-center mt-8 pt-8 border-t border-primary-foreground/10">
          <p className="text-lg font-medium text-accent">
            "Transparência que protege. Precisão que decide."
          </p>
        </div>
      </div>
    </footer>
  );
};