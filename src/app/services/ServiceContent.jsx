"use client"

//components
import ServiceSlider from "@/components/ServiceSlider";

// framer motion

const ServiceContent = () => {
    return (
        <>
            {/* text */}
          <div className="text-center flex flex-col mb-4 xl-mb-0 xl:w-[30vw] lg:text-left">
            <h2
              className="h2 xl:mt-8 animate-fade-in-up-delay-1 animate-fade-in-up-init"
            >
              My Services
              <span className="text-accent">.</span>
            </h2>
            <p
              className="mb-4 max-w-[400px] mx-auto lg:mx-0 animate-fade-in-up-delay-2 animate-fade-in-up-init"
            >
              Discover my front-end web development services, where I build responsive
              and dynamic websites using React, Next.js, and modern JavaScript. From
              custom designs to optimized performance, I deliver clean code and
              seamless user experiences. Whether it’s a personal project or a business
              site, let’s work together to bring your vision online!
            </p>
          </div>
          {/* slider */}
          <div className="w-full xl:max-w-[65%] animate-fade-in-up-delay-3 animate-fade-in-up-init">
            <ServiceSlider />
          </div>
        </>
    )
}

export default ServiceContent