import { Shield, Lock, FileCheck, Users } from 'lucide-react';

export const SecuritySection = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "Proteção de Dados",
      description: "Conformidade total com LGPD e padrões internacionais de segurança"
    },
    {
      icon: Lock,
      title: "Criptografia Avançada",
      description: "Documentos protegidos com criptografia AES-256 end-to-end"
    },
    {
      icon: FileCheck,
      title: "Auditoria Completa",
      description: "Rastreabilidade total de todas as análises e acessos aos documentos"
    },
    {
      icon: Users,
      title: "Controle de Acesso",
      description: "Permissões granulares e autenticação multifator para máxima segurança"
    }
  ];

  return (
    <section id="seguranca" className="py-20 section-bg">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Segurança <span className="text-gradient">Institucional</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Proteção máxima para seus documentos mais sensíveis
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {securityFeatures.map((feature, index) => (
            <div 
              key={index}
              className="card-premium p-6 text-center group hover:shadow-hero transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-cta rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-accent-foreground" />
              </div>
              
              <h3 className="text-xl font-semibold text-primary mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <div className="card-premium p-8 bg-gradient-subtle">
            <h3 className="text-2xl font-semibold text-primary mb-6">
              Certificações e Compliance
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-accent" />
                <span>ISO 27001</span>
              </div>
              <div className="flex items-center space-x-2">
                <Lock className="w-5 h-5 text-accent" />
                <span>LGPD Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <FileCheck className="w-5 h-5 text-accent" />
                <span>SOC 2 Type II</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-accent" />
                <span>GDPR Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};