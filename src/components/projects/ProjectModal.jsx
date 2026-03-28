"use client"
import Image from "next/image"
import { useEffect } from "react"

// مكون المودال لتفاصيل المشروع
const ProjectModal = ({ project, isOpen, onClose }) => {
  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    const prev = document.body.style.overflow;
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = prev;
    }
  }, [isOpen, onClose])

  if (!isOpen || !project) return null

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget && onClose) {
      onClose()
    }
  }

  const handleLiveLinkClick = (e) => {
    e.stopPropagation() // Prevent modal close when clicking the link
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in-up">
      {/* Overlay */}
      <div
        className="absolute inset-0 animate-fade-in-up-delay-1 cursor-pointer"
        onClick={handleOverlayClick}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div className="relative bg-site rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scaleIn custom-scrollbar">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Close Window"
        >
          ✕
        </button>

        {/* Project Image */}
        <div className="relative aspect-video bg-gradient-to-br from-accent/20 to-primary/20 rounded-t-2xl overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="p-8">
          {/* Title and Description */}
          <div className="mb-8 animate-slideInLeft">
            <h2 className="text-3xl font-bold text-white mb-4">
              {project?.title || 'Project Title'}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {project?.description || 'Project Description'}
            </p>
          </div>

          {/* Technologies */}
          {project?.technologies && (
            <div className="mb-8 animate-slideInRight" style={{animationDelay: '0.1s'}}>
              <h3 className="text-xl font-semibold text-accent mb-4">Used Tools</h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium animate-scaleIn"
                    style={{animationDelay: `${0.2 + index * 0.1}s`}}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Features */}
          {project?.features && (
            <div className="mb-8 animate-slideInLeft" style={{animationDelay: '0.3s'}}>
              <h3 className="text-xl font-semibold text-accent mb-4">Features</h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-300 animate-fade-in-up-delay-2"
                    style={{animationDelay: `${0.4 + index * 0.1}s`}}
                  >
                    <span className="text-accent mr-3">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Logic/Service */}
          {project?.logic && (
            <div className="mb-8 animate-slideInRight" style={{animationDelay: '0.5s'}}>
              <h3 className="text-xl font-semibold text-accent mb-4">Logic & Service</h3>
              <p className="text-gray-300 leading-relaxed">
                {project.logic}
              </p>
            </div>
          )}

          {/* Live Link */}
          {project?.liveLink && (
            <div className="flex justify-center animate-fade-in-up-delay-3" style={{animationDelay: '0.6s'}}>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLiveLinkClick}
                className="inline-flex items-center px-8 py-3 bg-accent text-white rounded-full font-semibold hover:bg-accent/80 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-accent/30 focus:outline-none focus:ring-2 focus:ring-accent/50"
              >
                <span className="ml-2">🌐</span>
                View Project
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
