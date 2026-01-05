// components
import HeroTest from "@/components/HeroTest";
import AboutContent from "@/components/AboutContent";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import ProjectsGallery from "@/components/ProjectsGallery";
// meta data
export const metadata = {
  title: "Hani Abdallah - Home",
  description:
    "Welcome To 'my personal portfolio' Discover best techs in the whole world!",
};

const Home = () => {
  return (
    <div className="h-full">
      <HeroTest />
      <AboutContent />
      {/* <ProjectsSection /> */}
      <ProjectsGallery />
      <ContactSection />
    </div>
  );
};

export default Home;
