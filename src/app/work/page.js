// components
import ProjectsGallery from "@/components/ProjectsGallery";
import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";

// meta data
export const metadata = {
  title: "Hani Abdallah - Work",
  description:
    "Welcome To 'my personal portfolio' Discover best techs in the whole world!",
};

const Work = () => {
  return (
    <section className="h-full py-36 flex items-center bg-primary/30">
      <Circles />
      <div className="container flex flex-col items-center">
          {/* text */}
          <div className="text-center flex flex-col mb-4 xl:mb-0">
              <h2 className="h2 xl:mt-12 animate-fade-in-up-delay-1">
                My Work
                <span className="text-accent">.</span>
              </h2>
              <p className="mb-4 max-w-[400px] mx-auto lg:mx-0 animate-fade-in-up-delay-2">
                Explore my portfolio of web projects, where I bring ideas to life using React, Next.js, and more tools. From personal experiments to client-inspired designs, each piece reflects my passion for creating functional and visually appealing digital solutions. Check out my work and let’s collaborate on your next project!
              </p>
          </div>

          {/* Projects Gallery */}
          <div className="w-full  animate-fade-in-up-delay-3">
            <ProjectsGallery />
          </div>
      </div>
      <Bulb />
    </section>
  );
};

export default Work;
