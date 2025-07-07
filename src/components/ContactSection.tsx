import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { CheckCircle, Mail, Phone, MapPin } from 'lucide-react';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    acceptTerms: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          company: '',
          message: '',
          acceptTerms: false
        });
      }, 3000);
    }, 1500);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <section id="contato" className="py-20 section-bg">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center animate-scale-in">
            <div className="card-premium p-12">
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
              <h3 className="text-3xl font-heading font-bold text-primary mb-4">
                Mensagem Enviada com Sucesso!
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Obrigado pelo seu interesse no VERITUS. Nossa equipe entrará em contato 
                em até 24 horas para agendar uma demonstração personalizada.
              </p>
              <div className="bg-gradient-subtle p-4 rounded-lg">
                <p className="text-sm text-primary">
                  📧 Você receberá um e-mail de confirmação em breve
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contato" className="py-20 section-bg">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
            Entre em <span className="text-gradient">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Agende uma demonstração personalizada e descubra como o VERITUS pode transformar 
            sua análise contratual
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="animate-fade-up">
            <div className="card-premium p-8">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Solicite uma Demonstração
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Nome *
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Seu nome completo"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      E-mail *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="seu@email.com"
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Empresa *
                  </label>
                  <Input
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    placeholder="Nome da sua empresa"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Conte-nos sobre seus desafios com análise contratual e como podemos ajudar..."
                    rows={4}
                    className="w-full resize-none"
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="terms"
                    checked={formData.acceptTerms}
                    onCheckedChange={(checked) => handleInputChange('acceptTerms', checked as boolean)}
                    className="mt-1"
                  />
                  <label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed">
                    Concordo em receber comunicações da Veritus conforme{' '}
                    <a href="#" className="text-accent hover:underline">
                      Política de Privacidade
                    </a>
                    {' '}e LGPD.
                  </label>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || !formData.acceptTerms}
                  className="w-full btn-accent py-3 text-lg font-semibold"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-accent-foreground border-t-transparent rounded-full animate-spin"></div>
                      <span>Enviando...</span>
                    </div>
                  ) : (
                    'Enviar'
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="card-premium p-8">
                <h3 className="text-2xl font-semibold text-primary mb-6">
                  Informações de Contato
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-cta rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">E-mail</h4>
                      <p className="text-muted-foreground">contato@veritus.com.br</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Resposta em até 24 horas
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-cta rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-accent-foreground" />
                    </div>
                   <div>
                      <h4 className="font-semibold text-primary">Telefone</h4>
                      <p className="text-muted-foreground">(62) 99692-0050</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Seg-Sex, 9h às 18h
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Response Time */}
              <div className="card-premium p-6 bg-gradient-subtle">
                <h4 className="font-semibold text-primary mb-4">
                  Próximos Passos
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">
                      Recebimento e análise da sua solicitação
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">
                      Agendamento de call de discovery (30 min)
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">
                      Demonstração personalizada do VERITUS
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">
                      Proposta comercial customizada
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Proof */}
              <div className="card-premium p-6">
                <h4 className="font-semibold text-primary mb-4">
                  Junte-se a empresas líderes
                </h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Mais de 150+ empresas já confiam no VERITUS para suas análises contratuais.
                </p>
                <div className="flex items-center space-x-4 text-sm text-accent">
                  <span>🏢 Grandes corporações</span>
                  <span>⚖️ Escritórios de advocacia</span>
                  <span>📊 Consultorias</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};