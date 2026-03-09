import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import HeroVideo from "@/components/HeroVideo";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PrototypeSection from "@/components/PrototypeSection";
import FeaturesSection from "@/components/FeaturesSection";
import ApplicationsSection from "@/components/ApplicationsSection";
import TechnologySection from "@/components/TechnologySection";
import TeamSection from "@/components/TeamSection";
import VisionSection from "@/components/VisionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <SmoothScroll>
      <div className="bg-background min-h-screen scrollbar-hide">
        <Navbar />
        <HeroVideo />
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <PrototypeSection />
        <FeaturesSection />
        <ApplicationsSection />
        <TechnologySection />
        <TeamSection />
        <VisionSection />
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default Index;
