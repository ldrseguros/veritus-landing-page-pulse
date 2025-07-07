import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
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
      <BenefitsSection />
      <SecuritySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
