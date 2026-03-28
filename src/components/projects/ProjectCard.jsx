"use client"
import Image from "next/image"
// مكون كارت المشروع
const ProjectCard = ({ project, onClick, index = 0 }) => {
  const handleClick = () => {
    if (onClick && typeof onClick === 'function') {
      onClick(project)
    }
  }

  return (
    <div
      onClick={handleClick}
      className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-white/10 h-[24rem]"
      >
      <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
        {/* Placeholder for project image */}
        <div className="relative w-full h-full overflow-hidden">
                {/* Project Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover h-auto transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {project.description}
                    </p>
                  </div>
                </div> */}
          </div>
      </div>

      <div className="p-6 bg-primary/80 backdrop-blur-sm z-50 absolute bottom-0 group-hover:blur-sm">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
          {project?.title || 'Project Title'}
        </h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
          {project?.description || 'Project Description'}
        </p>

        <div className="flex flex-wrap gap-2">
          {project?.technologies?.slice(0, 3).map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-accent/20 text-accent text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
          {project?.technologies?.length > 3 && (
            <span className="px-3 py-1 bg-gray-600 text-white text-xs rounded-full">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="text-2xl mb-2">👁️</div>
          <div className="text-sm font-semibold">View Details</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
