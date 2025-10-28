import CareerSection from "@/app/_components/(career)/CareerSection";
import HeroSection from "@/app/_components/(hero)/HeroSection";
import WorkSection from "@/app/_components/(projects)/ProjectSection";
import WritingSection from "@/app/_components/(writing)/WritingSection";
import ServicesSection from "./_components/(services)/ServicesSection";


export default function Home() {
  return (
      <main>
        <HeroSection />
        <ServicesSection />
        <CareerSection />
        <WorkSection />
        <WritingSection/>
      </main>
  );
}
