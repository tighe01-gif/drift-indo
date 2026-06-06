import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LoadingScreen } from "@/components/loading-screen";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { AdventureHighlightsSection } from "@/components/sections/adventure-highlights";
import { ExperienceSection } from "@/components/sections/experience";
import { ComingExpeditionsSection } from "@/components/sections/coming-expeditions";
import { ComingSoonSection } from "@/components/sections/coming-soon";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us";
import { WaitlistSection } from "@/components/sections/waitlist";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <AdventureHighlightsSection />
        <ExperienceSection />
        <ComingExpeditionsSection />
        <ComingSoonSection />
        <WhyChooseUsSection />
        <WaitlistSection />
      </main>
      <Footer />
    </>
  );
}
