"use client"
// components
import TestimonialSlider from "@/components/TestimonialSlider";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "/variants";

const TestimonialContent = ()=>{
    return (
        <>
            {/* title */}
            <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 mb-8 xl:mb-0"
            >
            what clients <span className="text-accent">say.</span>
            </motion.h2>
            {/* slider */}
            <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            >
            <TestimonialSlider />
            </motion.div>
        </>
    )
}
export default TestimonialContent