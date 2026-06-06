import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LoadingScreen } from "@/components/loading-screen";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ExperienceSection } from "@/components/sections/experience";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us";
import { WhatsIncludedSection } from "@/components/sections/whats-included";
import { WhoIsThisForSection } from "@/components/sections/who-is-this-for";
import { ComingExpeditionsSection } from "@/components/sections/coming-expeditions";
import { WhyWeCreatedSection } from "@/components/sections/why-we-created";
import { EnquirySection } from "@/components/sections/enquiry";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <WhyChooseUsSection />
        <WhatsIncludedSection />
        <WhoIsThisForSection />
        <ComingExpeditionsSection />
        <WhyWeCreatedSection />
        <EnquirySection />
      </main>
      <Footer />
    </>
  );
}
