import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { BenefitsSection } from '@/components/BenefitsSection';
import { MarketOpportunitySection } from '@/components/MarketOpportunitySection';
import { CasesSection } from '@/components/CasesSection';
import { DemoSection } from '@/components/DemoSection';
import { InvestorsSection } from '@/components/InvestorsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <BenefitsSection />
      <MarketOpportunitySection />
      <CasesSection />
      <DemoSection />
      <InvestorsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
