"use client"

//components
import ServiceSlider from "@/components/ServiceSlider";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "/variants";

const ServiceContent = () => {
    return (
        <>
            {/* text */}
          <div className="text-center flex flex-col mb-4 xl-mb-0 xl:w-[30vw] lg:text-left">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial={"hidden"}
              animate={"show"}
              exit={"hidden"}
              className="h2 xl:mt-8"
            >
              My Services
              <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial={"hidden"}
              animate={"show"}
              exit={"hidden"}
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Discover my front-end web development services, where I build responsive
              and dynamic websites using React, Next.js, and modern JavaScript. From
              custom designs to optimized performance, I deliver clean code and
              seamless user experiences. Whether it’s a personal project or a business
              site, let’s work together to bring your vision online!
            </motion.p>
          </div>
          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial={"hidden"}
            animate={"show"}
            exit={"hidden"}
            className="w-full xl:max-w-[65%]"
          >
            <ServiceSlider />
          </motion.div>
        </>
    )
}

export default ServiceContent