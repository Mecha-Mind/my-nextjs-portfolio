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
                aria-label="View Projects"
                className="px-8 py-3 bg-accent/70 text-white font-semibold rounded-lg bg-accent/50 transition-colors duration-200 shadow-lg shadow-accent/20 hover:shadow-accent/30 hover:scale-105 transform"
              >
                View Projects
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Background gradient overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-secondary/50 pointer-events-none"></div> */}
    </section>
  );
};

export default HeroTest;

