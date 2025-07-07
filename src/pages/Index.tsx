import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { CTASection } from '@/components/CTASection';
import { BenefitsSection } from '@/components/BenefitsSection';
import { SecuritySection } from '@/components/SecuritySection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <CTASection />
      <BenefitsSection />
      <SecuritySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
