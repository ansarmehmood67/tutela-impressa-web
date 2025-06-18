
import CustomCursor from '../components/CustomCursor';
import HeroSection from '../components/HeroSection';
import LogosSection from '../components/LogosSection';
import AboutSection from '../components/AboutSection';
import HowItWorksSection from '../components/HowItWorksSection';
import ManagementSection from '../components/ManagementSection';
import InspectionSection from '../components/InspectionSection';
import FeaturesSection from '../components/FeaturesSection';
import OnePlatformSection from '../components/OnePlatformSection';
import PlatformSection from '../components/PlatformSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PricingCTASection from '../components/PricingCTASection';
import VideoSection from '../components/VideoSection';
import ContactFormSection from '../components/ContactFormSection';
import { Link } from 'react-router-dom';


const Index = () => {
  return (
    <div className="min-h-screen">
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <ManagementSection />
        <AboutSection />
        <OnePlatformSection />
        <InspectionSection />
        <HowItWorksSection />
        <PricingCTASection />
        
        <VideoSection />
        <ContactFormSection />
      </main>

      
    </div>
  );
};

export default Index;
