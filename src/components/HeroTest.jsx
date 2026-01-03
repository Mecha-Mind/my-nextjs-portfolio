"use client";

import { useEffect, useRef, useState } from "react";

const HeroTest = () => {
  // const [isVisible, setIsVisible] = useState(false);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const buttonRef = useRef(null);
  // const shapesRef = useRef(null);

  // Initial page load animation
  // useEffect(() => {
  //   setIsVisible(true);
  // }, []);

  // Scroll-based intersection observer
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
          entry.target.classList.remove("animate-fade-out");
        } else {
          entry.target.classList.add("animate-fade-out");
          entry.target.classList.remove("animate-fade-in-up");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const elements = [
      headingRef.current,
      subheadingRef.current,
      buttonRef.current,
    ].filter(Boolean);

    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left z-10">
            <h1
              ref={headingRef}
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up-delay-1`}
            >
              Frontend Developer specializing in{" "}
              <span className="text-accent">React & Next.js</span>
            </h1>

            <p
              ref={subheadingRef}
              className={`text-lg sm:text-xl text-white/80 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up-delay-2`}
            >
              I build modern, performant web interfaces with focus on clean
              architecture, responsive design, and secure client-server
              interactions.
            </p>

            <div
              ref={buttonRef}
              className={`flex justify-center lg:justify-start animate-fade-in-up-delay-3`}
            >
              <a
                href="#projects"
                className="px-8 py-3 bg-accent/70 text-white font-semibold rounded-lg bg-accent/50 transition-colors duration-200 shadow-lg shadow-accent/20 hover:shadow-accent/30 hover:scale-105 transform"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Right Side - Abstract Decorative Shapes */}
          {/* <div
            ref={shapesRef}
            className={`relative h-[400px] sm:h-[500px] lg:h-[600px] hidden lg:block ${
              isVisible ? "animate-fade-in-up-delay-4" : "opacity-0"
            }`}
          >
            {/*  Large gradient circle 
            <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-accent/70/20 rounded-full blur-3xl animate-pulse-slow"></div>

            {/* Medium circle 
            <div className="absolute top-1/4 right-1/3 w-32 h-32 bg-accent/70/30 rounded-full blur-2xl"></div>

            {/* Small accent circle 
            <div className="absolute bottom-1/4 right-1/2 w-24 h-24 bg-accent/70/40 rounded-full blur-xl"></div>

            {/* Geometric shapes 
            <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-accent/70 rounded-full animate-ping-slow"></div>
            <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-accent/70/60 rounded-full"></div>

            {/* Abstract lines/grid pattern 
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-accent to-transparent"></div>
              <div className="absolute top-1/2 right-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent"></div>
            </div>

            {/* Floating geometric shape 
            <div className="absolute top-1/2 right-1/4 w-16 h-16 border-2 border-accent/30 rotate-45 animate-float"></div>

            {/* Another geometric element 
            <div className="absolute bottom-1/4 right-1/3 w-12 h-12 border-2 border-accent/20 rounded-lg rotate-12"></div>

            {/* Additional decorative elements 
            <div className="absolute top-1/5 left-1/4 w-8 h-8 border border-accent/20 rounded-full"></div>
            <div className="absolute bottom-1/5 left-1/3 w-6 h-6 bg-accent/70/10 rounded-full"></div>
          </div> */}

          {/* Mobile decorative elements */}
          {/* <div
            className={`relative h-64 lg:hidden mt-8 ${
              isVisible ? "animate-fade-in-up-delay-4" : "opacity-0"
            }`}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent/70/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-accent/70/30 rounded-full blur-2xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-accent/70 rounded-full"></div>
          </div> */}
        </div>
      </div>

      {/* Background gradient overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-secondary/50 pointer-events-none"></div> */}
    </section>
  );
};

export default HeroTest;

