import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import WhyPeopleComeHere from "@/components/sections/WhyPeopleComeHere";
import HealingPower from "@/components/sections/HealingPower";
import LiveListenerPreview from "@/components/sections/LiveListenerPreview";
import TrustWitness from "@/components/sections/TrustWitness";
import FastTalkBanner from "@/components/sections/FastTalkBanner";
import SafetyPrivacy from "@/components/sections/SafetyPrivacy";
import Pricing from "@/components/sections/Pricing";
import UserStories from "@/components/sections/UserStories";
import EmergencyNotice from "@/components/sections/EmergencyNotice";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-white">
      <Navbar />
      <Hero />
      <div id="how-it-works"><HowItWorks /></div>
      <FastTalkBanner />
      <WhyPeopleComeHere />
      <HealingPower />
      <TrustWitness />
      <LiveListenerPreview />
      <SafetyPrivacy />
      <div id="pricing"><Pricing /></div>
      <UserStories />
      <EmergencyNotice />
      <FinalCTA />
      <Footer />
    </main>
  );
}
