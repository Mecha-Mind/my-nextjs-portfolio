
// components
import WorkSlider from "./WorkSlider"

const WorkContent = () => {
    return (
        <>
        {/* text */}
        <div className="text-center flex flex-col mb-4 xl-mb-0 xl:w-[30vw] lg:text-left">
            <h2 className="h2 xl:mt-12">
              My Work
              <span className="text-accent">.</span>
            </h2>
            <p className="mb-4 max-w-[400px] mx-auto lg:mx-0">
              Explore my portfolio of web projects, where I bring ideas to life using React, Next.js, and more tools. From personal experiments to client-inspired designs, each piece reflects my passion for creating functional and visually appealing digital solutions. Check out my work and let’s collaborate on your next project!
            </p>
          </div>
          {/* Work slider */}
          <div className="w-full xl:max-w-[65%]">
            <WorkSlider />
          </div>
        </>
    )
}

export default WorkContent;