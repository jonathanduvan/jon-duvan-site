import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import WorkSection from "@/components/WorkSection";
import WritingSection from "@/components/WritingSection";
// import Image from "next/image";

export default function Home() {
  return (
      <main>
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <WritingSection/>
      </main>
  );
}
