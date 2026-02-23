import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import WhyPeopleComeHere from "@/components/sections/WhyPeopleComeHere";
import HealingPower from "@/components/sections/HealingPower";
import LiveListenerPreview from "@/components/sections/LiveListenerPreview";
import LuxuryExperience from "@/components/sections/LuxuryExperience";
import LifeImpact from "@/components/sections/LifeImpact";
import TrustWitness from "@/components/sections/TrustWitness";
import FastTalkBanner from "@/components/sections/FastTalkBanner";
import SafetyPrivacy from "@/components/sections/SafetyPrivacy";
import Pricing from "@/components/sections/Pricing";
import EmergencyNotice from "@/components/sections/EmergencyNotice";
import FinalCTA from "@/components/sections/FinalCTA";
import FAQ from "@/components/sections/FAQ";
import StructuredData from "@/components/ui/StructuredData";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-white">
      <StructuredData />
      <Navbar />
      <Hero />
      <div id="how-it-works"><HowItWorks /></div>
      <FastTalkBanner />
      <WhyPeopleComeHere />
      <LifeImpact />
      <HealingPower />
      <LuxuryExperience />
      <TrustWitness />
      <LiveListenerPreview />
      <SafetyPrivacy />
      <div id="pricing"><Pricing /></div>
      <FAQ />
      <FinalCTA />
      <EmergencyNotice />
      <Footer />
    </main>
  );
}
