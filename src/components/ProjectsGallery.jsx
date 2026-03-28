"use client"
import Link from "next/link"
import { HiArrowRight } from "react-icons/hi2"
import { useState } from "react"
import { projectsData } from "./projects/ProjectData"
import CategoryTabs from "./projects/CategoryTabs"
import ProjectsGrid from "./projects/ProjectsGrid"
import ProjectModal from "./projects/ProjectModal"

// المكون الرئيسي
const ProjectsGallery = () => {
  const [activeCategory, setActiveCategory] = useState("html-css")
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const categories = Object.entries(projectsData).map(([id, data]) => ({
    id,
    title: data.title
  }))

  const handleCategoryChange = (categoryId) => {
    if (categoryId === activeCategory) return
    setActiveCategory(categoryId)
  }

  const handleProjectClick = (project) => {
    if (!project) return
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  // Get current projects safely
  const currentProjects = projectsData[activeCategory]?.projects || []

  return (
    <section className="pt-10 px-4" id="projects">
      <div className="container mx-auto">
        {/* Title */}
        {/* <div className="text-center mb-16">
          <h2 className="h2 fade-in-up-delay-1">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A collection of projects I have developed using various technologies
          </p>
          <p className="max-w-[600px] mx-auto mt-4 mb-8 animate-fade-in-up-delay-2">
            Explore my portfolio of web projects, where I bring ideas to life using React, Next.js, and more tools. 
            From personal experiments to client-inspired designs, each piece reflects my passion for creating functional 
            and visually appealing digital solutions.
          </p>
        </div> */}

        {/* Category Tabs */}
        <CategoryTabs
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />

        {/* Projects Grid */}
        <ProjectsGrid
          projects={currentProjects}
          onProjectClick={handleProjectClick}
        />

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />

        {/* View All Button */}
       <div className="flex justify-center animate-fade-in-up-delay-5 mt-10">
          <Link
            href="/contact"
            className="group flex items-center gap-2 px-8 py-4 bg-accent/70 text-white font-semibold rounded-lg bg-accent/50 transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-accent/30 hover:scale-105"
          >
            Let's make somthing special.
            <HiArrowRight className="text-xl group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>

       
    </section>
  )
}

export default ProjectsGallery
