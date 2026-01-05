"use client"

import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import Image from "next/image";

/**
 * ProjectsSection - سكشن الأعمال/المشاريع للصفحة الرئيسية
 * 
 * هذا الـ Component:
 * - يعرض preview صغير للمشاريع
 * - يحتوي على زر للانتقال لصفحة الأعمال الكاملة
 * - يستخدم reveal animations
 */

// بيانات المشاريع (preview)
const featuredProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution built with Next.js",
    image: "/thumb1.jpg",
    url: "https://github.com/Mecha-Mind",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "Creative portfolio showcase with animations",
    image: "/thumb2.jpg",
    url: "https://github.com/Mecha-Mind",
  },
  {
    id: 3,
    title: "Dashboard App",
    description: "Admin dashboard with real-time analytics",
    image: "/thumb3.jpg",
    url: "https://github.com/Mecha-Mind",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-primary/30 py-32">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="h2 animate-fade-in-up-delay-1">
            
          </h2>
          
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project) => (
            <Link
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-lg overflow-hidden animate-fade-in-up-delay-3"
            >
              <div className="relative h-[250px] overflow-hidden">
                {/* Project Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default ProjectsSection;

