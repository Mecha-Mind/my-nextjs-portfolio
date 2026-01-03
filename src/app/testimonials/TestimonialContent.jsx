"use client"
// components
import TestimonialSlider from "@/components/TestimonialSlider";



const TestimonialContent = ()=>{
    return (
        <>
            {/* title */}
            <h2
            className="h2 mb-8 xl:mb-0 animate-fade-in-up-delay-1 animate-fade-in-up-init"
            >
            what clients <span className="text-accent">say.</span>
            </h2>
            {/* slider */}
            <div
            className="animate-fade-in-up-delay-2 animate-fade-in-up-init"
            >
            <TestimonialSlider />
            </div>
        </>
    )
}
export default TestimonialContent