// components
import Hero from "@/components/Hero";
import AboutContent from "@/components/AboutContent";
import ContactSection from "@/components/ContactSection";
import FeaturedProjectsSection from "@/components/home/FeaturedProjects";

// meta data
export const metadata = {
  title: "Hani Abdallah - Home",
  description:
    "Welcome To 'my personal portfolio' Discover best techs in the whole world!",
};

const Home = () => {
  return (
    <div className="h-full">
      <Hero />
      <AboutContent />
      <FeaturedProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Home;
