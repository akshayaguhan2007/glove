import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ObjectivesSection from "@/components/ObjectivesSection";
import HardwareSection from "@/components/HardwareSection";
import AppArchitectureSection from "@/components/AppArchitectureSection";
import AppDownloadSection from "@/components/AppDownloadSection";
import ReportSection from "@/components/ReportSection";
import TimelineSection from "@/components/TimelineSection";
import ReferencesSection from "@/components/ReferencesSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ObjectivesSection />
      <HardwareSection />
      <AppArchitectureSection />
      <AppDownloadSection />
      <ReportSection />
      <TimelineSection />
      <ReferencesSection />
      <FooterSection />
    </div>
  );
};

export default Index;
