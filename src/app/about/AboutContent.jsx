"use client"

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaGit
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

//  data
const aboutData = [
    {
      title: "skills",
      info: [
        {
          title: "Web Development",
          icons: [
            <FaHtml5 key="html" />,
            <FaCss3 key="css" />,
            <FaJs key="js" />,
            <FaReact key="react" />,
            <SiNextdotjs key="next" />,
            <SiFramer key="framer" />,
            <FaWordpress key="wordpress" />,
          ],
        },
        {
          title: "Tools",
          icons: [
            <FaGit key="git" />,
            <FaFigma key="figma" />,
            <SiAdobephotoshop key="photoshop" />,
          ],
        },
      ],
    },
    {
      title: "awards",
      info: [
        {
          title: "Webby Awards - Honoree",
          stage: "2025 - 2025",
        },
        {
          title: "Front-end dev - Finalist",
          stage: "2025 - 2025",
        },
      ],
    },
    {
      title: "experience",
      info: [
        {
          title: "Web Developer - Freelance",
          stage: "2022 - 2024",
        },
        {
          title: "Intern - DEF Corporation",
          stage: "2025 - 2025",
        },
        {
          title: "Wordpress Developer - Bright Vision Academy",
          stage: "2025 - 2025",
        },
      ],
    },
    {
      title: "credentials",
      info: [
        {
          title: "Web Development - ALX",
          stage: "2023",
        },
        {
          title: "Responsive Web Design - freeCodeCamp",
          stage: "2023",
        },
        {
          title: "JavaScript Algorithms and Data Structures - In Progress",
          stage: "2025",
        },
      ],
    },
  ];
  
// framer motion and variants
import { motion } from "framer-motion";
import { fadeIn } from "/variants";
// components
import Avatar from "@/components/Avatar";


import { useState } from "react";

const AboutContent = ()=> {
    const [index, setIndex] = useState(0);

    return (
        <>
            <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="hidden xl:flex w-[400px] absolute bottom-0 -left-[170px]"
            >
                <Avatar />
            </motion.div>
            <div className="container mx-auto h-full flex flex-col xl:flex-row gap-x-6 items-center lg:items-start">
                {/* text */}
                <div className="flex-1 flex flex-col justify-center">
                <motion.h2
                    variants={fadeIn("right", 0.2)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="h2"
                >
                    Captivating <span className="text-accent">stories</span> birth
                    magnificent sites.
                </motion.h2>
                <motion.p
                    variants={fadeIn("right", 0.4)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="max-w-[450px] mb-6 xl:mb-12 mx-auto xl:mx-0 px-2 xl:px-0"
                >
                    I’m Hani Abdallah, a web developer and UI/UX enthusiast starting my
                    journey in the tech world. With a solid foundation in modern tools
                    like React, Next.js, and Figma, I’m dedicated to building engaging
                    websites and interfaces. My education in Web Development fuels my 
                    creativity, and I’m excited to grow by tackling diverse projects.
                    Let’s connect to create something amazing!
                </motion.p>
                </div>
                {/* info */}
                <div className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
                <motion.div
                    variants={fadeIn("left", 0.2)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-8"
                >
                    {aboutData.map((item, itemIndex) => {
                    return (
                        <div
                        key={itemIndex}
                        className={`${
                            index === itemIndex &&
                            "text-accent after:w-[100%] after:bg-red-600 after:transition-all after:duration-300"
                        } cursor-pointer capitalize xl:text-lg relative after:absolute after:w-8 after:h-[2px] after:bg-white after:-bottom-1 after:left-0`}
                        onClick={() => {
                            setIndex(itemIndex);
                        }}
                        >
                        {item.title}
                        </div>
                    );
                    })}
                </motion.div>
                <motion.div
                    variants={fadeIn("left", 0.4)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="flex flex-col py-2 xl:py-5 gap-y-2 xl:gap-y-5 items-center xl:items-start"
                >
                    {aboutData[index].info.map((item, itemIndex) => {
                    return (
                        <div
                        key={itemIndex}
                        className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                        >
                        {/* title */}
                        <div className="mb-2 md:mb-0 font-light">{item.title}</div>
                        <div className="hidden md:flex">-</div>
                        <div>{item.stage}</div>
                        <div className="flex gap-x-3">
                            {item.icons?.map((icon, itemIndex) => {
                            return (
                                <div key={itemIndex} className="text-2xl text-white">
                                {icon}
                                </div>
                            );
                            })}
                        </div>
                        </div>
                    );
                    })}
                </motion.div>
                </div>
            </div>
        </>
    )

}
export default AboutContent