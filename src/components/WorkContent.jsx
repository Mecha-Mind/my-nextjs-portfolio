"use client"
// farmer-motion
import { motion } from "framer-motion"

// variants
import { fadeIn } from "../../variants"

// components
import WorkSlider from "./WorkSlider"

const WorkContent = () => {
    return (
        <>
        {/* text */}
        <div className="text-center flex flex-col mb-4 xl-mb-0 xl:w-[30vw] lg:text-left">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial={"hidden"}
              animate={"show"}
              exit={"hidden"}
              className="h2 xl:mt-12"
            >
              My Work
              <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial={"hidden"}
              animate={"show"}
              exit={"hidden"}
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Explore my portfolio of web projects, where I bring ideas to life using React, Next.js, and more tools. From personal experiments to client-inspired designs, each piece reflects my passion for creating functional and visually appealing digital solutions. Check out my work and let’s collaborate on your next project!
            </motion.p>
          </div>
          {/* Work slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial={"hidden"}
            animate={"show"}
            exit={"hidden"}
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
        </>
    )
}

export default WorkContent;