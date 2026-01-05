"use client"

import ProjectCard from './ProjectCard'

// مكون شبكة المشاريع
const ProjectsGrid = ({ projects, onProjectClick, isTransitioning }) => {
  if (!projects || !Array.isArray(projects)) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">No projects in this section</p>
      </div>
    )
  }

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${
        isTransitioning ? 'opacity-0' : 'opacity-100'
      } transition-opacity duration-300`}
    >
      {projects.map((project, index) => (
        <div
          key={project?.id || index}
          className="animate-scaleIn"
        >
          <ProjectCard
            project={project}
            onClick={onProjectClick}
            index={index}
          />
        </div>
      ))}
    </div>
  )
}

export default ProjectsGrid
