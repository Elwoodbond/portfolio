import AboutSection from "@/components/about-section";
import HeroSection from "@/components/hero-section";
import ProjectsSection from "@/components/projects-section";
import WebDesign from "@/components/web-design";
export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <HeroSection />
      <AboutSection />
      <WebDesign />
      <ProjectsSection />
    </main>
  );
}
